<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider collapsible hide-trigger  breakpoint='sm' v-model="collapsibled"></Sider>
      <Layout>
        <Header class="header-wrapper">
          <Icon :class="triggerClasses" @click.native="handleCollapsible" type="md-menu" size="32"></Icon>
        </Header>
        <Content></Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  name: "layout",
  data() {
    return {
      collapsibled: false
    };
  },
  computed: {
    triggerClasses() {
      return ["trigger-icon", this.collapsibled ? "rotate" : ""];
    }
  },
  methods: {
    handleCollapsible() {
      this.collapsibled = !this.collapsibled;
    }
  }
};
</script>
<style lang="less">
.layout-wrapper {
  height: 100%;
  .layout-outer {
    height: 100%;
    .header-wrapper {
      background: #fff;
      box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
      padding: 0 23px;
      .trigger-icon {
        cursor: pointer;
        transition: transform .3s ease;
        &.rotate {
          transform: rotate(90deg);
          transition: transform .3s ease;
        }
      }
    }
  }
}
</style>


