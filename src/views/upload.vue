<template>
  <div>
    <Upload
      ref="Test"
      :action="`${baseURL}/home/Test1`"
      multiple
      :on-success="handleSuccess"
      :before-upload="handleBefore"
      :data="getData"
    >
      <button>上传</button>
    </Upload>
    <input type="text" v-model="name">
    <button @click="handleClick">上传吧</button>
  </div>
</template>
<script>
import { baseURL } from "@/config";
export default {
  data() {
    return {
      baseURL,
      file: {},
      name: ""
    };
  },
  computed: {
    getData() {
      return {
        name: this.name
      };
    }
  },
  methods: {
    handleBefore(file) {
      this.file = file;
      return false;
    },
    handleClick() {
      this.$refs.Test.post(this.file, this.getData);
    },
    handleSuccess(response, file, fileList) {
      console.log(response);
    }
  }
};
</script>

