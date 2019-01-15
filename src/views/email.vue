<template>
  <button @click="handleClick">点击</button>
</template>
<script>
export default {
  methods:{
    handleClick(){
      this.$bus.$emit('on-click','xxxx')
    }
  }
};
</script>

