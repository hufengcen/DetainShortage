<template lang="html">
  <div class="infoList">
    <div class="info">
      <div class="header">
        <img src="http://img.hb.aicdn.com/6e5934abb18804e0a574a80f17b9cc708559a55360fb-VdcTL4_sq320" alt="">
        <strong>{{this.nick_name}}</strong>
      </div>
      <div class="">
        
      </div>
    </div>
    <div class="activity">
      <div class="">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'infoList',
  data() {
    return {
      header_img: '',
      nick_name: '来自星星的狗',
      activity: '',
      intro: '',
      content: '',
      desc: ''
    }
  },
  created: {

  },
  methods: {

  }
}
</script>

<style lang="css" scope>
.infoList {
  background: rgba(0, 0, 0, 0.7);
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between
}
.infoList .info{
  width: 50%;
  margin-top: 50px;
}
.infoList .info .header img{
  width: 180px;height: 180px
}
.infoList .info .header strong{
  color: #fff;
  font-size: 36px
}
</style>
