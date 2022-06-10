import Vue from 'vue';
import Toasted from 'vue-toasted'
import {format, add, sub} from 'date-fns'

Vue.use(Toasted);

function toast(msg) {
    Vue.toasted.clear();
    Vue.toasted.show(msg, {
        theme: 'bubble',
        position: 'bottom-center',
        duration: 3000,
        type: 'error',
        singleton: true,
    })
}

function toastSuccess(msg) {
    Vue.toasted.clear();
    Vue.toasted.show(msg, {
        theme: 'bubble',
        position: 'bottom-center',
        duration: 3000,
        type: 'success',
        singleton: true,
    })
}

function toastInfo(msg) {
    Vue.toasted.clear();
    Vue.toasted.show(msg, {
        theme: 'bubble',
        position: 'bottom-center',
        duration: 3000,
        type: 'info',
        singleton: true,
    })
}

function dateFormat(date, formatStr) {
    return format(date, formatStr)
}

function dateAdd(date, target) {
    return add(date, target)
}

function dateSub(date, target) {
    return sub(date, target)
}

export default {
    toast,
    toastSuccess,
    toastInfo,
    dateFormat,
    dateAdd,
    dateSub,
}