// pages/main/main.js
let app = getApp()
const db = wx.cloud.database()
const kw1_caozuoshouceDB = db.collection('kw1_caozuoshouce')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shebeiarray: ['AF10', 'AF20A', 'AF20B', 'AF20C', 'AF30A', 'AF40B', 'AF40', 'AF60', 'AF70', 'AF80', 'AF90A', 'AF90B', 'AF90C', 'AF100', 'AF110', 'AF130', 'AF140', 'AF150', 'AF160', 'AF170'],
    kwModearray: ["Gen3 1.8T", "Gen3 2.0T", "Gen3 BZ"],
    index0: 0,
    index1: 0,
    index2: 0,
    index3:0,
    switch: true,
    testarray: [{
      'id': 0,
      'name': "安全及5S",
      'status': 'true'
    }, {
      'id': 1,
      'name': "质量状况",
      'status': 'true'
    }, {
      'id': 2,
      'name': "设备和能源",
      'status': 'true'
    }, {
      'id': 3,
      'name': "检具状态",
      'status': 'true'
    }, {
      'id': 4,
      'name': "换刀状态",
      'status': 'true'
    }],
    replay: false
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
  bindShebeiChange: function (e) {
    console.log('选择工序', e.detail.value)
    if (e.detail.value == 18) {
      this.setData({
        AF160_switch: true
      })
    } else {
      this.setData({
        AF160_switch: false
      })
    }
    this.setData({
      index0: e.detail.value
    })
  },
  guzhangshebei1: function (e) {
    console.log('选择工序', e.detail.value)

    this.setData({
      index2: e.detail.value
    })
  },
  guzhangshebei2: function (e) {
    console.log('选择工序', e.detail.value)

    this.setData({
      index3: e.detail.value
    })
  },
  radioChange: function (e) {

    this.setData({})
    console.log(e.detail.value)
    console.log(e.detail.id)
  },
  kwModeChange: function (e) {
    console.log('改变轴型', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },
  switchValue: function (e) {
    var checkvalue = e.detail.value
  },
  bindDateChange: function (e) {
    console.log('日期选择', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    console.log('时间选择', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  bindTimeChange1: function (e) {
    console.log('时间选择', e.detail.value)
    this.setData({
      time1: e.detail.value
    })
  },
  bindTimeChange2: function (e) {
    console.log('时间选择', e.detail.value)
    this.setData({
      time2: e.detail.value
    })
  },
  bindTimeChange3: function (e) {
    console.log('时间选择', e.detail.value)
    this.setData({
      time3: e.detail.value
    })
  },
  caozuoshocesubmit:function(e){

  }
})