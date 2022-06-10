<template>
    <div class="content-list">
        <div class="custom-card">
            <section v-for="(item, idx) of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]" :key="idx">
                <div class="row m-0 p-0 content" @click="$router.push(`/community/content/${idx + 1}`, () => {})">
                    <div class="col-1 m-auto">
                        {{item}}
                    </div>
                    <div class="col-9 m-auto">
                        {{item}}번째 게시글 입니다.
                    </div>
                    <div class="col-2 m-auto">
                        대인{{idx}}
                        <!-- <img src="@/assets/son.png"> -->
                    </div>
                </div>
            </section>
            <div class="pagination">
                <button class="m-auto btn btn-outline-dark" style="width: 100px;">더보기</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ContentList'
}
</script>
<style lang="scss" scoped>

img {
    width: 100%;
    object-fit: cover;
}

.content {
    border-bottom: 1px solid #F1F3F5;
    min-height: 70px;
}

.content:hover {
    background-color: #F1F3F5;
}

.pagination {
    height: 70px;
}
</style>