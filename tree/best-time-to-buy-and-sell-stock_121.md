# 121.买卖股票的最佳时机
>>给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。
注意你不能在买入股票前卖出股票。
示例 1:
输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
示例 2:
输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

&emsp;&emsp;初看这道题，觉得很简单，先找到数组中最小的，再找到后面最大的，两者之差就是结果，而且上面两道题也符合，但是如果输入是[7,3,5,6,4,1]呢,输出应该是3，但是按照上面的思路却是0，那如果先找最大的呢，那如果是[6,7,1,5,2]呢。所以这两种思路都不对，那应该怎么做？

#### 信息:
+ 只允许一次买入，再一次卖出
+ 所得差价为结果
#### 思路：
+ 第一感觉是平衡，数据结构中具有平衡色彩的莫过于树
+ 有大小，所以可以根据大小来建立树，小为左子，大为右子
+ 建立树之后，结果就变为：
&emsp;1. 若节点为根节点，record=root，否则将当前节点与record比较，去较小值更新record
&emsp;2. 下一个节点在右则往下
&emsp;3. 若为左，则将当前节点的值减去record，与max比较更新,
&emsp;4. 往左走一步，再重新执行1,2,3

以下是实现代码：
```javascript
var maxProfit = function(prices) {
    var max=0;
    var record=prices[0];
    for(let i=1;i<prices.length;++i){
        if(prices[i]>=prices[i-1]&&i<prices.length-1){
              continue;
        }else if(prices[i]>=prices[i-1]&&i==prices.length-1){//应对[1,2]
              max=Math.max(max,prices[i]-record);
        }else{
            max=Math.max(max,prices[i-1]-record);
            //record=prices[i];
            record=Math.min(prices[i],record);//要选择两者的最小值
        }
    }
    return max;
}
```
