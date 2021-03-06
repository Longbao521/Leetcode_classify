# 136. 只出现一次的数字
>>给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
说明：
你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
示例 1:
输入: [2,2,1]
输出: 1
示例 2:
输入: [4,1,2,1,2]
输出: 4
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/single-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

#### 信息
+ 非空整数数组
+ 只有一个元素出现一次
+ 线性复杂度
+ 尽量不适用额外的空间

#### 思路
+ 如果使用额外的空间，建立哈希表，遍历数组，数组值作为key，出现的次数作为value，最后哈希表中value为1的为结果
+ 根据参考博客的方法，使用二进制异或

#### 二进制异或
+ 任何一个数与0的操作结果为它自身
+ 二进制异或遵循交换律（这是重点）
+ 相同的数异或为0

```javascript
var singleNumber = function(nums) {
  var reslut = 0;
  for (let elem of nums) {
    reslut = reslut ^ elem;
  }
  return reslut;
};
```



**参考资料**
&emsp;&emsp;[leetcode题解](https://github.com/azl397985856/leetcode)