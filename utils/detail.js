import request from "../service/network.js"

export function getDetaildata(iid) {
  return request({
    url: "http://123.207.32.32:8000/api/hy/detail",
    data: {
      iid
    }
  })
}

export function getRecommends() {
  return request({
    url: 'http://123.207.32.32:8000/api/hy/recommend'
  })
}