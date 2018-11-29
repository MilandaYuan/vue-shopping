<template>
  <div>
    <MHeader>添加</MHeader>
    <ul>
      <li>
        <label for="bookName">名字</label>
        <input class="text-input" type="text" v-model="book.bookName" id="bookName">
      </li>
      <li>
        <label for="bookInfo">介绍</label>
        <input class="text-input" type="text" v-model="book.bookInfo" id="bookInfo">
      </li>
      <li>
        <label for="bookCover">图片</label>
        <input class="text-input" type="text" v-model="book.bookCover" id="bookCover">
      </li>
      <li>
        <label for="bookPrice">价格</label>
        <input class="text-input" type="text" v-model.number="book.bookPrice" id="bookPrice">
      </li>
      <li>
        <button class="button" @click="add">确认添加</button>

      </li>
    </ul>

  </div>
</template>

  <script>
  import MHeader from '../base/MHeader';
  import {addBook} from "../api";

  export default {
    name: "add",
    data(){
      return{
        book:{},
        isChecked:false
      }
    },
    methods:{
      async add(){
        this.book= await addBook(this.book)
        this.$router.push('/list')
      }
    },
    components:{
      MHeader
    }

  }
</script>

<style scoped lang="less">
  ul{
    margin: 50px 20px 0 20px;
  li{
  label{
    display: block;
    line-height: 25px;
  }
  input{
    width: 100%;
    margin: 10px 0;
    height: 25px;
  }
  }
  }
</style>
