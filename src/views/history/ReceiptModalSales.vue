<template>
  <div v-if="isVisible" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button class="close-button" @click="closeModal">&times;</button>
      <div class="customer-info"> 
      </div>
      <div class="receipt-details">
        <p><strong>Date:</strong> {{ formatDate(receipt.date) }}</p>
        <div v-for="product in receipt.products" :key="product.id" class="product-item">
          <img :src="product.image" :alt="product.name" class="product-image" />
          <div class="product-info">
            <span class="product-name">{{ product.name }}</span>
            <span class="product-size">Size: {{ product.size }}</span>
            <span class="product-qty">Quantity: {{ product.qty }}</span>
            <span class="product-price">Price: {{ formatPrice(product.price) }}</span>
          </div>
        </div>
        <p class="total-amount">
          <strong>Total Amount:</strong> {{ formatPrice(receipt.totalAmount) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReceiptModalSales',
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    receipt: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
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
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  max-width: 500px;
  width: 100%;
  position: relative;
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.receipt-details {
  margin-top: 1rem;
}

.product-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.product-image {
  width: 60px;
  height: 60px;
  border-radius: 0.5rem;
  object-fit: cover;
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.product-name {
  font-weight: 600;
}

.total-amount {
  margin-top: 1rem;
  font-size: 1.25rem;
  text-align: right;
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
</style>