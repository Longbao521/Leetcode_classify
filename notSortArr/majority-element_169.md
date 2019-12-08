# 169.多数元素
<font color=gray size=2>2019-12-08 09:58:02 +0800</font>
<font color=gray size=2>categories: dotnet</font>
---

>给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
你可以假设数组是非空的，并且给定的数组总是存在多数元素。
示例 1:
输入: [3,2,3]
输出: 3
示例 2:
输入: [2,2,1,1,1,2,2]
输出: 2
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/majority-element
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

---

#### 信息
+ 大小为n的无序数组
+ 找出书组长出现次数大于n/2（向下取整）
+ 数组非空，给定的数组必有多数元素

#### 思路
+ 遍历数组，记录下每个元素出现的次数，若大于n/2则返回
+ 投票算法。这个算法我调试了好久，才懂了点皮毛，如有错误，敬请指点

投票算法，顾名思义是用投票的思想解题，我们用[2,3,2,1,3,1,3,2,3,2]来做例子

+ majority=2,count=1; 初始状态，第一个元素首先得一票
+ majority=2,count=0; 不同元素，majority所指代的元素（竞争者）票数减一
+ majority=2,count=1; 竞争者本来要换人，但是巧在竞争者又得了一票
+ majority=2,count=0; 又丧失一票
+ majority=3,count=1; 换人了，让我们看一下新选手
+ majority=3,count=0; 首战不利呀，看来注定短命呀
+ majority=3,count=1; 恩？打脸了？不错
+ majority=3,count=0; 不要放弃，加油
+ majority=3,count=1; 提前预祝成功了
+ majority=3,count=0; 你无所谓了，我们已经胜利了，胜利者3



#### 求解
```javascript
var majorityElement = function(nums) {
    var resultNum = Math.floor(nums.length/2);//Math.floor是向下取整，Math.ceil是向上取整
    if(!resultNum){
        return nums[0];
    }
    var storeMap=new Map();
    for(let elem of nums){
        let getNum = storeMap.get(elem);
        if( getNum === undefined){//get得到的是undefined
            storeMap.set(elem,1);
        }else{
            if(getNum+1>resultNum){
                return elem;
            }
            storeMap.set(elem,getNum+1);
        }
    }
};
```


```javascript
var majorityElement = function(nums) {
    var count =1;
    var marjority=nums[0];
    for(let elem of nums){
        if(!count){
            marjority=elem;
        }
        if(elem == marjority){
            count++;
        }else{
            count--;
        }
    }
    return marjority
};
```

---

**参考资料**
[LeetCode题解](https://github.com/azl397985856/leetcode)