<template>
    <div class="shipping-container">
      <h3>Shipping Information</h3>
      <div class="form-group">
        <label for="fullName">Full Name:</label>
        <input type="text" id="fullName" v-model="fullName" required>
      </div>
      <div class="form-group">
        <label for="address">Address:</label>
        <input type="text" id="address" v-model="address" required>
      </div>
      <div class="form-group">
        <label for="city">City:</label>
        <input type="text" id="city" v-model="city" required>
      </div>
      <div class="form-group">
        <label for="state">State/Province:</label>
        <input type="text" id="state" v-model="state"> 
      </div>
      <div class="form-group">
        <label for="postalCode">Postal Code:</label>
        <input type="text" id="postalCode" v-model="postalCode" required>
      </div>
      <div class="form-group">
        <label for="country">Country:</label>
        <select id="country" v-model="country" required>
          <option value="">Select Country</option>
          </select>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fullName: '',
        address: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
      };
    }
  };
  </script>
  
  <style scoped>
  .shipping-container {
    margin-top: 20px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input, select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  </style>