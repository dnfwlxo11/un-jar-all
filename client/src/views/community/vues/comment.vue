<template>
    <div class="comment">
        <div class="custom-card">
            <div class="row mb-4">
                <div class="d-flex">
                    <div class="mr-2" style="font-size: 25px;">
                        <strong>댓글</strong>
                    </div>
                    <div class="d-flex align-items-end" style="font-size: 20px;">
                        <small style="display: inline-block;">(총 {{ comments.length }}개)</small>
                    </div>
                </div>
            </div>
            <div v-if="comments.length">
                <div class="comments" v-for="(comment, idx) of comments" :key="idx">
                    <div class="row mb-3">
                        <div class="col">
                            <div class="like-btn">
                                <i class="mdi mdi-chevron-up"></i>
                            </div>
                            <div>{{likes}}</div>
                            <div class="dislike-btn">
                                <i class="mdi mdi-chevron-down"></i>
                            </div>
                        </div>
                        <div class="col-11">
                            <div class="d-flex mb-3">
                                <div class="comment-author">
                                    <strong>{{comment.name}}</strong>
                                </div>
                                <div class="split-vertical"></div>
                                <div class="comment-time">
                                    {{comment.createTime}}
                                </div>
                            </div>
                            <div class="text-left comment-content mb-3">
                                {{comment.content}}
                            </div>
                            <div class="text-left">
                                <small>
                                    <i class="mdi mdi-comment-multiple-outline"></i> 답글
                                </small>
                            </div>
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
            <div v-else class="none-comments">
                <div class="d-flex justify-content-center align-items-center">
                    <i class="mdi mdi-comment-text-multiple-outline" style="font-size: 60px;"></i>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <strong>등록된 댓글이 없습니다.</strong>
                </div>
            </div>
        </div>
        
    </div>    
</template>

<script>
export default {
    name: 'comment',
    data() {
        return {
            comments: [
                {
                    'name': '임대인',
                    'content': '손흥민 잘한다',
                    'createTime': '2022.06.03 15:42:11',
                },
                {
                    'name': '임대인',
                    'content': '손흥민 잘한다',
                    'createTime': '2022.06.03 15:42:11',
                },
                {
                    'name': '임대인',
                    'content': '손흥민 잘한다',
                    'createTime': '2022.06.03 15:42:11',
                },
            ],
            likes: 0,
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