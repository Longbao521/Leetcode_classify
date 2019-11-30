##20. 有效的括号
>>给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。
示例 1:
输入: "()"
输出: true
示例 2:
输入: "()[]{}"
输出: true
示例 3:
输入: "(]"
输出: false
示例 4:
输入: "([)]"
输出: false
示例 5:
输入: "{[]}"
输出: true
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
#### 思路：
 1.创建一个空数组，对字符串进行分割，对每一个字符判断是左括号还是右括号
 2.左括号进栈push
 3.右括号则分情况判断：
 &emsp;3.1 若栈为空，则return false;
 &emsp;3.2 若栈不为空，弹出栈顶元素:
 &emsp;&emsp;3.2.1  若元素为对应的左括号，return true
 &emsp;&emsp;.2.2  否则，return false
```javascript
/**
 * 
 * @param {String} str 
 * @return {boolean}
 */
var isValid = function (str) {
    if (!str) return true; //Note that an empty string is also considered valid.
    const stack = [];
    var str2Arr = str.split("");
    for (let elem of str2Arr) {
        switch (elem) {
            case "{":
            case "[":
            case "(":
                stack.push(elem);
                break;
            case "}":
                if (!(stack.length && stack.pop() === "{")) {
                    return false;
                }
                break;
            case "]":
                if (!(stack.length && stack.pop() === "[")) {
                    return false;
                }
                break;
            case ")":
                if (!(stack.length && stack.pop() === "(")) {
                    return false;
                }
                break;
            default:
                return false;
        }
    }
    return !stack.length;
}
```



####  扩展：
1.如果只有一种括号，则采用计数法
Problem2：[921.使括号有效的最少添加 ](https://leetcode-cn.com/problems/minimum-add-to-make-parentheses-valid/)
>>给定一个由 '(' 和 ')' 括号组成的字符串 S，我们需要添加最少的括号（ '(' 或是 ')'，可以在任何位置），以使得到的括号字符串有效。
              从形式上讲，只有满足下面几点之一，括号字符串才是有效的：
                         它是一个空字符串，或者
                         它可以被写成 AB （A 与 B 连接）, 其中 A 和 B 都是有效字符串，或者
                         它可以被写作 (A)，其中 A 是有效字符串。
               给定一个括号字符串，返回为使结果字符串有效而必须添加的最少括号数。

Problem3: [1021. 删除最外层的括号](https://leetcode-cn.com/problems/remove-outermost-parentheses/)   
>>有效括号字符串为空 ("")、"(" + A + ")" 或 A + B，其中 A 和 B 都是有效的括号字符串，+ 代表字符串的连接。例如，""，"()"，"(())()" 和 "(()(()))" 都是有效的括号字符串。
               如果有效字符串 S 非空，且不存在将其拆分为 S = A+B 的方法，我们称其为原语（primitive），其中 A 和 B 都是非空有效括号字符串。
               给出一个非空有效字符串 S，考虑将其进行原语化分解，使得：S = P_1 + P_2 + ... + P_k，其中 P_i 是有效括号字符串原语。
               对 S 进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 S 。
      2.如果有多个匹配字段，如解析HTMl或XML标记，因匹配类型过多，可以采用Map哈希表，存储匹配类型
         如:const mapper = {'{': "}","[": "]","(": ")"};
 
