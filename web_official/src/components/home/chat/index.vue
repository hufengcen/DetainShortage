<template>
  <div class="chat">
    <div class="activity">
      <div class="actIntro">
        <p class="title"><span>{{activity}}</span> </p>
        <p class="content"><span>{{content}}</span> </p>
      </div>
      <div class="gogogo" @click="out" v-if="isAdmin === 0">
        我要退出
      </div>
      <div class="gogogo" @click="out" v-if="isAdmin === 1">
        我要解散
      </div>
    </div>
    <div class="chatRoom">
      <div class="chatWindow">
        <div class="win">
          <div class="title">权限设置</div>
          <p @click="powerSet(0)">白金以上可见 <img src="./img/right.png" v-if="power[0]"> </p>
          <p @click="powerSet(1)">无需审核 <img src="./img/right.png" v-if="power[1]"> </p>
          <p @click="powerSet(2)">添加打赏 <img src="./img/right.png" v-if="power[2]"> </p>
          <p @click="powerSet(3)">活动二维码 <img src="./img/right.png" v-if="power[3]"> </p>
          <p @click="powerSet(4)">开放聊天 <img src="./img/right.png" v-if="power[4]"> </p>
          <p @click="powerSet(5)">范围扩大 <img src="./img/right.png" v-if="power[5]"> </p>
        </div>
        <div class="input">

        </div>
      </div>
      <div class="other">
        <div class="manages">
          <p>
            <img src="http://img.hb.aicdn.com/b4c384a9e8437c317bd3241993cec71f16aa7197d613-YFMrjg_sq320">
            <span>大雄</span>
            <span>v_64</span>
          </p>
          <p>
            <img src="http://img.hb.aicdn.com/b4c384a9e8437c317bd3241993cec71f16aa7197d613-YFMrjg_sq320">
            <span>小夫</span>
            <span>v_64</span>
          </p>
          <p>
            <img src="http://img.hb.aicdn.com/b4c384a9e8437c317bd3241993cec71f16aa7197d613-YFMrjg_sq320">
            <span>胖虎</span>
            <span>v_64</span>
          </p>
          <p>
            <img src="http://img.hb.aicdn.com/b4c384a9e8437c317bd3241993cec71f16aa7197d613-YFMrjg_sq320">
            <span>勒夫</span>
            <span>v_64</span>
          </p>
        </div>
        <div class="other_handle">
          <div class="other_btn">
            分享给好友
          </div>
          <div class="other_btn">
            赶紧举报揭发他们
          </div>
          <div class="other_btn">
            直接拨打110
          </div>
          <div class="other_btn" @click="hideChat">
            缩小当前窗口
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      header_img: '',
      nick_name: '来自星星的狗',
      activity: '独墅湖邻里中心5黑',
      intro: '',
      content: '附近找几个神C一起飞,位置在独墅湖邻里中心三楼,结束后互相好评有打赏,拿经验拿钱的来玩啊。天坑差评啊~',
      desc: '此人对自己没有任何评价，可能是个基佬',
      address: '啦啦啦啦皇家鱼塘',
      isAdmin: 1,
      power: {
        '0':false,
        '1':false,
        '2':false,
        '3':false,
        '4':false,
        '5':false
      }
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
    out (e) {
      e.cancelBubble = true
      if (this.isAdmin) {
        alert('提前结束活动的话，会得到小伙伴的差评哦')
      } else {
        alert('确定要退出吗，可能会扣除一定的信誉积分哦')
      }
      this.hideChat()
    },
    disWindow () {
      this.$emit('changeProp', false)
    },
    hideChat () {
      this.$emit('showChat', false)
    },
    powerSet (type) {
      this.power[type] = !this.power[type]
    }
  }
}
</script>

<style lang="css" scope>
.chat {
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
.chat .info{
  width: 50%;
  margin: 50px 0;
  padding-left: 50px;
  box-sizing: border-box;
}
.chat .activity{
  display: flex;
  width: 40%;
  margin: 50px 0;
  flex-direction: column;
  justify-content: space-between;
  border-right: 5px dashed
}
.chat .activity .actIntro{
}
.chat .activity .actIntro .title{
  font-size: 22px;
}
.chat .activity .actIntro .tips{
  font-size: 14px;
  padding: 0 100px;
}
.chat .activity .actIntro .tips span{
  display: inline-block;
  margin-right: 15px;
}
.chat .activity .actIntro .content{
  padding-top: 20px;
  text-align: left;
  padding: 20px 100px;
  line-height: 30px;
  text-indent: 32px;
  letter-spacing: 1.5px;
}
.chat .activity .gogogo{
  margin: 0 auto;
  width: 300px;
  border: 2px solid;
  padding: 12px 20px;
}
.chat .chatRoom {
  width: 70%;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.chat .chatRoom .chatWindow {
  width:600px;
}
.chat .chatRoom .chatWindow .win {
  width:600px;
  height: 400px;
  background: rgba(0, 0, 0, .3);
}
.chat .chatRoom .chatWindow .win .title {
  height: 44px;
  line-height: 44px;
}
.chat .chatRoom .chatWindow .win p{
  height: 44px;
  line-height: 44px;
  text-align: left;
  margin: 0 0 1px 0;
  background: rgba(0, 0, 0, .3);
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.chat .chatRoom .chatWindow .win p:hover{
  background: rgba(255, 255, 255, .1)
}
.chat .chatRoom .chatWindow .win p img{
  width: 30px;
  height: 30px;
}
.chat .chatRoom .chatWindow .input {
  width:600px;
  height: 190px;
  margin-top: 20px;
  background: rgba(0, 0, 0, .3);
}
.chat .chatRoom .other .manages {
  width:300px;
  height: 300px;
  background: rgba(0, 0, 0, .3);
  padding: 10px;
  box-sizing: border-box;
}
.chat .chatRoom .other .manages p{
  text-align: left;
  display: flex;
  align-items: center;
}
.chat .chatRoom .other .manages p img{
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.chat .chatRoom .other .manages p span{
  display: inline-block;
  margin: 0 10px;
}

.chat .chatRoom .other .other_handle{
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.chat .chatRoom .other .other_handle .other_btn{
  width: 200px;
  height: 44px;
  line-height: 44px;
  border: 1px solid;
  margin: 10px 0;
}
</style>
