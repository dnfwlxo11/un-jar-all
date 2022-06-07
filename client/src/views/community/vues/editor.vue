<template>
    <div class="content">
        <nav-bar></nav-bar>
        <div class="container mb-5" style="padding: 90px 15px;">
            <div class="custom-card">
                <div class="d-flex">
                    <div class="title text-left mb-3 mr-3">
                        <strong>게시글 작성</strong>
                    </div>
                </div>
                <div class="content-title mb-3">
                    <div class="row">
                        <div class="col">
                            <input class="w-100" type="text" placeholder="제목">
                        </div>
                        <div class="col-2">
                            <div>
                                카테고리 지정
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex mb-1">
                    <div class="editor-option ml-3 mr-2">
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
                <div class="content-body mb-3">
                    <textarea class="w-100 h-100" placeholder="남을 비방하거나 혐오, 갈등을 유발하는 글은 제재조치 될 수 있습니다." />
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
    // border-radius: 0.5rem;
    padding: 30px 50px 30px 50px;
}

.title {
    font-size: 20px;
}

.content-body {
    width: 100%;
    height: 500px;

    textarea {
        padding-top: 10px;
        padding-left: 10px;
        outline: none;
    }
}

.editor-option {
    width: 25px;
    height: 25px;
    // border-radius: 0.25rem;
}

.editor-option:hover {
    background-color: lightgrey;
}
</style>