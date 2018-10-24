import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "portfolio" */ './components/portfolio/Portfolio'),
    },
    {
      path: '/stocks',
      name: 'stocks',
      component: () => import(/* webpackChunkName: "stocks" */ './components/stocks/Stocks'),
    }
  ]
})
