<template>
  <section>
    <VHeader @showMeRegist="showMeRegist"></VHeader>
    <VUser :refuse="refuse" @showMeRegist="showMeRegist"></VUser>
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
  },
  data () {
    return {
      refuse: false
    }
  },
  methods: {
    showMeRegist (flag) {
      this.refuse = flag
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
