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
---
但是上面的运行成绩惨不忍睹，有没有优化方法？显然是有的，显然这道题中复杂度最高的就是getMin(),其余不过是一步操作而已，刚开始我故步自封于如何快速查找最小值，而忽略了它初始状态是一个空栈，后面每一次操作都会更新最小值，而不需要到了求getMIN()财去查找
所以更新为：
```javascript
var MinStack = function() {
  this.stack = [];
  this.min = Number.MAX_VALUE;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  // update 'min'
  const min = this.min;
  if (x < this.min) {
    this.min = x;
  }
  return this.stack.push(x - min);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const item = this.stack.pop();
  const min = this.min;

  if (item < 0) {
    this.min = min - item;
    return min;
  }
  return item + min;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  const item = this.stack[this.stack.length - 1];
  const min = this.min;

  if (item < 0) {
    return min;
  }
  return item + min;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min;
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

----
**[leetCode分类刷题](https://github.com/Longbao521/Leetcode_classify) &emsp; 该地址长期、每周更新LeetCode分类刷题**

**参考资料**
&emsp;&emsp;[leetcode题解](https://github.com/azl397985856/leetcode)