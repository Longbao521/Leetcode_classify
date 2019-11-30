#167. 两数之和 II - 输入有序数组
<font color=gray size=2>2019-11-30 20:02:18 +0800</font>
<font color=gray size=2>categories: dotnet</font>
---
>>给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
说明:
返回的下标值（index1 和 index2）不是从零开始的。
你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
示例:
输入: numbers = [2, 7, 11, 15], target = 9
输出: [1,2]
解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

---

#### 信息
+ 升序排列的数组nums
+ 找到两个数的和等于目标数target
+ 返回这两个数的下标值index1,index2
+ index1 < index2
+ 下标值最小为1，即nums[0]的下标值为1
+ 每次输入只有一个答案
+ 下标值不允许相等

---

#### 思路
+ 暴力求解：target减去每一个元素elem得到一个值midRes，然后在nums找midRes(跳过elem所在位置)
+ 使用hashMap，遍历数组，用target-nums[i]得到值去hashMap中查找，若无，则创建key:target-nums[i],value:i:
+ 采用双指针，一个left指针，一个right指针，如果left+right>target，则right左移动，如left+right< target ，left右移动，若等于则返回[left，right]
----
```javascript
var midSort = function(nums,target,omitPos){
    var left=0,right=nums.length-1;
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(mid == omitPos) continue;
        else  if (nums[mid] < target) {
             left = mid + 1;
        } else if (nums[mid] === target) {
             return mid;
        } else {
             right = mid - 1;
        }
    }
    return -1;
}
var twoSum = function(numbers,target){
    for(let i=0;i<numbers.length-1;i++){
        let newTarget=target-numbers[i];
        let sortRes=midSort(numbers,newTarget,i);
        if(sortRes != -1){
            return [i+1,sortRes+1];
        }else{
            return [0,0];
        }
    }
}
```

```javascript
var twoSum=function(numbers,target){
    var storMap=new Map();
    for(let i=0;i<numbers.length;i++){
        let key=target-numbers[i];
        let getVal=storMap.get(key);
        if(getVal === undefined){
            storMap.set(numbers[i],i+1);
        }else{
            return [getVal,i+1];
        }
    }
    return [];
}
```

```javascript
var twoSum=function(numbers,target){
    var left=0,right=numbers.length-1;
    while(left<=right){
        if(numbers[left]+numbers[right]>target){
            right--;
        }else if(numbers[left]+numbers[right]<target){
            left++;
        }else{
            return [left+1,right+1];
        }
    }
    return [];
}
```
**参考资料**
&emsp;&emsp;[leetcode题解](https://github.com/azl397985856/leetcode)