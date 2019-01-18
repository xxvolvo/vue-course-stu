<template>
  <div>
    <input type="text" v-model="userName">
    <br>
    <input type="password" v-model="passWord">
    <button @click="hanldeClick">登录</button>
  </div>
</template>
 <script>
import { mapActions } from "vuex";
export default {
  name: "login_page",
  data() {
    return {
      userName: "",
      passWord: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    hanldeClick() {
      this.login({
        username: this.userName,
        password: this.passWord
      })
        .then(() => {
          console.log("登录结果");
          this.$router.push({name:'home'});
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

