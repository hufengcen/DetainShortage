<template>
  <div class="infoList" @click="disWindow()" v-if="!disWindowFlag">
    <div class="info">
      <div class="header">
        <img src="http://img.hb.aicdn.com/6e5934abb18804e0a574a80f17b9cc708559a55360fb-VdcTL4_sq320" alt="">
        <div class="naoerInfo">
          <strong>{{nick_name}}</strong>
          <p><span>闹家等级</span> <span>此人刚注册一起闹，还是条咸鱼</span></p>
          <p><span>闹家发布地址</span> <span>{{address}}</span></p>
        </div>
      </div>
      <div class="desc">
        {{desc}}
      </div>
    </div>
    <div class="activity">
      <div class="actIntro">
        <p class="title"><span>{{activity}}</span> </p>
        <p class="content"><span>{{content}}</span> </p>
      </div>
      <div class="gogogo" @click="gogogo">
        我也要参加
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'infoList',
  data () {
    return {
      header_img: '',
      nick_name: '来自星星的狗',
      activity: '独墅湖邻里中心5黑',
      intro: '',
      content: '附近找几个神C一起飞,位置在独墅湖邻里中心三楼',
      desc: '此人对自己没有任何评价，可能是个基佬',
      address: '啦啦啦啦皇家鱼塘'
    }
  },
  props: {
    disWindowFlag: {
      default: true,
      type: Boolean
    }
  },
  created () {

  },
  methods: {
    gogogo (e) {
      e.cancelBubble = true
      alert('需要注册一起闹，才能申请加入到他们哦')
    },
    disWindow () {
      this.$emit('changeProp', false)
    }
  }
}
</script>

<style lang="css" scope>
.infoList {
  background: rgba(0, 0, 0, 0.7);
  left: 0;
  top: 50px;
  bottom: 0;
  right: 0;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #fff;
}
.infoList .info{
  width: 50%;
  margin: 50px 0;
  padding-left: 50px;
  box-sizing: border-box;
}
.infoList .activity{
  display: flex;
  width: 50%;
  margin: 50px 0;
  border-left: 5px dashed;
  flex-direction: column;
  justify-content: space-between;
}
.infoList .info .header{
  display: flex;
  flex-direction: row;
}
.infoList .info .desc{
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}
.infoList .info .header img{
  width: 180px;height: 180px
}
.infoList .info .header .naoerInfo{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  margin-left: 30px;
}
.infoList .info .header strong{
  font-size: 36px
}

.infoList .activity .actIntro{
}
.infoList .activity .actIntro .title{
  font-size: 22px;
}
.infoList .activity .actIntro .content{
  padding-top: 20px
}
.infoList .activity .gogogo{
  margin: 0 auto;
  width: 300px;
  border: 2px solid;
  padding: 12px 20px;
}
</style>
