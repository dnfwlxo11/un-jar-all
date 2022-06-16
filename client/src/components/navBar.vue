<template>
    <div class="nav-bar">
        <div class="row m-0 p-0">
            <div class="col-2 h-100 menus" @click="$router.push('/', () => {})">
                <strong style="font-size: 24px;">운 잘 알</strong>
            </div>
            <div class="col h-100 menus" :class="{'select-menu': currRoute === 'soccer'}">
                <div class="d-flex align-items-center" style="height: 40px;" @click="pageMove('soccer')">
                    <i class="mdi mdi-soccer"></i>&nbsp;축구
                </div>
            </div>
            <div class="col-3"></div>
            <div class="col mt-auto mb-auto">
                <i class="mdi mdi-web mr-2"></i>
                <select class="lang-selector" name="language" id="">
                    <option value="kor">한국어</option>
                    <option value="eng">English</option>
                </select>
            </div>
            <div class="col mt-auto mb-auto">
                <div v-if="!isLogin">
                    <button class="custom-btn" @click="$router.push(`/member/signin?redirect=${$route.path}`, () => {})"><strong>로그인</strong></button>
                </div>
                <div v-else>
                    <button class="custom-btn mr-2" @click="$router.push(`/member/edit`, () => {})"><strong>프로필수정</strong></button>
                    <button class="custom-btn" @click="signOut"><strong>로그아웃</strong></button>
                </div>
                
            </div>
        </div>
        <div class="container">
            <div class="sub-nav-bar" v-if="currRoute === 'soccer'">
                <div class="row h-100">
                    <div class="col mt-auto mb-auto" @click="pageMove();$router.push('/', () => {})">
                        <span :class="{'select-sub-target': subTarget === '/'}">홈</span>
                    </div>
                    <div class="col mt-auto mb-auto" @click="pageMove();$router.push('/community?type=all', () => {})">
                        <span :class="{'select-sub-target': subTarget.includes('/community')}">커뮤니티</span>
                    </div>
                    <div class="col mt-auto mb-auto" @click="pageMove();$router.push('/squadBattle', () => {})">
                        <span :class="{'select-sub-target': subTarget.includes('/squadBattle')}">스쿼드 배틀</span>
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
            isLogin: false,
            currRoute: 'soccer',
            subTarget: '',
        }
    },
    mounted() {
        this.loginCheck()
        this.pageMove()
    },
    methods: {
        loginCheck() {
            const token = this.$cookies.get('token');

            if (token) this.isLogin = true;
        },
        pageMove() {
            this.subTarget = this.$route.path;
        },
        signOut() {
            this.$cookies.remove('token')
            this.isLogin = false;
            this.$router.push('/', () => {})
        },
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
    background-color: #476072;
}

.select-sub-target {
    border-bottom: 3px solid #EEEEEE;
}

.nav-bar {
    min-width: 1024px;
    color: #FFF;
    height: 40px;
    background-color: #334257;
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
    background-color: #476072;
}

.lang-selector:focus {
    border: none;
}
</style>