// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isBackTopShow: false,
    imgUrls: [
      '../../assets/images/banner/banner1.jpeg',
      '../../assets/images/banner/banner2.jpeg',
      '../../assets/images/banner/banner3.jpeg',
      '../../assets/images/banner/banner4.jpeg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    searchValue: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setStorage({
      key: 'dataless',
      data: false
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.setStorage({
      key: 'dataless',
      data: false
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    const that = this
    wx.getStorage({
      key: 'dataless',
      success: function (res) {
        if (!res.data) {
          that.loadMore()
        }
      }
    })

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 1、监听页面滚动条事件，控制 backTop 控件显示、隐藏
   * 2、监听上拉加载更多事件
   * @param Option {Object} - 滚动时信息
   */
  onPageScroll: function (Option) {
    this.backTopListener(Option)
  },

  // 监听页面滚动条事件
  backTopListener: function (Option) {
    const backTopThreshold = 630
    if (Option.scrollTop >= backTopThreshold
      && this.data.isBackTopShow === false
    ) {
      this.setData({
        isBackTopShow: true
      })
    } else if (Option.scrollTop < backTopThreshold
      && this.data.isBackTopShow === true) {
      this.setData({
        isBackTopShow: false
      })
    } else {
      return false
    }
  },

  loadMore: function () {
    this.selectComponent('#allListComponent').nextPage()
  },

  /**
   * 调转到城市选择
   */
  pageToCity: function () {
    wx.navigateTo({
      url: '/pages/city/city'
    })
  },

  /**
   * 搜索活动事件
   */
  pageToSearch: function () {
    wx.navigateTo({
      url: '/pages/search/search'
    })
  }
})