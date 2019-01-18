<template>
  <Dropdown placement="right-start" @on-click="handleClick">
    <span class="drop-menu-span" :style="titleSytle">
      <Icon :type="parent.icon" size="20" :color="iconColor"/>
      <span v-if="showTitle">{{parent.title}}</span>
    </span>
    <DropdownMenu slot="list">
      <template v-for="item in parent.children">
        <re-dropdwon v-if="item.children" :key="`drop_${item.name}`" :parent="item"></re-dropdwon>
        <DropdownItem v-else :key="`drop_${item.name}`" :name="item.name">
          <Icon :type="item.icon" size="20" color="#515a6e"/>
          {{item.title}}
        </DropdownItem>
      </template>
    </DropdownMenu>
  </Dropdown>
</template>
<script>
export default {
  name: "ReDropdwon",
  props: {
    parent: {
      type: Object,
      default: () => ({})
    },
    iconColor: {
      type: String,
      default: "#515a6e"
    },
    showTitle: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    titleSytle() {
      return {
        textAlign: this.showTitle ? "left" : "center",
        paddingLeft: this.showTitle ? "16px" : "0"
      };
    }
  },
  methods: {
    handleClick(name) {
      if (!this.showTitle) {
        console.log(name);
        this.$emit('on-select', name)
      }
    }
  }
};
</script>

