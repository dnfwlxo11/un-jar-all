<template>
    <div class="player-of-the-day">
        <div class="custom-card">
            <div class="text-left" style="font-size: 25px;">
                <strong>최다 검색 선수</strong>
            </div>
            <hr>
            <div class="row m-0 p-0" style="height: 80%;">
                <div class="col-7 m-0 p-3 text-left">
                    <div class="mb-2">
                        <span class="h-100 mr-3" style="display: inline-block;font-size: 22px;">
                            <strong>손 흥 민</strong>
                        </span>
                        <span>한 국</span> / 
                        <span>{{stat.birth}}</span> / 
                        <span>{{stat.height}}</span> / 
                        <span>{{stat.weight}}</span> / 
                        <i class="mdi mdi-foot-print text-success" style="font-size: 20px;display: inline-block;"></i>
                        <i class="mdi mdi-foot-print text-success reverse-icon" style="font-size: 20px;display: inline-block;"></i>
                        (양발잡이)
                    </div>
                    <div class="mb-4">
                        <span class="badge h-100 mr-2" v-for="(badge, idx) of stat.badges" :key="idx" style="display: inline-block;">
                            {{badge}}
                        </span> <br>
                    </div>
                    <div class="mb-3">
                        득점 : {{stat.goal}}
                    </div>
                    <div class="mb-3">
                        도움 : {{stat.assist}}
                    </div>
                    <div class="mb-5">
                        소속팀 : {{stat.teams[stat.teams.length - 1]}}
                    </div>
                    <div>
                        <div style="width: 100px;">
                            <span>
                                최근 활약상
                                <hr>
                            </span>
                        </div>
                        <div class="recent-video">
                            <!-- <iframe class="mr-2" width="160" height="120" src="https://www.youtube.com/embed/WxiFovugBjM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <iframe class="mr-2" width="160" height="120" src="https://www.youtube.com/embed/WxiFovugBjM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <iframe class="mr-2" width="160" height="120" src="https://www.youtube.com/embed/WxiFovugBjM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
                        </div>
                    </div>
                </div>
                <div class="col-5 m-0 p-0">
                    <img src="@/assets/son.png">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { position, son } from '@/assets/dummy.js'

export default {
    name: 'PlayerOfTheDay',
    data() {
        return {
            stat: null,
        }
    },
    created() {
        this.stat = son
    },
    methods: {

    },
}
</script>
<style lang="scss" scoped>
.custom-card {
    height: 600px;

    & img {
        width: 100%;
        height: 100%;
        object-fit: none;
        object-position: center;
    }
}

.badge {
    color: #FFF;
    background: #35435D;
    padding: 5px;
    font-size: 13px;
}

.reverse-icon {
    transform: scaleX(-1);
}

.recent-video {
    overflow-x: auto;
    widows: 90%;
}
</style>