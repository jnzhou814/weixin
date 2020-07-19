// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    nowPage:"firstPage",
    nowIndex:0,
    tabBar:[
      {
        "iconClass":"iconfont icon-shouye",
        "text":"第一页",
        "tapFunction":"toFirst",
        "active":"active"
      },
      {
        "iconClass":"iconfont icon-wode",
        "text":"第二页",
        "tapFunction": "toSecond",
        "active": ""
      }
    ]
    
  }
    
  ,
  tabChange(e) {
    console.log('tab change', e)

  },
  toFirst(){
    this.setData({
      nowPage:"firstPage",
      nowIndex: 0
    })
  },
  toSecond() {
    this.setData({
      nowPage: "secondPage",
      nowIndex: 1
    })
  },

  naviToInput:function(){
wx.navigateTo({
  url: '../charts/charts',
})
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})