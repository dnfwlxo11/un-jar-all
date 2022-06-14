import Vue from 'vue';
import Toasted from 'vue-toasted'
import cloneDeep from 'lodash/cloneDeep'
import {format, add, sub} from 'date-fns'

Vue.use(Toasted);

export default {
    cloneObj(obj) {
        return cloneDeep(obj)
    },

    toast(msg) {
        Vue.toasted.clear();
        Vue.toasted.show(msg, {
            theme: 'bubble',
            position: 'bottom-center',
            duration: 3000,
            type: 'error',
            singleton: true,
        })
    },
    
    toastSuccess(msg) {
        Vue.toasted.clear();
        Vue.toasted.show(msg, {
            theme: 'bubble',
            position: 'bottom-center',
            duration: 3000,
            type: 'success',
            singleton: true,
        })
    },
    
    toastInfo(msg) {
        Vue.toasted.clear();
        Vue.toasted.show(msg, {
            theme: 'bubble',
            position: 'bottom-center',
            duration: 3000,
            type: 'info',
            singleton: true,
        })
    },
    
    dateFormat(date, formatStr) {
        return format(date, formatStr)
    },
    
    dateAdd(date, target) {
        return add(date, target)
    },
    
    dateSub(date, target) {
        return sub(date, target)
    },
}