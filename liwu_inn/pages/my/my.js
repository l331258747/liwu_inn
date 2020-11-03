// pages/my/my.js

//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   * xiaop //photo.tuchong.com/3932835/f/351850363.jpg
   * zhenzhen //photo.tuchong.com/3932835/f/627953363.jpg
   * jiejie //photo.tuchong.com/1488021/f/12543824.jpg
   * jimi //photo.tuchong.com/4458491/f/188547729.jpg
   * saozi //photo.tuchong.com/17959811/f/575068682.jpg
   */
  data: {
    data1: [
      { id: 1, img: "//photo.tuchong.com/3932835/f/351850363.jpg", title: "小潘" },
      { id: 2, img: "//photo.tuchong.com/3932835/f/627953363.jpg", title: "真真" },
      { id: 3, img: "//photo.tuchong.com/1488021/f/12543824.jpg", title: "念家曦" },
      { id: 4, img: "//photo.tuchong.com/17959811/f/575068682.jpg", title: "陈老板" },
      { id: 5, img: "//photo.tuchong.com/4458491/f/188547729.jpg", title: "李悟" },
    ],
  },

  //事件处理函数
  cardClick: function (e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      // url: 'spotDetail/spotDetail?id=' + id

    })
  },



  rqCodeClick: function () {
    wx.setClipboardData({
      data: 'liwu13342555120',
      success(res) {
        console.log(res.data) // data
      }
    })
  },

  phoneClick: function () {
    wx.makePhoneCall({
      phoneNumber: '13342555120'
    });
  },

  previewImage: function () {
    var current = '/image/dcode.png';
    wx.previewImage({
      current: current,
      urls: [current]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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