<template>
    <div class="community">
        <nav-bar></nav-bar>
        <div class="container mb-5" style="padding: 90px 15px;">
            <content-search class="mb-3"></content-search>
            <content-list class="mb-3"></content-list>
        </div>
    </div>
</template>
<script>
import ContentSearch from './vues/contentSearch.vue'
import contentList from './vues/contentList.vue'

export default {
    name: 'Community',
    components: {
        ContentSearch,
        contentList,
    },
}
</script>
<style lang="scss" scoped>

</style>