<template>
    <div class="player">
        <nav-bar></nav-bar>
        <div class="container pt-5 pb-5">
            <div class="row" style="margin-bottom: 80px;">
                <div class="col-5 profile-img">
                    <img src="@/assets/player-sample.png">
                </div>
                <div class="col-7 profile-card">
                    <stat-player></stat-player>
                </div>
            </div>
            <div class="mb-5">
                <strong style="color: white;font-size: 20px;">주 요 지 표</strong>
            </div>
            <div class="row m-0 p-0 w-100 text-center mb-5">
                <div class="col">
                    <stat-card :title="'골'" :content="23"></stat-card>
                </div>
                <div class="col">
                    <stat-card :title="'도움'" :content="7"></stat-card>
                </div>
                <div class="col">
                    <stat-card :title="'경기수'" :content="35"></stat-card>
                </div>
            </div>
            <div>
                <stat-chart></stat-chart>
            </div>
        </div>
    </div>
</template>
<script>
import statPlayer from './vues/statPlayer.vue'
import statCard from './vues/statCard.vue'
import statChart from './vues/statGraph.vue'

export default {
    name: 'Player',
    components: {
        statPlayer,
        statCard,
        statChart,
    }
}
</script>
<style lang="scss" scoped>
.profile-img {
    z-index: 2;

    & > img {
        height: 100%;
        width: 100%;
        overflow: hidden;
        object-fit: cover;
    }
}

.profile-card {
    z-index: 1;
}
</style>