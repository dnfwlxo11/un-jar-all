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
            <div class="row" style="height: 350px;">
                <div class="col-5 h-100">
                    <div class="h-100 mb-3">
                        <!-- <img class="versus-player" src="@/assets/default-player.png"> -->
                        <img class="versus-player" src="@/assets/son.png">
                    </div>
                    <div style="font-size: 20px;">
                        <strong>{{ player_1 }}</strong>
                    </div>
                </div>
                <div class="col mt-auto mb-auto" style="font-size: 30px;">
                    <strong>VS</strong>
                </div>
                <div class="col-5 h-100">
                    <div class="h-100 mb-3">
                        <!-- <img class="versus-player" src="@/assets/default-player.png"> -->
                        <img class="versus-player" src="@/assets/kane.png">
                    </div>
                    <div style="font-size: 20px;">
                        <strong>{{ player_2 }}</strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PlayerVersusSearch',
    data() {
        return {
            player_1: '손흥민',
            player_2: '해리케인',
        }
    }
}
</script>
<style lang="scss" scoped>
hr {
    border: 1px solid #FFF;
    margin-bottom: 30px;
}

.custom-card {
    color: #FFF;
    height: 550px;
    background-color: #1E2025;
    // border-radius: 0.5rem;
    padding: 30px;
}

.versus-player {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
}
</style>