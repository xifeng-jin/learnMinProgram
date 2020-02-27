// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  other() {
    console.log('jj')
    const animate = wx.createAnimation({
      duration: 400,
      timingFunction: 'linear',
      delay:0
    })
    animate.backgroundColor('#333').step()
    this.setData({
      ani:animate.export()
    })
  }
})