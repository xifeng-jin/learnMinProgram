const TOKEN = 'token'

App({
  gloablData: {
    token: ''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //取出本地保存的token
    const cacheToken = wx.getStorageSync('TOKEN')
    
    //判断cacheToken是否有值
    if (cacheToken && cacheToken.length !== 0) {
      //验证是否过期
      this.chectToken(cacheToken)
    } else {
      //没有就开始登录
      this.userLogin();
    }
  },
  chectToken(token) {
    console.log('storage保存token')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: (res) => {
        console.log(res)
        if (! res.data.errCode) {
          console.log('登录有效')
          this.gloablData.token = token
        } else {
          conso.log('登录无效，请重新登录')
          this.userLogin()
        }
        console.log(res)
      },
      fail: (res) => {
        console.log(res)
      }
    })
  },
  userLogin() {
    console.log('第一次登录')
    wx.login({
      //1.code只有5分钟有效期
      success: (res) => {
        const code = res.code

        wx.request({
          url: 'http://123.207.32.32:3000/login',
          data: {
            code
          },
          success: (res) => {
            //取出token
            const token = res.data.token

            //保存token
            this.gloablData.token = token

            //本地保存
            wx.setStorageSync('TOKEN', token)
            console.log(res)
          },
          method: 'post'
        })
      }
    })
  }
})
