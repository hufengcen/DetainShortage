<template>
  <section>
    <div class="header">
      <VHander @showMeRegist="showMeRegist" @showHideAct="showHideAct" :user="user"></VHander>
      <VBanner></VBanner>
    </div>
  </section>
</template>

<script>
export default {
  name: 'index',
  components: {
    VBanner (resolve) {
      require(['./banner'], resolve)
    },
    VHander (resolve) {
      require(['./hander'], resolve)
    }
  },
  data () {
    return {

    }
  },
  props: {
    user: {
      default: () => { return {} },
      type: Object
    }
  },
  methods: {
    showMeRegist (flag) {
      this.$emit('showMeRegist', {'show': flag})
    },
    showHideAct () {
      this.$emit('showHideAct')
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
