import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Wallet from '@/components/Wallet'
import AboutUs from '@/components/AboutUs'
import Address from '@/components/Address'
import Contracts from '@/components/users/Contracts'
import Login from '@/components/users/Login'
import Register from '@/components/users/Register'
import CreateWallet from '@/components/Wallets/CreateWallet'
Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/myaccount/wallet/',
      props: true,
      name: 'Wallet',
      component: Wallet
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/address',
      name: 'Address',
      props: true,
      component: Address
    },
    {
      path: '/myaccount/make-contract',
      name: 'myContract',
      component: Contracts,
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
    },
    {
      path: '/walletconnect/create-wallet',
      name: 'createwallet',
      component: CreateWallet
    },
    {
      path: '/walletconnect/import-wallet',
      name: 'importWallet',
      component: CreateWallet
    }
  ]
})
