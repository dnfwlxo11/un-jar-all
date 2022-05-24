<template>
  <div class="home">
    <nav-bar></nav-bar>
    <div class="container mt-5 mb-5">
      <logo class="mb-5"></logo>
      <search class="mb-5"></search>
      <player-by-position></player-by-position>
    </div>
  </div>
</template>

<script>
import Logo from './vues/logo.vue'
import Search from './vues/search.vue'
import PlayerByPosition from './vues/playerByPosition.vue'

export default {
  name: 'Home',
  components: {
    Logo,
    Search,
    PlayerByPosition,
  },
}
</script>

<style lang="scss" scoped>

</style>
