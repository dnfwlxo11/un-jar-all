<template>
    <div class="player">
        <nav-bar></nav-bar>
        <div class="container pt-5 pb-5">
            <div class="row" style="margin-bottom: 80px;">
                <div class="col-5 profile-img">
                    <img :src="require(`@/assets/${playerStat.profile}.png`)">
                </div>
                <div class="col-7 profile-card">
                    <stat-player :stats="playerStat"></stat-player>
                </div>
            </div>
            <div class="mb-5 text-left ml-3">
                <strong style="color: white;font-size: 25px;">주 요 지 표</strong>
            </div>
            <div class="row m-0 p-0 w-100 text-center mb-5">
                <div class="col">
                    <stat-card :title="'골'" :content="playerStat.goal"></stat-card>
                </div>
                <div class="col">
                    <stat-card :title="'도움'" :content="playerStat.assist"></stat-card>
                </div>
                <div class="col">
                    <stat-card :title="'경기수'" :content="playerStat.match"></stat-card>
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

import { son, kane, kul } from '@/assets/dummy.js'

export default {
    name: 'Player',
    components: {
        statPlayer,
        statCard,
        statChart,
    },
    data() {
        return {
            playerStat: null,
        }
    },
    created() {
        const target = this.$route.params.playerName

        if (target === '손흥민') this.playerStat = son
        else if (target === '해리케인') this.playerStat = kane
        else if (target === '클루셉스키') this.playerStat = kul
    },
}
</script>
<style lang="scss" scoped>
.profile-img {
    z-index: 2;

    & img {
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