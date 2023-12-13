function calculateTotalSpentByCategory(transactions) {
  const categoryTotal = {};

  transactions.forEach(({ category, price }) => {
    categoryTotal[category] = (categoryTotal[category] || 0) + price;
  });

  const result = [];
  for (const category in categoryTotal) {
    result.push({ category, totalSpent: categoryTotal[category] });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
