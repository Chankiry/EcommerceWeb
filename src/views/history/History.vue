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
        <span class="history-created_at">Date: {{ formatDate(historyItem.created_at) }}</span>
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
                :src="fileUrl + product.product_image"
                :alt="product.name"
                class="product-product_image"
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
            <span class="product-qty">x{{ product.qty }}</span>
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
    <ReceiptModal
      :isVisible="isReceiptModalVisible"
      :receipt="selectedReceipt"
      @close="closeReceiptModal"
    />
  </div>
</template>

<script>
import ReceiptModal from './ReceiptModal.vue'; // Import the ReceiptModal component
import HistoryService from './service'; // Import the service with the listing function

export default {
  name: 'History',
  components: {
    ReceiptModal, // Register the ReceiptModal component
  },
  data() {
    return {
      fileUrl: import.meta.env.VITE_FILE_BASE_URL, // Add fileUrl here
      historyItems: [],
      isReceiptModalVisible: false,
      selectedReceipt: null,
    };
  },
  async created() {
    await this.listing();
  },
  methods: {
    async listing() {
      try {
        const response = await HistoryService.listing(); // Pass appropriate dates
        this.historyItems = response;
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        this.error = 'Failed to load order history. Please try again later.';
      } finally {
        this.loading = false;
      }
    },
    formatDate(created_at) {
      return new Date(created_at).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });
    },
    
    openReceiptModal(receipt) {
      this.selectedReceipt = receipt;
      this.isReceiptModalVisible = true;
    },
    closeReceiptModal() {
      this.isReceiptModalVisible = false;
      this.selectedReceipt = null;
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
        return total + (product.price * 0.8 * product.qty);
      }, 0);
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

.history-created_at {
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

.product-product_image:hover {
  opacity: 0.8;
}

.product-product_image {
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

.product-qty {
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