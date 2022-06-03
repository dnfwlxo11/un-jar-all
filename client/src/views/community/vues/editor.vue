<template>
    <div class="content">
        <nav-bar></nav-bar>
        <div class="container mb-5" style="padding: 90px 15px;">
            <div class="custom-card">
                <div class="d-flex">
                    <div class="title text-left mb-3 mr-3">
                        <strong>게시글 작성</strong>
                    </div>
                    <div>
                        카테고리 지정
                    </div>
                </div>
                <div class="d-flex mb-3">
                    <div class="editor-option mr-2">
                        <i class="mdi mdi-format-bold"></i>
                    </div>
                    <div class="editor-option mr-2">
                        <i class="mdi mdi-image-plus"></i>
                    </div>
                    <div class="editor-option mr-2">
                        <i class="mdi mdi-format-align-left"></i>
                    </div>
                    <div class="editor-option mr-2">
                        <i class="mdi mdi-format-align-center"></i>
                    </div>
                    <div class="editor-option mr-2">
                        <i class="mdi mdi-format-align-right"></i>
                    </div>
                    <div class="editor-option mr-2">
                        <i class="mdi mdi-format-align-justify"></i>
                    </div>
                </div>
                <div class="content-input mb-3">
                    <input class="w-100 h-100" type="text">
                </div>
                <div class="text-right">
                    <button class="btn btn-outline-dark">등록</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContentList',
    components: {
        Comment
    },
    data() {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
.custom-card {
    color: #000;
    background-color: #E0E0E0;
    border-radius: 0.5rem;
    padding: 30px 50px 30px 50px;
}

.title {
    font-size: 30px;
}

.content-input {
    width: 100%;
    height: 500px;
}

.editor-option {
    width: 25px;
    height: 25px;
    background-color: lightslategray;
    border-radius: 0.25rem;
}

.editor-option:hover {
    background-color: lightgrey;
}
</style>