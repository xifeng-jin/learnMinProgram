// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sports: ['篮球','羽毛球','乒乓球']
  },
  handleTap(event){
    console.log(event)
  },
  handleEventEnd(event) {
    console.log('jjjj'  , event)
  },
  handleEventEnd2(event) {
    console.log('hhhh', event)
  },
  handleInner(event) {
    console.log('innder',event)
  },
  handleOuter(event) {
    console.log('outer',event)
  },
  itemClick(event) {
    console.log(event.currentTarget.dataset)
  }
})