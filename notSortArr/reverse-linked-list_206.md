# 206.反转链表
<font color=gray size=2>2019-12-11 20:10:36 +0800</font>
<font color=gray size=2>categories: uwp</font>
---

>反转一个单链表。
示例:
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-linked-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

---

#### 信息
+ 单链表
+ 顺序颠倒
+ 最好使用迭代和递归

#### 思路
+ 循环，从第二个开始，先删除，再将其作为首节点
+ 递归的思想考虑问题，第一个节点要放到后面逆转节点的后面

#### 解法
循环：
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head||!head.next){
        return head;
    }
    var pre=head;
    var cur=head.next;
    while(cur!==null&&cur.val!==null){//不能缺省，防止为0
        pre.next=cur.next;
        cur.next=head;
        head=cur;
        cur=pre.next;
    }
    return head;
};
```
递归：
```javascript
var reverseList = function(head) {
    if(!head||!head.next){
        return head;
    }
    var reverList=reverseList(head.next);
    var reverListTail=head.next;//得到逆转节点的尾部
    reverListTail.next=head;
    head.next=null;
    return reverList;
};
```
---

**参考资料**