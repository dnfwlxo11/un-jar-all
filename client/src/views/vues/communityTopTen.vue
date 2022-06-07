<template>
    <div class="community-top-ten">
        <div class="custom-card">
            <div class="text-left" style="font-size: 25px;">
                <div class="row">
                    <div class="col-6 text-left">
                        <strong>인기 게시글</strong>
                    </div>
                    <div class="col-4"></div>
                    <div class="col-2 d-flex justify-content-end align-items-end">
                        <span class="w-100 text-right" style="font-size: 18px;" @click="$router.push('/community')">
                            <strong>더보기</strong>
                        </span>
                    </div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-md-6">
                    <div class="row m-0 p-0 community-content" v-for="(item, idx) of [1,2,3,4,5,6,7,8,9,10]" :key="idx">
                        <div class="col-1 m-auto">
                            <strong>{{item}}</strong>
                        </div>
                        <div class="col m-auto">
                            <div class="text-left">
                                <strong>재밌는 게시글이다</strong>
                            </div>
                            <div class="d-flex">
                                <div>22.06.08</div> &nbsp;&nbsp;&nbsp;
                                <div>임대인</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    name: 'CommunityTopTen',
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
    padding: 30px;
}

.community-content {
    height: 70px;
    border: 0.5px solid lightgrey;
}
</style>