<template>
    <div class="search">
        <input class="search-input pr-3" type="text" @keyup.enter="searchPlayer" v-model="name" placeholder="선수명을 입력해주세요.">
        <button class="search-btn" @click="searchPlayer">
            <i class="search-icon mdi mdi-magnify" style="font-size: 20px;"></i>
        </button>
    </div>
    <!-- <div class="input-group">
        <input type="text" class="form-control" placeholder="Recipient's username">
        <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">
                <i class="search-icon mdi mdi-magnify"></i>
            </button>
        </div>
    </div> -->
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
    color: #476072;
    text-align: left;
    padding: 0px;
    padding-left: 10px;
    outline: none;
    border: none;
    background-color: #EEEEEE;
    // border-radius: 0.5rem 0 0 0.5rem;
    width: 60%;
    height: 50px;
}

.search-input:focus {
    outline: none;
}

.search-icon {
    border: none;
    outline: none;
    color: #476072;
}

.search-btn {
    border: none;
    background-color: #EEEEEE;
    border-left: 1px solid #476072;
    // border-radius: 0 0.5rem 0.5rem 0;
    height: 50px;
    width: 50px;
}
</style>