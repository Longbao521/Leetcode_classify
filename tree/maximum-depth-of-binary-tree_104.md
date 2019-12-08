# 104. 二叉树的最大深度
>>给定一个二叉树，找出其最大深度。
二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
说明: 叶子节点是指没有子节点的节点。
示例：
给定二叉树 [3,9,20,null,null,15,7]，
    3
   / \\
  9  20
    / &emsp; \\
   15 &emsp; 7
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

信息：
&emsp;&emsp;二叉树，树按层序遍历放于数组，空节点为null，根节点到最远叶子结点

思路：
&emsp;&emsp;满二叉树的节点数num与层数n之间的关系为:num=2^n-1; 则若数组长度大于2^n-1 小于等于2^(n+1)-1,则最大深度为n+1;


```javascript
var maxDepth = function(root) {
  var length=root.length;
  var result=Math.ceil(Math.log2(length));
  return result;
};
```

但是真的这么简单吗？显然不是，这个题是用树来解决，数据结构为树，虽然题目是用数组存储，但是却被组成了树，每个元素具有val、left、right属性，那应该怎么做？
最简单的办法：递归

```javascript
var maxDepth = function(root) {
  if(!root) return 0;
  if(!root.left&&!root.right) return 1;
  if(root.left){
      var leftDepth=maxDepth(root.left)+1;
  }
  if(root.right){
      var rightDepth=maxDepeth(root.right)+1;
  }
  return leftDepth>rightDepth ? leftDepth:rightDepth;
};
```

以上是递归形式，那非递归形式呢，这就可以用到层序遍历，最大深度就是遍历了多少层。从这也可以得到另外一种方案，即将层序遍历的结果存储到数组中，空节点用null代替，然后用第一种方法来得到最大深度。以下是前面一种方案的代码：
```javascript
var maxDepth = function(root){
    if(!root) return 0;
    if(!root.left&&!root.right) return 1;
    var depth=1,cur=root;
    var queue=[root,null];
    while((cur=queue.shift()) !== undefined){
      if (cur === null) {
          // 注意⚠️： 不处理会无限循环，进而堆栈溢出
          if (queue.length === 0) return depth;
          depth++;
          queue.push(null);
          continue;
       }
       if(cur.left) queue.push(cur.left);
       if(cur.right) queue.push(cur.right);
    }
    return depth;
}
```

----
**[leetCode分类刷题](https://github.com/Longbao521/Leetcode_classify) &emsp; 该地址长期、每周更新LeetCode分类刷题**

**参考资料**
&emsp;&emsp;[leetcode题解](https://github.com/azl397985856/leetcode)