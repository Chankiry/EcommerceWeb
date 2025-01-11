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
              
              <div class="space-y-6">
                <input
                  v-model="form.fullName"
                  type="text"
                  placeholder="Full name"
                  class="w-full p-4 text-lg border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                />

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    v-model="form.city"
                    type="text"
                    placeholder="Town / City"
                    class="w-full p-4 text-lg border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                  />
                  <input
                    v-model="form.zipCode"
                    type="text"
                    placeholder="ZIP Code"
                    class="w-full p-4 text-lg border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                  />
                </div>

                <input
                  v-model="form.address"
                  type="text"
                  placeholder="Address"
                  class="w-full p-4 text-lg border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                />

                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="Phone"
                  class="w-full p-4 text-lg border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                />
              </div>
            </section>

            <!-- Payment -->
            <section class="mb-12">
              <h2 class="text-2xl font-medium mb-6">Payment</h2>
              <div class="bg-gray-50 p-6 rounded-lg">
                <p class="text-gray-600 text-lg">
                  Sorry, it seems that there are no available payment methods. Please contact us if you require assistance or wish to make alternate arrangements.
                </p>
              </div>
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

<script setup>
import { reactive } from 'vue'

const form = reactive({
  fullName: '',
  city: '',
  zipCode: '',
  address: '',
  phone: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', form)
}
</script>

<style>
.bg-olive-700 {
  background-color: rgb(113, 113, 83);
}
.bg-olive-800:hover {
  background-color: rgb(93, 93, 63);
}
</style>