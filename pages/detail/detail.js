// pages/detail/detail.js
import {
  getDetaildata,
  getRecommends
} from "../../utils/detail.js"

const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    iid: '',
    detailImg:[],
    titleInfo: {},
    shopInfo: {},
    introduce: '',
    wearImg: [],
    itemParams: {},
    detailComment: [],
    detailRecommend:[],
    isShowBack: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //options用于获得传入url的值
    //1.保存iid
    const iid = options.iid;
    this.setData({
      iid
    })
    //2.获取商品详情数据
    this._getDetailData();
  },
  _getDetailData() {
    getDetaildata(this.data.iid).then(res => {
      const result = res.data.result
      //1.获取轮播图数据
     
      //2.获取详情title数据
      const tempInfo = {
        'title': result.skuInfo.title,
        'newPrice': result.itemInfo.oldPrice,
        'oldPrice': result.itemInfo.lowNowPrice,
        'detailOptions': result.columns,
        'shopPromise': result.shopInfo.services
      };
      //3.获取店铺信息
      const tempShopInfo = {
        'shopLogo': result.shopInfo.shopLogo,
        'shopName': result.shopInfo.name,
        'totalSell': result.shopInfo.cSells,
        'totalGoods': result.shopInfo.cGoods,
        'shopScore': result.shopInfo.score,
        'shopUrl': result.shopInfo.shopUrl
      }
      //4.获取introduce
      //5.获取穿着效果图
      const tempWear = result.detailInfo.detailImage[0].list;
      //6.获取商品参数信息
      const tempParams = {
        keySet: result.itemParams.info.set,
        keyTables: result.itemParams.rule.tables[0]
      }
      //7.获取评论信息
      const tempComment = result.rate.list
      for (var i = 0 ; i < tempComment.length ; i ++) {
        tempComment[i].created = this.setToDate(tempComment[i].created)
      }
      //8.获取推荐信息
      this._getRecommendData()

      this.setData({
        detailImg: result.itemInfo.topImages,
        titleInfo: tempInfo,
        shopInfo: tempShopInfo,
        introduce: result.detailInfo.desc,
        wearImg: tempWear,
        itemParams: tempParams,
        detailComment:tempComment
      })
      // console.log(res);
    })
  },
  _getRecommendData() {
    getRecommends().then(res => {
      this.setData({
        detailRecommend: res.data.data.list
      })
      // console.log(res)
    })
  },
  //-----------------------方法-----------------------
  onPageScroll(options) {
    const scrollTop = options.scrollTop
    const temp = scrollTop >= 1000 
  if (temp != this.data.isShowBack) {
      console.log('----')
      this.setData({
        isShowBack: temp
      })
    }
  },
  addSuccess() {
    const cart = {
      iid: this.data.iid,
      img: this.data.detailImg[0],
      price: this.data.titleInfo.newPrice,
      title: this.data.titleInfo.title
    }
    // console.log(app)
    app.addToCart(cart)

    wx.showToast({
      title: '添加成功'
    })
  },
  setToDate(number) {
    var date = new Date(number)
    return date.getFullYear() + '-' + (date.getMonth() + 1 ) + '-' +date.getDate()
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