<template>
    <div class="payment-page">
      <h1>Payment Information</h1>
      <form @submit.prevent="completeOrder">
        <div class="form-group">
          <label for="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" v-model="paymentInfo.cardNumber" required />
        </div>
        <div class="form-group">
          <label for="expiryDate">Expiry Date</label>
          <input type="text" id="expiryDate" v-model="paymentInfo.expiryDate" required />
        </div>
        <div class="form-group">
          <label for="cvv">CVV</label>
          <input type="text" id="cvv" v-model="paymentInfo.cvv" required />
        </div>
        <div class="form-group">
          <label for="nameOnCard">Name on Card</label>
          <input type="text" id="nameOnCard" v-model="paymentInfo.nameOnCard" required />
        </div>
        <button class="confirm-button" type="submit">Confirm Payment</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "Payment",
    data() {
      return {
        paymentInfo: {
          cardNumber: "",
          expiryDate: "",
          cvv: "",
          nameOnCard: "",
        },
        shippingInfo: null, // To display shipping details, if needed
      };
    },
    created() {
      // Parse the shipping information passed from the previous page
      this.shippingInfo = JSON.parse(this.$route.query.shippingInfo || "{}");
    },
    methods: {
      completeOrder() {
        // Display order confirmation
        alert("Your payment is complete! Thank you for your order.");
        // Optionally redirect to a confirmation page or homepage
        this.$router.push({ name: "Home" });
      },
    },
  };
  </script>
  
  <style scoped>
  .payment-page {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #f5f5f5;
  }
  .form-group {
    margin-bottom: 15px;
  }
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .confirm-button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1.2rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .confirm-button:hover {
    background-color: #45a049;
  }
  </style>
  