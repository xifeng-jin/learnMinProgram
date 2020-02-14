// components/my-cpn/my-cpn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
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
    hadleItemClick(event) {
      //1.获取index
      var index = event.currentTarget.dataset.index;

      //2.修改currentIndex
      this.setData({
        currentIndex: index
      })

      //3.发送事件出去
      this.triggerEvent('tabClick',{index:this.data.currentIndex,titles:this.properties.titles[index]})
      console.log('jjj',event.currentTarget.dataset.index)
    }
  }
})
