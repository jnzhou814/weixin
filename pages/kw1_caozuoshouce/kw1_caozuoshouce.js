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
    chanliang: null,
    DateTime: "",
    // index0是工序选择的index
    index0: 0,
    //index1是选择轴型
    index1: 0,
    huanxing_status: false,
    fault1_start_time: "",
    fault1_end_time: "",
    fault1_detail: "",
    fault2_start_time: "",
    fault2_end_time: "",
    fault2_detail: "",


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
  onLoad: function (options) {},
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
  onShow: function () {},

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
  Local_storage: function (e) {
    wx.setStorage({
      data: {
        chanliang: this.data.chanliang,
        fault1_detail: this.data.fault1_detail
      },
      key: 'local_data',
    })
  },
  Read_Local_storage: function (e) {
    var that = this
    var value = wx.getStorageSync('local_data')
    if (value) {
      console.log(value.chanliang)
      console.log(value.fault1_detail)
      that.setData({
        chanliang: value.chanliang,
        fault1_detail: value.fault1_detail
      })

    }
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
  fault1_start_time_picker: function (e) {
    console.log('时间选择', e.detail.value)
    this.setData({
      fault1_start_time: e.detail.value
    })
  },
  fault1_end_time_picker: function (e) {
    console.log('时间选择', e.detail.value)
    this.setData({
      fault1_end_time: e.detail.value
    })
  },
  fault1_input: function (e) {
    this.setData({
      fault1_detail: e.detail.value
    })
  },
  fault2_start_time_picker: function (e) {
    console.log('时间选择', e.detail.value)
    this.setData({
      fault2_start_time: e.detail.value
    })
  },
  fault2_end_time_picker: function (e) {
    console.log('时间选择', e.detail.value)
    this.setData({
      fault2_end_time: e.detail.value
    })
  },
  fault2_input: function (e) {
    this.setData({
      fault2_detail: e.detail.value
    })
  },
  caozuoshocesubmit: function (e) {
    kw1_caozuoshouceDB.add({
        data: {
          "工序": this.data.shebeiarray[this.data.index0],
          "产量": Number(this.data.chanliang),
          "日期": Date(this.data.DateTime),
          "轴型": this.data.kwModearray[this.data.index1],
          "安全及5S": this.data.testarray[0]["status"],
          "质量状况": this.data.testarray[1]["status"],
          "设备和能源": this.data.testarray[2]["status"],
          "换刀状态": this.data.testarray[3]["status"],
          "换型状态": this.data.huanxing_status,
          "故障1开始时间": (this.data.fault1_start_time),
          "故障1结束时间": this.data.fault1_end_time,
          "故障1详情": this.data.fault1_detail,
          "故障2开始时间": this.data.fault2_start_time,
          "故障2结束时间": this.data.fault2_end_time,
          "故障2详情": this.data.fault2_detail,
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
      }),
      wx.clearStorageSync()
  }
})