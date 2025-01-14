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
                @click="shipping_id = shipping.id"
                :class="{ active: shipping_id === shipping.id }"
               
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
                      <button @click="deleteShippingAddress(index)" type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Remove</button>
                    </div>
                  </li>
                </ul>
              </button>

              <!-- input info -->
              <div v-if="layout === 'info'" class="info space-y-6">
                <input
                  type="text"
                  placeholder="Full name"
                  v-model="full_name"
                  class="w-full p-4 text-lg border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                />

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Town / City"
                    v-model="city"
                    class="w-full p-4 text-lg border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="ZIP Code"
                    v-model="postal_code"
                    class="w-full p-4 text-lg border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Address"
                  v-model="address"
                  class="w-full p-4 text-lg border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                />

                <input
                  type="tel"
                  placeholder="Phone"
                  v-model="phone"
                  class="w-full p-4 text-lg border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                />

                <div class="space-x-4">
                  <button
                    @click="createShippingAddress"
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

              <div class="bg-gray-50 p-6 rounded-lg list_pay" v-if="payments.length == 0">
                <p class="text-gray-600 text-lg ">
                  Sorry, it seems that there are no available payment methods.
                  Please contact us if you require assistance or wish to make
                  alternate arrangements.
                </p>
              </div>

              <!-- list payment methods -->
              <button
                v-for="(payment, index) in payments"
                :key="index"
                type="button"
                class="py-3 btn sm:py-4 border border-lg p-5 my-5 rounded-lg"
                @click="payment_id = payment.id"
                :class="{ active: payment_id === payment.id }"
              >
                <ul v-if="layout_pay === 'list_pay'" class="null_pay max-w-[32.5rem]">
                  <li>
                    <div
                      class="flex items-center font-medium space-x-4 rtl:space-x-reverse"
                    >

                      <div class="flex-1 min-w-0">
                        <div class="flex">
                          <p
                            class="text-sm mr-[7rem] text-gray-900 truncate dark:text-black"
                          >
                            Name Card: {{ payment.name_card }}
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
                      <button @click="deletePaymentMethods(index)" type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Remove</button>
                    </div>
                  </li>
                </ul>
              </button>

              <!-- input info -->
              <div v-if="layout_pay == 'info_pay'" class="info space-y-6">
                <input
                  type="text"
                  placeholder="Card Name"
                  v-model="name_card"
                  class="w-full p-4 text-lg border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                />

                <input
                  type="text"
                  placeholder="Card Number"
                  v-model="card_number"
                  class="w-full p-4 text-lg border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                />

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Expire Date"
                    v-model="expired_date"
                    class="w-full p-4 text-lg border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    v-model="cvv"
                    class="w-full p-4 text-lg border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                  />
                </div>

                <div class="space-x-4">
                  <button
                    @click="createPaymentMethods"
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
              </div>
            </section>

            <button
              type="submit"
              @click="checkout"
              class="w-full bg-olive-700 text-white py-5 px-6 rounded-lg text-xl font-medium hover:bg-olive-800 transition-colors"
            >
              PLACE ORDER ${{ totalAmount.toFixed(2) }}
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

            <div v-for="(item, index) in cartItems" 
                :key="index"
                class="border-b border-gray-200 pb-6 mb-6">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                  <img
                    :src="fileUrl + item.image"
                    alt="Product"
                    class="w-16 h-16 object-cover rounded"
                  />
                  <span class="text-lg"> {{ item.name }} × {{ item.qty }}</span>
                </div>
                <span class="text-lg">{{ calculateDiscount(item.price, item.discount) }}$</span>
              </div>
            </div>

            <div class="flex justify-between text-xl font-medium">
              <span>Total</span>
              <span>{{ totalAmount.toFixed(2) }}$</span>
            </div>
          </section>
        </div>

      </div>
    </div>

    <!-- Receipt Modal -->
    <ReceiptModal
      :isVisible="isReceiptModalVisible"
      :receipt="selectedReceipt"
      @close="closeReceiptModal"
    />
  </div>
</template>

<script>
import { reactive } from "vue";
import CartService from './service';
import ReceiptModal from '../history/ReceiptModal.vue'; // Import the ReceiptModal component


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
  components: {
    ReceiptModal, // Register the ReceiptModal component
  },
  data() {
    return {
      fileUrl: import.meta.env.VITE_FILE_BASE_URL,

      full_name: "",
      address: "",
      city: "",
      postal_code: "",
      phone: "",
      shippings: [],

      layout: "list",
      layout_pay:"list_pay",
      contents: null,

      name_card: '',
      card_number: '',
      expired_date: '',
      cvv: '',
      payments: [],

      cartItems: [],

      shipping_id: 0,
      payment_id: 0,

    };
  },
  computed: {
    totalAmount() {
      return this.cartItems.reduce(
        (total, item) => total + parseFloat(this.calculateDiscount(item.price, item.discount)) * item.qty,
        0
      );
    },
  },
  async created() {
    await this.listing();
  },
  methods: {
    async listing() {
      try {
        const resShipping = await CartService.listShippingAddress(); // Pass appropriate dates
        const resPayments = await CartService.listPaymentMethods(); // Pass appropriate dates
        const response = await CartService.listingProductCart(); // Pass appropriate dates
        this.cartItems = response;
        this.shippings = resShipping;
        this.payments = resPayments;
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        this.error = 'Failed to load order history. Please try again later.';
      } finally {
        this.loading = false;
      }
    },

    async createShippingAddress() {
      try {
        // Prepare the updated profile data
        const body = {
          full_name: this.full_name,
          address: this.address,
          postal_code: this.postal_code,
          phone: this.phone,
          city: this.city
        };

        // Call the updateProfile method from ProfileService
        const response = await CartService.createShippingAddress(body);
        this.layout = 'list';
        this.shippings.push(response.data);

        this.closeEditModal();
        alert('Profile updated successfully!');
      } catch (error) {
        console.error('Failed to update profile:', error);
        alert('Failed to update profile. Please try again.');
      }
    },

    async createPaymentMethods() {
      try {
        // Prepare the updated profile data
        const body = {
          name_card: this.name_card,
          card_number: this.card_number,
          expired_date: this.expired_date,
          cvv: this.cvv
        };

        // Call the updateProfile method from ProfileService
        const response = await CartService.createPaymentMethods(body);
        this.layout_pay = 'list_pay';
        this.payments.push(response.data);

        this.closeEditModal();
        alert('Profile updated successfully!');
      } catch (error) {
        console.error('Failed to update profile:', error);
        alert('Failed to update profile. Please try again.');
      }
    },

    async deleteShippingAddress(index) {
      const id = this.shippings[index].id;
      try {
        const response = await CartService.deleteShippingAddress(id); // Pass appropriate dates
        this.shippings.splice(index, 1);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        this.error = 'Failed to load order history. Please try again later.';
      } finally {
        this.loading = false;
      }

    },

    async deletePaymentMethods(index) {
      const id = this.payments[index].id;
      try {
        const response = await CartService.deletePaymentMethods(id); // Pass appropriate dates
        this.payments.splice(index, 1);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        this.error = 'Failed to load order history. Please try again later.';
      } finally {
        this.loading = false;
      }

    },

    async checkout() {
      try {
        // Prepare the updated profile data
        const body = {
          shipping_id: this.shipping_id,
          payment_id: this.payment_id
        };

        // Call the updateProfile method from ProfileService
        const response = await CartService.checkout(body);
        this.$route.push('/history')

        this.closeEditModal();
        alert('Profile updated successfully!');
      } catch (error) {
        console.error('Failed to update profile:', error);
        alert('Failed to update profile. Please try again.');
      }
    },

    calculateDiscount(price,discount) {
      return (price - (price * (discount/100))).toFixed(2); // 20% discount
    },
    
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
