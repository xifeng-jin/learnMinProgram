// pages/home/home.js
import {
  getMultidata,
  getGoods
} from "../../utils/home.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommends: [],
    titles: ['流行','新款','精选'],
    goods:{
      'new': {page: 0 , list: []},
      'pop': {page: 0 , list: []},
      'sell': {page: 0 , list: []}
    },
    currentType: 'pop',
    isShowBack: false,
    isShowTab: false,
    commentTop: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getMultidata();

    this._getGoods('pop');
    this._getGoods('sell');
    this._getGoods('new');
  },
  //-----------获取数据------------
  _getGoods(type) {
    const page = this.data.goods[type].page + 1;
    getGoods(type,page).then(res => {
      const list = res.data.data.list;
      const goods = this.data.goods;
      goods[type].list.push(...list);
      goods[type].page + 1;
      // const tempList = this.data.goods[type].list;
      // tempList.push(...list);
      // const type = 'goods.${type}.list';
      // const page = 'goods.${type}.page';
      this.setData({
        // [type]: tempList,
        // [page]: page + 1
        goods: goods
      })
    })
  },
  _getMultidata() {
    getMultidata().then(res => {
      //1.获取轮播图和推荐信息
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list
      //2.保存数据
      this.setData({
        banners,
        recommends
      })
    })
  },
  //-----------使用方法------------
  itemClick(event){
    //1home中获取index
    const index = event.detail.index;
    //2.这里也可以使用switch--case语句,这时需要先设置一个临时变量newType，根据case不同情况给newType设值，最后在统一setdata
    const goodsType = ['pop', 'new', 'sell'];
    const newType = goodsType[index];
    this.setData({
      currentType: newType,

    })
    //2.设置组件内的index
    console.log(this.selectComponent('.tab-bar-temp'));
    this.selectComponent('.tab-bar').setCurrentIndex(index);
    this.selectComponent('.tab-bar-temp').setCurrentIndex(index)
  },
  imgLoad1() {
    wx.createSelectorQuery().select('.tab-bar').boundingClientRect(rect => {
      this.data.commentTop = rect.top;
      // console.log(rect)
    }).exec()
    console.log('image is loaded')
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
    //上拉加载更多
    this._getGoods(this.data.currentType)
  },
  onPageScroll(options) {
    const scrollTop = options.scrollTop;
    // console.log(scrollTop)
    const temp = scrollTop > 1000;
    if (temp != this.data.isShowBack) {
      this.setData({
        isShowBack: temp
      })
    }
    //修改isShowTab属性
    // console.log(this.data.commentTop)
    const temp2 = scrollTop > this.data.commentTop;
    // console.log(temp2)
    if (temp2 != this.data.isShowTab) {
      this.setData({
        isShowTab: temp2
      })
    }
  }
})