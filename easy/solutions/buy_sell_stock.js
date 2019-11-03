/*
*
* For solution in other languages:
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solution/
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/discuss/?currentPage=1&orderBy=hot&query=
*
*/
var maxProfit = function(prices) {
  var ans = 0;
  var curLowest = prices[0];
  for (var i = 1; i < prices.length; i++){
      curLowest = Math.min(curLowest, prices[i]);
      ans = Math.max(prices[i] - curLowest, ans);
  }
  return ans;
};
