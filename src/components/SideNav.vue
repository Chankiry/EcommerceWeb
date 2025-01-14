<template>
  <div class="h-auto bg-gray-100">
    <nav class="t-black p-4 sticky w-[18rem]">
      <ul class="space-y-4">
        <li v-for="item in items" :key="item.name">
          <router-link
            :to="item.route"
            class="p-2 border-bottom flex rounded-3xl border hover:bg-gray-200 hover:text-gray-600 font-bold transition duration-300 justify-center space-x-3"
          >
            <img :src="item.image" alt="image" class="img" />
            <div class="mt-4">{{ item.name }}</div>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import shoes from "../assets/images/a.png";
import clothes from "../assets/images/q.png";
import handbag from "../assets/images/v1.png";
import wallet from "../assets/images/b1.png";
export default {
  data() {
    return {
      items: [
        { image: shoes, name: "Shoes", route: "/home/shoes" },
        { image: handbag, name: "HandBags", route: "/home/hand-bags" },
        { image: wallet, name: "Wallets", route: "/home/wallets" },
        { image: clothes, name: "Clothes", route: "/home/clothes" },
      ],
    };
  },
};
</script>

<style scoped>
.sticky {
  position: sticky;
  top: 5.5rem;
}
.img {
  height: 3.5rem;
  width: 4rem;
}
</style>
