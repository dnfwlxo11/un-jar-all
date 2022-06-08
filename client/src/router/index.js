import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/profile/Profile.vue'
import SignIn from '../views/profile/vues/SignIn.vue'
import SignUp from '../views/profile/vues/SignUp.vue'
import FindId from '../views/profile/vues/FindId.vue'
import FindPassword from '../views/profile/vues/FindPassword.vue'
import Player from '../views/player/Player.vue'
import Community from '../views/community/Community.vue'
import SquadBattle from '../views/squadBattle/SquadBattle.vue'
import Content from '../views/community/vues/content.vue'
import Editor from '../views/community/vues/editor.vue'

Vue.use(VueRouter)

const authentication = (to, from, next) => {
  const authToken = window.$cookies.get('token')

  if (authToken) next()
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/member',
    name: 'Member',
    component: Profile,
    children: [
      {
        path: 'signin',
        name: 'SignIn',
        component: SignIn
      },
      {
        path: 'signup',
        name: 'SignUp',
        component: SignUp
      },
      {
        path: 'find/id',
        name: 'FindId',
        component: FindId
      },
      {
        path: 'find/password',
        name: 'FindPassword',
        component: FindPassword
      },
    ]
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
