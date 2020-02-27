// components/z-backToTop/z-backToTop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  externalClasses: ['back2'],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    backToTop() {
      wx.pageScrollTo({
        scrollTop: 0
      })
    }
  }
})
