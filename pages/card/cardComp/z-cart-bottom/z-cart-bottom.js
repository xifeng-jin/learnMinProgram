// pages/card/cardComp/z-cart-bottom/z-cart-bottom.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    checked: {
      type: Boolean,
      value: true
    },
    price: {
      type: Number
    },
    counter: {
      type: Number
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
    selectAll() {
      this.triggerEvent('sellect')
    }
  }
})
