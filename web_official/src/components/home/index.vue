<template>
  <section>
    <VHeader @showMeRegist="showMeRegist" @showHideAct="showHideAct"></VHeader>
    <VUser :refuse="refuse" @showMeRegist="showMeRegist"></VUser>
    <VAct :actShow="actShow"></VAct>
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
      require(['../user/index'], resolve)
    },
    VAct (resolve) {
      require(['./act/index'], resolve)
    }
  },
  data () {
    return {
      refuse: false,
      actShow: false
    }
  },
  methods: {
    showMeRegist (flag) {
      this.refuse = flag
    },
    showHideAct () {
      this.actShow = !this.actShow
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
