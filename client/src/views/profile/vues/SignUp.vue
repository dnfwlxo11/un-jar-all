<template>
    <div class="sign-up">
        <nav-bar></nav-bar>
        <div class="container mb-5" style="padding: 90px 15px;">
            <div class="custom-card ml-auto mr-auto">
                <div class="signin-title text-left mb-4">
                    <strong>회원가입</strong>
                </div>
                <div class="text-left">
                    <div class="mb-3">
                        <div class="mb-1">
                            <strong>아이디</strong>
                        </div>
                        <div>
                            <input type="text" placeholder="영문, 숫자 4-20자">
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="mb-1">
                            <strong>비밀번호 <span class="essential"></span></strong>
                        </div>
                        <div>
                            <input class="mb-1" type="password" placeholder="영문 + 숫자 + 특수문자 8자 이상">
                            <input type="password" placeholder="비밀번호 재입력">
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="mb-1">
                            <strong>이메일 <span class="essential"></span></strong>
                        </div>
                        <div class="mb-1">
                            <input type="password" placeholder="이메일 입력">
                            <small>비밀번호 찾기 시 활용됩니다.</small>
                        </div>
                    </div>
                    <div>
                        <button class="w-100 btn btn-outline-dark">회원가입</button>
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
    background-color: #FFF;
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
    border: 1px solid #F1F3F5;
    border-radius: 0.25rem;
    padding-left: 10px;
    height: 40px;
    width: 100%;

    &:focus {
        outline: #F1F3F5;
    }
}
</style>