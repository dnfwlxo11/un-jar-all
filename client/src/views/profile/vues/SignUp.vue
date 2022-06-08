<template>
    <div class="sign-up">
        <nav-bar></nav-bar>
        <div class="container mb-5" style="padding: 90px 15px;">
            <div class="custom-card ml-auto mr-auto">
                <div class="signin-title text-left">
                    <strong>Sign Up</strong>
                </div>
                <hr>
                <div class="text-left">
                    <div class="mb-3">
                        <div class="mb-1">
                            <strong>ID <span class="essential"></span></strong>
                        </div>
                        <div>
                            <input type="text" placeholder="영문, 숫자 4-20자">
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="mb-1">
                            <strong>PASSWORD <span class="essential"></span></strong>
                        </div>
                        <div class="mb-1">
                            <input type="password" placeholder="영문 + 숫자 + 특수문자 8자 이상">
                        </div>
                        <div>
                            <input type="password" placeholder="비밀번호 재입력">
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="mb-1">
                            <strong>EMAIL <span class="essential"></span></strong>
                        </div>
                        <div class="mb-1">
                            <input type="password" placeholder="이메일 입력">
                            <small>비밀번호 찾기 시 활용됩니다.</small>
                        </div>
                    </div>
                    <div>
                        <button class="w-100 btn btn-outline-dark">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SignUp'
}
</script>
<style lang="scss" scoped>
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