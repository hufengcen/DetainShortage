<template>
  <section>
    <VHeader @showMeRegist="showMeRegist" @showHideAct="showHideAct" :user="user"></VHeader>
    <VUser v-if="refuse" @showMeRegist="showMeRegist"></VUser>
    <VAct :actShow="actShow" @showAct="showAct" @showChat="showChat"></VAct>
    <VChat v-if="chatShow" @showChat="showChat"></VChat>
  </section>
</template>

<script>
export default {
  name: 'index',
  components: {
    VHeader (resolve) {
      require(['./header/index'], resolve)
    },
    VUser (resolve) {
      require(['./user/index'], resolve)
    },
    VAct (resolve) {
      require(['./act/index'], resolve)
    },
    VChat (resolve) {
      require(['./chat/index'], resolve)
    }
  },
  data () {
    return {
      refuse: false,
      actShow: false,
      user: {},
      chatShow: false
    }
  },
  created () {
    this.user = JSON.parse(window.sessionStorage.getItem('userInfo'))
  },
  methods: {
    showMeRegist (obj) {
      this.refuse = obj.show
      if (obj.login) {
        this.user = JSON.parse(window.sessionStorage.getItem('userInfo'))
      }
    },
    showHideAct () {
      this.actShow = !this.actShow
    },
    showAct (flag) {
      this.actShow = flag
    },
    showChat (flag) {
      this.chatShow = flag
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
