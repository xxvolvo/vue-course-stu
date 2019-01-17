<template>
  <list :list="list" :render='renderFunc'></list>
</template>
<script>
import List from "_c/list";

export default {
  data() {
    return {
      list: [{ name: '100' }, { name: '45' }]
    };
  },
  components: {
    List
  },
  methods: {
    renderFunc(h, name) {
      return h(
        "i",
        {
          style: {
            color: 'red'
          }
        },
        name
      );
    }
  }
};
</script>
