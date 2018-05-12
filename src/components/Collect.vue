<template>
  <div>
    <MHeader>购物车</MHeader>
    <div class="content">
      <ul>
        <mt-cell-swipe v-for="book in cartList" :key="book.bookId" :right="handleRightButton(book.bookId)">
          <p-check :checked="book.isChecked" class="checkbox p-default p-round" @change='checkSingle(book.bookId)'>
          </p-check>
          <div class="img-container">
            <img v-lazy="book.bookCover" alt="">
          </div>
          <div class="info-container">
            <div>
              <h3>{{book.bookName}}</h3>
              <p>{{book.bookInfo}}</p>

            </div>
            <div class="info-number-container">
              <b>￥{{book.bookPrice}}</b>
              <div>
                <button class="numButton" @click.stop="decreaseCount(book.bookId)">-</button>
                {{book.cartCount}}
                <button class="numButton" @click.stop='increaseCount(book.bookId)'>+</button>
              </div>
            </div>

          </div>
        </mt-cell-swipe>
      </ul>
    </div>

    <div class="total-container">
      <p-check class="checkAll p-default p-round" :checked="isCheckedAll" @change='checkAll'></p-check>
      <span>全选</span>
      <div class="sum">
        合计：{{total | toFixed(2)}}
        <button class="totalButton">结算</button>
      </div>
    </div>

  </div>
</template>

<script>
  import MHeader from '../base/MHeader'
  import * as Types from '../store/mutations-type'
  import {mapState, mapGetters} from 'vuex';

  export default {
    name: "collect",
    filters: {
      toFixed(number, param) {
        return '￥' + number.toFixed(param)
      }
    },
    created() {
      this.getCartList();
    },
    data() {
      return {
        isCheckedAll: false
        // cartList: this.$store.state.cartList,
      }
    },
    computed: {
      ...mapGetters(['total']),
      ...mapState(['cartList'])
    },
    methods: {
      getCartList() {
        this.$store.dispatch('getCartList')
      },
      increaseCount(id) {
        this.$store.dispatch('increaseCount', id)
      },
      decreaseCount(id) {
        this.$store.dispatch('decreaseCount', id)
      },
      checkSingle(id) {
        this.$store.commit(Types.CHECK_SINGLE, id)
        this.isCheckedAll = this.cartList.every(item => item.isChecked)
      },
      checkAll() {
        this.isCheckedAll = !this.isCheckedAll;
        this.$store.commit(Types.CHECK_ALL, this.isCheckedAll)
      },
      deleteBookInCartList(id) {
        this.$store.commit('DELETE_BOOK_IN_CARTLIST', id)
      },
      handleRightButton(id) {
        return [{
          content: 'Delete',
          style: {background: 'red', color: '#fff', width: '50px'},
          handler: () => this.deleteBookInCartList(id)
        }]
      }
    },
    components: {
      MHeader
    },
    mounted() {
      console.log('lalala')
    },

  }
</script>

<style>
  .mint-cell-wrapper {
    background-image: none;
    padding: 25px 0;
    border-bottom: 1px solid #ccc;

  }

  .mint-cell-wrapper .mint-cell-value {
    color: black;
    align-items: stretch;
  }
</style>

<style scoped lang="less">
  .content {
    bottom: 100px;
    ul {
      padding: 0 2.5% 0 2.5%;
      .checkbox {
        width: 5%;
        height: 10%;
      }
      .img-container {
        width: 30%;
        img {
          max-width: 100%;
        }
      }
      .info-container {
        width: 60%;
        padding-left: 5%;
        line-height: 20px;
        b {
          color: #D6A841;
        }
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .info-number-container {
          display: flex;
          justify-content: space-between;
          .numButton {
            background: transparent;
            border: 1px solid #ccc;
            padding: 3px 10px;
            width: 30px;
          }
        }
      }

    }

  }

  .total-container {
    background: white;
    margin: 0 2.5% 0 2.5%;
    padding: 0 10px;
    display: flex;
    align-items: center;
    height: 50px;
    line-height: 50px;
    width: calc(95% - 20px);
    position: fixed;
    bottom: 50px;
    border-top: 1px solid #ccc;
    .checkAll {
      width: 10%;
    }
    span {
      width: 10%;
    }
    .sum {
      width: 80%;
      text-align: right;
      .totalButton {
        background: #D6A841;
        border: none;
        width: 50px;
        height: 35px;
        color: white;
      }
    }

  }
</style>




