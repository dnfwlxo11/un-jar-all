<template>
  <div class="home">
    <nav-bar></nav-bar>
    <div class="container mb-5" style="padding: 90px 15px;">
      <logo class="mb-5"></logo>
      <div class="mb-3">
        <img class="league-logo mr-3" :src="require(`@/assets/${league}-logo.png`)" v-for="(league, idx) of leagues" :key="idx">
      </div>
      <search class="mb-5 d-flex justify-content-center"></search>
      <player-by-position class="mb-5"></player-by-position>
      <player-of-the-day class="mb-5"></player-of-the-day>
      <player-detail-search class="mb-5"></player-detail-search>
      <player-versus-search class="mb-5"></player-versus-search>
      <community-top-ten></community-top-ten>
    </div>
  </div>
</template>

<script>
import Logo from './vues/logo.vue'
import Search from './vues/search.vue'
import PlayerByPosition from './vues/playerByPosition.vue'
import PlayerOfTheDay from './vues/playerOfTheDay.vue'
import PlayerDetailSearch from './vues/playerDetailSearch.vue'
import PlayerVersusSearch from './vues/playerVersusSearch.vue'
import CommunityTopTen from './vues/communityTopTen.vue'

export default {
  name: 'Home',
  components: {
    Logo,
    Search,
    PlayerByPosition,
    PlayerDetailSearch,
    PlayerOfTheDay,
    PlayerVersusSearch,
    CommunityTopTen,
  },
  data() {
    return {
      leagues: ['epl', 'laliga', 'bundes', 'ligue1', 'seria']
    }
  },
}
</script>

<style lang="scss" scoped>
.league-logo {
  padding: 5px;
  height: 40px;
  width: 80px;
  border-radius: 0.25rem;
  background-color: #E0E0E0;
  object-fit: contain;
}
</style>
