App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //这个是异步调用
    wx.getUserInfo({
      withCredentials: true,
      lang: '',
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 当小程序启动,界面显示的时候，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    switch(options.scene) {
      case 1001:
        break;
      case 1005:
        break;
    }
  },

  /**
   * 当小程序从前台进入后台，界面被隐藏时，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
