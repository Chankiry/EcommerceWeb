import { createRouter, createWebHistory } from 'vue-router';
import ViewProduct from '../views/home/products/view_product/ViewProduct.vue';
import PageAdmin from '@/Admin/Page-Admin.vue';
const routes = [
  {
    path: '/', redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/home/Home.vue'),
    children: [
      { path: '', redirect: '/home/shoes' }, // Default route to /home/shoes
      { path: 'shoes', component: () => import('../views/home/products/Shoes.vue') },
      { path: 'hand-bags', component: () => import('../views/home/products/HandBags.vue') },
      { path: 'Wallets', component: () => import('../views/home/products/Wallets.vue') },
      { path: 'clothes', component: () => import('../views/home/products/Clothes.vue') },
      { path: 'view-product', component: () => import('../views/home/products/view_product/ViewProduct.vue') },
    ]
  },

  {
    path: '/about-us',
    name: 'AboutUs',
    component: () => import('../views/about_us/AboutUs.vue')
  },
  {

    path: '/cart',
    name: 'Cart',
    component: () => import('../views/cart/Cart.vue')
  },
  {
    
    path: '/shipping',
    name: 'Shipping',
    component: () => import('../views/cart/Shipping.vue')
  },
  {
    
    path: '/payment',
    name: 'Payment',
    component: () => import('../views/cart/Payment.vue')
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/history/History.vue')
  },
  {
    path: '/account/profile',
    name: 'Profile',
    component: () => import('../views/account/Profile.vue')
  },
  {
    path: '/auth',
    children: [
      { path: 'login', component: () => import('../views/auth/Login.vue') },
      { path: 'forgot-password', component: () => import('../views/auth/ForgotPassword.vue') },
      { path: 'signup', component: () => import('../views/auth/SignUp.vue') },
    ]
  },
  
    {
      path: '/product/:id', // Dynamic route with product ID
    name: 'ViewProduct',
    component: ()=>import('../views/home/products/view_product/ViewProduct.vue'),
    props: true,
     
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: () => import('../views/about_us/contactus.vue'),
    },
    {
      path: '/Clothes',
      name: 'Clothes',
      component: () => import('../views/home/products/Clothes.vue'),
    },
    {
      path: '/admin',
      name: 'AdminPage',
      component: PageAdmin,
    },
    {
      path: '/account/Profile-Admin',
      name: 'Profile-Admin',
      component: () => import('../views/account/Profile-Admin.vue'),
    },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;