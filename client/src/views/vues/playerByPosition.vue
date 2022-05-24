<template>
    <div class="player-by-position">
        <div class="row h-100">
            <div class="col vertical-line" @click="$router.push('/player/손흥민')">
                <div class="row h-100 m-0 p-0">
                    <div class="col-6 content">
                        <div class="mb-3" >
                            <strong style="font-size: 18px;">
                                <i class="mdi mdi-medal"></i> 1st
                                <br>
                                손 흥 민
                            </strong>
                        </div>
                        <div>
                            골 : 23개 <br>
                            어시스트 : 7개 <br>
                        </div>
                    </div>
                    <div class="col-6">
                        <img src="@/assets/son-full.png">
                    </div>
                </div>
            </div>
            <div class="col vertical-line" @click="$router.push('/player/해리케인')">
                <div class="row h-100 m-0 p-0">
                    <div class="col-6 content">
                        <div class="mb-3">
                            <strong style="font-size: 18px;">
                                <i class="mdi mdi-medal-outline"></i> 2nd
                                <br>
                                해 리 케 인
                            </strong>
                        </div>
                        <div>
                            골 : 17개 <br>
                            어시스트 : 9개 <br>
                        </div>
                    </div>
                    <div class="col-6">
                        <img src="@/assets/kane-full.png">
                    </div>
                </div>
            </div>
            <div class="col" @click="$router.push('/player/클루셉스키')">
                <div class="row h-100 m-0 p-0">
                    <div class="col-6 content">
                        <div class="mb-3">
                            <strong style="font-size: 18px;">
                                <i class="mdi mdi-medal-outline"></i> 3rd
                                <br>
                                클 루 셉 스 키
                            </strong>
                        </div>
                        <div>
                            골 : 5개 <br>
                            어시스트 : 8개 <br>
                        </div>
                    </div>
                    <div class="col-6">
                        <img src="@/assets/kul-full.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PlayerByPosition'
}
</script>
<style lang="scss" scoped>
.content {
    padding: 20px;
    text-align: left;
    vertical-align: middle;
    color: #000;
}

.player-by-position {
    background-color: #E0E0E0;
    border-radius: 0.5rem;
    height: 500px;
    
    & img {
        height: 100%;
        width: 100%;
        overflow: hidden;
        object-fit: cover;
    }
}


.vertical-line {
  border-right: 1px solid lightgray;
}
</style>