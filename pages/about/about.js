// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    age: 14,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 88,
    nums: [
      [1,2,3,4,5],
      [1,2,3,4,5],
      [1,2,3,4,5]
    ]
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  },
  switchColor() {
    this.setData({
      isActive: ! this.data.isActive,
      isShow: ! this.data.isShow,
      score: this.data.score + 5
    })
  }
})