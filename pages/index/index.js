// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowPage: "firstPage",
    nowIndex: 0,
    tabBar: [{
        "iconClass": "../../picture/input.png",
        "iconClass_active": "../../picture/input_active.png",
        "text": "记录输入",
        "tapFunction": "toInput",
        "active": "active"
      },
      {
        "iconClass": "../../picture/report.png",
        "iconClass_active": "../../picture/report_active.png",
        "text": "报告查看",
        "tapFunction": "toReport",
        "active": ""
      },
      {
        "iconClass": "../../picture/chart.png",
        "iconClass_active": "../../picture/chart_active.png",
        "text": "数据查询",
        "tapFunction": "toLineData",
        "active": ""
      },
      {
        "iconClass": "../../picture/my.png",
        "iconClass_active": "../../picture/my_active.png",
        "text": "我的",
        "tapFunction": "toMyProfile",
        "active": ""
      }
    ]

  }

  ,
  tabChange(e) {
    console.log('tab change', e)

  }
  ,
  toInput() {
    this.setData({
      nowPage: "firstPage",
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
    let myComponent = this.selectComponent('#forthPage');
    
    myComponent.onLoad()
    console.log(myComponent) // 页面获取自定义组件实例
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
    wx.hideHomeButton( )

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