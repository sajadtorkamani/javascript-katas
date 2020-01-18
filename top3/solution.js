const top3 = (products, amounts, prices) => {
  return products
    .map((product, index) => ({
      name: product,
      sale: amounts[index] * prices[index]
    }))
    .sort((a, b) => b.sale - a.sale)
    .slice(0, 3)
    .map(product => product.name);
};

export default top3;
