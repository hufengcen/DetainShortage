<template>
  <div class="edit_modal">
    <input type="text" name="" value="">
    <input type="text" name="" value="">
    <input type="text" name="" value="">
    <input type="text" name="" value="">
    <input type="text" name="" value="">
    <input type="text" name="" value="">
  </div>
</template>

<script>
export default {
  name: 'edit',
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
        grade: 1,
        desc: '老夫专干生产队塘，就是一把嗦',
        skill: '钓鱼达人'
      },
      tipShow: false
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.edit_modal {
  height: 100%;
  width: 400px;
  background: rgba(0, 0, 0, .85);
  position: fixed;
  top: 50px;
  color: #fff;
  padding: 10px;
  box-sizing: border-box;
}

</style>
