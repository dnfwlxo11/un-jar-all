<template>
    <div class="search">
        <input class="search-input pr-3" type="text" @keyup.enter="searchPlayer" v-model="name" placeholder="선수명을 입력해주세요.">
        <button class="search-btn" @click="searchPlayer">
            <i class="search-icon mdi mdi-magnify" style="font-size: 20px;"></i>
        </button>
    </div>
</template>

<script>
export default {
    name: 'Search',
    data() {
        return {
            name: null,
        }
    },
    methods: {
        searchPlayer() {
            if (this.name !== '손흥민' && this.name !== '해리케인' && this.name !== '클루셉스키') return
            else this.$router.push(`/player/${this.name}`)
        },
    },
}
</script>

<style lang="scss" scoped>
.search-input {
    color: #FFF;
    text-align: left;
    margin-top: 0px;
    padding-left: 10px;
    outline: none;
    border: none;
    background-color: #35435D;
    border-radius: 0.5rem 0 0 0.5rem;
    width: 50%;
    height: 40px;
}

.search-input:focus {
    outline: none;
}

.search-icon {
    border: none;
    outline: none;
    color: #FFF;
}

.search-btn {
    border: none;
    border-left: 2px solid #27282d;
    background-color: #35435D;
    border-radius: 0 0.5rem 0.5rem 0;
    height: 40px;
}
</style>