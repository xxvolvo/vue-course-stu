<template>
  <div>
    <Tree :data="forderTree" :render="renderFunc"></Tree>
  </div>
</template>
<script>
import { getFolderList, getFileList } from "@/api/data";
import { putFileInFolder, transferFolderToTree } from "@/lib/util";
export default {
  data() {
    return {
      forderTree: [],
      renderFunc: (h, { root, node, data }) => {
        return <span class="tree-item">{data.title}</span>;
      }
    };
  },
  mounted() {
    // getFolderList().then(res => {
    //   console.log(res);
    // });
    // getFileList().then(res => {
    //   console.log(res);
    // });
    Promise.all([getFolderList(), getFileList()]).then(res => {
      this.forderTree = transferFolderToTree(putFileInFolder(res[0], res[1]));
    });
  }
};
</script>
<style lang="less">
.tree-item {
  display: inline-block;
  width: ~"calc(100% - 50px)"
}
</style>


