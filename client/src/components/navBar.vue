<template>
    <div class="nav-bar">
        <div class="row m-0 p-0" style="height: 40px;">
            <div class="col-2 mt-auto mb-auto">
                <span style="font-size: 20px;">운 잘 알</span>
            </div>
            <div class="col mt-auto mb-auto">
                <i class="mdi mdi-soccer"></i> 축구
            </div>
            <div class="col mt-auto mb-auto">
                <i class="mdi mdi-volleyball"></i> 배구
            </div>
            <div class="col-5"></div>
            <div class="col mt-auto mb-auto">
                <i class="mdi mdi-web mr-2"></i>
                <select class="lang-selector" name="language" id="">
                    <option value="kor">한국어</option>
                    <option value="eng">English</option>
                </select>
            </div>
            <div class="col mt-auto mb-auto">
                <button class="custom-btn"><strong>로그인</strong></button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NavBar'
}
</script>
<style lang="scss" scoped>
.nav-bar {
    color: #FFF;
    height: 40px;
    background-color: #35435D;
    padding-bottom: 40px;
}

.lang-selector {
    padding: 3px;
    color: #FFF;
    background-color: inherit;
    border: 1px solid #FFF;
    border-radius: 0.25rem;
}

.lang-selector option {
    padding: 5px;
    color: #FFF;
    border-radius: 0.25rem;
    background-color: black;
}

.lang-selector:focus {
    border: none;
}
</style>