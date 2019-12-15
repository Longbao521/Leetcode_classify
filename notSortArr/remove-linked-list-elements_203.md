# 203. 移除链表元素
<font color=gray size=2>2019-12-11 19:42:46 +0800</font>
<font color=gray size=2>categories: dotnet</font>
---

>删除链表中等于给定值 val 的所有节点。
示例:
输入: 1->2->6->3->4->5->6, val = 6
输出: 1->2->3->4->5

---

#### 信息
+ 链表
+ 删除给定值val的节点
+ 符合条件的节点不止一个

#### 思路
+ 最简单的方法，遍历，删除,为了不对首节点做特殊处理，做一个虚拟节点作为头结点

#### 解法
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    const dummy={//不带值的头结点
        next:head
    };
    let cur=dummy;
    while(cur&&cur.next){
        let next=cur.next;
        if(next.val===val){
            cur.next=next.next;
            next=next.next;
        }
        if(!next || next.val !== val){//直接跳过一些节点
            cur=next;
        }
    }
    return dummy.next;//不能返回head，因为第一个节点也会被删除
};
```

---

**参考资料**