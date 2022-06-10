<template>
    <div class="sign-in">
        <nav-bar></nav-bar>
        <div class="container mb-5" style="padding: 90px 15px;">
            <div class="custom-card ml-auto mr-auto">
                <div class="signin-title text-left mb-4">
                    <strong>로그인</strong>
                </div>
                <div>
                    <div class="mb-3">
                        <input class="mb-1" type="text" placeholder="아이디" v-model="id">
                        <input type="password" placeholder="비밀번호" v-model="password">
                    </div>
                    <div class="mb-2">
                        <button class="w-100 btn btn-outline-dark" @click="signIn()" @keyup.enter="signIn()">로그인</button>
                    </div>
                    <div class="d-flex mb-4">
                        <div class="mr-1 d-flex justify-content-center align-items-center">
                            <input type="checkbox" style="height: 15px; width: 15px;">
                        </div>
                        <div class="text-left">
                            <small>자동 로그인</small>
                        </div>
                        <div class="ml-auto text-secondary mr-3">
                            <a href="javascript:;" @click="$router.push('/member/find/id')">아이디 찾기</a>
                        </div>
                        <div class="text-secondary">
                            <a href="javascript:;" @click="$router.push('/member/find/password')">비밀번호 찾기</a>
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
    name: 'SignIn',
    data() {
        return {
            id: 'admin',
            password: '1234',
        }
    },
    mounted() {
        window.addEventListener('keydown', this.enterEvent)
    },
    methods: {
        async signIn() {
            const sendData = {
                'id': this.id,
                'password': this.password
            }

            const response = await this.$Api.post('/api/users/signin', sendData)

            if (response.data.success) {
                this.$cookies.set('token', 'admin', '1d')
                this.$router.push(this.$route.query.redirect, () => {})
            } else {
                this.$Utils.toast('아이디나 비밀번호를 확인해주세요.')
            }
        },
        async enterEvent(evt) {
            if (evt.keyCode === 13) this.signIn()
        }
    },
    beforeDestroy() {
        window.removeEventListener('keydown', this.enterEvent)
    },
}
</script>
<style lang="scss" scoped>
a:link,
a:visited,
a:hover {
    font-size: 12px;
    color: grey;
    text-decoration: none;
}
.custom-card {
    width: 40%;
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
    border: 1px solid #334257;
    border-radius: 0.25rem;
    padding-left: 10px;
    height: 40px;
    width: 100%;

    &:focus {
        outline: #F1F3F5;
    }
}
</style>