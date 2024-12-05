<template>  
  <div class="h-full flex flex-col bg-gray-100">
    <!-- Full-space image -->
    <div class="bg-slate-200 h-[800px] w-full flex items-center justify-center">
      <img src="@/assets/background.png" alt="Cloth background" class="w-full h-full object-cover">
    </div>

    <div class="w-full h-full flex">
      <SideNav />
      <div class="flex-1 flex items-center justify-center">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from '@/components/SideNav.vue';

export default {
  name: 'Home',
  components: {
    SideNav
  }
}
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
