// pages/inn/innDetail/innDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data1: [

      {
        id: 0, img: "https://p0.meituan.net/tdchoteldark/8c5320ff007893b7924376c5ece1421f4079029.jpg@1920w_1080h",
        title: "礼物客栈", longitude: 113.259859, latitude: 25.950641
        , strategy: "路线" +
          "\n 高铁：201公交（8元）1小时30分钟，" +
          "\n 福城快线（25元）1个小时，" +
          "\n 打的（30元）50分钟"
      },
      {
        id: 1, img: "//photo.tuchong.com/1933433/f/313660134.jpg", title: "东江湖", longitude: 113.264230, latitude: 25.934570
        , strategy: "路线 " +
          "\n 8分钟2.3公里" +
          "\n “人间天上一湖水，" +
          "\n 万千景象在其中”" +
          "\n 【东江湖】" +
          "\n 位于湖南省郴州市的小东江，是当之无愧的摄影胜地，虽在千年前它已有“奇山异水，天下独绝，水皆漂碧，千丈见底”的美誉。" +
          "\n 不同于山间的雾，小东江的雾罩在水一方，神奇、诡异，从水面蒸腾而上，飘散在山水之间。" +
          "\n 江水绿油清澈，两岸山体在江中倒影清晰可见，形成一幅美丽山水画。" +
          "\n 小东江的水是从东江大坝底部一百米深处流出来的，水温常年保持在8-10℃，而湖面的水温却达20℃左右，由于温差的效应再加上两岸植被茂盛，于是，小东江水面上便常年云雾弥漫，如梦如幻。"
      },
      {
        id: 2, img: "//photo.tuchong.com/1072426/f/92765725.jpg", title: "雾漫小东江", longitude: 113.264230, latitude: 25.934570
        , strategy: "路线 " +
          "\n 8分钟2.3公里 " +
          "\n 雾漫小东江】" +
          "\n 票价:80元/人" +
          "\n 最佳观雾时间：" +
          "\n 上午5点-7点，傍晚5点30分-7点。" +
          "\n (ps:当地人建议到4号观景台，拍照效果好一点)。" +
          "\n 最佳观雾天气：" +
          "\n 晴天出行！" +
          "\n 东江湖的水温在4-8摄氏度，当天天气炎热，温差大，雾超级多，仙境般的fel。" +
          "\n 如果下雨天看雾效果没那么好，记得看好天气预报再出发哦!" +
          "\n 游船东江湖】" +
          "\n 票价:100元/人" +
          "\n 游船全程时间大概1个小时，风景确实挺美的，但不能上岸拍照，只可以在夹板上拍照。"
      },
      {
        id: 3, img: "//photo.tuchong.com/1324183/f/22388944.jpg", title: "回龙山", longitude: 113.355478, latitude: 26.074957
        , strategy: "路线 1小时8分钟37.1公里"
      },
      {
        id: 4, img: "//photo.tuchong.com/16699230/f/227659902.jpg", title: "仰天湖大草原", longitude: 112.835379, latitude: 25.509302
        , strategy: "路线 " +
          "\n 2小时12分钟89.7公里" +
          "\n【仰天湖大草原】" +
          "\n 门票:50元/人，大草原骑马:60元/人" +
          "\n ✔ 仰天湖大草原漫步行走，感受南方草原特有的温柔" +
          "\n ✔ 体验草原野餐、放飞风筝、骑骏马、拍摄大片" +
          "\n ✔ 一片草原N种个性玩法，来了就去寻找属于你的仰天湖" +
          "\n 这个景点道路有点崎岖，需要经过很多个360度的弯上山，旅游大巴是没办法上去，一般是自驾车或者“旅游公交车”到达。" +
          "\n 晕车的话出发前先准备好晕车贴了～车程大概1个半小时。" +
          "\n 上山后很多骑马老板招揽生意，一般是6" +
          "\n 0元/匹围绕山骑一圈，如果老板开口要高价，记得要砍价哦!!下山途中经过的村庄有很多当地菜农庄，饭店时间经过可以就餐。" +
          "\n 民风朴素，性价比还挺高的。"
      },
      {
        id: 5, img: "//photo.tuchong.com/2463414/f/537839480.jpg", title: "飞天山", longitude: 113.135651, latitude: 25.905881
        , strategy: "路线 28分钟20.3公里"
      },
      {
        id: 6, img: "//photo.tuchong.com/1387185/f/31087360.jpg", title: "丹霞高椅岭", longitude: 113.148995, latitude: 25.956330
        , strategy: "路线 " +
          "/n 37分钟17.9公里" +
          "/n 高椅岭" +
          "/n 墨绿色的“天池”" +
          "/n 环绕着一只“巨蜥”" +
          "/n 高椅岭位于湖南省郴州苏仙区桥口镇西部高椅岭村，是郴州丹霞地貌中最突出的代表和美的象征。" +
          "/n 它的“美”，不仅美在山水相融、树石相间犬牙交错、大气磅礴、惊而不险，更美在墨绿色的“天池”环绕着一只“巨蜥”。" +
          "/n 有人评价郴州的丹霞景观为“世之所有，此尽有之”。" +
          "/n 欣赏高椅岭的美，最合适的方式就是徒步了。" +
          "/n 经典的丹霞地貌，山水犬牙交错，奇形怪状，不是鬼斧神工，而是上天的刻意为之，惊而不险的悬崖陡壁，绝对惊险刺激！"
      },
      {
        id: 7, img: "//photo.tuchong.com/1356454/f/11938773.jpg", title: "小洱海白廊", longitude: 113.399210, latitude: 25.916950
        , strategy: "路线 /n 36分钟25.0公里" +
          "/n 白廊环湖公路是东江湖环湖区域的第一条高标准旅游公路，有小洱海之称，起于资兴市兴宁镇长楹头码头，/n止于资兴市白廊乡白廊村，全长13.35公里，全线采用双向两车道，按三级公路标准建设。/n游客可在环湖公路骑行、步行，近距离感受东江湖美景。"
      },
      {
        id: 8, img: "//photo.tuchong.com/1473565/f/91231691.jpg", title: "莽山国家森林公园", longitude: 112.902125, latitude: 24.945544
        , strategy: "路线 2小时9分钟144.9公里"
      },
      {
        id: 9, img: "//photo.tuchong.com/1068498/f/23637985.jpg", title: "流华湾古村", longitude: 113.259641, latitude: 26.039131
        , strategy: "路线 20分钟12.8公里"
      },
    ],

    markers: [{
      iconPath: "/image/marker_inn.png",
      id: 0,
      latitude: 25.950641,
      longitude: 113.259859,
      width: 20,
      height: 20
    }],

    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],

    item: {},

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id
    var mItem = this.getData(id)
    var mMarkers = this.data.markers;
    if (mItem.id == 0) {

    } else {
      var mMarkerItem = {
        iconPath: "/image/marker.png",
        id: mItem.id,
        latitude: mItem.latitude,
        longitude: mItem.longitude,
        width: 20,
        height: 20
      }
      mMarkers.push(mMarkerItem);
    }


    var mPolyline = []
    if (mItem.id == 0) {
      mPolyline = [{
        points: [{
          longitude: 112.969895,
          latitude: 25.735919
        }, {
          longitude: 113.259859,
          latitude: 25.950641
        }, {
          longitude: 113.032645,
          latitude: 25.808165
        }],
        color: "#FF0000DD",
        width: 2,
        dottedLine: true
      }]
    } else {
      mPolyline = [{
        points: [{
          longitude: 113.259859,
          latitude: 25.950641
        }, {
          longitude: mItem.longitude,
          latitude: mItem.latitude
        }],
        color: "#FF0000DD",
        width: 2,
        dottedLine: true
      }]
    }

    this.setData({
      item: mItem,
      markers: mMarkers,
      polyline: mPolyline
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