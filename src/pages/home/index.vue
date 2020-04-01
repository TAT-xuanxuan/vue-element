<template>
  <div class="page-home">
    <el-button @click="upload" type="primary">上传</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    upload() {
      this.$upload({
        title: "下载文件"
      });
    }
  }
};
</script>
<style lang="less" scoped>
</style>