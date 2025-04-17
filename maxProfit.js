function maxProfit(prices) {
    let globalValue = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            const profit = prices[j] - prices[i];
            if (profit > globalValue) globalValue = profit


        }

    }
    return globalValue
}
const prices = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices))
