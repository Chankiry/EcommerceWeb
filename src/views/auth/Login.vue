<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-3xl font-bold text-center mb-8">Login</h1>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" v-model="email" id="email" class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required>
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
  export default {
    data() {
      return {
        email: '',
        password: '',
        rememberMe: false
      }
    },
    methods: {
      login() {
        // Add your login logic here
        console.log('Login with:', this.email, this.password, 'Remember Me:', this.rememberMe)
      }
    }
  }
  </script>