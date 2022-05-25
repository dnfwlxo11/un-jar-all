<template>
  <div class="home">
    <nav-bar></nav-bar>
    <div class="container mt-5 mb-5" style="padding: 40px 15px;">
      <logo class="mb-5"></logo>
      <div class="mb-3">
        <img class="league-logo" src="@/assets/epl_logo.png">
      </div>
      <search class="mb-5 d-flex justify-content-center"></search>
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
.league-logo {
  padding: 5px;
  height: 40px;
  border-radius: 0.25rem;
  background-color: #E0E0E0;
}
</style>
