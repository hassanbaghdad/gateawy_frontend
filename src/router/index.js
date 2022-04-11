import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from "@/views/Products";
import Client from "@/views/Client";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/client/products',
    name: 'Client',
    component: Client
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
