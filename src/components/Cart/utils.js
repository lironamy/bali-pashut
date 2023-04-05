export const getTotals = (cart) => {
  let totalAmount = 0;
  let totalCost = 0;
  for (let { amount, price } of cart) {
    totalAmount += amount;
    totalCost += amount * price;
  }
  return { totalAmount, totalCost };
};
