<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-3xl font-bold text-center mb-8">Sign Up</h1>
      <form @submit.prevent="signup">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-bold mb-2">Name</label>
          <input type="text" v-model="name" id="name" class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required>
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" v-model="email" id="email" class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required>
        </div>
        <div class="mb-4">
          <label for="phone" class="block text-gray-700 font-bold mb-2">Phone</label>
          <input type="text" v-model="phone" id="phone" class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required>
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700 font-bold mb-2">Password</label>
          <input type="password" v-model="password" id="password" class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required>
        </div>
        <div class="mb-6">
          <label for="confirmPassword" class="block text-gray-700 font-bold mb-2">Confirm Password</label>
          <input type="password" v-model="confirmPassword" id="confirmPassword" class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required>
        </div>
        <button type="submit" class="w-full bg-stone-500 text-white font-bold py-3 rounded hover:bg-stone-600 transition duration-300">Sign Up</button>
      </form>
      <div class="mt-6 text-center">
        <p class="text-gray-600">Already have an account? <router-link to="/auth/login" class="text-blue-500 hover:underline">Log in</router-link></p>
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
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    validatePasswordMatch() {
      return this.password === this.confirmPassword;
    },
    signup() {

      // Validate password match
      if (!this.validatePasswordMatch()) {
        alert('Passwords do not match.');
        return;
      }

      // Prepare the payload
      const payload = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        password: this.password
      };

      // Send the signup request
      axios.post(this.apiUrl + 'auth/sign-up', payload)
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
          console.error('Signup failed:', error.response?.data?.message || error.message);
          alert('Signup failed: ' + (error.response?.data?.message || 'Please try again.'));
        });
    }
  }
}
</script>