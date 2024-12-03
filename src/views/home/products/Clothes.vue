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
      <div
        class="w-[18rem] max-w-sm bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-white card grid"
        v-for="clothes in clothe"
        :key="clothes.image"
      >
        <a href="#">
          <img
            class="p-3 rounded-t-lg mx-auto"
            :src="clothes.image"
            alt="product image"
          />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5
              class="text-lg font-semibold tracking-tight text-gray-900 dark:text-black"
            >
              {{ clothes.name }}
            </h5>
          </a>
          <div class="flex items-center justify-between">
            <div class="flex">
              <div class="text-xl font-bold text-gray-900 dark:text-blue-400">
                ${{ clothes.price_discount }}
              </div>
              <span class="text-md text-gray-900 dark:text-gray-500 ml-3">{{
                clothes.price
              }}</span>
            </div>
            <a
              href="#"
              class="text-black bg-gray-100 my-0 hover:text-white hover:bg-gray-500 focus:ring-8 focus:outline-none focus:ring-white font-medium border rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-100 dark:hover:bg-gray-500 dark:focus:ring-white"
              >Cart</a
            >
          </div>
          <div class="text-sm text-gray-900 dark:text-blue-800">
            {{ clothes.discount || "--" }}
          </div>
        </div>
      </div>
    </div>
    <div class="py-10 px-4 button">
      <button
        type="button"
        @click="companiesVisible += step"
        v-if="companiesVisible < clothes.length"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Load More
      </button>
    </div>
  </div>
</template>

<script>
import cloth01 from "../../../assets/images/cloth01.png";
import cloth02 from "../../../assets/images/cloth02.png";
import cloth03 from "../../../assets/images/cloth03.png";
import cloth04 from "../../../assets/images/cloth04.png";
import cloth05 from "../../../assets/images/cloth05.png";
import cloth06 from "../../../assets/images/cloth06.png";
import cloth07 from "../../../assets/images/cloth07.png";
import cloth08 from "../../../assets/images/cloth08.png";
import cloth09 from "../../../assets/images/cloth09.png";
import cloth010 from "../../../assets/images/cloth010.png";
import { ref, onMounted } from "vue";

export default {
  name: "Clothes",
  // prope: ["Clothes"],
  data() {
    return {
      clothes: [
        {
          image: cloth01,
          name: "Jordan X Travis Scott",
          price: null,
          price_discount: 175,
          discount: null,
          id: 1,
        },
        {
          image: cloth02,
          name: "Jodan X Travis Scott",
          price: null,
          price_discount: 65,
          discount: null,
          id: 2,
        },
        {
          image: cloth03,
          name: "Nike ACG Lungs",
          price: null,
          price_discount: 115,
          discount: null,
          id: 3,
        },
        {
          image: cloth04,
          name: "Texas Longhorns",
          price: null,
          price_discount: 130,
          discount: null,
          id: 4,
        },
        {
          image: cloth05,
          name: "Duke blue devils Staement workmark Lockup Heavyweight",
          price: null,
          price_discount: 123.97,
          discount: null,
          id: 5,
        },
        {
          image: cloth06,
          name: "Nike Smiley Swoosh Printed Tricot Set",
          price: "$55",
          price_discount: 37.97,
          discount: "30% Off",
          id: 6,
        },
        {
          image: cloth07,
          name: "Nike Sportwear Everything Wovens",
          price: "$90",
          price_discount: 76.97,
          discount: "30% Off",
          id: 7,
        },
        {
          image: cloth08,
          name: "Nike Sportswear Essentials",
          price: "$90",
          price_discount: 62.97,
          discount: null,
          id: 8,
        },
        {
          image: cloth09,
          name: "Nike Windrunner",
          price: "$90",
          price_discount: 76.97,
          discount: "30% Off",
          id: 9,
        },
        {
          image: cloth010,
          name: "Nike Tech Reimagined",
          price: "$145",
          price_discount: 122.97,
          discount: null,
          id: 10,
        },
      ],
      companiesVisible: 8,
      step: 8,
    };
  },
  computed: {
    clothe() {
      return this.clothes.slice(0, this.companiesVisible);
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
