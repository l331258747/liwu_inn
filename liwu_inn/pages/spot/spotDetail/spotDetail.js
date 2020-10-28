// pages/inn/innDetail/innDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data1: [
    
      { id: 0, img: "/image/index1.jpg", title: "礼物客栈",describe: ["投影", "尤克里里", "扑克牌", "泳池", "免费停车", "WIFI"], imgs: ["/image/index1.jpg", "/image/index1.jpg"]},
      { id: 1, img: "/image/index1.jpg", title: "东江湖", describe: ["LOFT", "1张床(1.8米)", "独立卫生间", "1楼"], imgs: ["/image/index1.jpg", "/image/index1.jpg"] },
      { id: 2, img: "/image/index2.jpg", title: "小东江" , describe: ["LOFT", "2张床(1.8米,1.5米)", "独立卫生间", "1楼"], imgs: ["/image/index1.jpg", "/image/index1.jpg"]},
      { id: 3, img: "/image/index2.jpg", title: "回龙山" , describe: ["LOFT", "2张床(1.8米,1.5米)", "独立卫生间", "1楼"], imgs: ["/image/index1.jpg", "/image/index1.jpg"]},
      { id: 4, img: "/image/index2.jpg", title: "仰天湖" , describe: ["LOFT", "2张床(1.8米,1.5米)", "独立卫生间", "1楼"], imgs: ["/image/index1.jpg", "/image/index1.jpg"]},
      { id: 5, img: "/image/index2.jpg", title: "飞天山" , describe: ["LOFT", "2张床(1.8米,1.5米)", "独立卫生间", "1楼"], imgs: ["/image/index1.jpg", "/image/index1.jpg"]},
      { id: 6, img: "/image/index1.jpg", title: "高椅岭" , describe: ["LOFT", "2张床(1.8米,1.5米)", "独立卫生间", "1楼"], imgs: ["/image/index1.jpg", "/image/index1.jpg"]},
      { id: 7, img: "/image/index1.jpg", title: "白廊" , describe: ["LOFT", "2张床(1.8米,1.5米)", "独立卫生间", "1楼"], imgs: ["/image/index1.jpg", "/image/index1.jpg"]},
      { id: 8, img: "/image/index1.jpg", title: "莽山" , describe: ["LOFT", "2张床(1.8米,1.5米)", "独立卫生间", "1楼"], imgs: ["/image/index1.jpg", "/image/index1.jpg"]},
    ],

    item: {},

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id
    this.setData({
      item: this.getData(id),
    });
  },

  getData: function (id) {
    for (var i = 0; i < this.data.data1.length; i++) {
      if (this.data.data1[i].id == id) {
        return this.data.data1[i];
      }
    }
    return null;
  },

  imgClick: function () {
    var list = JSON.stringify(this.data.item.imgs);
    wx.navigateTo({
      url: '../../showImgs/showImgs?imgs=' + list 
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

  }
})