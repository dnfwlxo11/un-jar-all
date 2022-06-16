<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-title pt-3">
                        <div class="row m-0 p-0">
                            <div class="col-1"></div>
                            <div class="col text-center">
                                <strong>스쿼드 수정하기</strong>
                            </div>
                            <div class="col-1 text-right">
                                <i class="mdi mdi-close" @click="$emit('on-close')"></i>
                            </div>
                        </div>
                        <hr class="mb-0">
                    </div>
                    <div class="modal-body">
                        <div class="d-flex justify-content-center">
                            <div class="team mr-3">
                                <div style="height: 50px;">
                                    <select class="form-control" v-model="currFormation" @change="removeFormation();">
                                        <option value="3-4-3">3-4-3</option>
                                        <option value="3-4-1-2">3-4-1-2</option>
                                        <option value="3-2-3-2">3-2-3-2</option>
                                        <option value="3-2-2-1-2">3-2-2-1-2</option>
                                        <option value="4-4-2">4-4-2</option>
                                        <option value="4-2-2-2">4-2-2-2</option>
                                        <option value="4-1-2-3">4-1-2-3</option>
                                        <option value="5-3-2">5-3-2</option>
                                        <option value="5-2-3">5-2-3</option>
                                    </select>
                                </div>
                                <canvas ref="team"></canvas>
                            </div>
                            <div>
                                <div style="height: 50px;">
                                    <button class="w-100 btn btn-outline-dark" @click="getPlayersPosition">스쿼드 저장</button>
                                </div>
                                <div class="text-left custom-card p-3" style="width: 300px;">
                                    <div class="mb-3">
                                        <strong>라인업</strong>
                                    </div>
                                    <div v-if="playersObj">
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
                                    <div v-else>
                                        <div>
                                            <i class="mdi mdi-loading mdi-spin"></i>
                                        </div>
                                        <div>
                                            포메이션 변경 중
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="row">
                            <div class="col-1"></div>
                            <div class="col">
                                <button class="btn btn-outline-dark w-100" @click="$emit('on-close')">취소</button>
                            </div>
                            <div class="col-2"></div>
                            <div class="col">
                                <button class="btn btn-dark w-100" @click="$emit('on-complete')">확인</button>
                            </div>
                            <div class="col-1"></div>
                        </div>
                    </div>          
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { static_formation, static_position } from '@/assets/formation.js'
import * as PIXI from 'pixi.js'

export default {
    name: 'SquadModal',
    data() {
        return {
            app: null,
            currFormation: '3-4-3',
            formation: static_formation,
            selectedTarget: null,
            previousPos: null,
            linesObj: [],
            playersObj: {},
            currPosition: null,
            positionCoor: null,
        }
    },
    mounted() {
        this.positionCoor = this.$Utils.cloneObj(static_position)
        this.createApp();
        this.loadLine();
        this.loadSquad();
    },
    methods: {
        createApp() {
            this.app = new PIXI.Application({
                width: 500,
                height: 600,
                autoDensity: true,
                backgroundColor: 0xEEEEEE,
                resolution: devicePixelRatio,
                view: this.$refs.team,
            });

            const backgroundImg = new PIXI.Sprite.from(require('@/assets/stadium.jpg'));
            backgroundImg.width = 500;
            backgroundImg.height = 600;
            this.app.stage.addChild(backgroundImg);

            const title = this.app.stage.addChild(
                new PIXI.Text(
                    '4-4-2, 임대인',
                    {
                        fontSize: 15,
                    },
                )
            );

            title.position.set(12, 12);

            this.app.stage.interactive = true;
            this.app.stage.hitArea = this.app.renderer.screen;
            this.app.stage.on('click', this.onClick);
        },
        removeFormation() {
            const removeTargetChild = []
            this.app.stage.children.forEach((item, idx) => {
                if (item.id) removeTargetChild.push(item);
            });

            const removeTargetLength = removeTargetChild.length;
            for (let i=0;i<removeTargetLength;i++) {
                const currTarget = removeTargetChild.pop();

                this.app.stage.removeChild(currTarget);
            }

            this.selectedTarget = null;
            this.previousPos = null;
            this.playersObj = {};

            this.positionCoor = this.$Utils.cloneObj(static_position);

            this.loadSquad()
        },
        loadLine() {
            Object.keys(this.positionCoor).forEach((key) => {
                const frameType = this.positionCoor[key].type
                const line = new PIXI.Sprite.from(require(`@/assets/frame${this.positionCoor[key].type !== 'full' ? `-${frameType}` : ''}.png`));
                line.x = this.positionCoor[key].x;
                line.y = this.positionCoor[key].y;
                line.pos = key;
                line.visible = false;

                this.linesObj.push(line);
                this.app.stage.addChild(line);
            })
        },
        loadSquad() {const players = [
                {
                    name: 'Son Heung Min',
                    number: 7,
                    position: 'LW',
                    x: this.positionCoor['LW'].x + (this.positionCoor['LW'].w / 2),
                    y: this.positionCoor['LW'].y + (this.positionCoor['LW'].h / 2),
                    src: 'Son Heung-Min.png',
                },
                {
                    name: 'Harry Kane',
                    number: 9,
                    position: 'ST',
                    x: this.positionCoor['ST'].x + (this.positionCoor['ST'].w / 2),
                    y: this.positionCoor['ST'].y + (this.positionCoor['ST'].h / 2),
                    src: 'Harry Kane.png',
                },
                {
                    name: 'Dejan Kulusevski',
                    number: 21,
                    position: 'RW',
                    x: this.positionCoor['RW'].x + (this.positionCoor['RW'].w / 2),
                    y: this.positionCoor['RW'].y + (this.positionCoor['RW'].h / 2),
                    src: 'Dejan Kulusevski.png',
                },
                {
                    name: 'Rodrigo Bentancur',
                    number: 30,
                    position: 'LAM',
                    x: this.positionCoor['LAM'].x + (this.positionCoor['LAM'].w / 2),
                    y: this.positionCoor['LAM'].y + (this.positionCoor['LAM'].h / 2),
                    src: 'Rodrigo Bentancur.png',
                },
                {
                    name: 'Oliver Skipp',
                    number: 29,
                    position: 'RAM',
                    x: this.positionCoor['RAM'].x + (this.positionCoor['RAM'].w / 2),
                    y: this.positionCoor['RAM'].y + (this.positionCoor['RAM'].h / 2),
                    src: 'Oliver Skipp.png',
                },
                {
                    name: 'Cristian Romero',
                    number: 4,
                    position: 'CDM',
                    x: this.positionCoor['CDM'].x + (this.positionCoor['CDM'].w / 2),
                    y: this.positionCoor['CDM'].y + (this.positionCoor['CDM'].h / 2),
                    src: 'Cristian Romero.png',
                },
                {
                    name: 'Sergio Reguilon',
                    number: 3,
                    position: 'LWB',
                    x: this.positionCoor['LWB'].x + (this.positionCoor['LWB'].w / 2),
                    y: this.positionCoor['LWB'].y + (this.positionCoor['LWB'].h / 2),
                    src: 'Sergio Reguilon.png',
                },
                {
                    name: 'Ben Davies',
                    number: 33,
                    position: 'LCB',
                    x: this.positionCoor['LCB'].x + (this.positionCoor['LCB'].w / 2),
                    y: this.positionCoor['LCB'].y + (this.positionCoor['LCB'].h / 2),
                    src: 'Ben Davies.png',
                },
                {
                    name: 'Eric Dier',
                    number: 15,
                    position: 'RCB',
                    x: this.positionCoor['RCB'].x + (this.positionCoor['RCB'].w / 2),
                    y: this.positionCoor['RCB'].y + (this.positionCoor['RCB'].h / 2),
                    src: 'Eric Dier.png',
                },
                {
                    name: 'Emerson Royal',
                    number: 12,
                    position: 'RWB',
                    x: this.positionCoor['RWB'].x + (this.positionCoor['RWB'].w / 2),
                    y: this.positionCoor['RWB'].y + (this.positionCoor['RWB'].h / 2),
                    src: 'Emerson Royal.png',
                },
                {
                    name: 'Hugo Lloris',
                    number: 1,
                    position: 'GK',
                    x: this.positionCoor['GK'].x + (this.positionCoor['GK'].w / 2),
                    y: this.positionCoor['GK'].y + (this.positionCoor['GK'].h / 2),
                    src: 'Hugo Lloris.png',
                },
            ];

            players.forEach((playerInfo, idx) => {
                try {
                    const player = new PIXI.Sprite.from(require(`@/assets/tottenham/${playerInfo.src}`));

                    playerInfo.position = null;

                    player.width = 60;
                    player.height = 60;
                    player.backgroundColor = 0x334257;
                    player.interactive = true;
                    player.buttonMode = true;
                    player.anchor.set(0.5);
                    player.id = `player_${idx + 1}`
                    player.name = playerInfo.name;
                    player.pos = playerInfo.position 
                                ? (() => {
                                    this.$set(this.positionCoor[playerInfo.position], 'player', player.id);
                                    player.x = playerInfo.x
                                    player.y = playerInfo.y

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

                    player.addListener('pointerdown', this.onDragStart);
                    player.addListener('pointerup', this.onDragEnd);
                    player.addListener('pointerupoutside', this.onDragEnd);

                    this.app.stage.addChild(player);
                    this.$set(this.playersObj, player.id, player);
                } catch (err) {
                    console.error('Error:', err, playerInfo)
                }
                
            })
        },

        checkLinePosition(position) {
            this.linesObj.forEach((item, idx) => {
                if (item.pos === position) item.visible = true
                else item.visible = false
            });
        },

        checkPosition(player_x, player_y) {
            for (let key of Object.keys(this.positionCoor)) {
                if ((player_x >= this.positionCoor[key].x && player_x <= this.positionCoor[key].x + this.positionCoor[key].w) 
                        && (player_y >= this.positionCoor[key].y && player_y <= this.positionCoor[key].y + this.positionCoor[key].h)) {
                    return key;
                }
            }
        },

        getPlayersPosition() {
            const stadiumHeight = 600;
            const stadiumWidth = 500;

            Object.values(this.playersObj).forEach(item => {
                console.log(`${((item.x / stadiumWidth) * 100).toFixed(2)}%`, `${((item.y / stadiumHeight) * 100).toFixed(2)}%`, item.pos, item.name, 'x, y, pos, name')
            })
        },

        onDragStart(e) {
            e.target.alpha = 0.5;
            this.selectedTarget = e.target;
            this.previousPos = this.$Utils.cloneObj(e.target)
            this.app.stage.addListener('pointermove', this.onDragMove);
        },

        onDragEnd(e) {
            const position = this.checkPosition(e.data.global.x, e.data.global.y);

            if (this.selectedTarget.pos === 'GK') {
                this.selectedTarget.alpha = 1;
                this.checkLinePosition(null);
                this.previousPos = null;
                this.selectedTarget = null;
                this.app.stage.removeListener('pointermove', this.onDragMove);
            } else if (this.positionCoor[position].player && this.selectedTarget.pos !== position) {
                // 타겟 포지션 : src (A), dst (B)
                const playerAPos = this.selectedTarget.pos
                const playerBPos = position;

                // 타겟 ID : src (A), dst (B)
                const playerAId = this.$Utils.cloneObj(this.positionCoor[playerAPos].player)
                const playerBId = this.$Utils.cloneObj(this.positionCoor[playerBPos].player)

                // 타겟 객체 : src (A), dst (B)
                const playerAInfo = this.$Utils.cloneObj({ "x": this.previousPos.x, "y": this.previousPos.y });
                const playerBInfo = this.$Utils.cloneObj(this.playersObj[this.positionCoor[position].player]);

                this.playersObj[this.selectedTarget.id].setTransform(playerBInfo.x, playerBInfo.y);
                this.playersObj[this.positionCoor[position].player].setTransform(playerAInfo.x, playerAInfo.y);

                this.playersObj[this.selectedTarget.id].pos = playerBPos;
                this.playersObj[this.selectedTarget.id].height = 60;
                this.playersObj[this.selectedTarget.id].width = 60;

                this.playersObj[this.positionCoor[position].player].pos = playerAPos;
                this.playersObj[this.positionCoor[position].player].height = 60;
                this.playersObj[this.positionCoor[position].player].width = 60;

                this.$set(this.positionCoor[playerBPos], 'player', playerAId);
                this.$set(this.positionCoor[playerAPos], 'player', playerBId);

                this.selectedTarget.alpha = 1;
                this.checkLinePosition(null);
                this.previousPos = null;
                this.selectedTarget = null;
                this.app.stage.removeListener('pointermove', this.onDragMove);
            } else {
                this.$set(this.playersObj[this.selectedTarget.id], 'pos', position);

                if (this.previousPos.pos !== position) {
                    this.$set(this.positionCoor[position], 'player', this.selectedTarget.id);
                    this.$set(this.positionCoor[this.previousPos.pos], 'player', null);
                }

                this.selectedTarget.alpha = 1;
                this.checkLinePosition(null);
                this.previousPos = null;
                this.selectedTarget = null;
                this.app.stage.removeListener('pointermove', this.onDragMove);
            }
        },

        onDragMove(e) {
            const position = this.checkPosition(this.selectedTarget.x, this.selectedTarget.y);
            this.checkLinePosition(position)

            if (this.selectedTarget.pos !== 'GK') this.selectedTarget.parent.toLocal(e.data.global, null, this.selectedTarget.position);
        },

        onClick(e) {
            if (this.selectedTarget) {
                this.selectedTarget.position.copyFrom(e.data.global);
            }
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

.team {
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

.fw {
    color: #EEEEEE;
    background-color: #FF4D4F;
    border-radius: 0.25rem;
    padding: 3px;
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
.modal-mask {

}
.modal-container {
    width: 960px;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input:focus {
    outline: 0;
}
</style>