//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },

  

  //事件处理函数
  btnClick: function() {
    wx.switchTab({
      url: '../inn/inn'
      
    })
  },

  noneEnoughPeople:function(){
    //处理页面上下滑动
  },

  
  
  onLoad: function () {
    
  },
  
})
