// components/z-tabBar/z-tabBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type:Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(event) {
      //1.修改currentIndex值
      const index = event.currentTarget.dataset.index;
      this.setData({
        currentIndex: index
      })
      //2.将点击事件发送出去
      this.triggerEvent('itemClick',{index},{})
    },
    setCurrentIndex(index) {
      this.setData({
        currentIndex: index
      })
    }
  }
})
