window.Vue = require('vue')
import store from '../../store'

// Vue components (for use in html)
Vue.component('example-component', require('../../components/Example.vue').default)

// Vue init
const app = new Vue({
    data () {
        return {
            showExampleComponent: false,
        }
    },
    store,
    el: '#app'
})