<template>
  <div>
    <!-- Make Navbar sticky -->
    <Navbar class="sticky-navbar" />
    <div class="w-full h-[90px]">

    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
.sticky-navbar {
  position: sticky;
  top: 0; /* Stick to the top of the viewport */
  z-index: 1000; /* Ensure it stays above other content */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add a shadow for better visibility */
}
</style>