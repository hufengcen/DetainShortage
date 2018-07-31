<template>
  <section>
    <div class="mask" v-if="actShow">
      <div class="personal">
        <img src="http://img.hb.aicdn.com/cfec3ffb205218a17f3ca12f01ad37bb6e859ef47b94-WQhAzm_sq320" alt="">
        <div class="per_v">
          <p class="p1">{{user.nick_name}} <span>{{'v_' + user.grade}}</span> </p>
          <p class="p2">{{user.skill}}</p>
          <p class="p3">{{user.desc}}</p>
        </div>
      </div>
      <p @click="publishAct">发布活动</p>
      <p :class="tipJionShow ? 'tip_border' : ''" @click="showJoin">正在参与</p>
      <p>周边排名</p>
      <p>邀请好友</p>
      <p :class="tipEditShow ? 'tip_border' : ''" @click="showEdit">编辑信息</p>
      <p>权限设置</p>
    </div>
    <VEdit v-if="editShow" @hideEdit="hideEdit"></VEdit>
    <VPublish v-if="publishShow" @hidePublish="hidePublish"></VPublish>
  </section>
</template>

<script>
export default {
  name: 'index',
  components: {
    VEdit (resolve) {
      require(['./edit'], resolve)
    },
    VPublish (resolve) {
      require(['./publish'], resolve)
    }
  },
  props: {
    actShow: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      user: {
        nick_name: '飞天小猪',
        grade: 10,
        desc: '老夫专干生产队塘，就是一把嗦',
        skill: '钓鱼达人'
      },
      tipEditShow: false,
      tipJionShow: false,
      editShow: false,
      publishShow: false,
      action: {
        doWhat: '1111111'
      }
    }
  },
  methods: {
    publishAct () {
      if (this.action) {
        alert('您已发布一个活动，快去参加。当然您也可以提前结束该活动。')
        this.tipJionShow = true
        return
      }
      if (this.user.grade < 10) {
        alert('你的等级不够哦，快去补充个人信息，或者参与活动去提升等级吧')
        this.tipEditShow = true
      } else {
        this.publishShow = true
        this.$emit('showAct', false)
      }
    },
    showEdit () {
      this.hideTip()
      this.editShow = true
      this.$emit('showAct', false)
    },
    showJoin () {
      this.hideTip()
      this.$emit('showAct', false)
      this.$emit('showChat', true)
    },
    hideEdit () {
      this.editShow = false
    },
    hidePublish () {
      this.publishShow = false
    },
    hideTip () {
      this.tipEditShow = this.tipJionShow = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mask {
  height: 100%;
  width: 400px;
  background: rgba(0, 0, 0, .85);
  position: fixed;
  top: 50px;
  right: 0;
  color: #fff;
  padding: 10px;
  box-sizing: border-box;
}
.mask .personal{
  display: flex;
  flex-direction: row;
  padding: 40px 20px 10px 20px;
}
.mask .personal img{
  width: 100px;
  height: 100px;
  margin-right: 20px;
}
.mask .personal .per_v p{
  margin: 0 0 15px 0;
  text-align: left;
}
.mask .personal .per_v .p1{
  font-size: 22px;
}
.mask .personal .per_v .p3{
  margin: 0;
}
.mask >p {
  text-align: left;
  padding-left: 50px;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
  box-sizing: border-box;
}
.mask >p:hover {
  background: rgba(255, 255, 255, .2)
}
.mask .tip_border{
  border: 1px solid #fff;
  box-shadow: 0px 0px 5px 1px #fff;
}
</style>
