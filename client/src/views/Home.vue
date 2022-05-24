<template>
  <div class="home">
    <nav-bar></nav-bar>
    <div class="container mt-5 mb-5">
      <logo class="mb-5"></logo>
      <search class="mb-5"></search>
      <player-by-position class="mb-5"></player-by-position>
      <player-of-the-day class="mb-5"></player-of-the-day>
      <player-detail-search class="mb-5"></player-detail-search>
    </div>
  </div>
</template>

<script>
import Logo from './vues/logo.vue'
import Search from './vues/search.vue'
import PlayerByPosition from './vues/playerByPosition.vue'
import PlayerDetailSearch from './vues/playerDetailSearch.vue'
import PlayerOfTheDay from './vues/playerOfTheDay.vue'

export default {
  name: 'Home',
  components: {
    Logo,
    Search,
    PlayerByPosition,
    PlayerDetailSearch,
    PlayerOfTheDay,
  },
}
</script>

<style lang="scss" scoped>

</style>
