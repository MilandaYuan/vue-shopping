<template>
  <div>
    <MHeader>列表</MHeader>
    <div class="content" ref="scroll" @scroll='loadMore'>
      <ul>
        <router-link :to="{name:'detail',params:{bid:book.bookId}}" v-for="(book,index) in books" :key="index" tag="li">
          <div class="img-container">
            <img v-lazy="book.bookCover" alt="">
          </div>
          <div class="info-container">
            <h3>{{book.bookName}}</h3>
            <p>{{book.bookInfo}}</p>
            <b>{{book.bookPrice | toFixed(2)}}</b>
            <div>
              <button class="button" @click.stop="remove(book.bookId)">删除</button>
              <button class="button" @click.stop="addToCart(book.bookId)">添加</button>
            </div>

          </div>
        </router-link>
      </ul>
      <div @click='getData' v-if="hasMore" class="loading">正在加载...</div>
      <div v-else class="no-more">没有啦~~</div>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader'
  import {pagination, removeBook} from "../api";
  import * as Types from '../store/mutations-type'

  export default {
    name: "list",
    filters: {
      toFixed(number, param) {
        return '￥' + number.toFixed(param)
      }
    },
    created() {
      this.getData();
    },
    data() {
      return {
        books: [],
        offset: 0,
        hasMore: true,
        isLoading: false
      }
    },
    mounted() {
      let scroll = this.$refs.scroll;
      let top = scroll.offsetTop;
      let distance;
      let isMove = false
      scroll.addEventListener('touchstart', (e) => {
        if (scroll.offsetTop !== top || scroll.scrollTop !== 0) return
       // console.log('start')
        let start = e.touches[0].pageY;
        let move = (e) => {
          isMove = true;
         // console.log('move')
          let current = e.touches[0].pageY;
          distance = current - start;
          if (distance > 0) {
            if (distance <= 50) {
              scroll.style.top = top + distance + 'px';
            } else {
              distance = 50;
              scroll.style.top = 50 + top + 'px'
            }
          } else {
            scroll.removeEventListener('touchmove', move)
            scroll.removeEventListener('touchend', end)
          }
        }
        let end = (e) => {
          if(!isMove) return
          //clearInterval(this.timerUp)
          this.timerUp = setInterval(() => {
            if (distance <= 0) {
              clearInterval(this.timerUp)
              distance = 0;
              scroll.removeEventListener('touchmove', move)
              scroll.removeEventListener('touchend', end)
              this.books = [];
              this.hasMore = true;
              this.offset = 0;
              this.getData()
              return
            }
            distance -= 1;
            scroll.style.top = top + distance + 'px';
          }, 1)

        }
        scroll.addEventListener('touchmove', move)
        scroll.addEventListener('touchend', end)
      })
    },

    methods: {
      addToCart(id){
        //this.$store.commit(Types.ADD_TO_CART,book)
        this.$store.dispatch('increaseCount',id)
      },
      async loadMore() {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          let {scrollTop, clientHeight, scrollHeight} = this.$refs.scroll;
          if (scrollTop + clientHeight + 20 > scrollHeight) {
            this.getData()
          }
        }, 60)
      },
      async getData() {
        if (this.hasMore && !this.isLoading) {
          this.isLoading = true
          let {hasMore, books} = await  pagination(this.offset)
          this.hasMore = hasMore;
          this.books = [...this.books, ...books]
          this.offset = this.books.length;
          this.isLoading = false
        }
      },
      async remove(id) {
        await removeBook(id)
        this.books = this.books.filter(item => item.bookId !== id)
        //this.getData()
      }
    },
    components: {
      MHeader
    }

  }
</script>

<style scoped lang="less">
  .content {
    ul {
      padding: 10px;

      li {
        display: flex;
        padding: 10px 0;
       // border-bottom: 1px solid #ccc;
        .img-container {
          width: 45%;
          img {
            max-width: 100%;
          }
        }
        .info-container {
          width: 50%;
          padding-left: 5%;
          line-height: 25px;
          p{
            padding-bottom: 5px;
          }
        }

      }
    }
    .loading  {
      text-align: center;
      color: gray;
    }
    .no-more{
      text-align: center;
      color: gray;
    }
  }
</style>
