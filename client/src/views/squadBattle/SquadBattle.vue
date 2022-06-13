<template>
    <div class="squad-battle">
        <nav-bar></nav-bar>
        <div class="container mb-5" style="padding: 90px 15px;">
            <div class="gauge mb-3">
                <div class="progress w-75 ml-auto mr-auto" style="height: 60px;">

                </div>
            </div>
            <div class="d-flex mb-5">
                <div class="left-team ml-auto">
                    <div>
                        <strong>Own Team</strong>
                    </div>
                    <!-- <div class="left-team-squad">
                        <img src="@/assets/stadium.jpg">
                    </div> -->
                    <canvas ref="leftTeam"></canvas>
                </div>
                <div class="versus"></div>
                <div class="right-team mr-auto">
                    <div>
                        <strong>Opponent Team</strong>
                    </div>
                    <div ref="rightTeam" class="right-team-squad">
                        <img src="@/assets/stadium.jpg">
                    </div>
                </div>
            </div>
            <command />
        </div>
    </div>
</template> 
<script>
import * as PIXI from 'pixi.js'
import Command from './vues/command.vue'

export default {
    name: 'SquadBattle',
    components: {
        Command
    },
    data() {
        return {
            app: null,
            selectedTarget: null,
        }
    },
    mounted() {
        this.createApp();
        this.loadSquad();
    },
    methods: {
        createApp() {
            this.app = new PIXI.Application({
                width: 400,
                height: 500,
                autoDensity: true,
                backgroundColor: 0xEEEEEE,
                resolution: devicePixelRatio,
                view: this.$refs.leftTeam,
            });

            const title = this.app.stage.addChild(new PIXI.Text(
                '4-4-2, 임대인',
                {
                    fontSize: 12,
                },
            ));
            title.position.set(12, 12);

            this.app.stage.interactive = true;
            this.app.stage.hitArea = this.app.renderer.screen;
            this.app.stage.on('click', this.onClick);
        },
        loadSquad() {
            const player = new PIXI.Sprite.from(require('@/assets/son.png'));

            player.width = 40;
            player.height = 40;
            player.backgroundColor = 0x334257;
            player.interactive = true;
            player.buttonMode = true;
            // player.anchor.set(0.5);

            player.x = Math.floor(Math.random() * this.app.screen.width);
            player.y = Math.floor(Math.random() * this.app.screen.height);

            player.addListener('pointerdown', this.onDragStart);
            player.addListener('pointerup', this.onDragEnd);
            player.addListener('pointerupoutside', this.onDragEnd);

            this.app.stage.addChild(player)
        },

        onDragStart(e) {
            console.log('DragStart', e.target)
            e.target.alpha = 0.5;
            this.selectedTarget = e.target;
            this.app.stage.addListener('pointermove', this.onDragMove);
        },

        onDragEnd() {
            console.log('DragEnd', this.selectedTarget)
            this.selectedTarget.alpha = 1;
            console.log(this.selectedTarget.point, 'point')
            this.app.stage.removeListener('pointermove', this.onDragMove);
        },

        onDragMove(e) {
            console.log('DragMove', e)
            console.log(e.global)
            this.selectedTarget.parent.toLocal(e.data.global, null, this.selectedTarget.position);
        },

        onClick(e) {
            console.log('Click')
            if (this.selectedTarget) {
                this.selectedTarget.position.copyFrom(e.data.global);
            }
        },
    }
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

.left-team,
.right-team {
    min-width: 400px;
    width: 400px;
    height: 550px;
    color: #FFF;
    font-size: 20px;

    img {
        width: 400px;
        height: 500px;
        object-fit: cover;
    }
}

.left-team-squad,
.right-team-squad {
    background-color: #F1F3F5;
    min-width: 400px;
    width: 400px;
    height: 500px;
}
</style>