// pages/inn/inn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data1: [
      { id: 0, img: "/image/index1.jpg", title: "礼物客栈" },
      { id: 1, img: "/image/index1.jpg", title: "东江湖" },
      { id: 2, img: "/image/index2.jpg", title: "小东江" },
      { id: 3, img: "/image/index2.jpg", title: "回龙山" },
      { id: 4, img: "/image/index2.jpg", title: "仰天湖" },
      { id: 5, img: "/image/index2.jpg", title: "飞天山" },
      { id: 6, img: "/image/index1.jpg", title: "高椅岭" },
      { id: 7, img: "/image/index1.jpg", title: "白廊" },
      { id: 8, img: "/image/index1.jpg", title: "莽山" },
    ],
  },

  //事件处理函数
  cardClick: function (e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: 'spotDetail/spotDetail?id=' + id

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