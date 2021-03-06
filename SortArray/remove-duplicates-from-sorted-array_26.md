# 26. 删除排序数组中的重复项
>>给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
示例 1:
给定数组 nums = [1,1,2], 
函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 
你不需要考虑数组中超出新长度后面的元素。
示例 2:
给定 nums = [0,0,1,1,1,2,2,3,3,4],
函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
你不需要考虑数组中超出新长度后面的元素。
说明:
为什么返回数值是整数，但输出的答案是数组呢?
请注意，输入数组是以“引用”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。
你可以想象内部操作如下:
// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
int len = removeDuplicates(nums);
// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 

#### 思路：双指针

       1.开始时。两个指针指向第一个数字
       2.如果两个指针指向的数组相同，则快指针向前一步
       3.如果不同，则两个指针都向前走一步
       4.当快指针走完整个数组之后，慢数组当前的坐标加1就是数组中不同数字的个数



```javascript
  var removeDuplicates=function(arr){
        let slowP=0;
        for(let fastP=0;fastP<arr.length;fastP++){//每一次fastP都往前走
            if(arr[slowP] !== arr[fastP]){//如果不相等
                 slowP++;//slowP向后走
                 arr[slowP]=arr[fastP];//将不相等的元素移到前面
            }
        }
        return arr.length=slowP+1;
  }
```


**[leetCode分类刷题](https://github.com/Longbao521/Leetcode_classify) &emsp; 该地址长期、每周更新LeetCode分类刷题**

**参考资料**
&emsp;&emsp;[leetcode题解](https://github.com/azl397985856/leetcode)