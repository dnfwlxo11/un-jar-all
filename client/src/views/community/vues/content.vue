<template>
    <div class="content">
        <div class="custom-card mb-3">
            <div class="title text-left mb-3">
                <strong>한국 대 브라질, 1 : 5 대패</strong>
            </div>
            <div class="row sub-title">
                <div class="col d-flex mr-auto">
                    <div>
                        {{ genre }}
                    </div>
                    <div class="split-vertical"></div>
                    <div>
                        {{ createTime }}
                    </div>
                    <div class="split-vertical"></div>
                    <div>
                        {{ nickName }}
                    </div>
                </div>
                <div class="col"></div>
                <div class="col d-flex justify-content-end">
                    <div>
                        <i class="mdi mdi-eye-outline"></i> {{ views }}
                    </div>
                    <div class="split-vertical"></div>
                    <div>
                        <i class="mdi mdi-comment-outline"></i> {{ comments }}
                    </div>
                    <div class="split-vertical"></div>
                    <div>
                        <i class="mdi mdi-thumb-up-outline"></i> {{ likes }}
                    </div>
                </div>
            </div>
            <hr>
            <div class="main-content">
                <img src="@/assets/dummy_content.jpg">
                <div class="text-content">
                    스코어가 말해주듯 한국 축구국가대표팀(이하 벤투호)이 2일 서울 상암월드컵경기장에서 열린 세계 최강(FIFA 랭킹 1위) 브라질과의 평가전에서 대패를 당했다. 한마디로 벤투호는 세계 최강을 맞아 경쟁력에 의한 가능성을 입증하기보다는, 오직 '삼바군단'이 구사하는 화려한 개인기와 빠르고 세밀한 패스, 그리고 상대 허를 찌르는 공격 패턴 플레이는 물론, 강한 압박과 더불어 경험에 의한 효율적이고 효과적인 고품격 축구를 경험하는 것으로서만 그쳤다.
                    따라서 11월 카타르 국제축구연맹(FIFA)월드컵에서 16강 진출을 노리고 있는, 벤투호에게 기대와 희망보다는 풀어야 할 숙제만 쌓인 한판 승부였다. 무엇보다 벤투호가 브라질을 상대하여 드러낸 핵심적인 문제점은 공격 빌드업과 수비 그리고 압박 등 총 3가지로 집약됐다. 먼저 공격 전술의 빌드업이 스피드가 결여되어 실효성이 없었다는 점이다. 결국 이는 손흥민(30.토트넘 홋스퍼), 황의조(30.브롱댕 보르도)를 비롯한 공격라인 선수들의 개인 능력으로 인한 공격 구사로만 이어져 공격력 강화에 필수적인 부분 전술인 연계 플레이 실종을 드러냈다.
                    이어 수비 문제는 브라질을 상대로 하여 또 다시 그 난맥상을 여실히 드러내며 대량 실점을 허용하는 빌미를 제공했다. 네이마르(30.파리 생제르망), 히샬리숑(25.에버튼), 하피냐(29.레알 소시에아드), 루카스 파케타(25.올림피크 리옹)의 초호화 브라질 공격라인 선수들의 화려한 개인기와 상황을 꿰뚫는 조직적인 플레이로 김영권(32.울산 현대), 권경원(30.감바 오사카), 홍철(32. 대구 FC), 이용(36.전북 현대)이 형성한 포백은 너무 쉽게 농락당했다. 이는 벤투호 감독이 경기 후 기자회견에서 밝힌 실점 원인이 실수가 아니며, 오직 이는 개인 능력과 스피드, 순발력, 민첩성 등 열세의 실력 차이였을 뿐이다.
                    강팀의 우선 조건은 선수 기량이지만 그러나 승리의 우선 조건은 수비력이다. 만약 수비력이 뒷박침 되지 못한다면 결코 강팀이 될 수 없음은 축구의 진리다. 그렇다면 벤투호는 카타르 FIFA월드컵 16강 성취를 위해서는 브라질전을 반면교사(反面敎師.다른 사람이나 사물의 부정적인 측면에서 가르침을 얻는다는 뜻)'로 삼아 이의 강화를 최우선 과제로 삼지 않으면 안된다. 마지막으로 벤투호가 브라질을 상대로 하여 드러낸 문제점은 바로 압박이다.
                </div>                    
                <div class="row mt-3 mb-3">
                    <div class="col"></div>
                    <div class="col-1 up-btn mr-3">
                        <i class="mdi mdi-thumb-up-outline"></i>
                    </div>
                    <div class="col-1 down-btn">
                        <i class="mdi mdi-thumb-down-outline"></i>
                    </div>
                    <div class="col"></div>
                </div>
            </div>
        </div>
        <comments></comments>
    </div>
</template>
<script>
import Comments from './comments.vue'

export default {
    name: 'ContentList',
    components: {
        Comments
    },
    data() {
        return {
            genre: '자유',
            createTime: '2022-06-03',
            nickName: '임대인',
            views: 0,
            comments: 0,
            likes: 0,
        }
    },
    created() {
        window.scrollTo(0, 0);
    },
}
</script>
<style lang="scss" scoped>
.title {
    font-size: 30px;
}

.custom-card {
    padding: 30px 50px 30px 50px;
}

.split-vertical {
    margin-left: 10px;
    margin-right: 10px;
    border-left: 1px solid gray;
}

.text-content {
    padding-top: 10px;
    padding-bottom: 30px;
    letter-spacing: 2px;
    word-spacing: 2px;
    line-height: 200%;
    text-align: justify;
}

.up-btn,
.down-btn {
    height: 50px;
    border: 1px solid gray;
    // border-radius: 0.25rem;
    font-size: 30px;
}

.up-btn:hover,
.down-btn:hover {
    background-color: #F1F3F5;
}

img {
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    object-fit: cover;
}
</style>