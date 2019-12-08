# 122. 买卖股票的最佳时机 II
>>给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
示例 1:
输入: [7,1,5,3,6,4]
输出: 7
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
示例 2:
输入: [1,2,3,4,5]
输出: 4
解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
     因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
示例 3:
输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

#### 信息：
+ 可以多次买入
+ 在新的买入之前，必须卖掉以前的股票
+ 结果为多次买入的最优和

#### 思路：
+ 采用与上道题相同的数据结构
+ 在向左走的时候，不再比较大小，而是累加

以下是实现代码：
```javascript
var maxProfit = function(prices) {
  var result=0;
  var record=prices[0];
  for(let i=0;i<prices.length-1;++i){
      if(prices[i]<=prices[i+1]){
            continue;
      }else{
          result += prices[i]-record;
          record=prices[i+1];
      }
  }
  return prices[prices.length-1]>=prices[prices.length-2]&&prices[prices.length-1]>record ? result+prices[prices.length-1]-record : result;
}
```

**&emsp;&emsp;经过无数次的查漏补缺，终于成功了，但是上面的方法好吗，谁用谁知道，一直在不断改进**

```javascript
var maxProfit = function(prices) {
    let profit = 0;
    for(let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i -1]) {
            profit  = profit + prices[i] - prices[i - 1];
        }
    }
    return profit;
};
```
**&emsp;&emsp;这种执行用时要比上面高，但是在内存消耗上有所提升，整体差别不大，但是下面的明显简洁**



**参考资料**
&emsp;&emsp;[leetcode题解](https://github.com/azl397985856/leetcode)