import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Embed from 'v-video-embed';
import Recipe from "@/components/Recipe";
import Week from "@/components/Week";
import Home from "@/components/Home";
import vuetify from './plugins/vuetify';
import MoocService from "@/assets/data/MoocService.js";


Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Embed);

const routes = [
  {path: '/home', name: 'home', component: Home},
  {
    path: '/week/:id',
    name: 'week',
    component: Week,
    props: route => ({week: MoocService.getWeekById(route.params.id) })
  },
  {
    path: '/recipe',
    name: 'recipe',
    component: Recipe,
    props: route => ({recipe: JSON.parse(route.query.recipe)})
  },
  {path: '*', redirect: 'home'}
];
const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
