<template>
    <div class="comment">
        <div class="d-flex mb-3">
            <div class="comment-author">
                <strong>{{author}}</strong>
            </div>
            <div class="split-vertical"></div>
            <div class="comment-time">
                {{createTime}}
            </div>
        </div>
        <div class="text-left comment-content mb-3">
            {{content}}
        </div>
        <div class="text-left">
            <div>
                <div class="d-flex" v-if="!isReply">
                    <div class="mr-3">
                        <i class="mdi mdi-chevron-down"></i> 답글보기
                    </div>
                    <div @click="isReply=true;">
                        <i class="mdi mdi-comment-multiple-outline"></i> 답글
                    </div>
                </div>
                <div v-else class="ml-4" style="font-size: 14px;">
                    <div class="mb-1">
                        <strong>임대인</strong>
                    </div>
                    <div class="replyInput mb-2 w-100">
                        <input class="w-100" type="text" v-model="replyContent">
                    </div>
                    <div class="d-flex justify-content-end">
                        <button class="btn btn-outline-dark mr-2" style="font-size: 12px;" @click="cancelReply()">취소</button>
                        <button class="btn btn-dark" style="font-size: 12px;" @click="submitReply()">등록</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'comment',
    props: {
        author: {
            type: String,
            default: '',
        },
        content: {
            type: String,
            default: '',
        },
        createTime: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            isReply: false,
            replyContent: null,
        }
    },
    methods: {
        reply() {
            
        },
        cancelReply() {
            this.isReply = false;
            this.replyContent = null;
        },
        submitReply() {
            this.isReply = false;
            this.replyContent = null;
        },
    },
}
</script>

<style lang="scss" scoped>
.replyInput {
    input {
        border: none;
        border-bottom: 1px solid #334257;
        background-color: inherit;
        outline: none;
    }
}

.like-btn,
.dislike-btn {
    font-size: 30px;
}

.split-vertical {
    margin-left: 10px;
    margin-right: 10px;
    border-left: 1px solid gray;
}
</style>