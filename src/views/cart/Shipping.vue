<template>
    <div class="shipping-page">
      <div class="shipping-form-container">
        <h1 class="form-title">Shipping Information</h1>
        <form @submit.prevent="goToPayment">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" v-model="shippingInfo.name" required />
          </div>
          <div class="form-group">
            <label for="address">Address</label>
            <input type="text" id="address" v-model="shippingInfo.address" required />
          </div>
          <div class="form-group">
            <label for="city">City</label>
            <input type="text" id="city" v-model="shippingInfo.city" required />
          </div>
          <div class="form-group">
            <label for="zip">Postal Code</label>
            <input type="text" id="zip" v-model="shippingInfo.zip" required />
          </div>
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" v-model="shippingInfo.phone" required />
          </div>
          <button class="continue-button" type="submit">Continue to Payment</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Shipping",
    data() {
      return {
        shippingInfo: {
          name: "",
          address: "",
          city: "",
          zip: "",
          phone: "",
        },
      };
    },
    methods: {
      goToPayment() {
        // Navigate to the Payment page and pass the shipping information
        this.$router.push({
          name: "Payment",
          query: { shippingInfo: JSON.stringify(this.shippingInfo) },
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .shipping-page {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    padding: 20px;
    background-color: #f5f5f5;
    display: flex; /* Center the form container horizontally */
    justify-content: center;
    align-items: center;
    min-height: 100vh; /* Ensure form container is visible on all screen sizes */
  }
  
  .shipping-form-container {
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle shadow for depth */
    width: 400px; /* Adjust width as needed */
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  .form-title{
    font-family: 'Times New Roman', Times, serif;
    font-weight: bold;
    text-align: center;
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
  
  .continue-button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1.2rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .continue-button:hover {
    background-color: #45a049;
  }
  </style>