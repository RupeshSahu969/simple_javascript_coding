const maxProfit = function (prices) {
  let globalmax = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const current = prices[j] - prices[i];

      if (current > globalmax) globalmax = current;
    }
  }
  return globalmax;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5


