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
      <p>发布活动</p>
      <p>正在参与</p>
      <p>附近商家</p>
      <p>编辑信息</p>
      <p>权限设置</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'index',
  components: {

  },
  props : {
    actShow: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      user: {
        nick_name: '飞天小猪',
        grade: 100,
        desc: '老夫专干生产队塘，就是一把嗦',
        skill: '钓鱼达人'
      }
    }
  },
  methods: {

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
}
.mask >p:hover {
  background: rgba(255, 255, 255, .2)
}
</style>
