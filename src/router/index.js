import { createRouter, createWebHistory } from 'vue-router';
import ViewProduct from '../views/home/products/view_product/ViewProduct.vue';

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
     
    }
    
    
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;