// pages/home/Childcpm/z-recommend/z-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommends: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isSend: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    imgLoad() {
      if (!this.data.isSend) {
        this.triggerEvent('imgLoad',{},{});
        this.data.isSend = true;
        console.log('sended')
      }
    }
  }
})
