import axios from 'axios'
axios.defaults.baseURL ='http://localhost:3030'
axios.interceptors.response.use((res)=>{
  return res.data
})

export let getSliders = ()=>{
  return axios.get('/sliders')
}
export let getHot = ()=>{
  return axios.get('/hot')
}
export  let getAll = ()=>{
  return axios.all([getSliders(),getHot()])
}
export let getBooks = ()=>{
  return axios.get('/book')
}
export let removeBook = (id)=>{
    return axios.delete(`/book?id=${id}`)
}
export  let getOneBook = (id)=>{
   return axios.get(`/book?id=${id}`)
}
export let updateBook=(id,data)=>{
  return axios.put(`/book?id=${id}`,data)
}
export  let addBook = (data)=>{
  return axios.post('/book',data)
}
export let pagination = (offset)=>{
    return axios.get(`/page?offset=${offset}`)
}
export let increaseCount = (id)=>{
  return axios.post(`/cart?id=${id}`)
}
export let getCartList = ()=>{
  return axios.get('/cart')
}
export let decreaseCount = (id)=>{
  return axios.delete(`/cart?id=${id}`)
}
