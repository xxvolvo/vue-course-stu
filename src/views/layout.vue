<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider collapsible hide-trigger breakpoint="sm" v-model="collapsibled">
        <side-menu :collapsibled="collapsibled" :list="menulist"></side-menu>
      </Sider>
      <Layout>
        <Header class="header-wrapper">
          <Icon :class="triggerClasses" @click.native="handleCollapsible" type="md-menu" size="32"></Icon>
        </Header>
        <Content class="content-con">
          <Card shadow class="page-card">
            <router-view/>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import SideMenu from "_c/side-menu";
export default {
  name: "layout",
  components: {
    SideMenu
  },
  data() {
    return {
      collapsibled: false,
      menulist: [
        {
          title: "111",
          name: "menu1",
          icon: "ios-alarm-outline"
        },
        {
          title: "222",
          name: "menu2",
          icon: "ios-alarm-outline"
        },
        {
          title: "333",
          name: "menu3",
          icon: "ios-alarm-outline",
          children: [
            {
              title: "333-1",
              name: "menu3_1",
              icon: "ios-alarm-outline"
            },
            {
              title: "333-2",
              name: "menu3_2",
              icon: "ios-alarm-outline",
              children: [
                {
                  title: "333-2-1",
                  name: "menu3_2_1",
                  icon: "ios-alarm-outline"
                },
                {
                  title: "333-2-2",
                  name: "menu3_2_2",
                  icon: "ios-alarm-outline"
                }
              ]
            }
          ]
        }
      ]
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
        transition: transform 0.3s ease;
        &.rotate {
          transform: rotate(90deg);
          transition: transform 0.3s ease;
        }
      }
    }
    .content-con {
      padding: 10px;
    }

    .page-card {
      min-height: ~"calc(100vh - 84px)";
    }
  }
}
</style>


