<template>
    <div class="stat-player">
        <div class="custom-card">
            <div class="text-left">
                <div style="font-size: 35px;">
                    <strong class="mr-3">{{stats.name.split('').join(' ')}}</strong>
                </div>
                <div style="font-size: 24px;">
                    <div class="mb-2">
                        <span class="badge mr-2" v-for="(badge, idx) of stats.badges" :key="idx">
                            {{badge}}
                        </span>
                    </div>
                    <div style="font-size: 20px;">
                        {{stats.age}}세
                    </div>
                </div>
            </div>
            <hr>
            <div class="stat" v-for="(statKor, statName) in stat_variation" :key="statName">
                <div v-if="stats[statName]" class="row mb-5">
                    <div class="col-4 text-left">
                        {{statKor}}
                    </div>
                    <div class="col-8 text-left">
                        <div v-if="statName === 'position'">
                            <div v-for="(positionName, idx) of Object.keys(stats[statName])" :key="idx">
                                <div v-for="(position, idx) of stats[statName][positionName]" :key="idx">
                                    <div class="mb-2">
                                        <span :class="positionName" class="position-icon">{{position}}</span> {{positionDict[position]}}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else-if="statName === 'teams' || statName === 'school'">
                            <div v-for="(item, idx) of stats[statName]" :key="idx">
                                <div class="mb-1">{{item}}</div>
                            </div>
                        </div>
                        <div v-else>
                            {{stats[statName]}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import { position } from '@/assets/dummy.js'

export default {
    name: 'StatPlayer',
    props: {
        stats: {
            type: Object,
            default: () => {
                return null
            }
        }
    },
    data() {
        return {
            positionDict: {},
            stat_variation: {
                'position': '포지션',
                'birth': '생년월일',
                'height': '키',
                'weight': '몸무게',
                'school': '학력',
                'teams': '소속팀',
            },
            position: null,
            position_detail: null,
            birth: null,
            height: null,
            weight: null,
            school: null,
            teams: [],
        }
    },
    mounted() {
        this.positionDict = position,

        this.position = this.stats.position
        this.birth = this.stats.birth
        this.height = this.stats.height
        this.weight = this.stats.weight
        this.school = this.stats.school
        this.teams = this.stats.teams
    }
}
</script>
<style lang="scss" scoped>
hr {
    border: 1px solid #FFF;
    margin-bottom: 30px;
}

.badge {
    background: #35435D;
    padding: 5px;
    font-size: 18px;
}

.stat-player {
    height: 100%;
}

.custom-card {
    color: #FFF;
    height: 100%;
    background-color: #1E2025;
    // border-radius: 0.5rem;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 15px;
    padding-bottom: 15px;
}

.position-icon {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 20px;
    font-size: 8px;
    height: 22px;
    width: 22px;
    // border-radius: 50%;
}

.fw {
    background-color: #FF4D4F;
}

.mf {
    background-color: #4D8D44;
}

.df {
    background-color: #0392E6;
}

.stat {
    font-size: 18px;
}
</style>
