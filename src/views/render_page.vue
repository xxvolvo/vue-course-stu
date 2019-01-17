<template>
  <div>
    <list :list="list">
      <count-to slot-scope="count" :end-val='count.number'></count-to>
    </list>
  </div>
</template>
<script>
import List from "_c/list";
import CountTo from "_c/count-to";
export default {
  data() {
    return {
      list: [{ number: 100 }, { number: 45 }]
    };
  },
  components: {
    List,
    CountTo
  },
  methods: {
    renderFunc(h, number) {
      // return h(
      //   "i",
      //   {
      //     style: {
      //       color: 'red'
      //     }
      //   },
      //   name
      // );
      //JSX写法
      return (
        // <i on-click={this.handleClick} style={{ color: "red" }}>
        //   {name}
        // </i>
        <CountTo
          nativeOn-click={this.handleEnd}
          on-on-animation-end={this.handleEnd}
          endVal={number}
        />
      );
    },
    handleClick(event) {
      console.log(event);
    },
    handleEnd(event) {
      console.log(event);
    }
  }
};
</script>
