import { authGuard, authSettled } from '@bcwdev/auth0provider-client'
import { createRouter, createWebHashHistory } from 'vue-router'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/cars',
    name: 'Cars',
    component: loadPage('CarsPage')
  },
  {
    path: '/cars/:carId',
    name: 'Car',
    component: loadPage('CarPage')
  },
  {
    path: '/houses',
    name: 'Houses',
    component: loadPage('HousesPage')
  },
  {
    path: '/houses/:houseId',
    name: 'House',
    component: loadPage('HousePage')
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: loadPage('JobsPage')
  },
  {
    path: '/jobs/:jobId',
    name: 'Job',
    component: loadPage('JobPage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage'),
    beforeEnter: authSettled
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
