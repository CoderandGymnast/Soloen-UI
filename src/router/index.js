import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Wallet from '@/components/Wallet'
import AboutUs from '@/components/AboutUs'
import Address from '@/components/Address'
import MyAccount from '@/components/users/MyAccount'
import Login from '@/components/users/Login'
import Register from '@/components/users/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/wallet',
      name: 'Wallet',
      component: Wallet
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/address/:addr',
      name: 'Address',
      props: true,
      component: Address
    },
    {
      path: '/myaccount',
      name: 'myAccount',
      component: MyAccount
    },
    {
      path: '/myaccount/register',
      name: 'register',
      component: Register
    },
    {
      path: '/myaccount/login',
      name: 'login',
      component: Login
    }
  ]
})
