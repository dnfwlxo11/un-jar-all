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
                        <span class="w-100 text-right" style="font-size: 18px;">
                            <strong>더보기</strong>
                        </span>
                    </div>
                </div>
            </div>
            <hr>
        </div>
    </div>    
</template>
<script>
export default {
    name: 'CommunityTopTen'
}
</script>
<style lang="scss" scoped>
.custom-card {
    color: #000;
    height: 600px;
    background-color: #E0E0E0;
    border-radius: 0.5rem;
    padding: 30px;
}
</style>