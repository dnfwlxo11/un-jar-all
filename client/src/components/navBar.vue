<template>
    <div class="nav-bar">
        <div class="row m-0 p-0">
            <div class="col-2 h-100 menus" @click="$router.push('/', () => {})">
                <span style="font-size: 24px;">운 잘 알</span>
            </div>
            <div class="col h-100 menus" :class="{'select-menu': currRoute === 'soccer'}">
                <div class="d-flex align-items-center" style="height: 40px;" @click="pageMove('soccer')">
                    <i class="mdi mdi-soccer"></i>&nbsp;축구
                </div>
            </div>
            <!-- <div class="col menus" :class="{'select-menu': currRoute==='volly'}">
                <div class="d-flex align-items-center" style="height: 40px;" @click="pageMove('volly')">
                    <i class="mdi mdi-volleyball"></i>&nbsp;배구
                </div> 
            </div> -->
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
        <div class="container">
            <div class="sub-nav-bar" v-if="currRoute === 'soccer'">
                <div class="row h-100">
                    <div class="col mt-auto mb-auto" @click="$router.push('/', () => {})">
                        <span :class="{'select-sub-target': subTarget === '/'}">홈</span>
                    </div>
                    <div class="col mt-auto mb-auto" @click="$router.push('/cummunity', () => {})">
                        <span :class="{'select-sub-target': subTarget === '/cummunity'}">커뮤니티</span>
                    </div>
                    <div class="col mt-auto mb-auto" @click="$router.push('/squardBattle', () => {})">
                        <span :class="{'select-sub-target': subTarget === '/squardBattle'}">스쿼드 배틀</span>
                    </div>
                    <div class="col-6"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NavBar',
    data() {
        return {
            currRoute: 'soccer',
            subTarget: 'home',
        }
    },
    methods: {
        pageMove(target) {
            this.subTarget = 'home'
            this.currRoute = target

            // if (this.currRoute === 'soccer') window.location.href = 'http://localhost:8080/'
            // else if (this.currRoute === 'volly') window.location.href = 'http://localhost:8080/'
        },
    },
    created() {
        this.subTarget = this.$route.path
    },
}
</script>
<style lang="scss" scoped>
a {
    color: #FFF;
    text-decoration: none;
}

.menus {
    display: flex;
    justify-content: center;
    align-items: center;
}

.select-menu {
    border-radius: 0.75rem 0.75rem 0 0;
    background-color: #27282d;
}

.select-sub-target {
    border-bottom: 3px solid #FFF;
}

.nav-bar {
    color: #FFF;
    height: 40px;
    background-color: #35435D;
}

.sub-nav-bar {
    height: 50px;
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