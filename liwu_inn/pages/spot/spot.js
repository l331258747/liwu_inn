// pages/inn/inn.js
Page({

  /**
   * 页面的初始数据
   * https://tuchong.com/437653/posts
   */
  data: {
    data1: [
      { id: 0, img: "https://p0.meituan.net/tdchoteldark/8c5320ff007893b7924376c5ece1421f4079029.jpg@1920w_1080h", title: "礼物客栈" },
      { id: 1, img: "//photo.tuchong.com/1933433/f/313660134.jpg", title: "东江湖" },
      { id: 2, img: "//photo.tuchong.com/1072426/f/92765725.jpg", title: "雾漫小东江" },
      { id: 3, img: "//photo.tuchong.com/1324183/f/22388944.jpg", title: "回龙山" },
      { id: 4, img: "//photo.tuchong.com/16699230/f/227659902.jpg", title: "仰天湖大草原" },
      { id: 5, img: "//photo.tuchong.com/2463414/f/537839480.jpg", title: "飞天山" },
      { id: 6, img: "//photo.tuchong.com/1387185/f/31087360.jpg", title: "丹霞高椅岭" },
      { id: 7, img: "//photo.tuchong.com/1356454/f/11938773.jpg", title: "小洱海白廊" },
      { id: 8, img: "//photo.tuchong.com/1473565/f/91231691.jpg", title: "莽山国家森林公园" },
      { id: 9, img: "//photo.tuchong.com/1068498/f/23637985.jpg", title: "流华湾古村" },
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