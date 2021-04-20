import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Recipe from "@/components/Recipe";
import Week from "@/components/Week";
import Home from "@/components/Home";


Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  {path: '/home', name: 'home', component: Home},
  {
    path: '/week',
    name: 'week',
    component: Week,
    props: route => ({week: JSON.parse(route.query.week)})
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
  render: h => h(App),
}).$mount('#app')
