import request from "../service/network.js"

export function getDetailData() {
  return request({
    url: "http://123.207.32.32:8000/api/hy/category"
  })
}