<template>
  <div class="component-extend-upload">{{title}}</div>
</template>
<script>
export default {
  created() {
    console.log(this.title);
  },
  props: {
    title: {
      type: String,
      default: "上传文件"
    }
  }
};
</script>
<style lang="less" scoped>
.component-extend-upload {
}
</style>