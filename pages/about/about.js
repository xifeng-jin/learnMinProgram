// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'zhuling',
    age:18,
    students: [{id:'01',name:'kebi'},{id:'02',name:'james'},{id:'03',name:'kuli'}],
    counter:0
  },
  addCounter() {
    // this.data.counter ++
    // console.log(this.data.counter)
    this.setData({
      counter: this.data.counter + 1
    })
  },
  subtract() {
    this.setData({
      counter: this.data.counter - 1
    })
  }

})