<template>
  <div class="h-full flex flex-col bg-gray-100">
    <div class="bg-slate-200 min-h-[800px]">
      home-work
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