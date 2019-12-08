# 125. 验证回文串
>>给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
说明：本题中，我们将空字符串定义为有效的回文串。
示例 1:
输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:
输入: "race a car"
输出: false
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-palindrome
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

#### 信息
+ 只考虑字母和数字字符
+ 可以忽略字母大小写
#### 思路
1. 将字符串从头部和尾部各弹出一个元素
2. 判断这两个元素是否是字母和数字字符
3. 是，则判断是否相等（忽略大小写）
&emsp;3.1. 是，则继续做1-3步
&emsp;3.2. 否。返回false
4. 否，继续做1-3步

#### API
截取字符串的方法有三种：
slice(start,end):
&emsp;该方法可通过以上参数，提取字符串的某个部分，并以新的字符串返回被提取的部分，若为负数，则从尾部开始算。但是返回值为切割后的字符串，不符合这道题
substring(start,end):
&emsp;该方法可通过以上参数，提取字符串中介于两个指定下标之间的字符串，返回值正确，且对原字符串没影响，可以用到这道题中，start与end为非负数
substr(start,length):
&emsp;该方法是返回从指定位置开始的指定长度的子字符串，也可以用到这道题中，start为负时，会被替换为0，length不指定，则会延续到字符串末尾。

```javascript
var isPalindrome = function(s) {
    var Regexp=/^[\da-zA-Z]$/;
    for(let i=0,j=s.length-1;i<j;){
        let left=s.substr(i,1);
        let right=s.substr(j,1);
        if(Regexp.test(left)){
            i++;
            continue;
        }
        if(Regexp.test(right)){
            j--;
            continue;
        }
        if(left.toUpperCase()===right.toUpperCase()){
            continue;
        }else{
            return false;
        }
    }
    return true;
};
```



**参考资料**
&emsp;&emsp;[leetcode题解](https://github.com/azl397985856/leetcode)