// pages/new_user/new_user.js
let app = getApp()
const db = wx.cloud.database()
const userlistDB = db.collection('user_info')

let chejian = null
let line = null
let user_ID = null
let user_name = null
let user_password = null


Page({

  /**
   * 页面的初始数据
   */
  data: {},
//读取form里面的data，然后提交网络数据库
  formSubmit: function (e) {
    if (e.detail.value.chejian.length == 0 || e.detail.value.chejian.length >= 8) {
      wx.showToast({
        title: '车间不能为空或过长!',
        icon: 'loading',
        duration: 1500
      })
    } else {
      userlistDB.add({
        data: {
          "chejian": e.detail.value.chejian,
          "line": e.detail.value.line,
          "user_ID": e.detail.value.user_id,
          "user_name": e.detail.value.user_name,
          "user_password": e.detail.value.password,
        },
        success: function () {
          wx.navigateTo({
            url: '../index/index'
          })
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


  //注册


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