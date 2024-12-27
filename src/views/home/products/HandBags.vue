<template>
  <div class="">
    <form class="max-w-md mx-auto my-5 mr-7">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-400 sr-only dark:text-white"
        >Search</label
      >
      <div class="relative">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          class="block w-full p-4 ps-10 text-sm text-gray-400 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-400 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
          required
        />
        <button
          type="submit"
          class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>

    <div
      class="min-h-screen grid pt-[0rem] grid-cols-4 items-center justify-center bg-gray-100"
    >
      <router-link :to="'view-product'"
        class="w-[18rem] max-w-sm bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-white card grid"
        v-for="handBags in Handbages"
        :key="handBags.image"
      >
        <a href="#">
          <img
            class="p-3 rounded-t-lg mx-auto"
            :src="handBags.image"
            alt="product image"
          />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5
              class="text-lg font-semibold tracking-tight text-gray-900 dark:text-black"
            >
              {{ handBags.name }}
            </h5>
          </a>
          <div class="flex items-center justify-between">
            <div class="flex">
              <div class="text-xl font-bold text-gray-900 dark:text-blue-400">
                ${{ handBags.price_discount }}
              </div>
              <span class="text-md text-gray-900 dark:text-gray-500 ml-3">{{
                handBags.price
              }}</span>
            </div>
            <a
              href="#"
              class="text-black bg-gray-100 my-0 hover:text-white hover:bg-gray-500 focus:ring-8 focus:outline-none focus:ring-white font-medium border rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-100 dark:hover:bg-gray-500 dark:focus:ring-white"
              >Cart</a
            >
          </div>
          <div class="text-sm text-gray-900 dark:text-blue-800">
            {{ handBags.discount || "--" }}
          </div>
        </div>
      </router-link>
    </div>
    <div class="py-10 px-4 button">
      <button
        type="button"
        @click="companiesVisible += step"
        v-if="companiesVisible < handBags.length"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Load More
      </button>
    </div>
  </div>
</template>

<script>
import handbag01 from "../../../assets/images/handbag01.png";
import handbag02 from "../../../assets/images/handbag02.png";
import handbag03 from "../../../assets/images/handbag03.png";
import handbag04 from "../../../assets/images/handbag04.png";
import handbag05 from "../../../assets/images/handbag05.png";
import handbag06 from "../../../assets/images/handbag06.png";
import handbag07 from "../../../assets/images/handbag07.png";
import handbag08 from "../../../assets/images/handbag08.png";
import handbag09 from "../../../assets/images/handbag09.png";
import handbag010 from "../../../assets/images/handbag010.png";
import { ref, onMounted } from "vue";

export default {
  name: "HandBags",
  // prope: ["Clothes"],
  data() {
    return {
      handBags: [
        {
          image: handbag01,
          name: "Jordan Alpha Camera Bad",
          price: "$40",
          price_discount: 30.97,
          discount: null,
          id: 1,
        },
        {
          image: handbag02,
          name: "Nike Sportswear Futura women's Crossbody Bag",
          price: "$32",
          price_discount: 25.97,
          discount: null,
          id: 2,
        },
        {
          image: handbag03,
          name: "Nike Sportswar puffle tote bag",
          price: null,
          price_discount: 90,
          discount: "30% Off",
          id: 3,
        },
        {
          image: handbag04,
          name: "Jordan Monogram Pouch",
          price: null,
          price_discount: 50,
          discount: "30% Off",
          id: 4,
        },
        {
          image: handbag05,
          name: "Nike Sportswear RPM Tote",
          price: null,
          price_discount: 90,
          discount: "30% Off",
          id: 5,
        },
        {
          image: handbag06,
          name: "Joordan Rise Crossbody Bag",
          price: null,
          price_discount: 30,
          discount: null,
          id: 6,
        },
        {
          image: handbag07,
          name: "Jordan Stadium Bag",
          price: "$90",
          price_discount: 35,
          discount: "30% Off",
          id: 7,
        },
        {
          image: handbag08,
          name: "Nike Locker Iridescent Swim Bag",
          price: null,
          price_discount: 48,
          discount: null,
          id: 8,
        },
        {
          image: handbag09,
          name: "Nike Sportswear Essentials",
          price: "$90",
          price_discount: 76.97,
          discount: "30% Off",
          id: 9,
        },
        {
          image: handbag010,
          name: "Nike Sportswear Faux Fur Tote",
          price: "$145",
          price_discount: 82,
          discount: "30% Off",
          id: 10,
        },
      ],
      companiesVisible: 8,
      step: 8,
    };
  },
  computed: {
    Handbages() {
      return this.handBags.slice(0, this.companiesVisible);
    },
  },
};
</script>

<style>
/* Add any additional styles if needed */
span {
  text-decoration: line-through;
}

.card {
  /* padding: 15px; */
  border: 0px solid;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 5px;
  transform: all 0.3s ease-in-out;
  margin-right: 1rem;
}
.card:hover {
  box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -1px, 0px);
}
.button{
  display: flex;
  justify-content: center;
}
</style>
