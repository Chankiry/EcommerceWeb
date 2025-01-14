<template>
  <nav class="navbar">
    <div class="container mx-auto flex justify-between items-center px-6">
      <!-- Logo -->
      <router-link to="/" class="flex items-center">
        <img src="@/assets/logo3.png" alt="E-Commerce Logo" class="h-12">
      </router-link>

      <!-- Mobile Menu Toggle Button -->
      <button
        class="menu-toggle block md:hidden"
        @click="isMenuOpen = !isMenuOpen"
        aria-label="Toggle menu"
      >
        <i class="bi bi-list text-black text-2xl"></i>
      </button>

      <!-- Navigation Links -->
      <ul
        class="nav-links flex space-x-8 text-lg font-semibold hidden md:flex"
        :class="{ 'flex flex-col space-y-4 absolute top-16 left-0 bg-black w-full text-center py-4 md:static md:flex-row md:space-y-0 md:space-x-8': isMenuOpen }"
      >
        <li>
          <router-link
            to="/"
            class="nav-link"
            :class="{ 'active-link': isActive('/') }"
          >
            <i class="bi bi-house-door-fill"></i> Home
          </router-link>
        </li>
        <li>
          <router-link
            to="/about-us"
            class="nav-link"
            :class="{ 'active-link': isActive('/about-us') }"
          >
            About Us
          </router-link>
        </li>
        <li v-if="!isAdmin && isAuthenticated">
          <router-link
            to="/cart"
            class="nav-link relative"
            :class="{ 'active-link': isActive('/cart') }"
          >
            Cart <i class="bi bi-cart"></i>
            <span v-if="cartItemsCount > 0" class="cart-badge">
              {{ cartItemsCount }}
            </span>
          </router-link>
        </li>
        <li v-if="!isAdmin && isAuthenticated">
          <router-link
            to="/history"
            class="nav-link"
            :class="{ 'active-link': isActive('/history') }"
            @click.native="navigateAndReload('/history')"
          >
            History
          </router-link>
        </li>
        <li v-if="isAdmin && isAuthenticated">
          <router-link
            to="/Sales"
            class="nav-link"
            :class="{ 'active-link': isActive('/Sales') }"
            @click.native="navigateAndReload('/Sales')"
          >
            Sales
          </router-link>
        </li>
      </ul>

      <!-- Authentication Links -->
      <ul
        class="auth-links flex space-x-6 text-lg font-semibold hidden md:flex"
        :class="{ 'flex flex-col space-y-4 absolute top-16 left-0 bg-black w-full text-center py-4 md:static md:flex-row md:space-y-0 md:space-x-6': isMenuOpen }"
      >
        <li v-if="isAuthenticated">
          <router-link
            to="/account/profile"
            class="nav-link"
            :class="{ 'active-link': isActive('/account/profile') }"
          >
            <i class="bi bi-person-circle"></i> Profile
          </router-link>
        </li>
        <li v-if="!isAuthenticated">
          <router-link
            to="/auth/login"
            class="nav-link"
            :class="{ 'active-link': isActive('/auth/login') }"
          >
            Login
          </router-link>
        </li>
        <li v-if="!isAuthenticated">
          <router-link
            to="/auth/signup"
            class="nav-link"
            :class="{ 'active-link': isActive('/auth/signup') }"
          >
            Sign Up
          </router-link>
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
      isMenuOpen: false,
      isAuthenticated: !!localStorage.getItem('Token'),
      isAdmin: localStorage.getItem('role') === 'Admin',
    };
  },
  methods: {
    navigateAndReload(route) {
      // Navigate to the specified route
      this.$router.push(route).then(() => {
        // Reload the page after navigation is complete
        window.location.reload();
      });
    },
    isActive(route) {
      return this.$route.path === route;
    },
    logout() {
      this.isAuthenticated = false;
      localStorage.clear();
      this.$router.push('/auth/login');
    },
    isActive(route) {
      return this.$route.path === route;
    },
  },
  created() {
    this.isAuthenticated = localStorage.getItem('Token') ? true : false;
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: linear-gradient(to bottom, rgba(230, 230, 230, 0.8), rgba(220, 216, 216, 0.3));
  backdrop-filter: blur(10px);
  padding: 6px;
  z-index: 1000;
}

.navbar img {
  height: 50px;
}

.navbar .nav-link {
  text-decoration: none;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: initial;
  color: rgb(30, 28, 28);
  font-weight: 500;
  transition: color 0.3s ease-in-out;
  display: flex;
  align-items: center;
  gap: 8px;
}

.navbar .nav-link:hover {
  color: #f9a825;
}

/* Active link styling */
.navbar .active-link {
  color: #f9a825;
  font-weight: bold;
  border-bottom: 2px solid #f9a825; /* Add a bottom border for the active link */
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

.menu-toggle {
  background: none;
  border: none;
  color: black;
  cursor: pointer;
}

.nav-links,
.auth-links {
  transition: all 0.3s ease-in-out;
}

@media (max-width: 768px) {
  .nav-links.hidden,
  .auth-links.hidden {
    display: none;
  }

  .menu-toggle {
    display: block;
  }
}
</style>
