# 219. 存在重复元素 II
<font color=gray size=2>2019-12-12 20:38:57 +0800</font>
<font color=gray size=2>categories: dotnet</font>
---

>给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k。
示例 1:
输入: nums = [1,2,3,1], k = 3
输出: true
示例 2:
输入: nums = [1,0,1,1], k = 1
输出: true
示例 3:
输入: nums = [1,2,3,1,2,3], k = 2
输出: false
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/contains-duplicate-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

---

#### 信息
+ 整数数组和整数k
+ 判定两个不同位置的两个数相等
+ 两个数位置之差不大于k

#### 思路
+ 采用哈希表，将位置记录下来

#### 解法
```javascript
var containsNearbyDuplicate = function(nums, k) {
    var record=new Map();
    for(let i=0;i<nums.length;i++){
        let preIdx=record.get(nums[i]);
        if(preIdx=== undefined){
            record.set(nums[i],i);
        }else if(i-preIdx<=k){
            return true;
        }else{
            record.set(nums[i],i);
            continue;
        }
    }
    return false;
};
```

---

**参考资料**