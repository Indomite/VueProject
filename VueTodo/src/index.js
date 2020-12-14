import Vue from 'vue'
import app from './app.vue'

import './assets/images/bg.jpg'
import './assets/style/global.css'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    render: (h) => h(app)
}).$mount(root)