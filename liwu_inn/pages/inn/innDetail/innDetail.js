// pages/inn/innDetail/innDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data1: [
      { id: 0, img: "https://p0.meituan.net/tdchoteldark/8c5320ff007893b7924376c5ece1421f4079029.jpg@1920w_1080h", title: "公共区域", describe: ["投影", "尤克里里", "扑克牌", "泳池", "免费停车", "WIFI"], 
      imgs: [
        "https://p0.meituan.net/hotelbiz/6bf0af7fd7ef06b2b1c4841e024567ff126150.jpg@1920w_1080h",
        "https://p0.meituan.net/tdchoteldark/80182d49bd33cfc932197ec61d3f0da23551088.jpg@1920w_1080h",
        "https://p0.meituan.net/hotelbiz/314ebfca94e9580d519324d121a5d5e2100883.jpg@1920w_1080h",
        "https://p1.meituan.net/tdchoteldark/e823bc45832b8ce7ff6d1f6a06dbca3d4279506.jpg@1920w_1080h",
        "https://p0.meituan.net/hotelbiz/0b854ccb41139da6f15b3fc60fbd26db159643.jpg@1920w_1080h",
        "https://p0.meituan.net/hotelbiz/74c6bf83b23d3bff5808646efbc226ee110576.jpg@1920w_1080h",
        "https://p0.meituan.net/tdchoteldark/501df3f33aecc4c46b8c253e751303843733225.jpg@1920w_1080h",
        "https://p1.meituan.net/tdchoteldark/70ac054ebb5c5ac496bb19e6e54387f13376962.jpg@1920w_1080h",
        "https://p0.meituan.net/tdchoteldark/8c5320ff007893b7924376c5ece1421f4079029.jpg@1920w_1080h",
        "https://p0.meituan.net/iphoenix/35a4a4a0eaf1788b68ea42b004dc1dcd3884690.jpg@1920w_1080h",
        "https://p0.meituan.net/iphoenix/fa2e1b1b6a7026b4c1c77f08755690225068154.jpg@1920w_1080h",
      ]},
      { id: 11, img: "https://p0.meituan.net/iphoenix/9d9bfb70291abb17bff74fcfe200f2892312920.jpg@1920w_1080h", title: "花月·1楼·情侣房", describe: ["LOFT", "1张床(1.8米)", "独立卫生间", "1楼"], 
      imgs: [
        "https://p0.meituan.net/iphoenix/9d9bfb70291abb17bff74fcfe200f2892312920.jpg@1920w_1080h", 
        "https://p1.meituan.net/iphoenix/e56aaca15597532fba254e28750aaaa22835519.jpg@1920w_1080h",
        "https://p0.meituan.net/iphoenix/418e8dfbea9deba53b26517c366c50741726537.jpg@1920w_1080h",
        "https://p0.meituan.net/iphoenix/a28bd2aacf043522552dc66f5097d2cb2040776.jpg@1920w_1080h",
        "https://p0.meituan.net/iphoenix/ccd42ebec5dadf3b7cbbd58b736b52552959102.jpg@1920w_1080h",
      ]},
      { id: 12, img: "https://p0.meituan.net/iphoenix/c2aac437761aa17f943045294a5c10061217658.jpg@1920w_1080h", title: "新月·1楼·亲子房", describe: ["LOFT", "2张床(1.8米,1.5米)", "独立卫生间", "1楼"], 
      imgs: [
        "https://p0.meituan.net/iphoenix/c2aac437761aa17f943045294a5c10061217658.jpg@1920w_1080h", 
        "https://p0.meituan.net/iphoenix/12ea5fe5ec5a58bc13a7c002961a4537915957.jpg@1920w_1080h", 
        "https://p0.meituan.net/iphoenix/64674d98afd116894df9f888b9c84a83863568.jpg@1920w_1080h", 
        "https://p0.meituan.net/iphoenix/9fe5d135539f24c150180f1c3183cb1d1066799.jpg@1920w_1080h", 
        "https://p0.meituan.net/iphoenix/1e865ecc4b612b6a0a4fedf8cd5a83c9962093.jpg@1920w_1080h",
        "https://p0.meituan.net/iphoenix/711fd2f26518c09dbd7776bc6d2fa6ce8770958.jpg@1920w_1080h",
      ] },
      { id: 21, img: "https://p0.meituan.net/iphoenix/6e67bc9d0e6fa8fdaacc1a2cd7480307754218.jpg@1920w_1080h", title: "初夏·2楼·情侣房", describe: ["1床(1.5米)", "独立卫生间", "2楼"], 
      imgs: [
        "https://p0.meituan.net/iphoenix/6e67bc9d0e6fa8fdaacc1a2cd7480307754218.jpg@1920w_1080h",
        "https://p1.meituan.net/iphoenix/0580d9e9814f22d37c9ff7380d5684b8805812.jpg@1920w_1080h",
        "https://p1.meituan.net/iphoenix/8ce4734637530f7d2f3fcdfab43b871a847370.jpg@1920w_1080h",
        "https://p0.meituan.net/iphoenix/ec24050d3e2d3599aa6f692a92fdb326825818.jpg@1920w_1080h",
         "https://p0.meituan.net/iphoenix/a0bb9f8cbca429b32ab003a6ce9e403b6765739.jpg@1920w_1080h"
        ] },
      { id: 22, img: "https://p0.meituan.net/iphoenix/80515c0a922be5faaef39bade8a56f771611460.jpg@1920w_1080h", title: "季夏·2楼·大床房", describe: ["1床(1.8米)", "独立卫生间", "2楼"], 
      imgs: [
        "https://p0.meituan.net/iphoenix/80515c0a922be5faaef39bade8a56f771611460.jpg@1920w_1080h",
         "https://p0.meituan.net/iphoenix/387e8a75ee1d1f7c4628e5a7b846a9111210948.jpg@1920w_1080h",
         "https://p0.meituan.net/iphoenix/b7cb087858384cb19180116241e0de661129845.jpg@1920w_1080h",
         "https://p1.meituan.net/iphoenix/7b17836f6bb2589613086837d84a54d51479682.jpg@1920w_1080h",
         "https://p0.meituan.net/iphoenix/947d2ac50d3a0a7cfcfc2fc7072a4af41381164.jpg@1920w_1080h",
         "https://p0.meituan.net/iphoenix/3fb72856e18bc8763de64a98c2fc5c2d4131769.jpg@1920w_1080h",
        ] },
      { id: 23, img: "https://p0.meituan.net/iphoenix/fc625d6f2c4ec1ee0dc086743bde5c601620779.jpg@1920w_1080h", title: "仲夏·2楼·大床房", describe: ["1床(1.8米)", "独立卫生间", "2楼"], 
      imgs: [
        "https://p0.meituan.net/iphoenix/fc625d6f2c4ec1ee0dc086743bde5c601620779.jpg@1920w_1080h",
        "https://p1.meituan.net/iphoenix/58a2b7e947e754c19a7e2b2dab4eb4fa1439770.jpg@1920w_1080h",
        "https://p0.meituan.net/iphoenix/8c1d7805e0105706d2304fa058ba06051480385.jpg@1920w_1080h",
        "https://p0.meituan.net/iphoenix/f6646b13662088c9ce5bd81d50ba2ada1304853.jpg@1920w_1080h",
        "https://p1.meituan.net/iphoenix/d9fb9345b94c9556f5efab1f351c1e87700529.jpg@1920w_1080h",
        "https://p0.meituan.net/iphoenix/92c4674853ecdb43b3a3c59165bdbb7a1936144.jpg@1920w_1080h",
      ] },
      { id: 24, img: "https://img.meituan.net/iphoenix/9d258312f1ac4736d8003e4f268675af100342.jpg@1920w_1080h", title: "新秋·2楼·亲子房", describe: ["2床(1.8米,1.5米)", "独立卫生间", "2楼"], 
      imgs: [
        "https://img.meituan.net/iphoenix/9d258312f1ac4736d8003e4f268675af100342.jpg@1920w_1080h",
        "https://p0.meituan.net/iphoenix/69e46ded724a437840059cc02f57e49a6055196.jpg@1920w_1080h",
        "https://p0.meituan.net/iphoenix/9737b2e1b45d63743b3c5f5c274ba7546768397.jpg@1920w_1080h",
        "https://p0.meituan.net/iphoenix/d23a2f6ab50cd78157c2cc213f0e91934131634.jpg@1920w_1080h",
        "https://p0.meituan.net/iphoenix/23c62bacaaf6e9f5b0e1292ae250606d4970128.jpg@1920w_1080h",
      ] },
      { id: 31, img: "https://p0.meituan.net/iphoenix/ac277e71287eb9e88cb4459d975ef4083999864.jpg@1920w_1080h", title: "仲秋·3楼·情侣房", describe: ["1床(1.5米)", "独立卫生间", "3楼"], 
      imgs: [
        "https://p0.meituan.net/iphoenix/ac277e71287eb9e88cb4459d975ef4083999864.jpg@1920w_1080h",
        "https://p0.meituan.net/iphoenix/ed255eec1387c1ffe86f625f79ff61b13311888.jpg@1920w_1080h",
        "https://p0.meituan.net/iphoenix/1521a721c4dc41c8275e8123774fd5133383562.jpg@1920w_1080h",
        "https://p0.meituan.net/iphoenix/9dd41fe7d39833e764565d6e0b86aa343777355.jpg@1920w_1080h",
      ] },
      { id: 32, img: "https://p1.meituan.net/iphoenix/a8d3e0baf51d769b25d45af8a496efa15618197.jpg@1920w_1080h", title: "露月·3楼·大床房", describe: ["1床(1.8米)", "独立卫生间", "3楼"], 
      imgs: [
        "https://p1.meituan.net/iphoenix/a8d3e0baf51d769b25d45af8a496efa15618197.jpg@1920w_1080h",
         "https://p0.meituan.net/iphoenix/2611c2e6e50d2c13e9cee787c7b6778d309429.jpg@1920w_1080h",
         "https://p0.meituan.net/iphoenix/8ec6009251fbfbd4058e00ef6cba27a24136050.jpg@1920w_1080h",
         "https://p0.meituan.net/iphoenix/dd6f73b20084a134ce040d21130485974892948.jpg@1920w_1080h",
         "https://p0.meituan.net/iphoenix/f7b55884049e22e5d2c35f594242cf1a5541368.jpg@1920w_1080h",
         "https://p0.meituan.net/iphoenix/c026fe73c05237a4d804afbae5ff36a45963640.jpg@1920w_1080h",
         "https://p0.meituan.net/iphoenix/be42bcb6ade84428209d23facbefde7c4954721.jpg@1920w_1080h",
        ] },
      { id: 33, img: "https://p0.meituan.net/iphoenix/282aef5a084bf4837edeef31216c4f0d1119570.jpg@1920w_1080h", title: "霜序·3楼·大床房", describe: ["1床(1.8米)", "独立卫生间", "3楼"], 
      imgs: [
        "https://p0.meituan.net/iphoenix/282aef5a084bf4837edeef31216c4f0d1119570.jpg@1920w_1080h",
        "https://p0.meituan.net/iphoenix/7b31233c1b07db872b7780cf9949b90b1017336.jpg@1920w_1080h",
        "https://p1.meituan.net/iphoenix/c2fd03f56c82c17ccc3c7cd08e853d87954788.jpg@1920w_1080h",
        "https://p0.meituan.net/iphoenix/ac771e26551feb0f7a2003fbeaabc8201005216.jpg@1920w_1080h",
        "https://p1.meituan.net/iphoenix/537c1b0f6722658144a4d570a818d844579519.jpg@1920w_1080h",
        ] },
      { id: 34, img: "https://p0.meituan.net/iphoenix/a27d40c02e4451a0053d996ee84a76663302246.jpg@1920w_1080h", title: "葭月·3楼·亲子房", describe: ["2床(1.8米,1.5米)", "独立卫生间", "3楼"], 
      imgs: [
        "https://p0.meituan.net/iphoenix/a27d40c02e4451a0053d996ee84a76663302246.jpg@1920w_1080h", 
        "https://p0.meituan.net/iphoenix/602e3e9ce476e50421fbc0d94e2948b61414468.jpg@1920w_1080h",
        "https://p0.meituan.net/iphoenix/9d5e2cda334a45bb107d23fa6a1b56cc1585768.jpg@1920w_1080h",
        "https://p1.meituan.net/iphoenix/901411be485d73bdba006deb408f5eed1202967.jpg@1920w_1080h",
        "https://p0.meituan.net/iphoenix/2a0a5f487cc242b8c3b8bd59b517bdd81562642.jpg@1920w_1080h",
      ] },
      { id: 41, img: "https://img.meituan.net/iphoenix/482feeb3b4dbfee0c665633f6ea682db111666.jpg@1920w_1080h", title: "嘉平·4楼·3床房", describe: ["2床(1.8米,1.8米)可加床", "独立卫生间", "4楼"], 
      imgs: [
        "https://img.meituan.net/iphoenix/482feeb3b4dbfee0c665633f6ea682db111666.jpg@1920w_1080h",
         "https://img.meituan.net/iphoenix/e9ca770ca4a5041f0b2105dc53fee7a4106088.jpg@1920w_1080h",
         "https://img.meituan.net/iphoenix/27bd72892d1ea1af15a41ef3ae123c1b96960.jpg@1920w_1080h",
         "https://img.meituan.net/phoenix/6845bd863ad472f3b15c33da1edf0262292519.jpg@1920w_1080h",
         "https://img.meituan.net/iphoenix/d69e98020f17f64c8523b1742db8e2d0104869.jpg@1920w_1080h",
         "https://img.meituan.net/iphoenix/0c7151b9fe842f6dd889b4e2f7cc2f1d117082.jpg@1920w_1080h",
        ] }
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