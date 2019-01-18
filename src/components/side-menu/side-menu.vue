<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu width="auto" theme="dark" v-show="!collapsibled" @on-select="handleClick">
      <template v-for="item in list">
        <re-submenu
          v-if="item.children"
          :key="`menu_${item.name}`"
          :name="item.name"
          :parent="item"
        ></re-submenu>
        <menu-item v-else :key="`menu_${item.name}`" :name="item.name">
          <Icon :type="item.icon"/>
          {{item.title}}
        </menu-item>
      </template>
    </Menu>
    <div class="drop-wrapper" v-show="collapsibled">
      <template v-for="item in list">
        <re-dropdwon
          v-if="item.children"
          :key="`drop_${item.name}`"
          :parent="item"
          iconColor="#fff"
          :show-title="false"
          @on-select='handleSelect'
        ></re-dropdwon>
        <Tooltip v-else transfer :content="item.title" placement="right" :key="`drop_${item.name}`">
          <span class="drop-menu-span" @click='handleSelect(item.name)'>
            <Icon :type="item.icon" color="#fff" size="20"/>
          </span>
        </Tooltip>
      </template>
    </div>
  </div>
</template>
<script>
import ReSubmenu from "./re-submenu.vue";
import ReDropdwon from "./re-dropdown.vue";
export default {
  name: "SideMenu",
  components: {
    ReSubmenu,
    ReDropdwon
  },
  props: {
    collapsibled: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleSelect(name) {
      console.log(name);
    },
    handleClick (name) {
      console.log(name)
    }
  }
};
</script>
<style lang="less">
.side-menu-wrapper {
  width: 100%;
  .drop-menu-span,
  .ivu-tooltip {
    width: 100%;
    display: block;
    text-align: center;
    padding: 5px 0;
  }
  .drop-wrapper > .ivu-dropdown {
    display: block;
    padding: 5px;
    margin: 0 auto;
  }
}
</style>


