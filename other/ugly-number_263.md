# 263. 丑数
<font color=gray size=2>2020-01-06 19:34:20 +0800</font>
<font color=gray size=2>categories: dotnet</font>
---
>编写一个程序判断给定的数是否为丑数。
丑数就是只包含质因数 2, 3, 5 的正整数。
示例 1:
输入: 6
输出: true
解释: 6 = 2 × 3
示例 2:
输入: 8
输出: true
解释: 8 = 2 × 2 × 2
示例 3:
输入: 14
输出: false 
解释: 14 不是丑数，因为它包含了另外一个质因数 7。
说明：
1 是丑数。
输入不会超过 32 位有符号整数的范围: [−231,  231 − 1]。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/ugly-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

---

#### 信息
+ 求解一个数的质因数中是否含2,3,5
+ 该数的质因数中是否**只**含2,3,5

#### 思路
+ 将一个数先用2除
+ 当它不能被2整除之后，若其小于2，则是丑数，否则，进行下一步
+ 将其用3整除，当其不能被3整除之后，若小于3，则是丑树，否则，进行下一步
+ 将其用5整除，当其不能被5整除之后，若小于5，则是丑数，否则，不是丑数
+ 关键是js要检查这个数是否还是整数，来得到是否可以整除

#### 解答
```javascript
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if(num<1){
        return false;
    }
    if(num==1){
        return true;
    }
    let tmp=num/2;
    while(Number.isInteger(tmp)){
        num/=2;
        tmp=num/2;
    }
    if(num<2){
        return true;
    }else{
        tmp=num/3;
        while(Number.isInteger(tmp)){
            num/=3;
            tmp=num/3;
        }
        if(num<3){
            return true;
        }else{
            tmp=num/5;
            while(Number.isInteger(tmp)){
                num/=5;
                tmp=num/5;
            }
            if(num<5){
                return true;
            }else{
                return false;
            }
        }
    }
};
```
递归的优化算法,但是运行效率远不及上方，上方的运行效率是下面的近两倍
```javascript
/*
 * @lc app=leetcode id=263 lang=javascript
 *
 * [263] Ugly Number
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  // TAG: 数论
  if (num <= 0) return false;
  if (num === 1) return true;

  const list = [2, 3, 5];

  if (list.includes(num)) return true;

  for (let i of list) {
    if (num % i === 0) return isUgly(Math.floor(num / i));
  }
  return false;
};
```
---

**参考资料**