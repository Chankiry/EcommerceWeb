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
    <!-- New Checkout Button -->
    <div class="checkout-button-container">
      <button class="checkout-button" @click="handleCheckout">
        Proceed to Checkout
      </button>
    </div>
    <div class="checkout-total">
      <h2>Total Amount: {{ totalAmount.toFixed(2) }}$</h2>
    </div>
  </div>
</template>

<script>
import shoes01 from "../../assets/images/shoes01.png";
import shoes02 from "../../assets/images/shoes02.png";

export default {
  name: "Cart",
  data() {
    return {
      cartItems: [
        {
          name: "Colorful Sneakers",
          price: 12,
          quantity: 1,
          image: shoes01,
        },
        {
          name: "Pastel Shoes",
          price: 12,
          quantity: 1,
          image: shoes02,
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
    handleCheckout() {
      // Replace this with navigation to a checkout page or a message
      alert("Proceeding to checkout!");
    },
  },
};
</script>

<style scoped>
.cart-page {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f5f5f5;
}
.cart-header {
  font-size: 1.2rem;
  margin-bottom: 20px;
  text-align: left;
}
.cart-items-container {
  background-color: #e6e6e6;
  padding: 20px;
  border-radius: 8px;
}
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: #fff;
  margin-bottom: 10px;
  border-radius: 5px;
}
.item-image {
  width: 80px;
  height: 80px;
  border-radius: 8px;
}
.item-details {
  flex-grow: 1;
  padding: 0 15px;
}
.item-details h3 {
  margin: 0 0 5px;
}
.price {
  color: red;
  font-size: 1.1rem;
  margin: 5px 0;
}
.quantity-control {
  display: flex;
  align-items: center;
  gap: 10px;
}
.quantity-control button {
  border: none;
  background: #ddd;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}
.quantity-control button:hover {
  background: #bbb;
}
.total {
  font-weight: bold;
}
.remove-item {
  border: none;
  background: none;
  font-size: 1.2rem;
  color: gray;
  cursor: pointer;
}
.remove-item:hover {
  color: red;
}
.checkout-total {
  margin-top: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: right;
}
.checkout-button-container {
  text-align: right;
  margin: 20px 0;
}
.checkout-button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.checkout-button:hover {
  background-color: #45a049;
}
</style>