// pages/card/cardComp/z-cart-list/z-cart-list.js
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value: []
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
    showIcon(e) {
      const tempList = app.globalData.cartList
      const currentIndex = e.currentTarget.dataset.index
      // console.log(this.properties.list,currentIndex)
      const item = tempList.find(item => item.iid == this.properties.list[currentIndex].iid)
      item.checked = !item.checked
      app.changeList(currentIndex,item)
      // console.log(item)
      
      // for(var i=0; i<tempList.length; i++) {
      //   if(tempList[i].iid === this.properties.list[currentIndex].iid) {
      //     const item = tempList[i]
      //     item.checked = !item.checked
      //     break
      //   }
      // }
    }
  }
})
