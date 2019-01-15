<template>
  <div>{{name}}</div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: "XX"
    }
  },
  //钩子函数
  //组件更新时触发，例如参数变化页面重载
  beforeRouteUpdate(to,from,next){
    console.log("Update")
    next();
  }
};
</script>

