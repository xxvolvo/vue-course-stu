<template>
  <div class="split-pane-wrapper">
    <div class="pane pane-left" :style="{width:leftOffSetFromat}"></div>
    <div></div>
    <div class="pane pane-right" :style="{left:leftOffSetFromat}"></div>
  </div>
</template>
<script>
export default {
  name: "SplitPane",
  data() {
    return {
      leftOffSet: 0.3
    };
  },
  computed: {
    leftOffSetFromat() {
      return `${this.leftOffSet * 100}%`;
    }
  },
  methods: {
    update() {
      this.leftOffSet += 0.1;
    }
  }
};
</script>
<style lang="less">
.split-pane-wrapper {
  height: 100%;
  position: relative;
  .pane {
    height: 100%;
    position: absolute;
    top: 0;
    &-left {
      background: pink;
    }
    &-right {
      background: green;
      top: 0;
      bottom: 0;
    }
  }
}
</style>

