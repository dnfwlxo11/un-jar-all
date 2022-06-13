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
                                비교 선수 선택
                            </div>
                            <div class="col-1">
                                <i class="mdi mdi-close" @click="$emit('on-close')"></i>
                            </div>
                        </div>
                        
                        <hr>
                    </div>
                    <div class="modal-body mt-3">
                        <div class="row">
                            <div class="col-6">
                                <img src="@/assets/default-player.png">
                            </div>
                            <div class="col-6">
                                <div class="row m-0 p-0 mb-3">
                                    <div class="col m-0 p-0 mr-2">
                                        <select class="form-control w-100 h-100">
                                            <option selected="selected">리그</option>
                                            <option value="epl">English Premier League</option>
                                            <option value="laliga">La Liga Santander</option>
                                            <option value="ligue1">Ligue 1</option>
                                            <option value="seriea">Serie A</option>
                                            <option value="bundes">Bundesliga</option>
                                        </select>
                                    </div>
                                    <div class="col m-0 p-0">
                                        <select class="form-control w-100 h-100">
                                            <option selected="selected">팀</option>
                                            <option value="tottenham">Tottenham Hotspur</option>
                                            <option value="mu">Manchester United</option>
                                        </select>
                                    </div>
                                </div>
                                <div style="border: 1px solid lightgrey;height: 200px;max-height: 200px;overflow-y: auto;border-radius: 0.25rem">

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
export default {
    name: 'PlayerSearchModal',
    data() {
        return {
            
        }
    },
}
    
</script>

<style lang="scss" scoped>
.card {
    height: 400px;
    max-height: 400px;
    overflow-y: auto;
}

.filter-btn {
    border-radius: 0.25rem;
    height: 40px;
    padding: 10px;
    border: 1px solid lightslategray;

    &:hover {
        cursor: pointer;
        background-color: lightgrey;
    }

    &-active {
        background-color: #5F85BB;
        color: #FFF;
    }
}

img {
    width: 240px;
    height: 240px;
    object-fit: contain;
}

.modal-mask {
    padding-top: 50px;
}
.modal-container {
    width: 720px;
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