<template>
  <div class="overlay-container -mt-[90px]" >
    <section class="contact-us-section">
      <div class="contact-us-overlay"></div> <!-- No img tag here -->
      <div class="contact-us-content">
      <h2>Contact Us</h2>
      
    </div>
    </section>
  </div>
    <div class="contact-page">
      <section class="help-section">
        <h2>Have any question?</h2>
        <p>We're here to help.</p>
        <div class="contact-cards">
          <div class="contact-card">
            <h3>Sales</h3>
            <p>For assistance with purchases or product inquiries, please contact:</p>
            <a href="tel:011740183">011740183</a>
          </div>
          <div class="contact-card">
            <h3>Complaints</h3>
            <p>You guys can inform us for any issues or complaints, feel free to reach out to:</p>
            <a href="tel:011740183">011740183</a>
          </div>
          <div class="contact-card">
            <h3>Returns</h3>
            <p>Need help with returning a product? Contact us via email:</p>
            <a href="mailto:returns@mail.com">returns@mail.com</a>
          </div>
          <div class="contact-card">
            <h3>Marketing</h3>
            <p>You guys can inform us for the marketing-related inquiries, please call:</p>
            <a href="tel:011740183">1011740183</a>
          </div>
        </div>
      </section>
      <section class="form-section">
        <h3>Don't be a stranger!</h3>
        <h2>You tell us. We listen.</h2>
        <p>
          Developing elements of the end at the lake without lace. 
          Seek without commonalities, you engage or speak and divide.
        </p>
        <form @submit.prevent="submitForm">
          <input type="text" placeholder="Name" v-model="form.name" required />
          <input type="text" placeholder="Subject" v-model="form.subject" required />
          <input type="email" placeholder="Email" v-model="form.email" required />
          <textarea
            placeholder="Message"
            v-model="form.message"
            rows="5"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: "",
          subject: "",
          email: "",
          message: "",
        },
      };
    },
    methods: {
      submitForm() {
        alert("Form submitted!");
        console.log(this.form);
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-us-section {
  position: relative;
  background-image: url('@/assets/overlay2.jpg'); /* Background image */
  background-size: cover;
  background-position: center;
  height: 400px; /* Adjust as needed */
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-us-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(53, 48, 48, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-us-content {
  text-align: center;
  z-index: 2; 
  color: white; 
}

.contact-us-content h2 {
  font-size: 3rem;
  margin-bottom: 15px;
  font-weight: bold;
}

.contact-us-content p {
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 20px;
}
  .contact-page {
    font-family: Arial, sans-serif;
    color: #333;
    padding: 20px;
  }
  
  .help-section {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .help-section h2 {
    font-size: 28px;
    margin-bottom: 10px;
  }
  
  .help-section .contact-cards {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .contact-card {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 250px;
    text-align: center;
  }
  
  .contact-card h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  .contact-card a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
  }
  
  .form-section {
    text-align: center;
    margin-top: 40px;
    justify-content: space-between ;
    align-items: left;
  }
  
  .form-section h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  form {
    max-width: 600px;
    margin: 0 auto;
  }
  
  form input,
  form textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  form button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  