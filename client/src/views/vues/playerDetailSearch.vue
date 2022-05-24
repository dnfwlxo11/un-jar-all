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
                <div class="row mb-4">
                    <div class="col">
                        <div class="row">
                            <div class="col-6 text-center" style="font-size: 20px;">
                                <strong>주발</strong>
                            </div>
                            <div class="col-6">
                                <i class="mdi mdi-foot-print mr-2" style="font-size: 30px;"></i>
                                <i class="mdi mdi-foot-print reverse-icon" style="font-size: 30px;"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row">
                            <div class="col-4 text-center" style="font-size: 20px;">
                                <strong>키</strong>
                            </div>
                            <div class="col-3">
                                <input class="form-control" type="number">
                            </div>
                            <span class="d-flex justify-content-center align-items-center" style="font-size: 20px;">~</span>
                            <div class="col-3">
                                <input class="form-control" type="number">
                            </div>
                            <span class="d-flex justify-content-center align-items-center" style="font-size: 20px;">cm</span>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row">
                            <div class="col-4 text-center" style="font-size: 20px;">
                                <strong>몸무게</strong>
                            </div>
                            <div class="col-3">
                                <input class="form-control" type="number">
                            </div>
                            <span class="d-flex justify-content-center align-items-center" style="font-size: 20px;">~</span>
                            <div class="col-3">
                                <input class="form-control" type="number">
                            </div>
                            <span class="d-flex justify-content-center align-items-center" style="font-size: 20px;">kg</span>
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="row">
                            <div class="col-6 text-center" style="font-size: 20px;">
                                <strong>주발</strong>
                            </div>
                            <div class="col-6">
                                <i class="mdi mdi-foot-print mr-2" style="font-size: 30px;"></i>
                                <i class="mdi mdi-foot-print reverse-icon" style="font-size: 30px;"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row">
                            <div class="col-4 text-center" style="font-size: 20px;">
                                <strong>키</strong>
                            </div>
                            <div class="col-3">
                                <input class="form-control" type="number">
                            </div>
                            <span class="d-flex justify-content-center align-items-center" style="font-size: 20px;">~</span>
                            <div class="col-3">
                                <input class="form-control" type="number">
                            </div>
                            <span class="d-flex justify-content-center align-items-center" style="font-size: 20px;">cm</span>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row">
                            <div class="col-4 text-center" style="font-size: 20px;">
                                <strong>몸무게</strong>
                            </div>
                            <div class="col-3">
                                <input class="form-control" type="number">
                            </div>
                            <span class="d-flex justify-content-center align-items-center" style="font-size: 20px;">~</span>
                            <div class="col-3">
                                <input class="form-control" type="number">
                            </div>
                            <span class="d-flex justify-content-center align-items-center" style="font-size: 20px;">kg</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="row">
                            <div class="col-6 text-center" style="font-size: 20px;">
                                <strong>주발</strong>
                            </div>
                            <div class="col-6">
                                <i class="mdi mdi-foot-print mr-2" style="font-size: 30px;"></i>
                                <i class="mdi mdi-foot-print reverse-icon" style="font-size: 30px;"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row">
                            <div class="col-4 text-center" style="font-size: 20px;">
                                <strong>키</strong>
                            </div>
                            <div class="col-3">
                                <input class="form-control" type="number">
                            </div>
                            <span class="d-flex justify-content-center align-items-center" style="font-size: 20px;">~</span>
                            <div class="col-3">
                                <input class="form-control" type="number">
                            </div>
                            <span class="d-flex justify-content-center align-items-center" style="font-size: 20px;">cm</span>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row">
                            <div class="col-4 text-center" style="font-size: 20px;">
                                <strong>몸무게</strong>
                            </div>
                            <div class="col-3">
                                <input class="form-control" type="number">
                            </div>
                            <span class="d-flex justify-content-center align-items-center" style="font-size: 20px;">~</span>
                            <div class="col-3">
                                <input class="form-control" type="number">
                            </div>
                            <span class="d-flex justify-content-center align-items-center" style="font-size: 20px;">kg</span>
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
hr {
    border: 1px solid #FFF;
    margin-bottom: 30px;
}

.mdi-foot-print {
    color: #757575;
    display: inline-block;
    padding: 5px;
    background-color: #FFF;
    border-radius: 0.5rem;
}

.reverse-icon {
    transform: scaleX(-1);
}

.custom-card {
    color: #FFF;
    height: 400px;
    background-color: #1E2025;
    border-radius: 0.5rem;
    padding: 30px;
}
</style>