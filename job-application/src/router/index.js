import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import JobsView from '../views/jobs/JobsView.vue'
import JobDetailsView from '../views/jobs/JobDetailsView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }, 
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView
  },
  {
    path: '/jobs/:id',
    name: 'jobdetails',
    component: JobDetailsView,
    props: true
  },
  // redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },

  // catch all 404 route
  {
    path: '/:catchAll(.*)',
    name: 'notfound',
    component: NotFoundView
  }
]


// setting app the router instance
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
