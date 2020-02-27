// pages/card/card.js
const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    cartLength:0,
    price: 0,
    isChecked:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(app)
    //1.获取商品信息
    const shops = app.globalData.cartList
    // const totalPrice = this.getPrice(shops)
    
    this.setData({
      list: shops
    })
    //设置回调，因为onLoad一个页面指挥调用一次，因此需要回调去修改里面的数据
    this.changeData()
    app.addCallBack = () => {
      this.setData({
        list: app.globalData.cartList
      })
      this.changeData()
      console.log('called back',this.data.list)
    }
    //修改俩字z-cart-list的回调
    app.changeList = (index, item) => {
      this.setData({
        // ['list[${index}]']: item
        [`list[${index}]`]: item
      })

      const selectAll = !this.data.list.find(item => !item.checked)
      this.setData({
        isChecked: selectAll
      })
      this.changeData()
    }
    //bottom-bar的回调函数
    app.bottomCallBack = (check)=> {
      this.setData({
        isChecked:check
      })
      this.changeData()
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  sellect() {
    // 1.判断是否是全部选中
    if (this.data.isChecked) { // 目前全部选中
      this.data.list.forEach(item => {
        item.checked = false
      })
      this.setData({
        list: this.data.cartList,
        isChecked: false
      })
    } else { // 某些没选中
      this.data.list.forEach(item => {
        item.checked = true
      })
      this.setData({
        list: this.data.cartList,
        isChecked: true
      })
    }
    console.log('jj')
  },
  changeData() {
    // console.log('first in')
    var total = 0
    var list = this.data.list
    // console.log(list)
    var counter = 0
    for(var i=0;i<list.length;i++) {
      var temp = list[i].price
      temp = temp.slice(1)
      if (list[i].checked) {
        total += temp * list[i].counter
        counter += list[i].counter
      }
    }
    this.setData({
      price:total,
      cartLength: counter
    })
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