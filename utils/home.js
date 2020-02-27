import request from "../service/network.js"

export function getMultidata() {
  return request({
    url: "http://123.207.32.32:8000/api/hy/home/multidata"
  })
}

export function getGoods(type,page) {
  return request({
    url: "http://123.207.32.32:8000/api/hy/home/data",
    data: {
      type,
      page
    }
  })
}