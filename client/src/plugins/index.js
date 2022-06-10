import navBar from '@/components/navBar.vue'
import Api from './http'
import Utils from './utils'

export default {
    install(Vue) {
        Vue.component('nav-bar', navBar)
        Vue.prototype.$Api = Api
        Vue.prototype.$Utils = Utils
    }
}