# 283. 移动零   
<font color=gray size=2>2020-01-06 20:02:53 +0800</font>
<font color=gray size=2>categories: dotnet</font>
---

>给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
示例:
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:
必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/move-zeroes
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

---

#### 信息
+ 未排序数组
+ 将数组中的0移到末尾
+ 保持非零元素的相对顺序
+ 不能拷贝额外数组

#### 思路
+ 用空间换时间，创建辅助数组，遍历现有数组，当数组中的值为0，计数+1，否则将数组中的值存到辅助数组中，最后再将辅助数组中存入计算器所记录的数值的0，虽然不太满足题意，但是还是放到这里
+ 用时间换空间，当前元素为0，则将后面元素逐个前移，再将后面插入0

#### 解法
```javascript
var moveZeroes = function(nums) {
   var result=[];
   var count=0;
   for(let elem of nums){
       if(elem){
           result.push(elem);
       }else{
           count++;
       }
   }
   for(let i=0;i<count;i++){
       result.push(0);
   }
   nums=result;
};
```
```javascript
var moveZeroes = function(nums) {
    let index = 0;
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num !== 0) {
            nums[index++] = num;
        }
    }

    for(let i = index; i < nums.length; i++) {
        nums[index++] = 0;
    }
};
```

---

**参考资料**