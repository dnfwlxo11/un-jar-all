import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Player from '../views/player/Player.vue'
import Community from '../views/cummunity/Community.vue'
import SquardBattle from '../views/squardBattle/SquardBattle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/player/:playerName',
    name: 'Player',
    component: Player
  },
  {
    path: '/cummunity',
    name: 'Community',
    component: Community
  },
  {
    path: '/squardBattle',
    name: 'SquardBattle',
    component: SquardBattle
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
