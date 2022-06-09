<template>
    <div class="find-profile">
        <nav-bar></nav-bar>
        <div class="container mb-5" style="padding: 90px 15px;">
            <div class="custom-card ml-auto mr-auto">
                <div class="find-title text-center mb-4">
                    <strong>{{ type==='id' ? '아이디 찾기' : '비밀번호 찾기' }}</strong>
                </div>
                <div class="row m-0 p-0 mb-4">
                    <div class="col find-menu d-flex justify-content-center align-items-center" :class="{ 'active': type==='id' }" @click="$router.replace('/member/find/id', () => {})">
                        <div><strong>아이디 찾기</strong></div>
                    </div>
                    <div class="col find-menu d-flex justify-content-center align-items-center" :class="{ 'active': type==='password' }" @click="$router.replace('/member/find/password', () => {})">
                        <strong>비밀번호 찾기</strong>
                    </div>
                </div>
                <div v-if="type==='id'" class="mb-5">
                    <div class="find-id d-flex align-items-center">
                        <input type="email" placeholder="이메일" style="width: 75%;">
                        <button class="btn btn-outline-dark pt-1 pb-1">인증요청</button>
                    </div>
                </div>
                <div v-else-if="type==='password'" class="mb-5">
                    <div>
                        <input class="mb-1" type="text" placeholder="아이디">
                    </div>
                    <div class="find-id d-flex align-items-center">
                        <input type="email" placeholder="이메일" style="width: 75%;">
                        <button class="btn btn-outline-dark pt-1 pb-1">인증요청</button>
                    </div>
                </div>
                <div class="mb-2">
                    <button class="w-100 btn btn-outline-dark">찾기</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FindProfile',
    data() {
        return {
            type: 'id'
        }
    },
    mounted() {
        this.type = this.$route.params.type
    },
    watch: {
        $route() {
            this.type = this.$route.params.type
        }
    }
}
</script>
<style lang="scss" scoped>
.custom-card {
    width: 40%;
    background-color: #FFF;
    padding: 30px;
}

.find-title {
    font-size: 30px;
}

.find-menu {
    height: 50px;
    background-color: #F1F3F5;
    border: none;
    color: lightgrey;
}

.find-id {
    border: 1px solid #F1F3F5;
    padding: 5px 10px 5px 0px;
    height: 80px;

    input {
        height: 60px;
        border: none;
        width: 75%;
    }

    button {
        width: 25%;
    }
}

.active {
    border-left: 1px solid #F1F3F5;
    border-right: 1px solid #F1F3F5;
    border-top: 1px solid #F1F3F5;
    background-color: #FFF;
    color: #34282C;
}

input {
    border: 1px solid #F1F3F5;
    border-radius: 0.25rem;
    padding-left: 10px;
    height: 80px;
    width: 100%;

    &:focus {
        outline: #F1F3F5;
    }
}
</style>