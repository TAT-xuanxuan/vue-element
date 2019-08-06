<template>
    <div>
        <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card">
            <i class="el-icon-plus"></i>
            <div slot="file" slot-scope="{file}">
                <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                <span class="el-upload-list__item-actions">
                    <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                        <i class="el-icon-zoom-in"></i>
                    </span>
                    <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                        <i class="el-icon-download"></i>
                    </span>
                    <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                        <i class="el-icon-delete"></i>
                    </span>
                </span>
                <div>文件</div>
            </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
    </div>
</template>
<script>
export default {
    name: "Upload",
    data() {
        return {
            dialogImageUrl: '',
            dialogVisible: false
        };
    },
    methods: {
        //删除文件
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        //预览文件
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        //文件改变
        handleChange(file, fileList) {
            this.fileList = fileList.slice(-3);
        }
    }
}
</script>
<style lang="less" scoped=""></style>