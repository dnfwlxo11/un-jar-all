<template>
    <div class="playerDetailSearch">
        <div class="custom-card">
            <div class="text-left" style="font-size: 25px;">
                <div class="row">
                    <div class="col-6 text-left">
                        <strong>상세 검색</strong>
                    </div>
                    <div class="col-4"></div>
                    <div class="col-2 d-flex justify-content-end align-items-center">
                        <button class="w-100 custom-btn" style="font-size: 18px;">검색</button>
                    </div>
                </div>
            </div>
            <hr>
            <div class="text-left">
                <div class="row mb-5">
                    <div class="col-6">
                        <div class="row">
                            <div class="col-3 text-center mt-auto mb-auto" style="font-size: 20px;">
                                <strong>키</strong>
                            </div>
                            <div class="col-3">
                                <input class="form-control" type="number" placeholder="100">
                            </div>
                            <div class="col d-flex justify-content-center align-items-center">
                                <span style="font-size: 20px;">~</span>
                            </div>
                            <div class="col-3">
                                <input class="form-control" type="number" placeholder="220">
                            </div>
                            <div class="col d-flex justify-content-center align-items-center">
                                <span style="font-size: 20px;">cm</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="row">
                            <div class="col-3 text-center mt-auto mb-auto" style="font-size: 20px;">
                                <strong>몸무게</strong>
                            </div>
                            <div class="col-3">
                                <input class="form-control" type="number" placeholder="1">
                            </div>
                            <div class="col d-flex justify-content-center align-items-center">
                                <span style="font-size: 20px;">~</span>
                            </div>
                            <div class="col-3">
                                <input class="form-control" type="number" placeholder="150">
                            </div>
                            <div class="col d-flex justify-content-center align-items-center">
                                <span style="font-size: 20px;">kg</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col-6">
                        <div class="row">
                            <div class="col-3 text-center mt-auto mb-auto" style="font-size: 20px;">
                                <strong>소속리그</strong>
                            </div>
                            <div class="col">
                                <input class="form-control" type="text" placeholder="K-League">
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="row">
                            <div class="col-3 text-center mt-auto mb-auto" style="font-size: 20px;">
                                <strong>소속팀</strong>
                            </div>
                            <div class="col">
                                <input class="form-control" type="text" placeholder="전북현대FC">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="row">
                            <div class="col-3 text-center mt-auto mb-auto" style="font-size: 20px;">
                                <strong>나이</strong>
                            </div>
                            <div class="col-3">
                                <input class="form-control" type="number" placeholder="1">
                            </div>
                            <div class="col d-flex justify-content-center align-items-center">
                                <span style="font-size: 20px;">~</span>
                            </div>
                            <div class="col-3">
                                <input class="form-control" type="number" placeholder="100">
                            </div>
                            <div class="col d-flex justify-content-center align-items-center">
                                <span class="d-flex justify-content-center align-items-center" style="font-size: 20px;">세</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="row">
                            <div class="col-3 text-center mt-auto mb-auto" style="font-size: 20px;">
                                <strong>국적</strong>
                            </div>
                            <div class="col">
                                <input class="form-control" type="text" placeholder="한국">
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
    name: 'PlayerDetailSearch'
}
</script>
<style lang="scss" scoped>
.mdi-foot-print {
    color: #334257;
    display: inline-block;
    padding: 5px;
    background-color: #FFF;
    border-radius: 0.5rem;
}

.reverse-icon {
    transform: scaleX(-1);
}

.custom-btn {
  color: #35435D;
  border: 1px solid #35435D;
  background-color: #EEEEEE;
}
</style>