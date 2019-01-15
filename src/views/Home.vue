<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">下一页</button>
    <button @click="handleClick('replace')">下一页</button>
    {{food}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    handleClick(par) {
      if (par === "back") this.$router.go(-1);
      //  else if(par==='push') this.$router.push({name:'argu',params:{
      //    name:'XXX'
      //  }})
      else if (par === "push") {
        const name = "XXX";
        this.$router.push({ path: `/argu/${name}` }); //ES6模板语法
      } else if (par === "replace") this.$router.replace({ name: "parent" });
    }
  },
  props: {
    food: {
      type: String,
      default: "apple"
    }
  },
  beforeRouteEnter(to, from, next) {
    //组件钩子
    next(vm => {
      //vm-组件内实例
    });
  },
  beforeRouteLeave(to, from, next) {
    next();
    // next(false) 不跳转
  },
  beforeRouteUpdate(to, from, next){
    //路由发生变化 组件被复用时调用
    //例如当前页面参数变化
    console.log("Update")

  }
};
</script>
