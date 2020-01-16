# 226. 翻转二叉树
<font color=gray size=2>2019-12-16 21:30:32 +0800</font>
<font color=gray size=2>categories: leetcode</font>
---

>翻转一棵二叉树。
示例：
输入：&emsp;\
 &emsp;    4\
 &emsp;  /   \\\
 &emsp; 2     7\
 &emsp;/ \   / \\\
 1   3 6   9\
输出：\
  &emsp;   4\
&emsp;   /   \\ \
&emsp;  7     2\
&emsp; / \   / \\\
&emsp; 9   6 3   1\
备注:
这个问题是受到 Max Howell 的 原问题 启发的 ：
谷歌：我们90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/invert-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

---

#### 信息
+ 二叉树
+ 节点层次结构不变，只是每一层中顺序颠倒
+ 节点的父子关系也保持不变

#### 思路
+ 可以找到一条规律：从父节点到子节点，只需要层序遍历，将每一个子节点顺序进行颠倒就好，如上例：4的子节点2,7进行颠倒，2的子节点1,3进行颠倒，7的子节点6,9进行颠倒

#### 实现
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root){
        return root;
    }
    const queue=[root];
    while(queue.length){
        let elem=queue.pop();
        if(elem.left&&elem.right){
            let temp=elem.left;
            elem.left=elem.right;
            elem.right=temp;
            queue.push(elem.left);
            queue.push(elem.right);
        }
        else if(elem.left){
            elem.right=elem.left;
            elem.left=null;
            queue.push(elem.right);
        }
        else if(elem.right){
            elem.left=elem.right;
            elem.right=null;
            queue.push(elem.left);
        }
    }
    return root;
};
```

---

**参考资料**