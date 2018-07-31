<template>
  <div class="publish_mask">
    <div class="publish_modal">
      <div class="publish_header">
        <p class="publish_title">发布一个你想做的事情吧</p>
        <p class="desc">每发布一个活动，都会获取相应的经验值哦。
          经验值可以提高你的等级，等级越高，就有越多的小伙伴愿意加入你哦~</p>
      </div>
      <div class="form_box">
        <p><span class="input_before">去哪嗨：</span><input type="text" name="" v-model="action.goWhere"></p>
        <p><span class="input_before">几点钟：</span><input type="text" name="" v-model="action.setTime"></p>
        <p><span class="input_before">多少人：</span><input type="text" name="" v-model="action.acterNum"></p>
        <p><span class="input_before">想干啥：</span><input type="text" name="" v-model="action.doWhat"></p>
      </div>
      <div class="handles">
        <div class="refuse" @click="hidePublish">
          取消
        </div>
        <div class="save" @click="publishAct">
          发布
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'publish',
  components: {

  },
  data () {
    return {
      action: {
        goWhere: '国际科技园哪',
        setTime: new Date(),
        acterNum: '15',
        doWhat: '打牌啊'
      },
      tipShow: false
    }
  },
  computed: {

  },
  methods: {
    hidePublish () {
      this.$emit('hidePublish')
    },
    publishAct () {
      alert('发布成功')
      this.hidePublish()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.publish_mask {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: transparent;
  position: fixed;
  top: 50px;
  padding: 10px;
  box-sizing: border-box;
}

.publish_mask .publish_modal {
  height: 500px;
  width: 800px;
  background: rgba(0, 0, 0, .85);
  color: rgba(255, 255, 255, .85);
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
}

.publish_mask .publish_modal .publish_header .publish_title{
  font-size: 22px;
}
.publish_mask .publish_modal .publish_header .desc{
  font-size: 10px;
  width: 400px;
  margin: 0 auto;
  text-align: left;
  box-sizing: border-box;
  padding-left: 80px;
  position: relative;
}
.publish_mask .publish_modal .publish_header .desc::before{
  content: '小闹提醒：';
  position: absolute;
  left: 10px;
}

.publish_mask .publish_modal .form_box p .input_before{
  width: 100px;
  display: inline-block;
}
.publish_mask .publish_modal .form_box p .score{
  width: 80px;
  display: inline-block;
}
.publish_mask .publish_modal .form_box p .highFont{
  color: #fff;
  font-weight: bold;
  font-size: 16px;
}

.publish_mask .publish_modal .form_box p input{
  width: 400px;
  height: 44px;
  line-height: 44px;
  border: 1px solid;
  background: rgba(0, 0, 0, 0.5);
  outline: none;
  color: rgba(255, 255, 255, .85);
  font-size: 18px;
  padding-left: 10px;
  border: 0;
  box-sizing: border-box;
}

.publish_mask .publish_modal .form_box p input:focus{
  border: 1px solid #fff;
  box-shadow: 0px 0px 5px 1px #fff;
}

.publish_mask .publish_modal .handles {
  width: 320px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0 auto;
}

.publish_mask .publish_modal .handles .refuse{
  width: 100px;
  height: 44px;
  line-height: 44px;
  border: 1px solid;
  margin-top: 20px;
  cursor: pointer;
}
.publish_mask .publish_modal .handles .save{
  width: 200px;
  height: 44px;
  line-height: 44px;
  border: 1px solid;
  margin-top: 20px;
  cursor: pointer;
}
</style>
