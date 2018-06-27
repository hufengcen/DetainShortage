var amapFile = require('../../libs/amap-wx.js');
//index.js
//获取应用实例
const app = getApp()
var markersData = [];
Page({
  data: {
    motto: '集集站',
    desc:'11111111',
    info:{},
    open:true,
    getPhoneFlag: true,
    userInfo: {},
    hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),
    markers: [],
    latitude: '',
    longitude: '',
    textData: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  makertap: function (e) {
    var id = e.markerId;
    var that = this;
    that.showMarkerInfo(markersData, id);
    that.changeMarkerColor(markersData, id);
  },
  onLoad: function (e) {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({ key: '70cecbcc94d44a4ca288d50f396feacf' });
    myAmapFun.getPoiAround({
      iconPathSelected: './image/javasFather.jpg', //如：..­/..­/img/marker_checked.png
      iconPath: './image/javasFather.jpg', //如：..­/..­/img/marker.png
      success: function (data) {
        markersData = data.markers;
        that.setData({
          markers: markersData
        });
        that.setData({
          latitude: markersData[0].latitude
        });
        that.setData({
          longitude: markersData[0].longitude
        });
        that.showMarkerInfo(markersData, 0);
      },
      fail: function (info) {
        wx.showModal({ title: info.errMsg })
      }
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  showMarkerInfo: function (data, i) {
    var that = this;
    that.setData({
      textData: {
        name: data[i].name,
        desc: data[i].address
      }
    });
  },
  changeMarkerColor: function (data, i) {
    var that = this;
    var markers = [];
    for (var j = 0; j < data.length; j++) {
      if (j == i) {
        data[j].iconPath = "./image/javasFather.jpg"; //如：..­/..­/img/marker_checked.png
      } else {
        data[j].iconPath = "./image/javasFather.jpg"; //如：..­/..­/img/marker.png
      }
      
      markers.push(data[j]);
    }
    console.log(data,i)
    that.setData({
      markers: markers
    });
    this.getActInfo(data[i])
  },
  getActInfo: function(info) {
    var that = this
    console.log(info)
    that.setData({
      open:false,
      info: info
    })
  },
  hideInfo: function() {
    var that = this
    that.setData({
      open: true
    })
  },
  applyAct: function() {
    if(true){
      var that = this
      that.setData({
        getPhoneFlag: false
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    wx.navigateTo({
      url: '../info/index'
    })
  }
})
