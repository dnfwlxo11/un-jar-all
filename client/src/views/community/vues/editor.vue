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
                        <div class="col pr-0">
                            <input class="w-100" type="text" placeholder="제목">
                        </div>
                        <div class="col-2">
                            <select class="w-100 h-100">
                                <option v-for="(item, idx) of contentCategories" :value="item" :key="idx">{{ item }}</option>
                            </select>
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
                    <button class="btn btn-outline-dark" @click="$router.push('/community')">등록</button>
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
            contentCategories: ['자유', '정치', '게임', '개그']
        }
    }
}
</script>

<style lang="scss" scoped>
.custom-card {
    color: #000;
    background-color: #FFF;
    // border-radius: 0.5rem;
    padding: 30px 50px 30px 50px;
    min-width: 720px;
}

.title {
    font-size: 20px;
}

.content-title {
    input {
        padding-left: 10px;
        height: 40px;
    }
}

.content-body {
    width: 100%;
    height: 500px;

    textarea {
        padding-top: 10px;
        padding-left: 10px;
        outline: none;
        resize: none;
    }
}

.editor-option {
    font-size: 20px;
    width: 30px;
    height: 30px;
    
    &:hover {
        background-color: lightgrey;
    }
}
</style>