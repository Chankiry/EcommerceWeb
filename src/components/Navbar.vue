<template>
  <nav class="bg-stone-500 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <router-link to="/" class="flex items-center">
        <img src="@/assets/logo3.png" alt="E-Commerce Logo" class="h-10">
        </router-link>

      <!-- Navigation Links -->
      <ul class="flex space-x-4">
        <li><router-link to="/" class="text-white hover:text-gray-300 font-mono">
          <i class="bi bi-house-door-fill"></i> Home</router-link></li>
        <li><router-link to="/about-us" class="text-white hover:text-gray-300 font-mono">About Us</router-link></li>
        <li><router-link to="/cart" class="text-white hover:text-gray-300 relative font-mono">
          Cart <i class="bi bi-cart"></i>
          
          <span v-if="cartItemsCount > 0" class="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{{ cartItemsCount }}</span>
        </router-link></li>
        <li><router-link to="/history" class="text-white hover:text-gray-300 font-mono">History</router-link></li>
      </ul>

      <!-- Authentication Links -->
      <ul class="flex space-x-4">
        <li><router-link to="/account/profile" class="text-white hover:text-gray-300 font-mono				"> 
          <i class="bi bi-person-circle"></i> Profile 
         
        </router-link></li>
        <li v-if="!isAuthenticated"><router-link to="/auth/login" class="text-white hover:text-gray-300 font-mono">Login</router-link></li>
        <li v-if="!isAuthenticated"><router-link to="/auth/signup" class="text-white hover:text-gray-300 font-mono">Sign Up</router-link></li>
        <li v-if="isAuthenticated"><a href="#" @click.prevent="logout" class="text-white hover:text-gray-300 font-mono">Logout</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      cartItemsCount: 0,
      isAuthenticated: false,
     
    };
  },
  methods: {
    logout() {
      this.isAuthenticated = false;
      localStorage.removeItem('user');
      this.$router.push('/auth/login');
    },
  },
  created() {
    this.isAuthenticated = !!localStorage.getItem('user');
  },
};
</script>

<style scoped>
/* Additional styling can go here */
</style>
