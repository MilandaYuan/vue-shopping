import Mock from 'mockjs';

let books = [];
const count = 30;
const coverList = [
  "http://p8d19mw6r.bkt.clouddn.com/image/vue-shoppingbag1.jpg",
  "http://p8d19mw6r.bkt.clouddn.com/image/vue-shoppingbag2.jpg",
  "http://p8d19mw6r.bkt.clouddn.com/image/vue-shoppingbag3.jpg",
  "http://p8d19mw6r.bkt.clouddn.com/image/vue-shoppingbag4.jpg",
  "http://p8d19mw6r.bkt.clouddn.com/image/vue-shoppingbag5.jpg",
  "http://p8d19mw6r.bkt.clouddn.com/image/vue-shoppingbag6.jpg",
]

const sliders = [
  'http://p8d19mw6r.bkt.clouddn.com/banner_small.jpg',
  'http://p8d19mw6r.bkt.clouddn.com/image/vue-shoppingbanner2.jpg',
  'http://p8d19mw6r.bkt.clouddn.com/image/vue-shoppingbanner3.jpg'
]

for (let i = 0; i < count; i++) {
  books.push(Mock.mock({
    'bookCover|+1': coverList,
    bookName: '@title(1)',
    bookInfo: '@sentence(3, 5) ',
    bookPrice: '@float(160, 2000, 0, 2)',
    bookId: '@increment',
    cartCount: 0,
    isChecked: false
  }))
}

function getId(config) {
  const url = config.url;
  let reg = /\d+/;
  return parseInt(url.match(reg)[0]);
}

export default {
  getSliders() {
    return sliders;
  },
  getHot() {
    return books.slice(0, 6)
  },
  getBooks(config) {
    const url = config.url
    let isGetOneBook = url.indexOf('id')
    if (isGetOneBook > 0) {
      let id = getId(config)
      let book = books.find(item => item.bookId === id)
      if (!book) book = {}
      return book;
    }
    return books
  },
  updateBook(config) {
    console.log(config);
    let id = getId(config);
    let book = JSON.parse(config.body)
    console.log(book)
    books = books.map(item => {
      if (item.bookId === id) {
        console.log(id)
        return book
      }
      return item
    })
    return book

  },
  addBook(config) {
    let book = JSON.parse(config.body);
    book.bookId = books.length ? books[books.length - 1].bookId + 1 : 1;
    book.cartCount = 0;
    book.isChecked = false
    books.unshift(book)
    return book

  },
  removeBook(config) {
    let id = getId(config);
    books = books.filter(item => item.bookId !== id)
  },
  pagination(config) {
    //url: "/page?offset=0"
    let pageSize = 5;

    let reg = /\d+/;
    let queryOffset = config.url.match(reg)[0];
    let offset = parseInt(queryOffset) || 0;

    let result = books.slice(offset, offset + pageSize);
    let hasMore = true;
    if (books.length <= offset + pageSize) hasMore = false;
    return {hasMore, books: result}
  },
  getCartList(){
    return books.filter(item=> item.cartCount>0)
  },
  increaseCount(config){
    let id = getId(config);
    let book = ''
    books = books.map(item => {
      if (item.bookId === id) {
        book = item
        book.cartCount++;
        return book
      }
      return item
    })
    return book;
  },
  decreaseCount(config){
    let id = getId(config);
    let book = ''
    books = books.map(item => {
      if (item.bookId === id) {
        book = item;
        if(book.cartCount>1){
          book.cartCount--;
        }
        return book
      }
      return item
    })
    return book;
  }

}

