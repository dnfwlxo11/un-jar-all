<template>
    <div class="stat-player">
        <div class="custom-card">
            <div class="row mt-3 mb-3">
                <div class="col-4 text-right">
                    <strong style="font-size: 35px;">손 흥 민</strong>
                </div>
                <div class="col-8 text-left">
                    <span class="badge mr-2">강철몸</span>
                    <span class="badge">득점왕</span>
                    <div>
                        <small>27세</small>
                    </div>
                </div>
            </div>
            <hr>
            <div class="row mb-3">
                <div class="col-1"></div>
                <div class="col-3 text-left">
                    <div class="mb-2">
                        <span>포지션</span>
                    </div>
                    <div class="mb-2">&nbsp;</div>
                    <div class="mb-2">&nbsp;</div>
                    <div class="mb-2">
                        <span>생년월일</span>
                    </div>
                    <div class="mb-2">
                        <span>키</span>
                    </div>
                    <div class="mb-2">
                        <span>몸무게</span>
                    </div>
                </div>
                <div class="col-8 text-left">
                    <div class="mb-2">
                        <span class="fw-icon">LW</span> 좌측 윙포워드, <span class="fw-icon">RW</span> 오측 윙포워드
                    </div>
                    <div class="mb-2">
                        <span class="fw-icon">ST</span> 스트라이커
                    </div>
                    <div class="mb-2">
                        <span class="fw-icon">SS</span> 세컨드 스트라이커
                    </div>
                    <div class="mb-2">
                        <span>1992.08.28</span>
                    </div>
                    <div class="mb-2">
                        <span>183cm</span>
                    </div>
                    <div class="mb-2">
                        <span>77kg</span>
                    </div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-1"></div>
                <div class="col-3 text-left">
                    <div class="mb-2">
                        <span>학력</span>
                    </div>
                </div>
                <div class="col-8 text-left">
                    <div class="mb-2">
                        <span>동북중학교</span>
                    </div>
                    <div class="mb-2">
                        <span>동북고등학교</span>
                    </div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-1"></div>
                <div class="col-3 text-left">
                    <div class="mb-2">
                        <span>소속팀</span>
                    </div>
                </div>
                <div class="col-8 text-left">
                    <div class="mb-2">
                        <span>함부르크 SV</span>
                    </div>
                    <div class="mb-2">
                        <span>바이어 04 레버쿠젠</span>
                    </div>
                    <div class="mb-2">
                        <span>토트넘 홋스퍼 FC</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'StatPlayer'
}
</script>
<style lang="scss" scoped>
hr {
    color: lightgrey;
}

.badge {
    background: #35435D;
    padding: 5px;
}

.custom-card {
    color: #FFF;
    min-height: 500px;
    max-height: 700px;
    background-color: #1E2025;
    border-radius: 0.5rem;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 15px;
    padding-bottom: 15px;
}

.fw-icon {
    height: 20px;
    width: 20px;
    padding: 3px;
    border-radius: 50%;
    background-color: #FF4D4F;
}

.mf-icon {
    border-radius: 50%;
    background-color: #4D8D44;
}

.df-icon {
    border-radius: 50%;
    background-color: #0392E6;
}
</style>
