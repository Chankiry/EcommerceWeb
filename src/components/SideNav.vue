<template>
  <nav class="w-64 bg-gray-800 text-white h-screen p-4">
    <ul class="space-y-4">
      <li v-for="item in items" :key="item.name">
        <router-link :to="item.route" class="block p-2 rounded hover:bg-gray-700 transition duration-300">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: 'Shoes',    route: '/home/shoes' },
        { name: 'HandBags', route: '/home/hand-bags' },
        { name: 'Wallets',  route: '/home/wallets' },
        { name: 'Clothes',  route: '/home/clothes' }
      ]
    };
  }
}
</script>

<style scoped>
/* Add any additional styles if needed */
</style>