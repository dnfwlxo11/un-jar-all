<template>
    <div class="player-versus-search">
        <div class="custom-card">
            <div class="text-left" style="font-size: 25px;">
                <div class="row">
                    <div class="col-6 text-left">
                        <strong>누가 최고지?</strong>
                    </div>
                    <div class="col-4"></div>
                    <div class="col-2 d-flex justify-content-end align-items-center">
                        <button class="w-100 custom-btn" style="font-size: 18px;">검색</button>
                    </div>
                </div>
            </div>
            <hr>
            <div class="row mt-5" style="height: 350px;">
                <div class="col-5 h-100">
                    <div class="h-100 mb-3" @click="isPlayerModal=true;">
                        <img class="versus-player" src="@/assets/default-player.png">
                    </div>
                    <div style="font-size: 20px;">
                        <strong>Player 1</strong>
                    </div>
                </div>
                <div class="col mt-auto mb-auto" style="font-size: 30px;">
                    <strong>VS</strong>
                </div>
                <div class="col-5 h-100">
                    <div class="h-100 mb-3" @click="isPlayerModal=true;">
                        <img class="versus-player" src="@/assets/default-player.png">
                    </div>
                    <div style="font-size: 20px;">
                        <strong>Player 2</strong>
                    </div>
                </div>
            </div>
        </div>
        <player-search-modal v-if="isPlayerModal" @on-close="isPlayerModal=false;" @on-complete="isPlayerModal=false;"></player-search-modal>
    </div>
</template>
<script>
import PlayerSearchModal from './playerSearchModal.vue'

export default {
    name: 'PlayerVersusSearch',
    components: {
        PlayerSearchModal
    },
    data() {
        return {
            isPlayerModal: false,

            player_1: '손흥민',
            player_2: '해리케인',
        }
    }
}
</script>
<style lang="scss" scoped>
.custom-card {
    height: 550px;
}

.custom-btn {
  color: #35435D;
  border: 1px solid #35435D;
  background-color: #EEEEEE;
}

.versus-player {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
}
</style>