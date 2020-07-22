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
        "text":"记录输入",
        "tapFunction":"toInput",
        "active":"active"
      },
      {
        "iconClass":"iconfont icon-wode",
        "text":"报告查看",
        "tapFunction": "toReport",
        "active": ""
      },
      {
        "iconClass":"iconfont icon-wode",
        "text":"产线数据",
        "tapFunction": "toLineData",
        "active": ""
      },
      {
        "iconClass":"iconfont icon-wode",
        "text":"我的",
        "tapFunction": "toMyProfile",
        "active": ""
      }
    ]
    
  }
    
  ,
  tabChange(e) {
    console.log('tab change', e)

  },
  toInput(){
    this.setData({
      nowPage:"firstPage",
      nowIndex: 0
    })
  },
  toReport() {
    this.setData({
      nowPage: "secondPage",
      nowIndex: 1
    })
  },
  
  toLineData() {
    this.setData({
      nowPage: "thirdPage",
      nowIndex: 2
    })
  },
  toMyProfile() {
    this.setData({
      nowPage: "forthPage",
      nowIndex: 3
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