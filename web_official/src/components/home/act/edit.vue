<template>
  <div class="edit_mask">
    <div class="edit_modal">
      <div class="edit_header">
        <p class="edit_title">补充你的信息吧</p>
        <p class="desc">真实姓名和身份证号一起填写会有combo哦，如果填写错误信息不会加分哦</p>
      </div>
      <div class="form_box">
        <p><span class="input_before">闹闹昵称：</span><input type="text" name="" v-model="user.nick_name"><span class="score">+5分</span> </p>
        <p><span class="input_before">个性签名：</span><input type="text" name="" v-model="user.single"><span class="score">+5分</span> </p>
        <p><span class="input_before">真实姓名：</span><input type="text" name="" v-model="user.realname"><span class="score" :class="comboScore === 20 ? 'highFont' :  ''">+{{comboScore}}分</span></p>
        <p><span class="input_before">身份证号：</span><input type="text" name="" v-model="user.icardCode"><span class="score" :class="comboScore === 20 ? 'highFont' :  ''">+{{comboScore}}分</span> </p>
      </div>
      <div class="handles">
        <div class="refuse" @click="hideEdit">
          取消
        </div>
        <div class="save" @click="saveInfo">
          保存
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'edit',
  components: {

  },
  data () {
    return {
      user: {
        nick_name: '飞天小猪',
        single: '老夫专干生产队塘，就是一把嗦',
        realname: '张扬',
        icardCode: '32102319880929481x'
      },
      tipShow: false
    }
  },
  computed: {
    comboScore: function () {
      if (this.user.realname.match(/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/)
        && this.user.icardCode.match(/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/)) {
        return 20
      } else {
        return 10
      }
    }
  },
  // watch: {
  //   user: {
  //     handler (cur, old) {
  //       console.log(cur, old, 11111111);
  //     },
  //     deep: true
  //   }
  // },
  methods: {
    hideEdit () {
      this.$emit('hideEdit')
    },
    saveInfo () {
      alert('保存成功')
      this.hideEdit()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.edit_mask {
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

.edit_mask .edit_modal {
  height: 500px;
  width: 800px;
  background: rgba(0, 0, 0, .85);
  color: rgba(255, 255, 255, .85);
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
}

.edit_mask .edit_modal .edit_header .edit_title{
  font-size: 22px;
}
.edit_mask .edit_modal .edit_header .desc{
  font-size: 10px;
  width: 400px;
  margin: 0 auto;
  text-align: left;
  box-sizing: border-box;
  padding-left: 80px;
  position: relative;
}
.edit_mask .edit_modal .edit_header .desc::before{
  content: '小闹提醒：';
  position: absolute;
  left: 10px;
}

.edit_mask .edit_modal .form_box p .input_before{
  width: 100px;
  display: inline-block;
}
.edit_mask .edit_modal .form_box p .score{
  width: 80px;
  display: inline-block;
}
.edit_mask .edit_modal .form_box p .highFont{
  color: #fff;
  font-weight: bold;
  font-size: 16px;
}

.edit_mask .edit_modal .form_box p input{
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

.edit_mask .edit_modal .form_box p input:focus{
  border: 1px solid #fff;
  box-shadow: 0px 0px 5px 1px #fff;
}

.edit_mask .edit_modal .handles {
  width: 320px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0 auto;
}

.edit_mask .edit_modal .handles .refuse{
  width: 100px;
  height: 44px;
  line-height: 44px;
  border: 1px solid;
  margin-top: 20px;
  cursor: pointer;
}
.edit_mask .edit_modal .handles .save{
  width: 200px;
  height: 44px;
  line-height: 44px;
  border: 1px solid;
  margin-top: 20px;
  cursor: pointer;
}
</style>
