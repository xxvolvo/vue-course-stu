<template>
  <div class="split-pane-wrapper" ref="outer">
    <div class="pane pane-left" :style="{width:leftOffSetFromat}">
      <slot name="left"></slot>
    </div>
    <div
      class="pane-trigger-con"
      @mousedown="handleMousedown"
      :style="{left:triggerLeft, width:`${triggerWidth}px`}"
    ></div>
    <div class="pane pane-right" :style="{left:leftOffSetFromat}">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "SplitPane",
  props: {
    value: {
      type: Number,
      default: 0.8
    },
    triggerWidth: {
      type: Number,
      default: 8
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      canMove: false,
      initOffset: 0
    };
  },
  computed: {
    leftOffSetFromat() {
      return `${this.value * 100}%`;
    },
    triggerLeft() {
      return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)`;
    }
  },
  methods: {
    handleMousemove(event) {
      if (!this.canMove) return;
      const outerRect = this.$refs.outer.getBoundingClientRect();
      let offsetPercent =
        (event.pageX -
          this.initOffset +
          this.triggerWidth / 2 -
          outerRect.left) /
        outerRect.width;
      if (offsetPercent < this.min) {
        offsetPercent = this.min;
      }
      if (offsetPercent > this.max) {
        offsetPercent = this.max;
      }
      // this.$emit("input", offsetPercent);
      this.$emit("update:value", offsetPercent);
    },
    handleMouseup(event) {
      this.canMove = false;
    },
    handleMousedown(event) {
      document.addEventListener("mousemove", this.handleMousemove);
      document.addEventListener("mouseup", this.handleMouseup);
      this.initOffset =
        event.pageX - event.srcElement.getBoundingClientRect().left;
      this.canMove = true;
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
      right: 0;
      bottom: 0;
    }
    &-trigger-con {
      height: 100%;
      background: red;
      position: absolute;
      top: 0;
      z-index: 10;
      user-select: none;
      cursor: col-resize;
    }
  }
}
</style>
