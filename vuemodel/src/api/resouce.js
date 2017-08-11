import {
  API
} from './config.js'
let resouce = {
  new: "/4/news/latest",
  newdeta: "/4/news/before/",
  cartelist: "/4/themes",
  cartelistid: "/4/theme/",
  newinfo:'/4/news/'
}
// console.log(API+resouce.new)
export const news = API + resouce.new
export const newsdeta = API + resouce.newdeta
export const cartelistdate = API + resouce.cartelist
export const carteid = API + resouce.cartelistid
export const getnewsinfo = API + resouce.newinfo
// console.log(news)
