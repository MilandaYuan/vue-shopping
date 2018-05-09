import * as Types from './mutations-type'

let mutations = {
  [Types.GET_CART_LIST](state, books) {
    state.cartList = books
  },

  [Types.INCREASE_COUNT](state, book) {
    let bookToBeAdded = state.cartList.find(item => item.bookId === book.bookId)
    if (bookToBeAdded) {
      state.cartList = state.cartList.map(item => {
        if (item.bookId === book.bookId) {
          book.isChecked = item.isChecked;
          return book
        }
        return item
      })
    } else {
      state.cartList = [...state.cartList, book]
    }
  },

  [Types.DECREASE_COUNT](state, book) {
    let bookToBeAdded = state.cartList.find(item => item.bookId === book.bookId)
    if (bookToBeAdded) {
      state.cartList = state.cartList.map(item => {
        if (item.bookId === book.bookId) {
          book.isChecked = item.isChecked;
          return book
        }
        return item
      })
    }
  },

  [Types.CHECK_SINGLE](state, id) {
    console.log(11)
    state.cartList = state.cartList.map(item => {
      if (item.bookId === id) {
        item.isChecked = !item.isChecked;
        return item
      }
      return item
    })
  },
  [Types.CHECK_ALL](state, val) {
    state.cartList = state.cartList.map(item => {
      item.isChecked = val;
      return item
    })
  },
  [Types.DELETE_BOOK_IN_CARTLIST](state, id) {
    state.cartList = state.cartList.filter(item=>item.bookId!==id)
  }
};
export default mutations
