// page/index/index.js
var location_key = 'T3BBZ-6F2R6-5HJSR-MYHSY-D5V4J-32BMP';
var QQMapWX = require('../../qqmap-wx-jssdk.min.js');
var demo = new QQMapWX({
  key: location_key // 必填
});
Page({
  data: {
    motto: 'hi world',
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    city: 'ciy'
  },

  btn_getLocation: function() {
    let self = this;
    this.getCity();
  },
  activityEvent: function(e) {
    switch(e.target.dataset.evt) {
      case '1':
      console.log(e.target.textContent+'1');
      break;
      case '2':
        console.log(e.target.textContent+'2');
        break;
      case '3':
        console.log(e.target.textContent+'3');
        break;
      case '4':
        console.log(e.target.textContent+'4');
        break;
    }
  },
/**
   * 生命周期函数--监听页面加载
   */

getCity: function() {
  let self = this;
  wx.getLocation({
    success: function (res) {
      demo.reverseGeocoder({
        location: {
          latitude: res.latitude,
          longitude: res.longitude
        },
        success: function (res) {
          let geo_info = res.result.ad_info;
          let city = geo_info.city;
          self.setData({
            city: city
          })
        },
        fail: function (res) {
          console.log(res);
        },

      });
    },
  })
},

  onLoad: function (options) {
    this.getCity();
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