// pages/new_user/new_user.js
let app = getApp()
const db = wx.cloud.database()
const userlistDB = db.collection('kw1_user_info')
const userlist_allown = db.collection('KW1_allowned')




Page({

  /**
   * 页面的初始数据
   */
  data: {
    multiArray: [
      ['PFE1P', 'PFE3P', 'PFE1A', 'PFE3A', 'PFE', 'PFEE', 'PFEM'],
      ["ZKG1", 'ZK1', 'KW1', 'PL1', 'AGW']
    ],
    multiIndex: [0, 0],
  },
  //读取form里面的data，然后提交网络数据库
  formSubmit: function (e) {
    if (e.detail.value.user_id.length == 0 || e.detail.value.user_name.length == 0||e.detail.value.password.length==0||e.detail.value.password1.length==0) {
      wx.showModal({
        title: '填写所有信息',
        icon: 'loading',
        duration: 1500
      })
    } else if (e.detail.value.password != e.detail.value.password1) {
      wx.showModal({
        title: '两次密码不匹配!',
        icon: 'loading',
        duration: 1500
      })
    } else(userlist_allown.where({
      'user_ID': Number(e.detail.value.user_id)
    }).get().then(res => {
      if (res.data.length == 0) {
        wx.showModal({
          content: "你的工号不允许注册"
        })
      } else(userlistDB.where({
        "user_ID": e.detail.value.user_id
      }).get().then(res => {
        if (res.data.length !== 0) {
          wx.showModal({
            content: "你的工号已经注册，请登录或联系管理员"
          })

        } else {
          userlistDB.add({
            data: {
              "chejian": this.data.multiArray[0][this.data.multiIndex[0]],
              "line": this.data.multiArray[1][this.data.multiIndex[1]],
              "user_ID": (e.detail.value.user_id),
              "user_name": e.detail.value.user_name,
              "user_password": e.detail.value.password,
            },
            success: function () {
              //显示注册成功然后跳转到登录页面
              wx.showToast({
                title: '注册成功!',
                duration: 1500,
                success: function () {
                  setTimeout(function () {
                    wx.navigateTo({
                      url: '../denglu/denglu'
                    })
                  }, 1000);
                }
              })
            }
          })
        }
      }))
    }))

  },
  bindMultiPickerColumnChange: function (e) {
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (data.multiIndex[0]) {
      case 0:
        data.multiArray[1] = ["ZKG1", 'ZK1', 'KW1', 'PL1', 'AGW']
        break
      case 1:
        data.multiArray[1] = ["ZKG3", 'ZK3', 'KW3', 'PL3']
        break
      case 2:
        data.multiArray[1] = ['PFE1A']
        break
      case 3:
        data.multiArray[1] = ["PFE3A"]
        break
      case 4:
        data.multiArray[1] = ["PFE"]
        break
      case 5:
        data.multiArray[1] = ["PFEE"]
        break
      case 6:
        data.multiArray[1] = ["PFEM"]
        break
    }
    this.setData(data)
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