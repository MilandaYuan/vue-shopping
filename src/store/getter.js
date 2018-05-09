let getters = {
  total: state => state.cartList.reduce((prev, next) => {
    if (!next.isChecked) return prev;
    return prev + next.cartCount * next.bookPrice
  }, 0)
}
export default getters
