// pages/main/main.js
let app = getApp()
const db = wx.cloud.database()
const kw1_caozuoshouceDB = db.collection('kw1_caozuoshouce')
let 工序 = null
let 产量 = null
let 日期 = null

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shebeiarray: ['AF10', 'AF20A', 'AF20B', 'AF20C', 'AF30A', 'AF40B', 'AF40', 'AF60', 'AF70', 'AF80', 'AF90A', 'AF90B', 'AF90C', 'AF100', 'AF110', 'AF130', 'AF140', 'AF150', 'AF160', 'AF170'],
    kwModearray: ["Gen3 1.8T", "Gen3 2.0T", "Gen3 BZ"],
    chanliang: 0,
    DateTime: 0,
    // index0是工序选择的index
    index0: 0,
    //index1是选择轴型
    index1: 0,
    huanxing_status: false,


    AF160_switch: false,
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
    }]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  chanliangInput: function (e) {
    this.setData({
      chanliang: e.detail.value
    })
  },
  changemode: function (e) {
    this.setData({
      huanxing_status: e.detail.value
    })
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
  /*将界面的值取回，包含index和值，并且赋值给数组，便于后面取值提交数据库*/
  radioChange: function (e) {
    const id = e.detail.value
    let testarray = this.data.testarray
    let index = id.split(",")[0]
    let status = id.split(",")[1]
    testarray[index].status = status
    this.setData({
      testarray
    })
    console.log(e.detail.value)
    console.log(index)
    console.log(status)
    console.log(testarray[index])

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
      DateTime: e.detail.value
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
  caozuoshocesubmit: function (e) {
    kw1_caozuoshouceDB.add({
      data: {
        "工序": this.data.shebeiarray[this.data.index0],
        "产量": this.data.chanliang,
        "日期": (this.data.DateTime),
        "轴型": this.data.kwModearray[this.data.index1],
        "安全及5S": this.data.testarray[0]["status"],
        "质量状况": this.data.testarray[1]["status"],
        "设备和能源": this.data.testarray[2]["status"],
        "换刀状态": this.data.testarray[3]["status"],
        "换型状态": this.data.huanxing_status,
      },
      success: function () {
        //提交成功然后跳转到主界面
        wx.showToast({
          title: '提交成功!',
          duration: 1500,
          success: function () {
            setTimeout(function () {
              wx.navigateTo({
                url: '../index/index'
              })
            }, 1000);
          }
        })
      }

    })



  }
})