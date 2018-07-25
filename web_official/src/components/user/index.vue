<template>
  <section v-show="refuse">
    <div class="mask">
    </div>
    <div class="modal">
      <p>请输入手机号码</p>
      <div class="">
        <input type="text" name="" v-model="phoneNumber">
      </div>
      <p>点击获取验证码</p>
      <div class="">
        <input type="text" name="" v-model="icode">
      </div>
      <div class="handles">
        <div class="registLogin" @click="registLogin">
          注册并登录
        </div>
        <div class="refuse" @click="disRegistModal">
          取消
        </div>
      </div>
      <div class="fastRegist">
        <img src="./img/wx.png" alt="">
        <img src="./img/qq.png" alt="">
        <img src="./img/xl.png" alt="">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'index',
  components: {

  },
  props: {
    refuse: {
      default: true,
      type: Boolean
    },
  },
  data () {
    return {
      phoneNumber: '',
      icode: ''
    }
  },
  methods: {
    disRegistModal () {
      this.$emit('showMeRegist', false)
    },
    registLogin () {
      if (!this.phoneNumber || !this.icode) {
        return
      }
      let param = {
        phoneNumber: this.phoneNumber,
        icode: this.icode,
      }
      console.log(param);
      this.$ajaxApi.registLogin(param).then((res) => {

      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom:0;
  z-index: 9;
  background: rgba(0, 0, 0, 0.7)
}

.modal {
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 99;
}
.modal input {
  width: 320px;
  height: 44px;
  line-height: 44px;
  border: 1px solid;
  background: rgba(0, 0, 0, 0.5);
  outline: none;
  color: #fff;
  font-size: 22px;
  padding-left: 10px;
  border: 0;
}
.modal p {
  width: 320px;
  text-align: left;
  font-size: 21px;
}

.modal .handles {

}
.modal .handles {
  width: 320px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.modal .handles .registLogin{
  width: 200px;
  height: 44px;
  line-height: 44px;
  border: 1px solid;
  margin-top: 50px;
  cursor: pointer;
}
.modal .handles .refuse{
  width: 100px;
  height: 44px;
  line-height: 44px;
  border: 1px solid;
  margin-top: 50px;
  cursor: pointer;
}
.modal .fastRegist{
  width: 320px;
  height: 44px;
  margin-top: 25px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content:center;
}
.modal .fastRegist img{
  width: 35px;
  margin: 0 20px;
  cursor: pointer;
}

</style>
