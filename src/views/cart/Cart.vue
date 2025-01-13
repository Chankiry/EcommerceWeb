<template>
  <div class="cart-page">
  <div class="Title">Checkout Total</div>
    <div class="cart-items-container">
      <div class="cart-header">
        <h2>{{ cartItems.length }} Items</h2>
      </div>
      <div class="cart-item" v-for="(item, index) in cartItems" :key="index">
        <img :src="item.image" alt="Shoe Image" class="item-image" />
        <div class="item-details">
         <div class="name-item">{{ item.name }}</div>
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
      <div class="checkout-total">
      <h2>Total:  {{ totalAmount.toFixed(2) }}$</h2>
    </div>
    </div>
    <!-- New Checkout Button -->
    <div class="checkout-button-container">
      <router-link
      :to="'shipping'" class="checkout-button" >
        Proceed to Checkout
    </router-link>
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
          price: 10,
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
.Title {
  text-align: center;
  font-weight: bolder ;
  font-size: 20px;
}
.cart-page {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f9fafb;
  color: #333;
  justify-content: center;
  align-items: center;
  margin-left: 25%;
  width: 50%;
}
.cart-header {
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: left;
  color: #4a4a4a;
  border-bottom: 2px solid #ddd;
  padding-bottom: 10px;
}
.cart-items-container {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background: #fefefe;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.cart-item:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
.name-item {
  font-size: 1rem;
  font-weight: bold;
  color: #686868;
}
.item-image {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #ddd;
}
.item-details {
  flex-grow: 1;
  padding: 0 15px;
  color: #555;
}
.item-details h3 {
  margin: 0 0 5px;
  font-size: 1.1rem;
  color: #333;
}
.price {
  color: #7cbc8d;
  font-size: 1.2rem;
  margin: 5px 0;
  font-weight: bold;
}
.quantity-control {
  display: flex;
  align-items: center;
  gap: 10px;
}
.quantity-control button {
  border: none;
  background: #e0e0e0;
  border-radius: 5px;
  padding: 1px 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}
.quantity-control button:hover {
  background: #9c9a9a;
}
.total {
  font-weight: bold;
  color: #333;
}
.remove-item {
  border: none;
  background: none;
  font-weight: bolder;
  font-size: 1rem;
  color: #da4141;
  cursor: pointer;
  transition: color 0.3s ease;
  margin-left: 1%;

}
.remove-item:hover {
  color: #a90609;
  margin-left: 2%;
}
.checkout-total {
  margin-top: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: right;
  color: #7cbc8d;
}
.checkout-button-container {
  text-align: right;

  margin: 20px 0;
}
.checkout-button {
  background-color: #78716c;
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}
.checkout-button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}
</style>