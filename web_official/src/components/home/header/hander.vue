<template>
  <section>
    <div class="hander">
      <ul>
        <li>首页</li>
        <li>发现</li>
        <li>最新</li>
        <li>活动</li>
      </ul>
      <div class="user_hander">
        <div class="login_bt">
          登录
        </div>
        <div class="regist_bt" @click="showMeRegist">
          注册
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'hander',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    showMeRegist () {
      this.$emit('showMeRegist', true)
    }
  }
}
</script>
<style scoped>
.hander {
  position: fixed;
  left: 0;
  right: 0;
  height: 50px;
  top: 0;
  z-index: 9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: rgba(58, 137, 0, 0.6);
}
.hander ul {
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
}
.hander ul li {
  color: rgba(255, 255, 255, .85);
}
.hander ul li:hover {
  color: rgba(255, 255, 255, 1);
}
.user_hander {
  width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.user_hander .regist_bt{
  color: rgba(255, 255, 255, .85);
  border: 1px solid #ec414d;
  width: 60px;
  height: 32px;
  line-height: 32px;
  border-radius: 2px;
  background: #ec414d;
  margin-left: 10px;
  cursor: pointer;
}
.user_hander .login_bt{
  color: rgba(255, 255, 255, .85);
  width: 60px;
  height: 32px;
  line-height: 32px;
  border-radius: 2px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, .85);
  cursor: pointer;
}

</style>
