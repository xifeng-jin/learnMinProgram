// pages/about/about.js
import request from '../../service/network.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1.原生发送网络请求
    this.get_data_origin();
    //2.使用reques
    request({
      url: 'http://123.207.32.32:8000/api/hy/recommend'
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  get_data_origin() {
    wx.request({
      // url: 'http://123.207.32.32:8000/api/hy/recommend',
      // url: 'http://httpbin.org/post',
      // success: function (res) {
      //   console.log(res)
      // },
      // method: 'post',
      // data: {
      //   x: 'haha',
      //   y: 'heihei'
      // }
    })
  },
  handleAction() {
    wx.showActionSheet({
      itemList: ['haha','hehehe','heiheihei'],
      success: function(res) {
        console.log(res)
      }
    })
  },
  onShareAppMessage: function(options) {
    return {
      'title': '是男人就来床100关',
      'path': '/pages/about/about'
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})