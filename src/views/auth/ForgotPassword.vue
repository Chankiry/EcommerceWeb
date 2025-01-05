<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-3xl font-bold text-center mb-8">Forgot Password</h1>
        <form @submit.prevent="sendResetLink">
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" v-model="email" id="email" class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required>
          </div>
          <button type="submit" class="w-full bg-stone-500 text-white font-bold py-3 rounded hover:bg-stone-600 transition duration-300">Send Reset Link</button>
        </form>
        <div class="mt-6 text-center">
          <p class="text-gray-600">Remember your password? <router-link to="/auth/login" class="text-blue-500 hover:underline">Log in</router-link></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: ''
      }
    },
    methods: {
      sendResetLink() {
        // Add your logic to send the password reset link
        console.log('Send reset link to:', this.email)
        // Example: Call an API to send the reset link
        // this.$axios.post('/api/forgot-password', { email: this.email })
        //   .then(response => {
        //     alert('Reset link sent to your email')
        //   })
        //   .catch(error => {
        //     alert('Error: ' + error.response.data.message)
        //   })
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add any additional styles if needed */
  </style>