import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { isMobile } from 'mobile-device-detect'
import './plugins/bootstrap'
import './plugins/axios'
import './plugins/veeValidate'
import './plugins/sweetalert2'
import './plugins/helpers-config'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

Vue.mixin({
    data() {
        return {
            classMobile: isMobile ? '-mobile' : '',
            isMobile: isMobile
        }
    }
})
