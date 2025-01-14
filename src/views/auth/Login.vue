<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-3xl font-bold text-center mb-8">Login</h1>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-bold mb-2">Email or Phone</label>
          <input type="text" v-model="emailOrPhone" id="email" class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required>
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700 font-bold mb-2">Password</label>
          <input type="password" v-model="password" id="password" class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required>
        </div>
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center">
            <input type="checkbox" v-model="rememberMe" id="rememberMe" class="form-checkbox h-5 w-5 text-blue-500">
            <label for="rememberMe" class="ml-2 text-gray-700">Remember Me</label>
          </div>
          <router-link to="/auth/forgot-password" class="text-blue-500 hover:underline">Forgot Password?</router-link>
        </div>
        <button type="submit" class="w-full bg-stone-500 text-white font-bold py-3 rounded hover:bg-stone-600 transition duration-300">Login</button>
      </form>
      <div class="mt-6 text-center">
        <p class="text-gray-600">Don't have an account? <router-link to="/auth/signup" class="text-blue-500 hover:underline">Sign up</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      apiUrl: import.meta.env.VITE_API_BASE_URL,
      emailOrPhone: '',
      password: '',
      rememberMe: false
    }
  },
  methods: {
    login() {
      const payload = {
        username: this.emailOrPhone, // Send the input directly
        password: this.password,
        rememberMe: this.rememberMe
      };

      axios.post(this.apiUrl + 'auth/login', payload)
        .then(response => {
          const token = response.data.access_token;
          const role = response.data.role;
          const user = response.data.user;

          // Store token, role, and user in localStorage
          localStorage.setItem('Token', token);
          localStorage.setItem('role', role);
          localStorage.setItem('user', JSON.stringify(user)); // Store user as a JSON string
          this.$router.push('/home').then(() => {
            // Reload the page after navigation is complete
            window.location.reload();
          });
        })
        .catch(error => {
          console.log('Login failed:', error.response?.data?.message || error.message);
          alert('Login failed: ' + (error.response?.data?.message || 'Please try again.'));
        });
    }
  }
}
</script>