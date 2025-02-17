<template>
  <div class="cart-page">
    <div class="Title">Checkout Total</div>
    <div class="cart-items-container">
      <div class="cart-header">
        <h2>{{ cartItems.length }} Items</h2>
      </div>
      <div class="cart-item" v-for="(item, index) in cartItems" :key="index">
        <img :src="fileUrl + item.image" alt="Shoe Image" class="item-image" />
        <div class="item-details">
          <div class="name-item">{{ item.name }}</div>
          <div class="price-container">
            <p class="original-price">{{ item.price }}$</p>
            <p class="discount-price">{{ calculateDiscount(item.price, item.discount) }}$</p>
          </div>
          <p class="product-color">Color: {{ item.color }}</p>
          <p class="product-size">Size: {{ item.size }}</p>
          <div class="qty-control">
            <button @click="decreaseQuantity(index)">-</button>
            <span>{{ item.qty }}</span>
            <button @click="increaseQuantity(index)">+</button>
          </div>
        </div>
        <p class="total">{{ (calculateDiscount(item.price, item.discount) * item.qty).toFixed(2) }}$</p>
        <button class="remove-item" @click="removeFromCart(index)">&#x2715;</button>
      </div>
      <div class="checkout-total">
        <h2>Total: {{ totalAmount.toFixed(2) }}$</h2>
      </div>
    </div>
    <div class="checkout-button-container">
      <router-link :to="'shipping'" class="checkout-button">
        Proceed to Checkout
      </router-link>
    </div>
  </div>
</template>

<script>
import CartService from './service';

export default {
  name: "Cart",
  data() {
    return {
      fileUrl: import.meta.env.VITE_FILE_BASE_URL,
      cartItems: [],
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
      this.loading = true;
      this.error = null;
      try {
        const response = await CartService.listingProductCart(); // Pass appropriate dates
        this.cartItems = response;
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        this.error = 'Failed to load order history. Please try again later.';
      } finally {
        this.loading = false;
      }
    },
    async updateQty(id, qty) {
      try {
        const response = await CartService.addQty(id, qty); // Pass appropriate dates
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        this.error = 'Failed to load order history. Please try again later.';
      } finally {
        this.loading = false;
      }
    },
    calculateDiscount(price,discount) {
      return (price - (price * (discount/100))).toFixed(2); // 20% discount
    },
    async increaseQuantity(index) {
      this.cartItems[index].qty += 1;
      await this.updateQty(this.cartItems[index].id, this.cartItems[index].qty);
    },
    async decreaseQuantity(index) {
      if (this.cartItems[index].qty > 1) {
        this.cartItems[index].qty -= 1;
        await this.updateQty(this.cartItems[index].id, this.cartItems[index].qty);

      }
    },
    async removeFromCart(index) {
      const id = this.cartItems[index].id;
      try {
        const response = await CartService.removeFromCart(id); // Pass appropriate dates
        this.cartItems.splice(index, 1);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        this.error = 'Failed to load order history. Please try again later.';
      } finally {
        this.loading = false;
      }

    },
  },
};
</script>

<style scoped>
.Title {
  text-align: center;
  font-weight: bolder;
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
.price-container {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 5px 0;
}
.original-price {
  color: #333;
  font-size: 1rem;
  text-decoration: line-through;
  text-decoration-color: #da4141;
}
.discount-price {
  color: #333;
  font-size: 1.2rem;
  font-weight: bold;
}
.product-color, .product-size {
  color: #666;
  font-size: 0.9rem;
  margin: 2px 0;
}
.qty-control {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
}
.qty-control button {
  border: none;
  background: #e0e0e0;
  border-radius: 5px;
  padding: 1px 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}
.qty-control button:hover {
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
  color: #333;
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
  text-decoration: none;
}
.checkout-button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}
</style>