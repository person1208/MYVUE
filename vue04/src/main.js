import Vue from 'vue';
import iviewui from 'view-design'
// import App from './App.vue';
// import Mytest from './Mytest.vue'
import App05 from './App05.vue'
// import 'view-design/dist/styles/iview.css';
Vue.use(iviewui);
new Vue({
    el: '#app',
    render(h) {
        return h(App05)
    }
})