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
            <div class="command-div">
                <div class="row m-0 p-0 h-100">
                    <div class="col-2 d-flex justify-content-center align-items-center h-100" style="border-right: 1px solid lightgrey">
                        <strong>Command</strong>
                    </div>
                    <div class="col d-flex justify-content-center align-items-center h-100">
                        <div class="row">
                            <div v-for="(item, idx) of command" :key="idx">
                                <div class="command-key mr-3">
                                    {{item}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SquadBattle',
    data() {
        return {
            command: ['→', '←', '←', '↑', '↓']
        }
    }
}
</script>
<style lang="scss" scoped>
.custom-card {
    color: #000;
    height: 600px;
    background-color: #E0E0E0;
    border-radius: 0.5rem;
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

.command-div {
    background-color: #F1F3F5;
    border-radius: 0.25rem;
    height: 80px;
}

.command-key {
    color: #FFF;
    background-color: #2c3e50;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 30px;
}
</style>