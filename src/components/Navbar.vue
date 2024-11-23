<template>
  <nav class="bg-blue-500 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo and Brand Name -->
      <router-link to="/" class="text-white text-2xl font-bold">E-Commerce</router-link>

      <!-- Navigation Links -->
      <ul class="flex space-x-4">
        <li><router-link to="/" class="text-white hover:text-gray-300">Home</router-link></li>
        <li><router-link to="/about-us" class="text-white hover:text-gray-300">About Us</router-link></li>
        <li><router-link to="/cart" class="text-white hover:text-gray-300 relative">
          Cart
          <span v-if="cartItemsCount > 0" class="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{{ cartItemsCount }}</span>
        </router-link></li>
      </ul>

      <!-- User Authentication Links -->
      <ul class="flex space-x-4">
        <li><router-link to="/account/profile" class="text-white hover:text-gray-300">Profile</router-link></li>
        <li v-if="!isAuthenticated"><router-link to="/auth/login" class="text-white hover:text-gray-300">Login</router-link></li>
        <li v-if="!isAuthenticated"><router-link to="/auth/signup" class="text-white hover:text-gray-300">Sign Up</router-link></li>
        <li v-if="isAuthenticated"><a href="#" @click.prevent="logout" class="text-white hover:text-gray-300">Logout</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      searchQuery: '',
      cartItemsCount: 0, // This should be dynamically updated
      isAuthenticated: false // This should be managed by Vuex or a similar state management solution
    };
  },
  methods: {
    logout() {
      // Implement logout functionality
      this.isAuthenticated = false;
      // Clear any local storage or session data
      localStorage.removeItem('user');
      this.$router.push('/login');
    }
  },
  created() {
    // Check if the user is authenticated on component creation
    this.isAuthenticated = !!localStorage.getItem('user');
  }
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>