#155.最小栈
<font color=gray size=2>2019-11-30 19:32:58 +0800</font>
<font color=gray size=2>categories: LeetCode</font>
---

>>设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。
push(x) -- 将元素 x 推入栈中。
pop() -- 删除栈顶的元素。
top() -- 获取栈顶元素。
getMin() -- 检索栈中的最小元素。
示例:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/min-stack
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

---

#### 信息
+ 栈
+ 支持push、pop、top、getMin等操作
+ getMin（）为常数时间复杂度
+ 支持new
---

#### 思路
+ 函数原型或者类，this.arr=new Array(),所有操作基于this.arr
+ getMin()可以用遍历比较的方法
---
#### 解答

```javascript
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.array=[...arguments];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.array[this.array.length]=x;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.array.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.array[this.array.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    var min=Number.MAX_VALUE;
    for(let elem of this.array){
        if(elem<min){
            min=elem;
        }
    }
    return min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```
**参考资料**