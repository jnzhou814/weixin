//index.js
//获取应用实例
let app = getApp()
const db = wx.cloud.database()
const user_infoDB = db.collection("user_info")
let inputname = null
let inputpasswpord = null
Page({
  data: {
    motto: '登录',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    user_name: '',
    user_password: ''
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  new_user_tap: function () {
    wx.navigateTo({
      url: '../register/register'
    })
  },
  //获取输入框用户名
  inputname: function (e) {
    this.setData({
      user_name: e.detail.value

    })

  },
  //获取输入框的密码
  inputpasswpord: function (e) {
    this.setData({
      user_password: e.detail.value
    })
  },
  login: function (e) {
    var that =this
    console.log(this.data.user_name)
    console.log(this.data.user_password)
    if(this.data.user_name.length==0||this.data.user_password.length==0){
      wx.showModal({
        title: '提示',
        content:'用户密码不能为空'
      })
    }else{
      user_infoDB.where({user_ID:that.data.user_name}).get({
        success:function(res){
          if(that.data.user_password==res.data[0].user_password){
           wx.redirectTo({
             url: '../main/main',
           })
          }
          else{
            wx.showModal({
              title: '密码错误',
              content:"密码错误"
            });
          }
        }
      })
    }
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

})