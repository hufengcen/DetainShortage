<template>
  <section>
    <div class="banner" id="map_container">
      <!-- <img src="//hbfile.b0.upaiyun.com/img/home/banner/cdf0a6ab627bc33af759533af558a118be5a1b1dd2d93" alt=""> -->
      <!-- <iframe src="https://map.baidu.com/" width="100%" height="800"></iframe> -->
    </div>
    <VInfoList :disWindowFlag="disWindowFlag" @changeProp="changeProp"></VInfoList>
  </section>
</template>

<script>

export default {
  name: 'banner',
  components: {
    VInfoList (resolve) {
      require(['./infoList'], resolve)
    }
  },
  data () {
    return {
      map: null,
      disWindowFlag: true
    }
  },
  created () {

  },
  methods: {
    mapInit () {
      let map = this.map = new AMap.Map('map_container', {
        resizeEnable: true,
        zoom: 5, // 设置地图显示的缩放级别
        // layers: [new AMap.TileLayer.Satellite()],  //设置图层,可设置成包含一个或多个图层的数组
        // mapStyle: 'amap://styles/whitesmoke',  //设置地图的显示样式
        viewMode: '2D', // 设置地图模式
        lang: 'zh_cn', // 设置地图语言类型
      })
      map.plugin('AMap.Geolocation', function () {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset: new AMap.Pixel(10, 20),
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          //  定位按钮的排放位置,  RB表示右下
          buttonPosition: 'RB'
        })
        map.addControl(geolocation)
        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', onComplete)
        AMap.event.addListener(geolocation, 'error', onError)

        function onComplete (data) {
          // data是具体的定位信息
        }

        function onError (data) {
          // 定位出错
        }
      })
    },
    setMarkers () {
      var marker = new AMap.Marker({
        position: new AMap.LngLat(120.662586, 31.293365),
        title: '苏州',
        content: '<div class="map_marker"><img src="http://img.hb.aicdn.com/16af5bfcd0f50f7d59e7ccb263f93ec755828b41644aa-CpjD4d_sq320"/></div>'
      })
      AMap.event.addListener(marker, 'click', function (e) {
        this.disWindowFlag = false
      }.bind(this))
      this.map.add(marker)
      this.map.setFitView()
    },
    search () {

    },
    changeProp () {
      this.disWindowFlag = true
    }
  },
  mounted () {
    this.mapInit()
    this.setMarkers()
    this.search()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.map_marker{
  background: url('./img/map_marker.png') 0 0 no-repeat;
  background-size: contain;
  width: 80px;height: 80px;
}
.map_marker img{
  width:36px;height:36px;border-radius:50%;overflow:hidden;border:2px solid #fff;margin-top: 8px
}

.banner {
  height: 800px
}
</style>
