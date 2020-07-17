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
  data: {
    chejian:chejian,
    line:line,
    user_ID:user_ID,
    user_name:user_name,
    user_password:user_password
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  register: function () {
    wx.navigateTo({
      url: '../index/index',
    })
  },
  inputchejian: function (e) {
    chejian = e.detail.value;
  },
  inpuline: function (e) {
    line = e.detail.value;
  },
  inputID: function (e) {
    user_ID = e.detail.value;
  },
  inputname: function (e) {
    user_name = e.detail.value
  },
  inputpassword: function (e) {
    user_password = e.detail.value
  },
  //注册
  register() {
    let that = this;
    userlistDB.doc('_openid').set({
      data: {
        chejian: chejian,
        line: line,
        user_ID: user_ID,
        user_name: user_name,
        user_password: user_password
      }
    }).then(res => {
      console.log('注册成功');
    })
    //查询用户是否已经注册
    
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