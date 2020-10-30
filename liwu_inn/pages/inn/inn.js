// pages/inn/inn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data1: [
      { id: 0, img: "https://p0.meituan.net/tdchoteldark/8c5320ff007893b7924376c5ece1421f4079029.jpg@1920w_1080h", title: "公共区域" },
      { id: 11, img: "https://p0.meituan.net/iphoenix/9d9bfb70291abb17bff74fcfe200f2892312920.jpg@1920w_1080h", title: "花月·1楼·情侣房" },
      { id: 12, img: "https://p0.meituan.net/iphoenix/c2aac437761aa17f943045294a5c10061217658.jpg@1920w_1080h", title: "新月·1楼·亲子房" },
      { id: 21, img: "https://p0.meituan.net/iphoenix/6e67bc9d0e6fa8fdaacc1a2cd7480307754218.jpg@1920w_1080h", title: "初夏·2楼·情侣房" },
      { id: 22, img: "https://p0.meituan.net/iphoenix/80515c0a922be5faaef39bade8a56f771611460.jpg@1920w_1080h", title: "季夏·2楼·大床房" },
      { id: 23, img: "https://p0.meituan.net/iphoenix/fc625d6f2c4ec1ee0dc086743bde5c601620779.jpg@1920w_1080h", title: "仲夏·2楼·大床房" },
      { id: 24, img: "https://img.meituan.net/iphoenix/9d258312f1ac4736d8003e4f268675af100342.jpg@1920w_1080h", title: "新秋·2楼·亲子房" },
      { id: 31, img: "https://p0.meituan.net/iphoenix/ac277e71287eb9e88cb4459d975ef4083999864.jpg@1920w_1080h", title: "仲秋·3楼·情侣房" },
      { id: 32, img: "https://p1.meituan.net/iphoenix/a8d3e0baf51d769b25d45af8a496efa15618197.jpg@1920w_1080h", title: "露月·3楼·大床房" },
      { id: 33, img: "https://p0.meituan.net/iphoenix/282aef5a084bf4837edeef31216c4f0d1119570.jpg@1920w_1080h", title: "霜序·3楼·大床房" },
      { id: 34, img: "https://p0.meituan.net/iphoenix/a27d40c02e4451a0053d996ee84a76663302246.jpg@1920w_1080h", title: "葭月·3楼·亲子房" },
      { id: 41, img: "https://img.meituan.net/iphoenix/482feeb3b4dbfee0c665633f6ea682db111666.jpg@1920w_1080h", title: "嘉平·4楼·3床房" }
    ],
  },

  //事件处理函数
  cardClick: function (e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: 'innDetail/innDetail?id=' + id

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({

    });
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