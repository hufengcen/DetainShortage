<template>
  <section v-show="refuse">
    <div class="mask">
    </div>
    <div class="modal">
      <p>请输入手机号码</p>
      <div class="">
        <input type="text" name="" v-model="phoneNumber" :class="phoneFlag ? (phoneFocusFlag ? 'focus' : '') : 'error'" @focus="focus('phone')">
      </div>
      <p>点击获取验证码</p>
      <div class="">
        <input type="text" name="" v-model="icode" :class="icodeFlag ? (icodeFocusFlag ? 'focus' : '') : 'error'" @focus="focus('icode')">
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
      icode: '',
      phoneFlag: true,
      icodeFlag: true,
      phoneFocusFlag: false,
      icodeFocusFlag: false
    }
  },
  methods: {
    disRegistModal () {
      this.$emit('showMeRegist', {'show': false, 'login': false})
    },
    registLogin () {
      //本地校验手机号 验证码
      if (this.phoneNumber.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/) === null) {
        this.phoneFlag = false
      } else {
        this.phoneFlag = true
      }
      if (this.icode.match(/^([0-9])\d{5}$/) === null) {
        this.icodeFlag = false
      } else {
        this.icodeFlag = true
      }
      if (!this.icodeFlag || !this.phoneFlag) {
        return
      }
      this.phoneFocusFlag = this.icodeFocusFlag = false
      let param = {
        phoneNumber: this.phoneNumber,
        icode: this.icode,
      }
      this.$ajaxApi.registLogin(param).then((res) => {
        if (res.data.success) {
          window.sessionStorage.setItem('userInfo', JSON.stringify(res.data.user))
          this.$emit('showMeRegist', {'show': false, 'login': true})
        }
      })
    },
    focus (key) {
      if (key === 'phone') {
        this.phoneFocusFlag = true
        this.icodeFocusFlag = false
        this.phoneFlag = true
      } else {
        this.icodeFocusFlag = true
        this.phoneFocusFlag = false
        this.icodeFlag = true
      }
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
  box-sizing: border-box;
}

.modal .error {
  border: 1px solid red;
  box-shadow: 0px 0px 5px 1px red;
}

.modal .focus {
  border: 1px solid #fff;
  box-shadow: 0px 0px 5px 1px #fff;
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
