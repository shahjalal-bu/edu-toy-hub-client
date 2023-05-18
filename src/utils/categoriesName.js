const categoriesName = (state) => {
  if (state.loading || state.error) return;
  const { products } = state;
  const catgorisedProduct = {};
  const result = products.forEach((el) => {
    if (el.Category in catgorisedProduct) {
      catgorisedProduct[el.Category] = [...catgorisedProduct[el.Category], el];
    } else {
      catgorisedProduct[el.Category] = [el];
    }
  });
  return catgorisedProduct;
};
export default categoriesName;
