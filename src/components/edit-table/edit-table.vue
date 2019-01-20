<template>
  <Table :columns="insideColums" :data="value"></Table>
</template>
<script>
import clonedeep from "clonedeep";
export default {
  name: "EditTable",
  data() {
    return {
      edittingId: "",
      insideColums: [],
      edittingContent: ""
    };
  },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    columns() {
      this.handleColums();
    }
  },
  methods: {
    handleClick({ row, index, column }) {
      const isEditting = this.edittingId === `${column.key}_${index}`;
      if (isEditting) {
        let talbeData = clonedeep(this.value);
        talbeData[index][column.key] = this.edittingContent;
        this.$emit("input", talbeData);
        this.$emit("on-edit", {
          row,
          index,
          column,
          newValue: this.edittingContent
        });
        this.edittingId = "";
        this.edittingContent = "";
      } else {
        this.edittingId = `${column.key}_${index}`;
      }
    },
    handleInput(newValue) {
      this.edittingContent = newValue;
    },
    handleColums() {
      const insideColums = this.columns.map(item => {
        if (!item.render && item.editable) {
          item.render = (h, { row, index, column }) => {
            const isEditting = this.edittingId === `${column.key}_${index}`;
            return (
              <div>
                {isEditting ? (
                  <i-input
                    value={row[column.key]}
                    on-input={this.handleInput}
                    style="width:50px;"
                  />
                ) : (
                  <span>{row[column.key]}</span>
                )}
                <i-button
                  on-click={this.handleClick.bind(this, { row, index, column })}
                >
                  {!isEditting ? "编辑" : "保存"}
                </i-button>
              </div>
            );
          };
          return item;
        } else return item;
      });
      this.insideColums = insideColums;
    }
  },
  mounted() {
    this.handleColums();
  }
};
</script>

