<template>
  <div>{{message}}</div>
</template>
<script>
export default {
  data() {
    return {
      message: ""
    };
  },
  mounted() {
    this.$bus.$on("on-click", mes => {
      console.log(mes);
      this.message = mes;
    });
  }
};
</script>

