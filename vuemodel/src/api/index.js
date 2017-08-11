import {
  news,
  newsdeta,
  cartelistdate,
  carteid,
  getnewsinfo
} from './resouce.js'
import axios from 'axios'
console.log(news)
export default {
  new() {
    return axios.get(news)
  },
  newlist(deta) {
    return axios.get(newsdeta + deta)
  },
  cartelist() {
    return axios.get(cartelistdate)
  },
  getcarteid(id) {
    return axios.get(carteid + id)
  },
  getnewscontent(id) {
    return axios.get(getnewsinfo + id)
  },
  getComments(id) {
    return axios.get('https://zhihu-daily.leanapp.cn/api/v1/contents/extra/' + id);
  },
  getCommentsList(id) {
    return axios.get('https://zhihu-daily.leanapp.cn/api/v1/contents/' + id + '/short-comments');
  }
}
