App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    
  },

  addToCart(obj) {
    //添加购物信息
    const oldProduct = this.globalData.cartList.find(item => item.iid === obj.iid)
    // console.log('you are in')
    if (oldProduct) {
      oldProduct.counter += 1
    } else {
      obj.counter = 1
      obj.checked = true
      this.globalData.cartList.push(obj)
    }

    if (this.addCallBack) {
      this.addCallBack()
    }
  },
  globalData: {
    cartList: []
  }
})
