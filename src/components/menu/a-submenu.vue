<template>
  <ul class="a-submenu">
    <div class="a-submenu-title" @click="handleClick">
      <slot name="title"></slot>
      <span class="shrink-icon" :style="{transform:`rotateZ(${showChild?0:180}deg)`}">↑</span>
    </div>
    <div v-show="showChild" class="a-submenu-child-box">
      <slot></slot>
    </div>
  </ul>
</template>
<script>
export default {
  name: "ASubmenu",
  data() {
    return {
      showChild: false
    };
  },
  methods: {
    handleClick() {
      this.showChild = !this.showChild;
    }
  }
};
</script>
<style lang="less">
.a-submenu {
  &-title {
    background: #006600;
    position: relative;
    .shrink-icon {
      position: absolute;
      top: 0px;
      right: 10px;
    }
  }
  &-child-box {
      padding-left: 20px;
  }
}
</style>


