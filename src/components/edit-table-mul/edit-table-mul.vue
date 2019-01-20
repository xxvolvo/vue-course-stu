<template>
  <Table :columns="insideColums" :data="value"></Table>
</template>
<script>
import clonedeep from "clonedeep";
export default {
  name: "EditTableMul",
  data() {
    return {
      edittingId: "",
      insideColums: [],
      edittingContent: "",
      insideData: []
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
    },
    value() {
      this.handleColums();
    }
  },
  methods: {
    handleClick({ row, index, column }) {
      let keyIndex = this.insideData[index].edittingKeyArr
        ? this.insideData[index].edittingKeyArr.indexOf(column.key)
        : -1;
      let rowObj = this.insideData[index];
      if (keyIndex > -1) {
        rowObj.edittingKeyArr.splice(keyIndex, 1);
        this.insideData.splice(index, 1, rowObj);
        this.$emit("input", this.insideData);
        this.$emit("on-edit", {
          row,
          index,
          column,
          newValue: this.insideData[index][column.key]
        });
      } else {
        rowObj.edittingKeyArr = rowObj.edittingKeyArr
          ? [...rowObj.edittingKeyArr, column.key]
          : [column.key];
        this.insideData.splice(index, 1, rowObj);
      }
    },
    handleInput(row, index, column, newValue) {
      this.insideData[index][column.key] = newValue;
    },
    handleColums() {
      this.insideData = clonedeep(this.value);
      const insideColums = this.columns.map(item => {
        if (!item.render && item.editable) {
          item.render = (h, { row, index, column }) => {
            const keyArr = this.insideData[index]
              ? this.insideData[index].edittingKeyArr
              : [];
            return (
              <div>
                {keyArr && keyArr.indexOf(column.key) > -1 ? (
                  <i-input
                    value={row[column.key]}
                    on-input={this.handleInput.bind(this, row, index, column)}
                    style="width:50px;"
                  />
                ) : (
                  <span>{row[column.key]}</span>
                )}
                <i-button
                  on-click={this.handleClick.bind(this, { row, index, column })}
                >
                  {keyArr && keyArr.indexOf(column.key) > -1
                    ? "编辑"
                    : "保存"}
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

