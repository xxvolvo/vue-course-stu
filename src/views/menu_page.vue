<template>
  <div class="menu-box">
    <!-- <a-menu>
      <a-menu-item>111</a-menu-item>
      <a-menu-item>112221</a-menu-item>
      <a-submenu>
        <div slot="title">title</div>
        <a-menu-item>333-1</a-menu-item>
        <a-submenu>
          <div slot="title">title2</div>
          <a-menu-item>333-2-1</a-menu-item>
          <a-menu-item>333-2-2</a-menu-item>
        </a-submenu>
      </a-submenu>
    </a-menu>-->
    <a-menu>
      <template v-for="(item,index) in list">
        <a-menu-item v-if="!item.children" :key="`menu_item_${index}`">{{item.title}}</a-menu-item>
        <re-submenu v-else :key="`menu_item_${index}`" :parent="item" :index="index"></re-submenu>
      </template>
    </a-menu>
  </div>
</template>
<script>
import menuComponents from "_c/menu";
import ReSubmenu from "./re-submenu.vue";
export default {
  name: "menu_page",
  components: {
    ...menuComponents,
    ReSubmenu
  },
  data() {
    return {
      list: [
        { title: 111 },
        { title: 222 },
        {
          title: 333,
          children: [
            { title: '333-1' },
            {
              title: '333-2',
              children: [{ title: '333-2-1' }, { title: '333-2-2' }]
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="less">
.menu-box {
  width: 300px;
  height: 400px;
}
</style>


