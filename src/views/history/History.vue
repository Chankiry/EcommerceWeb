<template>
  <div class="container overflow-y-auto">
    <h1 class="title">Order History</h1>
    <div class="history-list overflow-auto">
      <button
        v-for="historyItem in historyItems"
        :key="historyItem.id"
        class="history-item"
        @click="handleHistoryItemClick(historyItem, $event)"
      >
        <span class="history-date">Date: {{ formatDate(historyItem.date) }}</span>
        <div
          v-for="product in historyItem.products"
          :key="product.id"
          class="product-item"
        >
          <!-- Make product-info a router-link -->
          <div
            class="product-info"
          >
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
            </div>
          </div>
          <div class="product-pricing">
            <span class="product-price">{{ formatPrice(product.price) }}</span>
            <span class="product-quantity">x{{ product.quantity }}</span>
          </div>
        </div>
        <div class="total-amount">
          <span>Total Amount:</span>
          <span class="total-price">{{ formatPrice(historyItem.totalAmount) }}</span>
        </div>
      </button>
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
import ReceiptModal from './ReceiptModal.vue'; // Import the ReceiptModal component

export default {
  name: 'History',
  components: {
    ReceiptModal, // Register the ReceiptModal component
  },
  data() {
    return {
      historyItems: [
        {
          id: 1,
          date: new Date(),
          totalAmount: 499.95,
          products: [
            {
              id: 1,
              image: '/src/assets/images/shoes01.png',
              name: 'Jordan',
              size: 40,
              price: 99.99,
              quantity: 5,
            },
          ],
        },
        {
          id: 2,
          date: new Date(new Date().setDate(new Date().getDate() - 1)),
          totalAmount: 719.96,
          products: [
            {
              id: 1,
              image: '/src/assets/images/shoes02.png',
              name: 'Air Max',
              size: 42,
              price: 129.99,
              quantity: 3,
            },
            {
              id: 2,
              image: '/src/assets/images/shoes03.png',
              name: 'Yeezy',
              size: 41,
              price: 149.99,
              quantity: 2,
            },
          ],
        },
        {
          id: 3,
          date: new Date(new Date().setDate(new Date().getDate() - 7)),
          totalAmount: 859.94,
          products: [
            {
              id: 1,
              image: '/src/assets/images/shoes03.png',
              name: 'Yeezy',
              size: 41,
              price: 219.99,
              quantity: 2,
            },
            {
              id: 2,
              image: '/src/assets/images/shoes04.png',
              name: 'DUNK',
              size: 43,
              price: 159.99,
              quantity: 3,
            },
            {
              id: 3,
              image: '/src/assets/images/shoes05.png',
              name: 'Ultraboost',
              size: 42,
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

.history-date {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 1rem;
  display: block;
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
  gap: 0.5rem;
}

.product-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-color);
}

.product-size {
  font-size: 1rem;
  color: #6b7280;
}

.product-pricing {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
}

.product-price {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-color);
}

.product-quantity {
  font-size: 1rem;
  color: #6b7280;
}

.total-amount {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  font-size: 1.125rem;
  color: var(--text-color);
}

.total-price {
  font-weight: 600;
  color: var(--primary-color);
}

</style>