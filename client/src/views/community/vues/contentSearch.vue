<template>
    <div class="content-search">
        <div class="custom-card">
            <div class="row m-0 p-0 mb-4">
                <div class="col mt-auto mb-auto text-left">
                    <strong>{{category}}</strong>
                </div>
                <div class="col-8"></div>
                <div class="col ml-auto text-right">
                    <button class="btn btn-outline-dark" @click="$router.push('/community/editor')">글쓰기</button>
                </div>
            </div>
            <div class="row m-0 p-0">
                <div class="col m-auto"><i class="mdi mdi-notification-clear-all" style="font-size: 15px;"></i> 전체</div>
                <div class="col m-auto"><i class="mdi mdi-fire" style="font-size: 15px;"></i> 인기</div>
                <div class="col-6"></div>
                <div class="col-3 d-flex">
                    <input class="search-input pr-3" style="width: 85%;" type="text" placeholder="검색">
                    <button class="search-btn" style="width: 15%;">
                        <i class="search-icon mdi mdi-magnify" style="font-size: 20px;"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ContentSearch',
    props: {
        category: {
            type: String,
            default: '전체',
        }
    }
}
</script>
<style lang="scss" scoped>
.custom-card {
    height: 120px;
    padding: 10px 10px 30px 30px;
}

.search-input {
    color: #EEEEEE;
    text-align: left;
    padding: 0px;
    padding-left: 10px;
    outline: none;
    border: none;
    background-color: #476072;
    // border-radius: 0.5rem 0 0 0.5rem;
    width: 50%;
    height: 40px;
}

.search-input:focus {
    outline: none;
}

.search-icon {
    border: none;
    outline: none;
    color: #FFF;
}

.search-btn {
    border: none;
    border-left: 2px solid #EEEEEE;
    background-color: #476072;
    // border-radius: 0 0.5rem 0.5rem 0;
    height: 40px;
}
</style>