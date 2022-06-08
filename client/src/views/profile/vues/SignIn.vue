<template>
    <div class="sign-in">
        <router-view></router-view>
        <nav-bar></nav-bar>
        <div class="container mb-5" style="padding: 90px 15px;">
            <div class="custom-card ml-auto mr-auto">
                <div class="signin-title text-center">
                    <strong>Sign In</strong>
                </div>
                <hr>
                <div>
                    <div class="mb-3">
                        <input class="mb-1" type="text" placeholder="아이디">
                        <input type="password" placeholder="비밀번호">
                    </div>
                    <div class="mb-2">
                        <button class="w-100 btn btn-outline-dark">Sign In</button>
                    </div>
                    <div class="row m-0 p-0 mb-3">
                        <div class="col text-left">
                            <small>자동 로그인</small>
                        </div>
                        <div class="col-1"></div>
                        <div class="col text-right text-secondary">
                            <small @click="$router.push('/member/find/id')">아이디 찾기</small>
                        </div>
                        <div class="col text-right text-secondary">
                            <small @click="$router.push('/member/find/password')">비밀번호 찾기</small>
                        </div>
                    </div>
                    <div>
                        <button class="btn btn-outline-dark w-50" @click="$router.push('/member/signup')">회원가입</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SignIn'
}
</script>
<style lang="scss" scoped>
a:link,
a:visited,
a:hover {
    color: grey;
    text-decoration: none;
}
.custom-card {
    width: 40%;
    background-color: lightgrey;
    padding: 30px;
}

.signin-title {
    font-size: 30px;
}

.essential {
    border-radius: 50%;
    background-color: red;
    height: 5px;
    width: 5px;
}

input {
    padding-left: 10px;
    height: 40px;
    width: 100%;

    &:focus {
        outline: lightgrey;
    }
}
</style>