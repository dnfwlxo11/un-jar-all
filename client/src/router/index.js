import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Player from '../views/player/Player.vue'
import Community from '../views/community/Community.vue'
import SquadBattle from '../views/squadBattle/SquadBattle.vue'
import Content from '../views/community/vues/content.vue'
import Editor from '../views/community/vues/editor.vue'

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
    path: '/community',
    name: 'Community',
    component: Community
  },
  {
    path: '/community/editor',
    name: 'Community',
    component: Editor
  },
  {
    path: '/community/content/:contentId',
    name: 'Community',
    component: Content
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
