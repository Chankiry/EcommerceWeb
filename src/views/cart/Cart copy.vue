<template>
  <div class="cart-page">
    <h1>Checkout Total</h1>
    <div class="cart-items-container">
      <div class="cart-header">
        <h2>{{ cartItems.length }} Items</h2>
      </div>
      <div class="cart-item" v-for="(item, index) in cartItems" :key="index">
        <img :src="item.image" alt="Shoe Image" class="item-image" />
        <div class="item-details">
          <h3>{{ item.name }}</h3>
          <p class="price">{{ item.price }}$</p>
          <div class="quantity-control">
            <button @click="decreaseQuantity(index)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="increaseQuantity(index)">+</button>
          </div>
        </div>
        <p class="total">{{ (item.price * item.quantity).toFixed(2) }}$</p>
        <button class="remove-item" @click="removeItem(index)">&#x2715;</button>
      </div>
    </div>
    <div class="checkout-button-container">
      <router-link to="'/shipping'"> <button class="checkout-button">Proceed to Checkout</button>
      </router-link>
    </div>
    <div class="checkout-total">
      <h2>Total Amount: {{ totalAmount.toFixed(2) }}$</h2>
    </div>
  </div>
</template>

<script>

export default {
  name: "Cart",
  data() {
    return {
      cartItems: [
        {
          name: "Colorful Sneakers",
          price: 12,
          quantity: 1,
          image: '/src/assets/pu/shoes01.png',
        },
        {
          name: "Pastel Shoes",
          price: 12,
          quantity: 1,
          image: '/src/assets/images/shoes02.png',
        },
      ],
    };
  },
  computed: {
    totalAmount() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  methods: {
    increaseQuantity(index) {
      this.cartItems[index].quantity += 1;
    },
    decreaseQuantity(index) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity -= 1;
      }
    },
    removeItem(index) {
      this.cartItems.splice(index, 1);
    },
  },
  setup() {
    const router = useRouter(); // Use setup function to access router

    return {
      router, // Make router available in template
    };
  },
};
</script>

<style scoped>
.cart-page {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f5f5f5;
}
/* ... rest of the styles ... */
</style>