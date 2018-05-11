import Mock from 'mockjs';
import api from './api'

Mock.mock(/\/sliders/,'get',api.getSliders);
Mock.mock(/\/hot/,'get',api.getHot);
Mock.mock(/\/book/,'get',api.getBooks);
Mock.mock(/\/book/,'put',api.updateBook);
Mock.mock(/\/book/,'post',api.addBook);
Mock.mock(/\/book/,'delete',api.removeBook);
Mock.mock(/\/page/,'get',api.pagination);
Mock.mock(/\/cart/,'get',api.getCartList);
Mock.mock(/\/cart/,'post',api.increaseCount);
Mock.mock(/\/cart/,'delete',api.decreaseCount);


