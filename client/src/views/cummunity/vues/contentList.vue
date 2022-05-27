<template>
    <div class="content-list">
        <div class="custom-card">
            <section>
                <section class="mb-5" v-for="(item, idx) of [1,2,3,4,5,6,7,8,9,10]" :key="idx">
                    <div class="row">
                        <div class="col-1 m-auto">
                            {{item}}
                        </div>
                        <div class="col-9 m-auto">
                            {{item}}번째 게시글 입니다.
                        </div>
                        <div class="col-2 m-auto">
                            <img src="@/assets/son.png">
                        </div>
                    </div>
                </section>
                <div>
                    페이지네이션 부분입니다.
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ContentList'
}
</script>
<style lang="scss" scoped>
.custom-card {
    color: #000;
    background-color: #E0E0E0;
    border-radius: 0.5rem;
    padding: 10px 10px 30px 30px;
}

img {
    width: 100%;
    object-fit: cover;
}
</style>