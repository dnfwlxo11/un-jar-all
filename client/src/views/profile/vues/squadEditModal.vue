<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-title pt-3">
                        <div class="row m-0 p-0">
                            <div class="col-1">

                            </div>
                            <div class="col">
                                스쿼드 수정하기
                            </div>
                            <div class="col-1">
                                <i class="mdi mdi-close" @click="$emit('on-close')"></i>
                            </div>
                        </div>
                        <hr class="mb-0">
                    </div>
                    <div class="modal-body">
                        <div class="d-flex justify-content-center">
                            <div class="team mr-3">
                                <canvas ref="team"></canvas>
                            </div>
                            <div class="text-left custom-card p-3" style="width: 300px;">
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
import * as PIXI from 'pixi.js'

export default {
    name: 'SquadModal',
    data() {
        return {
            app: null,
            selectedTarget: null,
            previousPos: null,
            linesObj: [],
            playersObj: {},
            currPosition: null,
            positionCoor: {
                "LW": { x: 0, y: 0, h: 200, w: 125, type: "full", player: null, role: 1 },
                "LS": { x: 125, y: 0, h: 100, w: 125, type: "half", player: null, role: 1 },
                "ST": { x: 187.5, y: 0, h: 100, w: 125, type: "half", player: null, role: 1 },
                "RS": { x: 250, y: 0, h: 100, w: 125, type: "half", player: null, role: 1 },
                "RW": { x: 375, y: 0, h: 200, w: 125, type: "full", player: null, role: 1 },
                "LF": { x: 125, y: 100, h: 100, w: 125, type: "half", player: null, role: 1 },
                "CF": { x: 187.5, y: 100, h: 100, w: 125, type: "half", player: null, role: 1 },
                "RF": { x: 250, y: 100, h: 100, w: 125, type: "half", player: null, role: 1 },
                "LM": { x: 0, y: 200, h: 200, w: 125, type: "full", player: null, role: 2 },
                "LAM": { x: 125, y: 200, h: 100, w: 125, type: "half", player: null, role: 2 },
                "CAM": { x: 187.5, y: 200, h: 100, w: 125, type: "half", player: null, role: 2 },
                "RAM": { x: 250, y: 200, h: 100, w: 125, type: "half", player: null, role: 2 },
                "RM": { x: 375, y: 200, h: 200, w: 125, type: "full", player: null, role: 2 },
                "LDM": { x: 125, y: 300, h: 100, w: 125, type: "half", player: null, role: 2 },
                "CDM": { x: 187.5, y: 300, h: 100, w: 125, type: "half", player: null, role: 2 },
                "RDM": { x: 250, y: 300, h: 100, w: 125, type: "half", player: null, role: 2 },
                "LWB": { x: 0, y: 400, h: 100, w: 125, type: "half", player: null, role: 3 },
                "LCB": { x: 125, y: 400, h: 100, w: 125, type: "half", player: null, role: 3 },
                "CB": { x: 187.5, y: 400, h: 100, w: 125, type: "half", player: null, role: 3 },
                "RCB": { x: 250, y: 400, h: 100, w: 125, type: "half", player: null, role: 3 },
                "RWB": { x: 375, y: 400, h: 100, w: 125, type: "half", player: null, role: 3 },
                "LB": { x: 0, y: 500, h: 100, w: 125, type: "half", player: null, role: 3 },
                "RB": { x: 375, y: 500, h: 100, w: 125, type: "half", player: null, role: 3 },
                "GK": { x: 187.5, y: 500, h: 100, w: 125, type: "half", player: null, role: 4 },
            }
        }
    },
    mounted() {
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
        loadLine() {
            Object.keys(this.positionCoor).forEach((key) => {
                const line = new PIXI.Sprite.from(require(`@/assets/frame${this.positionCoor[key].type === 'half' ? '-half' : ''}.png`));
                line.x = this.positionCoor[key].x;
                line.y = this.positionCoor[key].y;
                line.pos = key;
                line.visible = false;

                this.linesObj.push(line);
                this.app.stage.addChild(line);
            })
        },
        loadSquad() {
            const players = [
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
                    name: 'Sergio Reguilon.png',
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
                const player = new PIXI.Sprite.from(require(`@/assets/tottenham/${playerInfo.src}`));

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
                                for (let key of Object.keys(this.positionCoor)) {
                                    if (!this.positionCoor[key].player) {
                                        this.$set(this.positionCoor[key], 'player', player.id);
                                        player.x = this.positionCoor[key].x + (this.positionCoor[key].w / 2)
                                        player.y = this.positionCoor[key].y + (this.positionCoor[key].h / 2)

                                        return key; 
                                    }
                                }
                            })()

                player.addListener('pointerdown', this.onDragStart);
                player.addListener('pointerup', this.onDragEnd);
                player.addListener('pointerupoutside', this.onDragEnd);

                this.app.stage.addChild(player);
                this.$set(this.playersObj, player.id, player);
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
            Object.values(this.playersObj).forEach(item => {
                console.log(item.x, item.y, item.pos, 'x, y, pos')
            })
        },

        onDragStart(e) {
            console.log('onDragStart')
            e.target.alpha = 0.5;
            this.selectedTarget = e.target;
            this.previousPos = this.$Utils.cloneObj(e.data.global)
            console.log('previous Position start: ', this.previousPos.x, this.previousPos.y)
            this.app.stage.addListener('pointermove', this.onDragMove);
        },

        onDragEnd(e) {
            const position = this.checkPosition(e.data.global.x, e.data.global.y);

            if (this.positionCoor[position].player && this.selectedTarget.pos !== position) {
                // 타겟들 포지션
                const playerAPos = this.selectedTarget.pos
                const playerBPos = position;

                // 타겟들 ID
                const playerAId = this.$Utils.cloneObj(this.positionCoor[playerAPos].player)
                const playerBId = this.$Utils.cloneObj(this.positionCoor[playerAPos].player)


                // 옮기는 객체의 처음 좌표, 포지션 변경할 객체의 좌표
                const playerAInfo = this.$Utils.cloneObj(this.previousPos);
                const playerBInfo = this.$Utils.cloneObj(this.playersObj[this.positionCoor[position].player]);

                this.playersObj[this.selectedTarget.id].setTransform(playerBInfo.x, playerBInfo.y);
                this.playersObj[this.positionCoor[position].player].setTransform(playerAInfo.x, playerAInfo.y);

                this.playersObj[this.selectedTarget.id].pos = playerBPos;
                this.playersObj[this.selectedTarget.id].height = 60;
                this.playersObj[this.selectedTarget.id].width = 60;
                this.playersObj[this.positionCoor[position].player].pos = playerAPos;
                this.playersObj[this.positionCoor[position].player].height = 60;
                this.playersObj[this.positionCoor[position].player].width = 60;

                this.positionCoor[playerBPos].player = playerAId
                this.positionCoor[playerAPos].player = playerBId
                
                this.previousPos = null;
            } else {
                this.$set(this.playersObj[this.selectedTarget.id], 'pos', position);
            }

            this.selectedTarget.alpha = 1;
            this.checkLinePosition(null);
            this.app.stage.removeListener('pointermove', this.onDragMove);
        },

        onDragMove(e) {
            const position = this.checkPosition(this.selectedTarget.position._x, this.selectedTarget.position._y);
            this.checkLinePosition(position)
            this.selectedTarget.parent.toLocal(e.data.global, null, this.selectedTarget.position);
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