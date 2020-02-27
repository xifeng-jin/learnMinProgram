// components/z-goodsItem/z-goodsItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(e) {
      const iid = this.data.item.iid;
      // console.log(iid)
      wx.navigateTo({
        url: '/pages/detail/detail?iid=' + iid
      })

    }
  }
})
