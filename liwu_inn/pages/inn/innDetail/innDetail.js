// pages/inn/innDetail/innDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data1: [
      { id: 0, img: "/image/index1.jpg", title: "公共区域", describe: ["投影", "尤克里里", "扑克牌", "泳池", "免费停车", "WIFI"], imgs: ["/image/index1.jpg", "/image/index1.jpg"] },
      { id: 11, img: "/image/index1.jpg", title: "花月·1楼·情侣房", describe: ["LOFT", "1张床(1.8米)", "独立卫生间", "1楼"], imgs: ["/image/index1.jpg", "/image/index1.jpg"] },
      { id: 12, img: "/image/index2.jpg", title: "新月·1楼·亲子房", describe: ["LOFT", "2张床(1.8米,1.5米)", "独立卫生间", "1楼"], imgs: ["/image/index1.jpg", "/image/index1.jpg"] },
      { id: 21, img: "/image/index2.jpg", title: "初夏·2楼·情侣房", describe: ["1床(1.5米)", "独立卫生间", "2楼"], imgs: ["/image/index1.jpg", "/image/index1.jpg"] },
      { id: 22, img: "/image/index2.jpg", title: "季夏·2楼·大床房", describe: ["1床(1.8米)", "独立卫生间", "2楼"], imgs: ["/image/index1.jpg", "/image/index1.jpg"] },
      { id: 23, img: "/image/index2.jpg", title: "仲夏·2楼·大床房", describe: ["1床(1.8米)", "独立卫生间", "2楼"], imgs: ["/image/index1.jpg", "/image/index1.jpg"] },
      { id: 24, img: "/image/index1.jpg", title: "新秋·2楼·亲子房", describe: ["2床(1.8米,1.5米)", "独立卫生间", "2楼"], imgs: ["/image/index1.jpg", "/image/index1.jpg"] },
      { id: 31, img: "/image/index1.jpg", title: "仲秋·3楼·情侣房", describe: ["1床(1.5米)", "独立卫生间", "3楼"], imgs: ["/image/index1.jpg", "/image/index1.jpg"] },
      { id: 32, img: "/image/index1.jpg", title: "露月·3楼·大床房", describe: ["1床(1.8米)", "独立卫生间", "3楼"], imgs: ["/image/index1.jpg", "/image/index1.jpg"] },
      { id: 33, img: "/image/index2.jpg", title: "霜序·3楼·大床房", describe: ["1床(1.8米)", "独立卫生间", "3楼"], imgs: ["/image/index1.jpg", "/image/index1.jpg"] },
      { id: 34, img: "/image/index1.jpg", title: "葭月·3楼·亲子房", describe: ["2床(1.8米,1.5米)", "独立卫生间", "3楼"], imgs: ["/image/index1.jpg", "/image/index1.jpg"] },
      { id: 41, img: "/image/index2.jpg", title: "嘉平·4楼·3床房", describe: ["2床(1.8米,1.8米)可加床", "独立卫生间", "4楼"], imgs: ["/image/index1.jpg", "/image/index1.jpg"] }
    ],

    item: {},

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad");
    var id = options.id
    this.data.data = this.getData(id);
    if(this.data.data){
      console.log("数据不为空");
    }else{
      console.log("数据为空");
    }
  },

  getData: function (id) {
    for (var i = 0; i < this.data.data1.length; i++) {
      if(this.data.data1[i].id == id){
        return this.data.data1[i];
      }
    }
    return null;
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