<template>
    <div class="edit-profile">
        <nav-bar></nav-bar>
        <div class="container mb-5" style="padding: 90px 15px;">
            <div class="custom-card ml-auto mr-auto">
                <div class="signin-title text-left mb-4">
                    <strong>프로필 수정</strong>
                </div>
                <div class="text-left">
                    <div class="mb-3">
                        <div class="mb-1">
                            <strong>아이디</strong>
                        </div>
                        <div>
                            <input type="text" placeholder="영문, 숫자 4-20자" value="daein">
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="mb-1">
                            <strong>비밀번호 <span class="essential"></span></strong>
                        </div>
                        <div>
                            <input class="mb-1" type="password" placeholder="영문 + 숫자 + 특수문자 8자 이상" value="1234">
                        </div>
                        <div class="text-right">
                            <button class="btn btn-danger w-100 pt-0 pb-0">비밀번호 변경</button>
                        </div>
                    </div>
                    <div class="mb-4">
                        <div class="mb-1">
                            <strong>이메일 <span class="essential"></span></strong>
                        </div>
                        <div class="mb-1">
                            <input type="email" placeholder="이메일 입력" value="daein@daein.com">
                        </div>
                    </div>
                    <div class="mb-5">
                        <button class="btn btn-primary w-100" @click="isSquadModal=true;">스쿼드 관리</button>
                    </div>
                    <div>
                        <button class="w-100 btn btn-outline-dark">회원가입</button>
                    </div>
                </div>
            </div>
        </div>
        <squad-edit-modal v-if="isSquadModal" @on-close="isSquadModal=false;" @on-complete="isSquadModal=false;"></squad-edit-modal>
    </div>
</template>
<script>
import SquadEditModal from './SquadEditModal.vue'

export default {
    name: 'EditProfile',
    components: {
        SquadEditModal,
    },
    data() {
        return {
            id: 'admin',
            password: '1234',
            isSquadModal: false,
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