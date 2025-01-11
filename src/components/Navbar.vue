<template>
  <nav class="navbar">
    <div class="container mx-auto flex justify-between items-center px-6">
      <!-- Logo -->
      <router-link to="/" class="flex items-center">
        <img src="@/assets/logo3.png" alt="E-Commerce Logo" class="h-12">
      </router-link>

      <!-- Navigation Links -->
      <ul class="flex space-x-8 text-lg font-semibold">
        <li>
          <router-link to="/" class="nav-link">
            <i class="bi bi-house-door-fill"></i> Home
          </router-link>
        </li>
        <li>
          <router-link to="/about-us" class="nav-link">About Us</router-link>
        </li>
        <li>
          <router-link to="/cart" class="nav-link relative">
            Cart <i class="bi bi-cart"></i>
            <span
              v-if="cartItemsCount > 0"
              class="cart-badge"
            >
              {{ cartItemsCount }}
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/history" class="nav-link">History</router-link>
        </li>
      </ul>

      <!-- Authentication Links -->
      <ul class="flex space-x-6 text-lg font-semibold">
        <li>
          <router-link to="/account/profile" class="nav-link">
            <i class="bi bi-person-circle"></i> Profile
          </router-link>
        </li>
        <li v-if="!isAuthenticated">
          <router-link to="/auth/login" class="nav-link">Login</router-link>
        </li>
        <li v-if="!isAuthenticated">
          <router-link to="/auth/signup" class="nav-link">Sign Up</router-link>
        </li>
        <li v-if="isAuthenticated">
          <a
            href="#"
            @click.prevent="logout"
            class="nav-link"
          >
            Logout
          </a>
        </li>
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
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3));
  backdrop-filter: blur(5px); /* Adds a blur effect */
  padding: 20px 0;
  z-index: 1000;
}

.navbar img {
  height: 50px;
}

.navbar .nav-link {
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
  display: flex;
  align-items: center;
  gap: 8px; /* Adds spacing between icons and text */
}

.navbar .nav-link:hover {
  color: #f9a825; /* Highlight color */
}

.cart-badge {
  position: absolute;
  top: -5px;
  right: -10px;
  background: red;
  color: white;
  font-size: 12px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    text-align: center;
  }

  .navbar .nav-link {
    margin: 10px 0;
  }
}
</style>