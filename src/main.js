import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Embed from 'v-video-embed';
import Recipe from "@/components/Recipe";
import Week from "@/components/Week";
import Home from "@/components/Home";
import vuetify from './plugins/vuetify';
import EndLesson from "@/components/EndLesson.vue";



Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Embed);

const routes = [
  {path: '/home', name: 'home', component: Home},
  {
    path: '/end-week/:week',
    name: 'end',
    component: EndLesson,
  },
  {
    path: '/week/:id',
    name: 'week',
    component: Week,
  },
  {
    path: '/recipe/:week/:recipe',
    name: 'recipe',
    component: Recipe,
  },
  {path: '*', redirect: 'home'}
];
const router = new VueRouter({
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    if(savedPosition) return savedPosition;
    else if (to.hash) return {selector: to.hash};
    else return {x: 0, y: 0}
  },
  routes
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
