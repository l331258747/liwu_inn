// pages/inn/inn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data1: [
      { id: 0, img: "/image/index1.jpg", title: "公共区域" },
      { id: 11, img: "/image/index1.jpg", title: "花月·1楼·情侣房" },
      { id: 12, img: "/image/index2.jpg", title: "新月·1楼·亲子房" },
      { id: 21, img: "/image/index2.jpg", title: "初夏·2楼·情侣房" },
      { id: 22, img: "/image/index2.jpg", title: "季夏·2楼·大床房" },
      { id: 23, img: "/image/index2.jpg", title: "仲夏·2楼·大床房" },
      { id: 24, img: "/image/index1.jpg", title: "新秋·2楼·亲子房" },
      { id: 31, img: "/image/index1.jpg", title: "仲秋·3楼·情侣房" },
      { id: 32, img: "/image/index1.jpg", title: "露月·3楼·大床房" },
      { id: 33, img: "/image/index2.jpg", title: "霜序·3楼·大床房" },
      { id: 34, img: "/image/index1.jpg", title: "葭月·3楼·亲子房" },
      { id: 41, img: "/image/index2.jpg", title: "嘉平·4楼·3床房" }
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