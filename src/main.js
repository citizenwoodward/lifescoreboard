import './firebase'

import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'

import scoreboard from './scoreboard.vue'
import createcard from './createcard.vue'
import stats from './stats.vue'


Vue.use(VueFire);
Vue.use(VueRouter);
 
const router = new VueRouter({
  history: true,
  routes: [
      { path: '/', name:'base', component: app},
        { path: '/createcard', name: 'Create A Card', component: createcard },
        { path: '/scorecards', name: 'Scorecards', component: scoreboard},
        { path: '/stats', name: 'Stats', component: stats }    
      
    ]
});
// const app = new Vue({router}).$mount('#app');


new Vue({
  el: '#app',
	router,	 	
  render: h => h(App)
})
