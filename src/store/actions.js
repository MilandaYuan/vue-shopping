import {increaseCount,getCartList,decreaseCount} from '../api';
import * as Types from './mutations-type'

let actions = {
  increaseCount({commit}, id) {
    increaseCount(id).then(book => {
      commit(Types.INCREASE_COUNT, book)
    })
  },
  decreaseCount({commit}, id) {
    decreaseCount(id).then(book => {
      commit(Types.DECREASE_COUNT, book)
    })
  },
  getCartList({commit}){
    getCartList().then(books=>{
      commit(Types.GET_CART_LIST,books)
    })
  }
}
export default actions
