const newPrice = (number) => {
  return new Intl.NumberFormat("ar-EG", {
    style: "currency",
    currency: "EGP",
  }).format(number / 100);
};
export default newPrice;
