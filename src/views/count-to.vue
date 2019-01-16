<template>
  <div>
    <count-to ref="CountTo" :end-val="newcount" @on-animation-end='handleEnd'>
      <span slot="left">ceshi</span>
      <span slot="right">yuan</span>
    </count-to>
    <button @click="getumber">dianji</button>
    <button @click="updatenumber">dianji2</button>
    {{count}} {{count2}}
  </div>
</template>
<script>
import CountTo from "@/components/count-to";
export default {
  data() {
    return {
      count: 0,
      count2: 0,
      newcount: 100
    };
  },
  components: { CountTo },
  methods: {
    getumber() {
      this.count = this.$refs.CountTo.getCount();
      this.count2 = this.count + 1;
    },
    updatenumber() {
      this.newcount += 50;
    },
    handleEnd(endval){
        console.log(endval)
    }
  }
};
</script>
