<template>
    <div class="squad-battle">
        <nav-bar></nav-bar>
        <div class="container mb-5" style="padding: 90px 15px;">
            <div class="d-flex mb-5">
                <div class="left-team ml-auto">
                    <div>
                        <strong>Left Team</strong>
                    </div>
                    <div class="left-team-squad">

                    </div>
                </div>
                <div class="versus"></div>
                <div class="right-team mr-auto">
                    <div>
                        <strong>Right Team</strong>
                    </div>
                    <div class="right-team-squad">

                    </div>
                </div>
            </div>
            <command />
        </div>
    </div>
</template>
<script>
import Command from './vues/command.vue'

export default {
    name: 'SquadBattle',
    components: {
        Command
    },
    data() {
        return {
            
        }
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
}

.left-team-squad,
.right-team-squad {
    background-color: #F1F3F5;
    min-width: 400px;
    width: 400px;
    height: 500px;
}
</style>