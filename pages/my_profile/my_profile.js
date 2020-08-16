// pages/my_profile/my_profile.js
const app = getApp()
var openid_this = app.globalData.openid
const db = wx.cloud.database()
const kw1_user_infoDB = db.collection('kw1_user_info')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    chejian: "",
    line: "",
    ID: ""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    var value = wx.getStorageSync('user_full_info')
    if (value) {
      that.setData({
        name: value.name,
        chejian: value.chejian,
        line: value.line,
        ID:value.ID

      })
    } else {
      var user_id = wx.getStorageSync('user_id').user_id
      kw1_user_infoDB.where({
        "user_ID": user_id
      }).get().then(res => {
        wx.setStorage({
          data: {
            name: res.data[0].user_name,
            chejian: res.data[0].chejian,
            line: res.data[0].line,
            ID: res.data[0].user_ID

          },
          key: 'user_full_info',
        })
        that.setData({
          name: res.data[0].user_name,
          chejian: res.data[0].chejian,
          line: res.data[0].line,
          ID: res.data[0].user_ID
        })
      })
    }
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
    this.onLoad()
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