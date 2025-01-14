<template>
  <div class="min-h-screen bg-gray-50 py-12 px-6">
    <div class="max-w-5xl mx-auto bg-white p-12 rounded-xl shadow-sm">
      <h1 class="text-4xl font-semibold text-center mb-12">Checkout</h1>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Left Column - Form -->
        <div class="lg:col-span-2">
          <form @submit.prevent="handleSubmit">
            <!-- Shipping Details -->
            <section class="mb-12">
              <h2 class="text-2xl font-medium mb-6">Shipping details</h2>
              <button @click="layout = 'info'" class="mt-[1rem]">
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

              <!-- list shipping -->
              <button
                v-for="(shipping, index) in shippings"
                :key="index"
                type="button"
                class="py-3 Btn sm:py-4 border border-lg p-5 my-5 rounded-lg"
               
              >
                <ul v-if="layout === 'list'" class="list max-w-auto">
                  <li>
                    <div
                      class="flex items-center font-medium space-x-4 rtl:space-x-reverse"
                    >
                      <div class="flex-1 min-w-0">
                        <div class="flex">
                          <p
                            class="text-sm mr-[7rem] text-gray-900 truncate dark:text-black"
                          >
                            Full Name: {{ shipping.full_name }}
                          </p>
                          <p
                            class="text-sm mr-24 text-gray-900 truncate dark:text-black"
                          >
                            Postal Code: {{ shipping.postal_code }}
                          </p>
                        </div>
                        <div class="flex mt-2">
                          <p
                            class="text-sm mr-24 text-gray-500 truncate dark:text-black"
                          >
                            Address: {{ shipping.address }}
                          </p>
                          <p
                            class="inline-flex mr-24 items-center text-base font-semibold text-gray-900 dark:text-black"
                          >
                            City: {{ shipping.city }}
                          </p>
                         
                        </div>
                        <p
                            class="text-sm ml-[-19.5rem] my-1  text-gray-500 truncate dark:text-black"
                          >
                            Phone: {{ shipping.phone }}
                          </p>
                      </div>
                      <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Remove</button>
                    </div>
                  </li>
                </ul>
              </button>

              <!-- input info -->
              <div v-if="layout === 'info'" class="info space-y-6">
                <input
                  type="text"
                  placeholder="Full name"
                  class="w-full p-4 text-lg border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                />

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Town / City"
                    class="w-full p-4 text-lg border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="ZIP Code"
                    class="w-full p-4 text-lg border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Address"
                  class="w-full p-4 text-lg border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                />

                <input
                  type="tel"
                  placeholder="Phone"
                  class="w-full p-4 text-lg border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                />

                <div class="space-x-4">
                  <button
                    @click="layout = 'list'"
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Confirm
                  </button>
                  <button
                    @click="layout = 'list'"
                    type="button"
                    class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </section>

            <!-- Payment -->
            <section class="mb-12">
              <h2 class="text-2xl font-medium mb-6">Payment</h2>
              <button @click="layout_pay = 'info_pay'" class="mt-[1rem] null_pay">
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

              <div class="bg-gray-50 p-6 rounded-lg list_pay" v-if="layout_pay === 'list_pay'">
                <p class="text-gray-600 text-lg ">
                  Sorry, it seems that there are no available payment methods.
                  Please contact us if you require assistance or wish to make
                  alternate arrangements.
                </p>
              </div>

              <!-- list shipping -->
              <button
                v-for="(payment, index) in payments"
                :key="index"
                type="button"
                class="py-3 btn sm:py-4 border border-lg p-5 my-5 rounded-lg"
                @click="activeBtn = payment"
                :class="{ active: activeBtn === payment }"
              >
                <ul v-if="layout_pay === 'info_pay'" class="null_pay max-w-[32.5rem]">
                  <li>
                    <div
                      class="flex items-center font-medium space-x-4 rtl:space-x-reverse"
                    >

                      <div class="flex-1 min-w-0">
                        <div class="flex">
                          <p
                            class="text-sm mr-[7rem] text-gray-900 truncate dark:text-black"
                          >
                            Name Card: {{ payment.name_cardr }}
                          </p>
                          <p
                            class="text-sm mr-24 text-gray-900 truncate dark:text-black"
                          >
                            Card Number: {{ payment.card_number }}
                          </p>
                        </div>
                        <div class="flex mt-2">
                          <p
                            class="text-sm mr-24 text-gray-500 truncate dark:text-black"
                          >
                            Expired Date: {{ payment.expired_date }}
                          </p>
                          <p
                            class="inline-flex mr-24 items-center text-base font-semibold text-gray-900 dark:text-black"
                          >
                            CVV: {{ payment.cvv }}
                          </p>
                          
                        </div>
                      </div>
                      <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Remove</button>
                    </div>
                  </li>
                </ul>
              </button>

              <!-- input info -->
              <!-- <div v-if="layout_pay === 'info_pay'" class="info space-y-6">
                <input
                  type="text"
                  placeholder="Full name"
                  class="w-full p-4 text-lg border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                />

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Town / City"
                    class="w-full p-4 text-lg border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="ZIP Code"
                    class="w-full p-4 text-lg border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Address"
                  class="w-full p-4 text-lg border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                />

                <input
                  type="tel"
                  placeholder="Phone"
                  class="w-full p-4 text-lg border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                />

                <div class="space-x-4">
                  <button
                    @click="layout_pay = 'list_pay'"
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Confirm
                  </button>
                  <button
                    @click="layout_pay = 'list_pay'"
                    type="button"
                    class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </div> -->
            </section>

            <button
              type="submit"
              class="w-full bg-olive-700 text-white py-5 px-6 rounded-lg text-xl font-medium hover:bg-olive-800 transition-colors"
            >
              PLACE ORDER $104.90
            </button>
          </form>
        </div>

        <!-- Right Column - Order Summary -->
        <div class="lg:col-span-1">
          <section class="bg-gray-50 p-6 rounded-lg">
            <h2 class="text-2xl font-medium mb-6">Your order</h2>

            <div class="border-b border-gray-200 pb-4 mb-4">
              <div class="flex justify-between text-lg text-gray-600 mb-4">
                <span>Product</span>
                <span>Subtotal</span>
              </div>
            </div>

            <div class="border-b border-gray-200 pb-6 mb-6">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                  <img
                    :src="'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5ADYZPQWFHHZzuZcTScE5sOhV7JhQH.png'"
                    alt="Product"
                    class="w-16 h-16 object-cover rounded"
                  />
                  <span class="text-lg">Men's Navy Running × 1</span>
                </div>
                <span class="text-lg">$104.90</span>
              </div>
            </div>

            <div class="border-b border-gray-200 pb-6 mb-6">
              <div class="flex justify-between text-lg">
                <span>Subtotal</span>
                <span>$104.90</span>
              </div>
            </div>

            <div class="flex justify-between text-xl font-medium">
              <span>Total</span>
              <span>$104.90</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

const form = reactive({
  fullName: "",
  city: "",
  zipCode: "",
  address: "",
  phone: "",
});

const handleSubmit = () => {
  console.log("Form submitted:", form);
};

export default {
  data() {
    return {
      shippings: [
        {
          full_name: "kiry",
          address: "toulkok",
          city: "Phnom Penh",
          postal_code: "1111",
          phone: "096958147",
        },
        {
          full_name: "Bakal",
          address: "toulkok",
          city: "Phnom Penh",
          postal_code: "2222",
          phone: "096958781",
        },
      ],

      layout: "list",
      layout_pay:"list_pay",
      contents: null,

      payments: [
        {
          name_cardr: "Visa",
          card_number: "1234254433",
          expired_date: "12/25",
          cvv: "1234",
        },
        // {
        //   name_cardr: "Card",
        //   card_number: "1234228433",
        //   expired_date: "20/25",
        //   cvv: "12354",
        // },
      ],
    };
  },
  methods: {
    setActiveBtn(Btn) {
      this.Active = Btn; 
    },
  },
};
</script>

<style>
.bg-olive-700 {
  background-color: rgb(113, 113, 83);
}
.bg-olive-800:hover {
  background-color: rgb(93, 93, 63);
}
.active {
  background-color: #d1d2d3;
}
</style>
