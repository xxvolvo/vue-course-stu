<template>
  <div class="split-pane-con">
    <split-pane></split-pane>
  </div>
</template>
<script>
import SplitPane from "_c/split-pane";
export default {
  components: {
    SplitPane
  }
};
</script>
<style lang="less">
.split-pane-con {
  height: 200px;
  width: 400px;
  background: rebeccapurple;
}
</style>

