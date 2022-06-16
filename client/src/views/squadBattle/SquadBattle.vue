<template>
    <div class="squad-battle">
        <nav-bar></nav-bar>
        <div class="text-left custom-card p-3 h-100 own-lineup" :class="{'own-lineup-deactive': showOwnLineup===false, 'own-lineup-active': showOwnLineup}">
            <div class="mb-3">
                <strong>라인업</strong>
            </div>
            <div class="mb-2" v-for="(value, key) in playersObj" :key="key">
                <div class="row m-0 p-0">
                    <span :class="{'fw': positionCoor[value.pos].role === 1, 
                                'mf': positionCoor[value.pos].role === 2, 
                                'df': positionCoor[value.pos].role === 3, 
                                'gk': positionCoor[value.pos].role === 4, }" 
                    class="pos-icon mr-2 col-2 text-center">{{value.pos}}</span>
                    <span class="col">{{value.name}}</span>
                </div>
            </div>
        </div>
        <div class="text-left custom-card p-3 h-100 opp-lineup" :class="{'opp-lineup-deactive': showOppLineup===false, 'opp-lineup-active': showOppLineup}">
            <div class="mb-3">
                <strong>라인업</strong>
            </div>
            <div class="mb-2" v-for="(value, key) in playersObj" :key="key">
                <div class="row m-0 p-0">
                    <span :class="{'fw': positionCoor[value.pos].role === 1, 
                                'mf': positionCoor[value.pos].role === 2, 
                                'df': positionCoor[value.pos].role === 3, 
                                'gk': positionCoor[value.pos].role === 4, }" 
                    class="pos-icon mr-2 col-2 text-center">{{value.pos}}</span>
                    <span class="col">{{value.name}}</span>
                </div>
            </div>
        </div>
        <div class="container" style="padding: 90px 15px 30px;">
            <div class="mb-3" style="border: 1px solid black;">
                <div class="d-flex justify-content-center align-items-center">
                    <div class="mr-3 p-1" style="border: 1px solid black;">
                        <div>
                            <i class="mdi mdi-account" style="font-size: 40px;"></i>
                        </div>
                        <div>
                            Player 1
                        </div>
                    </div>
                    <div class="progress versus-gauge">
                        <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="ml-3 p-1" style="border: 1px solid black;">
                        <div>
                            <i class="mdi mdi-account" style="font-size: 40px;"></i>
                        </div>
                        <div>
                            Player 2
                        </div>
                    </div>
                </div>
            </div>
            <command class="ml-auto mr-auto mb-5" />
            <div>
                <button class="btn btn-dark mr-3" @click="bounceEffect">들썩들썩 효과</button>
                <button class="btn btn-dark" @click="twinkleEffect">반짝이는 효과</button>
            </div>
            <div class="row m-0 p-0">
                <div class="col-md-5 m-0 p-0 ml-auto mr-auto" ref="teamOwnDiv">
                    <strong>Own Team</strong>
                    <canvas ref="leftTeam"></canvas>
                    <button class="btn btn-dark pt-0 pb-0" @click="showOwnLineup===null ? showOwnLineup=true : showOwnLineup=!showOwnLineup">라인업 보기</button>
                </div>
                <div class="ml-3 mr-3"></div>
                <div class="col-md-5 m-0 p-0 ml-auto mr-auto" ref="teamOppDiv">
                    <strong>Opponent Team</strong>
                    <canvas ref="rightTeam"></canvas>
                    <button class="btn btn-dark pt-0 pb-0" @click="showOppLineup===null ? showOppLineup=true : showOppLineup=!showOppLineup">라인업 보기</button>
                </div>
            </div>
            <!-- <div class="mb-5 d-flex teams">
                <div class="d-flex ml-auto mr-auto mb-5">
                    <div class="mr-3 left-team">
                        <div>
                            <strong>Own Team</strong>
                        </div>
                        <canvas ref="leftTeam"></canvas>
                    </div>
                    <div class="text-left custom-card p-3" style="margin-top: 30px;width: 300px;">
                        <div class="mb-3">
                            <strong>라인업</strong>
                        </div>
                        <div class="mb-2" v-for="(value, key) in playersObj" :key="key">
                            <div class="row m-0 p-0">
                                <span :class="{'fw': positionCoor[value.pos].role === 1, 
                                            'mf': positionCoor[value.pos].role === 2, 
                                            'df': positionCoor[value.pos].role === 3, 
                                            'gk': positionCoor[value.pos].role === 4, }" 
                                class="fw mr-2 col-2 text-center">{{value.pos}}</span>
                                <span class="col">{{value.name}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gauge mb-3">
                    <div class="progress w-75 ml-auto mr-auto" style="height: 60px;">
                         <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <command class="ml-auto mr-auto mb-5" />
                <div class="d-flex ml-auto mr-auto">
                    <div class="mr-3 right-team">
                        <div>
                            <strong>Opponent Team</strong>
                        </div>
                        <div ref="rightTeam" class="right-team-squad">
                            <img src="@/assets/stadium.jpg">
                        </div>
                    </div>
                    <div class="text-left custom-card p-3" style="margin-top: 30px;width: 300px;">
                        <div class="mb-3">
                            <strong>라인업</strong>
                        </div>
                        <div class="mb-2" v-for="(value, key) in playersObj" :key="key">
                            <div class="row m-0 p-0">
                                <span :class="{'fw': positionCoor[value.pos].role === 1, 
                                            'mf': positionCoor[value.pos].role === 2, 
                                            'df': positionCoor[value.pos].role === 3, 
                                            'gk': positionCoor[value.pos].role === 4, }" 
                                class="fw mr-2 col-2 text-center">{{value.pos}}</span>
                                <span class="col">{{value.name}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
            <!-- <button class="btn btn-dark mb-3" @click="getPlayersPosition">포지션 보기</button> -->
        </div>
    </div>
</template> 
<script>
import { static_formation, static_position } from '@/assets/formation.js'
import { formationPos } from '@/assets/squadDummy.js'
import * as PIXI from 'pixi.js'
import Command from './vues/command.vue'

export default {
    name: 'SquadBattle',
    components: {
        Command
    },
    data() {
        return {
            team_own: null,
            team_opp: null,

            team_own_size: null,
            team_opp_size: null,

            app: null,
            currFormation: '3-4-3',
            selectedTarget: null,
            linesObj: [],
            playersObj: {},

            formation: null,
            positionCoor: null,

            showOwnLineup: null,
            showOppLineup: null,
        }
    },
    mounted() {
        this.team_own_size = {
            'w': this.$refs.teamOwnDiv.offsetWidth,
            'h': (this.$refs.teamOwnDiv.offsetWidth / 3) * 4,
        }

        this.team_opp_size = {
            'w': this.$refs.teamOppDiv.offsetWidth,
            'h': (this.$refs.teamOppDiv.offsetWidth / 3) * 4,
        }

        this.formation = this.$Utils.cloneObj(static_formation)
        this.positionCoor = this.$Utils.cloneObj(static_position)
        this.createOwnTeam();
        this.createOppTeam();
        this.loadSquad();
    },
    methods: {
        createOwnTeam() {
            this.team_own = new PIXI.Application({
                width: this.team_own_size.w,
                height: this.team_own_size.h,
                autoDensity: true,
                backgroundColor: 0xEEEEEE,
                resolution: devicePixelRatio,
                view: this.$refs.leftTeam,
            });

            const backgroundImg = new PIXI.Sprite.from(require('@/assets/stadium.jpg'));
            backgroundImg.width = this.team_own_size.w;
            backgroundImg.height = this.team_own_size.h;
            this.team_own.stage.addChild(backgroundImg);

            const title = this.team_own.stage.addChild(
                new PIXI.Text(
                    `${this.currFormation}, 임대인`,
                    {
                        fontSize: 15,
                    },
                )
            );
            title.position.set(12, 12);

            this.team_own.stage.interactive = true;
            this.team_own.stage.hitArea = this.team_own.renderer.screen;
        },
        createOppTeam() {
            this.team_opp = new PIXI.Application({
                width: this.team_opp_size.w,
                height: this.team_opp_size.h,
                autoDensity: true,
                backgroundColor: 0xEEEEEE,
                resolution: devicePixelRatio,
                view: this.$refs.rightTeam,
            });

            const backgroundImg = new PIXI.Sprite.from(require('@/assets/stadium.jpg'));
            backgroundImg.width = this.team_opp_size.w;
            backgroundImg.height = this.team_opp_size.h;
            this.team_opp.stage.addChild(backgroundImg);

            const title = this.team_opp.stage.addChild(
                new PIXI.Text(
                    `${this.currFormation}, 임대인`,
                    {
                        fontSize: 15,
                    },
                )
            );
            title.position.set(12, 12);

            this.team_opp.stage.interactive = true;
            this.team_opp.stage.hitArea = this.team_opp.renderer.screen;
        },
        loadSquad() {
            const players = this.$Utils.cloneObj(formationPos)

            players.forEach((playerInfo, idx) => {
                try {
                    const player = new PIXI.Sprite.from(require(`@/assets/tottenham/${playerInfo.src}`));

                    player.width = this.team_own_size.w / 6;
                    player.height = this.team_own_size.w / 6;
                    player.backgroundColor = 0x334257;
                    player.interactive = true;
                    player.buttonMode = true;
                    player.anchor.set(0.5);
                    player.id = `player_${idx + 1}`
                    player.name = playerInfo.name;
                    player.pos = playerInfo.position 
                                ? (() => {
                                    this.$set(this.positionCoor[playerInfo.position], 'player', player.id);
                                    player.x = playerInfo.w * this.team_own_size.w
                                    player.y = playerInfo.h * this.team_own_size.h

                                    return playerInfo.position 
                                })() : (() => {
                                    for (let position of this.formation[`formation_${this.currFormation}`]) {
                                        if (!this.positionCoor[position].player) {
                                            this.$set(this.positionCoor[position], 'player', player.id);
                                            player.x = this.positionCoor[position].x + (this.positionCoor[position].w / 2)
                                            player.y = this.positionCoor[position].y + (this.positionCoor[position].h / 2)

                                            return position;
                                        }
                                    }
                                })()

                    this.team_own.stage.addChild(player);
                    this.$set(this.playersObj, player.id, player);
                } catch (err) {
                    console.error('Error:', err, playerInfo)
                }
                
            })
        },

        getPlayersPosition() {
            const stadiumHeight = 600;
            const stadiumWidth = 500;

            Object.values(this.playersObj).forEach(item => {
                console.log(`${((item.x / stadiumWidth) * 100).toFixed(2)}%`, `${((item.y / stadiumHeight) * 100).toFixed(2)}%`, item.pos, item.name, 'x, y, pos, name');
            })
        },

        bounceEffect() {
            const randomNum = parseInt(Math.random() * 10 + 1);
            const targetObj = this.playersObj[`player_${randomNum}`];
            let count = 0;

            this.team_own.ticker.add(() => {
                count += 0.01;

                targetObj.scale.x = Math.sin(count);
                targetObj.scale.y = Math.sin(count);
                
                targetObj.rotation += 0.01
                
                console.log(targetObj.rotation)
            })
        },

        twinkleEffect() {
            const targetObj = this.playersObj['player_1'];
            console.log('bounce:', targetObj);
        },
    },
}
</script>
<style lang="scss" scoped>
.custom-card {
    color: #000;
    height: 600px;
    background-color: #E0E0E0;
    // border-radius: 0.5rem;
    padding: 30px;
}

.versus {
    width: 100px;
    min-width: 100px;
}

.versus-gauge,
.command {
    width: 75%;
}

.teams {
    flex-flow: column wrap;
}

.left-team,
.right-team {
    min-width: 500px;
    width: 500px;
    height: 600px;
    color: #FFF;
    font-size: 20px;

    img {
        width: 500px;
        height: 600px;
        object-fit: fit;
    }
}

.left-team-squad,
.right-team-squad {
    background-color: #F1F3F5;
    min-width: 500px;
    width: 500px;
    height: 600px;
}

.pos-icon {
    border-radius: 0.25rem;
    padding: 3px;
}

.fw {
    color: #EEEEEE;
    background-color: #FF4D4F;
}

.mf {
    color: #EEEEEE;
    background-color: #4D8D44;
}

.df {
    color: #EEEEEE;
    background-color: #0392E6;
}

.gk {
    color: #EEEEEE;
    background-color: #FF9500;
}

.versus-gauge {
    height: 50px;
}

.own-lineup,
.opp-lineup {
    position: absolute;
    margin-bottom: 30px;
    width: 300px;
    z-index: 1;
}

.own-lineup {
    left: -300px;
    
    &-active {
        transition: 1s;
        left: 0px;
    }

    &-deactive {
        transition: 1s;
        left: -300px;
    }
}

.opp-lineup {
    left: 100%;

    &-active {
        transition: 1s;
        left: calc(100% - 300px);
    }

    &-deactive {
        display: none;
        transition: 1s;
        left: 100%;
    }
}
</style>