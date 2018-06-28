import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "../views/HelloWorld.vue"
import Home from "../views/Home.vue"

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/hello-world',
      component: HelloWorld
    },
  ]
})