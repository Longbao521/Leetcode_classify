# 172. 阶乘后的零
<font color=gray size=2>2019-12-04 20:10:19 +0800</font>
<font color=gray size=2>categories: dotnet</font>
---

>>给定一个整数 n，返回 n! 结果尾数中零的数量。
示例 1:
输入: 3
输出: 0
解释: 3! = 6, 尾数中没有零。
示例 2:
输入: 5
输出: 1
解释: 5! = 120, 尾数中有 1 个零.
说明: 你算法的时间复杂度应为 O(log n) 。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/factorial-trailing-zeroes
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

---

#### 信息
+ 返回n的阶乘结果中零的数量
+ 时间复杂度为O(log n) 

#### 思路

+ 要求有多少个0，其实就是阶乘后的结果是n*2<sup>k</sup>*5<sup>k</sup>，求k。由于明显2的个数要多于5，所以其结果就是求阶乘中每一个元素分解质因数后一共有多少个5

#### 求解
```javascript
var trailingZeroes = function(n) {
  // tag: 数论

  // if (n === 0) return n;

  // 递归： f(n) = n / 5 + f(n / 5)
  // return Math.floor(n / 5)  + trailingZeroes(Math.floor(n / 5));
  let count = 0;
  while (n >= 5) {
    count += Math.floor(n / 5);
    n = Math.floor(n / 5);
  }
  return count;
};
```

---

**参考资料**
[LeetCode题解](https://github.com/azl397985856/leetcode)