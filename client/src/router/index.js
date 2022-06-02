import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Player from '../views/player/Player.vue'
import Community from '../views/cummunity/Community.vue'
import SquadBattle from '../views/squadBattle/SquadBattle.vue'

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
    path: '/squadBattle',
    name: 'SquadBattle',
    component: SquadBattle
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
