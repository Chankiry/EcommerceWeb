<template>
  <div >
    <div class="sticky">
      <div class="box flex">
        <form class="flex mx-10 space-x-10 bg-gray-100">
          <div class="flex space-x-[20rem]">
            <div class="relative flex justify-between">
              <div
                class="absolute input inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 mt-6 text-gray-500 dark:text-gray-400"
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
                class="block w-[20rem] mt-5 p-4 ps-10 text-sm text-gray-400 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-400 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups"
                required
              />
              <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <button @click="() => TogglePopup('buttonTriggers')" class="mt-[1rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="w-[1rem] h-auto mt-[-4.3rem] ml-[24rem]"
        >
          <path
            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
          />
        </svg>
      </button>
    </div>

     <!-- Popup page -->
     <PopProduct
      v-if="popupTriggers.buttonTriggers"
      :TogglePopup="() => TogglePopup('buttonTriggers')"
    >
      <h2 class="text-center font-bold">Create Product</h2>

      <form class="max-w-lg mx-auto">
        <div class="mb-5">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Product Name</label
          >
          <input
            type="text"
            id="Product"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
          />
        </div>
        <div class="flex">
          <div class="mb-5 mr-5">
            <label
              for="image"
              class="block mb-2 text-sm font-medium text-gray-900"
              >product Image</label
            >
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
              aria-describedby="user_avatar_help"
              id="user_avatar"
              type="file"
            />
          </div>
          <div class="mb-5">
            <label
              for="image"
              class="block mb-2 text-sm font-medium text-gray-900"
              >product Image</label
            >
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
              aria-describedby="user_avatar_help"
              id="user_avatar"
              type="file"
            />
          </div>
        </div>
        <div class="flex">
          <div class="mb-5">
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
              aria-describedby="user_avatar_help"
              id="user_avatar"
              type="file"
            />
          </div>
          <div class="mb-5 ml-5">
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
              aria-describedby="user_avatar_help"
              id="user_avatar"
              type="file"
            />
          </div>
        </div>
        <div class="flex justify-between">
          <div class="mb-5">
            <label
              for="price"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Product Price</label
            >
            <input
              type="number"
              id="price"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="discount"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Product discount</label
            >
            <input
              type="number"
              id="price"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>
        </div>
        <div class="mb-5">
          <label
            for="description"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Product discount</label
          >
          <textarea
            type="text"
            id="description"
            class="shadow-sm bg-gray-50 border border-gray-300 block w-full p-2.5"
            required
          />
        </div>
      </form>
    </PopProduct>


    <div
      class="min-h-screen grid pt-[0rem] container grid-cols-4 items-center justify-center bg-gray-100"
    >
      <router-link
        :to="'view-product'"
        class="w-auto max-w-sm bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-white card grid"
        v-for="wallet in WalletItem"
        :key="wallet.image"
      >
        <a href="#">
          <img
            class="p-3 rounded-t-lg mx-auto"
            :src="wallet.image"
            alt="product image"
          />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5
              class="text-lg font-semibold tracking-tight text-gray-900 dark:text-black"
            >
              {{ wallet.name }}
            </h5>
          </a>
          <div class="flex items-center mt-2.5 mb-5">
              <div class="flex items-center space-x-1">
                <svg
                  v-for="n in 5"
                  :key="n"
                  class="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <span
                  class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                  >5.0</span
                >
              </div>
            </div>
          <div class="flex items-center justify-between">
            <div class="flex">
              <div class="text-xl font-bold text-gray-900 dark:text-blue-400">
                ${{ wallet.price_discount }}
              </div>
              <span class="text-md text-gray-900 dark:text-gray-500 ml-3">{{
                wallet.price
              }}</span>
            </div>
            <a
              href="#"
              class="text-black bg-gray-100 my-0 hover:text-white hover:bg-gray-500 focus:ring-8 focus:outline-none focus:ring-white font-medium border rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-100 dark:hover:bg-gray-500 dark:focus:ring-white"
              >Cart</a
            >
          </div>
          <div class="text-sm text-gray-900 dark:text-blue-800">
            {{ wallet.discount || "--" }}
          </div>
        </div>
      </router-link>
    </div>
    <div class="py-10 px-4 button">
      <button
        type="button"
        @click="companiesVisible += step"
        v-if="companiesVisible < wallet.length"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Load More
      </button>
    </div>
  </div>
</template>

<script>
import PopProduct from "../products/view_product/PopupProduct.vue";
import wallet01 from "../../../assets/images/wallet01.png";
import wallet02 from "../../../assets/images/wallet02.png";
import wallet03 from "../../../assets/images/wallet03.png";
import wallet04 from "../../../assets/images/wallet04.png";
import wallet05 from "../../../assets/images/wallet05.png";
import wallet06 from "../../../assets/images/wallet06.png";
import wallet07 from "../../../assets/images/wallet07.png";
import wallet08 from "../../../assets/images/wallet08.png";
import wallet09 from "../../../assets/images/wallet09.png";
import wallet010 from "../../../assets/images/wallet010.png";
import wallet011 from "../../../assets/images/wallet011.png";
import wallet012 from "../../../assets/images/wallet012.png";
import wallet013 from "../../../assets/images/wallet013.png";
import wallet014 from "../../../assets/images/wallet014.png";
import { ref, onMounted } from "vue";

export default {
  name: "wallet",
  // prope: ["Clothes"],
  components: {
    PopProduct,
  },
  data() {
    return {
      searchQuery: "",
      wallet: [
        {
          image: wallet01,
          name: "Jordan Men's Flight Zip Wallet",
          price: null,
          price_discount: 40,
          discount: null,
          id: 1,
        },
        {
          image: wallet02,
          name: "Nike Icon Blazer Wristlet",
          price: "$32",
          price_discount: 23.97,
          discount: null,
          id: 2,
        },
        {
          image: wallet03,
          name: "Jordan Men's Flight Card Case",
          price: "$70",
          price_discount: 25,
          discount: "30% Off",
          id: 3,
        },
        {
          image: wallet04,
          name: "Nike Icon Air Max 90 Card Wallet",
          price: "$85",
          price_discount: 30,
          discount: "30% Off",
          id: 4,
        },
        {
          image: wallet05,
          name: "Jordan Men's Flight Trifold Wallet",
          price: null,
          price_discount: 35,
          discount: "30% Off",
          id: 5,
        },
        {
          image: wallet06,
          name: "Nike Icon Air Max 1 '84 Card Wallet",
          price: "$90",
          price_discount: 35,
          discount: null,
          id: 6,
        },
        {
          image: wallet07,
          name: "Jordan Men's Flight Zip Wallet",
          price: "$90",
          price_discount: 40,
          discount: "30% Off",
          id: 7,
        },
        {
          image: wallet08,
          name: "Jordan Men's Flight Trifold Wallet",
          price: null,
          price_discount: 35,
          discount: null,
          id: 8,
        },
        {
          image: wallet09,
          name: "Nike Icon Cortez Wristlet",
          price: "$70",
          price_discount: 26.97,
          discount: "30% Off",
          id: 9,
        },
        {
          image: wallet010,
          name: "Nike Icon Air Force 1 Card Wallet",
          price: "$75",
          price_discount: 20.97,
          discount: "30% Off",
          id: 10,
        },
        {
          image: wallet011,
          name: "Nike Icon Blazer",
          price: null,
          price_discount: 40,
          discount: null,
          id: 11,
        },
        {
          image: wallet012,
          name: "jordan Airborne",
          price: "$60",
          price_discount: 32,
          discount: "30% Off",
          id: 12,
        },
        {
          image: wallet013,
          name: "Jordan",
          price: "$75",
          price_discount: 20.97,
          discount: "30% Off",
          id: 13,
        },
        {
          image: wallet014,
          name: "Nike",
          price: "$75",
          price_discount: 24,
          discount: "30% Off",
          id: 14,
        },
      ],
      companiesVisible: 8,
      step: 8,
    };
  },
  computed: {
    WalletItem() {
      const filtered = this.searchQuery
        ? this.wallet.filter(
            (wallet) =>
              wallet.name &&
              typeof wallet.name === "string" &&
              wallet.name.toLowerCase().includes(this.searchQuery.toLowerCase())
          )
        : this.wallet;

      return filtered.slice(0, this.companiesVisible);
    },
  },
  setup() {
    const popupTriggers = ref({
      buttonTriggers: false,
      // timedTriggers: false,
    });

    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };

    return {
      PopProduct,
      popupTriggers,
      TogglePopup,
    };
  },
};
</script>

<style>
.sticky {
  position: sticky;
  top: 3.8rem;
  z-index: 1;
}

.box {
  display: block;
  height: 5.5rem;
  background-color: rgb(247, 247, 247);
  width: auto;
  margin-top: 2rem;
}

.card {
  border: 0px solid;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 5px;
  transition: all 0.3s ease-in-out;
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
/* Responsive styles */
.container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}

@media (max-width: 576px) {
  .container {
    grid-template-columns: repeat(1, 1fr); /* Large screens: 3 columns */
  }
  .box {
    width: auto;
  }
  .input {
    margin: 2rem;
  }
  svg {
    margin-left: -1.7rem;
  }
}

@media (min-width: 576px) {
  .container {
    grid-template-columns: repeat(1, 1fr); /* Large screens: 3 columns */
  }
  .box {
    width: auto;
  }
}

@media (min-width: 768px) {
  .container {
    grid-template-columns: repeat(1, 1fr); /* Extra large screens: 4 columns */
    gap: 1rem;
  }
  .box {
    width: auto;
    margin-top: 2rem;
  }
}
@media (min-width: 992px) {
  .container {
    grid-template-columns: repeat(2, 1fr); /* Extra large screens: 4 columns */
  }
  .box {
    width: auto;
  }
}
@media (min-width: 1200px) {
  .container {
    grid-template-columns: repeat(3, 1fr); /* Extra large screens: 4 columns */
  }
  .box {
    width: auto;
  }
}
@media (min-width: 1400px) {
  .container {
    grid-template-columns: repeat(4, 1fr); /* Extra large screens: 4 columns */
  }
  .box {
    width: auto;
  }
}
</style>
