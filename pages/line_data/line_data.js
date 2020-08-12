// pages/line_data/line_data.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shebeiarray: ['AF10', 'AF20A', 'AF20B', 'AF20C', 'AF30A', 'AF40B', 'AF40', 'AF60', 'AF70', 'AF80', 'AF90A', 'AF90B', 'AF90C', 'AF100', 'AF110', 'AF130', 'AF140', 'AF150', 'AF160', 'AF170'],
    shebei_index:0,
    Table: ["操作手册", "刀具更换记录", "质量检验记录"],
    Table_index:0,
    
    DateTime_start:"",
    DateTime_end:""
    
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

  },
  Table_select: function (e) {
    this.setData({
      Table_index: e.detail.value
    })
  },
  bindShebeiChange: function (e) {
    this.setData({
      shebei_index: e.detail.value
    })
  },
  bindDateChange_start: function (e) {
    console.log('日期选择', e.detail.value)
    this.setData({
      DateTime_start: e.detail.value
    })
  },
  bindDateChange_end: function (e) {
    console.log('日期选择', e.detail.value)
    this.setData({
      DateTime_end: e.detail.value
    })
  }
})