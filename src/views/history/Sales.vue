<template>
  <div class="container overflow-y-auto">
    <h1 class="title">Sales</h1>
    <div class="history-list overflow-auto">
      <button
        v-for="historyItem in historyItems"
        :key="historyItem.id"
        class="history-item"
        @click="handleHistoryItemClick(historyItem, $event)"
      >
        <div class="customer-info">
          <img :src="historyItem.customer.profileImage" :alt="historyItem.customer.name" class="customer-image" />
          <span class="customer-name">{{ historyItem.customer.name }}</span>
        </div>
        <span class="history-date">Date: {{ formatDate(historyItem.date) }}</span>
        <div
          v-for="product in historyItem.products"
          :key="product.id"
          class="product-item"
        >
          <div class="product-info">
            <router-link
              :to="{ name: 'ViewProduct', params: { id: product.id } }">
              <img
                :src="product.image"
                :alt="product.name"
                class="product-image"
                loading="lazy"
              />
            </router-link>
            <div class="product-details">
  <span class="product-name">{{ product.name }}</span>
  <span class="product-size">Size: {{ product.size }}</span>
  <div class="product-color">
    <span
      class="color-indicator"
      :style="{ backgroundColor: product.color }"
    ></span>
    <span class="color-name">{{ product.color }}</span>
  </div>
        </div>
          </div>
          <div class="product-pricing">
            <span class="product-price">{{ formatPrice(product.price) }}</span>
            <span class="product-quantity">x{{ product.quantity }}</span>
          <div><span class="discount-price">{{ calculateDiscountPrice(product.price) }}</span></div>  
          </div>
        </div>
        <div class="total-amount">
        <span>Total Amount (with discount):</span>
        <span class="total-price">{{ formatPrice(calculateDiscountedTotal(historyItem)) }}</span>
      </div>
      </button>
    </div>
    <!-- Receipt Modal -->
    <ReceiptModalSales
      :isVisible="isReceiptModalVisible"
      :receipt="selectedReceipt"
      @close="closeReceiptModal"
    />
  </div>
</template>

<script>
import ReceiptModalSales from './ReceiptModalSales.vue'; // Import the ReceiptModal component

export default {
  name: 'Sales',
  components: {
    ReceiptModalSales, // Register the ReceiptModal component
  },
  data() {
    return {
      historyItems: [
        {
          id: 1,
          date: new Date(),
          totalAmount: 499.95,
          customer: {
            name: 'Phearakreach',
            profileImage: '/src/assets/images/profile01.png',
          },
          products: [
          {
              id: 1,
              image: '/src/assets/images/shoes01.png',
              name: 'Jordan',
              size: 40,
              color: 'red', // Predefined color
              price: 99.99,
              quantity: 5,
            },
          ],
        },
        {
          id: 2,
          date: new Date(new Date().setDate(new Date().getDate() - 1)),
          totalAmount: 719.96,
          customer: {
            name: 'Phumin',
            profileImage: '/src/assets/images/profile02.png',
          },
          products: [
            {
              id: 1,
              image: '/src/assets/images/shoes02.png',
                name: 'Air Max',
                size: 42,
                color: '#3498db', // Hexadecimal value
                price: 129.99,
                quantity: 3,
            },
            {
              id: 2,
              image: '/src/assets/images/shoes03.png',
              name: 'Yeezy',
              size: 41,
              color: 'Black',
              price: 149.99,
              quantity: 2,
            },
          ],
        },
        {
          id: 3,
          date: new Date(new Date().setDate(new Date().getDate() - 7)),
          totalAmount: 859.94,
          customer: {
            name: 'Kiry',
            profileImage: '/src/assets/images/profile03.png',
          },
          products: [
            {
              id: 1,
              image: '/src/assets/images/shoes03.png',
              name: 'Yeezy',
              size: 41,
              color: 'black',
              price: 219.99,
              quantity: 2,
            },
            {
              id: 2,
              image: '/src/assets/images/shoes04.png',
              name: 'DUNK',
              size: 43,
              color: '#3498db',
              price: 159.99,
              quantity: 3,
            },
            {
              id: 3,
              image: '/src/assets/images/shoes05.png',
              name: 'Ultraboost',
              size: 42,
              color: 'White',
              price: 219.99,
              quantity: 1,
            },
          ],
        },
      ],
      isReceiptModalVisible: false,
      selectedReceipt: null,
    };
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });
    },
    formatPrice(price) {
      return `$${price.toFixed(2)}`;
    },
    calculateDiscountPrice(price) {
      const discountedPrice = price * 0.8; // 20% off
      return this.formatPrice(discountedPrice);
    },
    calculateDiscountedTotal(historyItem) {
      return historyItem.products.reduce((total, product) => {
        return total + (product.price * 0.8 * product.quantity);
      }, 0);
    },
    openReceiptModal(receipt) {
      this.selectedReceipt = receipt;
      this.isReceiptModalVisible = true;
    },
    closeReceiptModal() {
      this.isReceiptModalVisible = false;
      this.selectedReceipt = null;
    },
    handleHistoryItemClick(receipt, event) {
      // Check if the click was on the "View Receipt" button or a router-link
      if (
        event.target.classList.contains('view-receipt-button') ||
        event.target.closest('.product-info')
      ) {
        return; // Do nothing if the click was on the button or router-link
      }
      // Otherwise, open the receipt modal
      this.openReceiptModal(receipt);
    },
  },
};
</script>

<style scoped>

:root {
  --primary-color: #4f46e5;
  --text-color: #374151;
  --border-color: #e5e7eb;
  --background-color: #f9fafb;
  --hover-background: #f3f4f6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-color);
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.history-item {
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.history-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.customer-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  
}

.customer-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--primary-color);
}

.customer-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-color);
}

.history-date {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 1rem;
  display: block;
}
.product-color {
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Space between the circle and the text */
  font-size: 1rem;
  color: #6b7280; /* Neutral gray for text */
}

.color-indicator {
  width: 12px; /* Size of the circle */
  height: 12px;
  border-radius: 50%; /* Makes it a circle */
  border: 1px solid #d1d5db; /* Optional: Adds a thin border for visibility */
  flex-shrink: 0; /* Prevents the circle from resizing */
}


.product-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-color);
}

.product-item:last-child {
  border-bottom: none;
}

.product-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  text-align: left;
  width: 100%;
  text-decoration: none; /* Remove underline from router-link */
  color: inherit; /* Inherit text color */
}

.product-image:hover {
  opacity: 0.8;
}

.product-image {
  width: 80px;
  height: 80px;
  border-radius: 0.5rem;
  object-fit: cover;
}

.product-details {
  display: flex;
  flex-direction: column;
}

.product-name {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.product-size {
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.product-color {
  display: flex;
  align-items: center;
}

.color-indicator {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.color-name {
  font-size: 0.875rem;
  color: #666;
}

.discount-price {
  font-size: 1.125rem;
  font-weight: 600;
  color: #10b981; /* Green color for discount */

  
}

.product-price {
  font-size: 1rem;
  color: #6b7280;
  text-decoration: line-through;
  
}

.product-quantity {
  font-size: 0.875rem;
  color: #666;
  margin-left: 0.5rem;
}

.total-amount {
  margin-top: 1rem;
  font-size: 1rem;
  margin-left: 72%;
}

.total-price {
  font-weight: 600;
  margin-left: 0.5rem;
}


</style>
