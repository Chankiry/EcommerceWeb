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
          type="text"
           v-model="searchQuery"
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
        v-for="shoes in shoesItems"
        :key="shoes.id || shoes.image"
      >
        <a href="#">
          <img
            class="p-3 rounded-t-lg mx-auto"
            :src="shoes.image"
            alt="product image"
          />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5
              class="text-lg font-semibold tracking-tight text-gray-900 dark:text-black"
            >
              {{ shoes.name }}
            </h5>
          </a>
          <div class="flex items-center justify-between">
            <div class="flex">
              <div class="text-xl font-bold text-gray-900 dark:text-blue-400">
                ${{ shoes.price_discount }}
              </div>
              <span class="text-md text-gray-900 dark:text-gray-500 ml-3">{{
                shoes.price
              }}</span>
            </div>
            <a
              href="#"
              class="text-black bg-gray-100 my-0 hover:text-white hover:bg-gray-500 focus:ring-8 focus:outline-none focus:ring-white font-medium border rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-100 dark:hover:bg-gray-500 dark:focus:ring-white"
              >Cart</a
            >
          </div>
          <div class="text-sm text-gray-900 dark:text-blue-800">
            {{ shoes.discount || "--" }}
          </div>
        </div>
      </router-link>
    </div>
    <div class="py-10 px-4 button">
      <button
        type="button"
        @click="companiesVisible += step"
        v-if="companiesVisible < shoes.length"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Load More
      </button>
    </div>
  </div>
</template>

<script>
import shoes01 from "../../../assets/images/shoes01.png";
import shoes02 from "../../../assets/images/shoes02.png";
import shoes03 from "../../../assets/images/shoes03.png";
import shoes04 from "../../../assets/images/shoes04.png";
import shoes05 from "../../../assets/images/shoes05.png";
import shoes06 from "../../../assets/images/shoes06.png";
import shoes07 from "../../../assets/images/shoes07.png";
import shoes08 from "../../../assets/images/shoes08.png";
import shoes09 from "../../../assets/images/shoes09.png";
import shoes010 from "../../../assets/images/shoes010.png";
import shoes011 from "../../../assets/images/shoes011.png";
import shoes012 from "../../../assets/images/shoes012.png";
import shoes013 from "../../../assets/images/shoes013.png";
import shoes014 from "../../../assets/images/shoes014.png";
import shoes015 from "../../../assets/images/shoes015.png";
export default {
  name: "Shoes",
  // prope: ["Shoes"],
  data() {
    return {
      searchQuery: '',
      shoes: [
        {
          image: shoes01,
          name: "Jordan Stay Loyal 3",
          price: null,
          price_discount: 115,
          discount: null,
          id: 1,
        },
        {
          image: shoes02,
          name: "Jordan Flight Club '91",
          price: null,
          price_discount: 145,
          discount: null,
          id: 2,
        },
        {
          image: shoes03,
          name: 'Air Jordan 12 Retro "Phantom"',
          price: null,
          price_discount: 200,
          discount: null,
          id: 3,
        },
        {
          image: shoes04,
          name: "Air Jordan 1 Mid",
          price: "$125",
          price_discount: 87.97,
          discount: "30% Off",
          id: 4,
        },
        {
          image: shoes05,
          name: "Jumpman MVP",
          price: "$165",
          price_discount: 123.97,
          discount: null,
          id: 5,
        },
        {
          image: shoes06,
          name: "Jordan True Flight",
          price: "$150",
          price_discount: 90.97,
          discount: null,
          id: 6,
        },
        {
          image: shoes07,
          name: "Air Jordan 1 Mid SE",
          price: "$135",
          price_discount: 87.97,
          discount: "30% Off",
          id: 7,
        },
        {
          image: shoes08,
          name: "Air Jordan Legancy 312 Low",
          price: "$145",
          price_discount: 87.97,
          discount: "30% Off",
          id: 8,
        },
        {
          image: shoes09,
          name: "Air Jordan 1 Zoom CMFT 2",
          price: "$150",
          price_discount: 97.97,
          discount: "30% Off",
          id: 9,
        },
        {
          image: shoes010,
          name: 'Zion 3 "Z-3D"',
          price: "$150",
          price_discount: 82.97,
          discount: null,
          id: 10,
        },
        {
          image: shoes011,
          name: "Tatum 3 LNY",
          price: "$125",
          price_discount: 90,
          discount: "30% Off",
          id: 11,
        },
        {
          image: shoes012,
          name: "Air Jordan 3 Ratro Black Cat",
          price: "$250",
          price_discount: 200,
          discount: "30% Off",
          id: 12,
        },
        {
          image: shoes013,
          name: "Air Jordan 5 Retro White and Black",
          price: "$250",
          price_discount: 200,
          discount: "30% Off",
          id: 13,
        },
        {
          image: shoes014,
          name: "Air Jordan 1 Mid",
          price: "$280",
          price_discount: 125,
          discount: "30% Off",
          id: 14,
        },
        {
          image: shoes015,
          name: 'Air Jordan 1 Zoom CMFT 2',
          price: "$150",
          price_discount: 97.97,
          discount: "30% Off",
          id: 15,
        },
      ],
      companiesVisible: 8,
      step: 8,
    };
  },
  computed: {
    shoesItems() {
      // Filter the shoes based on searchQuery
      const filtered = this.searchQuery
        ? this.shoes.filter(shoe =>
            shoe.name.toLowerCase().includes(this.searchQuery.toLowerCase())
          )
        : this.shoes;

      return filtered.slice(0, this.companiesVisible);
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
.button {
  display: flex;
  justify-content: center;
}
</style>
