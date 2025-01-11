<template>
  <div class="ecommerce-page -mt-[90px]">
    <!-- About Us Section -->
    <section class="about-us-section">
      <div class="about-us-overlay"></div> <!-- No img tag here -->
      <div class="about-us-content">
        <h2>About Us</h2>
        
      </div>
    </section>

    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-content">
        <h1><b>ECOMMERCE SHOP</b></h1>
          <p>
            Welcome to our E-commerce store! We offer creative products, solutions, and services to help make your projects a success.
          </p>
        <button class="hero-button"><router-link to="contactus"> Contact Us</router-link></button>
      </div>
      <div class="hero-image">
        <img src="@/assets/abtus 1.png" alt="E-commerce illustration" style="width: 1000px; height: auto;" />

      </div>
    </div>

   
  </div>

    <!-- Features Section -->
    <li> 
        <div class="features-section">
        <h1><b>Our Featured Products</b></h1>
        <div class="features-container">
        <div v-for="feature in features" :key="feature.id" class="feature-card">
           <router-link to="/Clothes" >
            <img :src="feature.image" :alt="feature.title" class="feature-image" />
            <div class="feature-description">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
           </router-link>
          </div>
                 
        </div>
      </div>
</li>
    <!-- Brands & Location Section -->
    
      <!-- Brands Section -->
            <div class="brands-section">
        <div class="brands-content">
          <h2>Our Featured Brands</h2>
          <p>
            Discover the top brands that bring quality and style to life. Each brand has been selected for its commitment to excellence and innovation.
          </p>
          <div class="brand-description">
            <div v-for="brand in brands" :key="brand.id" class="brand-item">
              <img :src="brand.logo" :alt="brand.name" class="brand-logo" />
              <div class="brand-text">
                <h3>{{ brand.name }}</h3>
                <p>{{ brand.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="brands-location">
      <!-- Location Section -->
                <div class="location-section">
            <div class="location-content">
              <div class="location-text">
                <h2 class="location-header">Location</h2>
                <p class="location-description">
                  Our store is located in the capital city of Cambodia:  
                  This modern shopping center offers a variety of international and local retail stores,
                   dining options, and entertainment facilities, including a cinema and a bowling alley. 
                   Its central location near landmarks such as the Independence Monument and Koh Pich (Diamond Island) 
                   makes it easily accessible by tuk-tuks, taxis, and private vehicles.
                   Phnom Penh is located at #132, Sothearos Boulevard, Sangkat Tonle Bassac, Khan Chamkarmon, Phnom Penh, Cambodia.
                   For more information, you can contact Direct Phnom Penh at +855 23 988 100 or +855 23 988 200.
                </p>
              </div>
              <div class="map-container">
                <img src="@/assets/map.png" alt="Map" />
              </div>
              </div>
            </div>
          </div>
  <footer class="footer">
    <div class="newsletter">
      <h2>SIGN UP FOR THE LATEST DEALS AND NEWS</h2>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
      <div class="newsletter-input">
        <input type="email" placeholder="E-mail" />
        <button type="button">→</button>
      </div>
    </div>

    <div class="footer-sections">
      <div class="footer-column">
        <h3><b>SHOP</b></h3>
        <ul>
          <li><a href="#">Sleep</a></li>
          <li><a href="#">Music, Events & Concerts</a></li>
          <li><a href="#">Shooting</a></li>
          <li><a href="#">Hunting</a></li>
          <li><a href="#">Radio & Communication</a></li>
          <li><a href="#">DIY</a></li>
          <li><a href="#">Industrial</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3><b>SUPPORT</b></h3>
        <ul>
          <li><a href="#">How Decibullz Work</a></li>
          <li><a href="#">Product Warnings</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Replacement Parts</a></li>
          <li><a href="#">Military Discounts</a></li>
          <li><a href="#">Police Discounts</a></li>
          <li><a href="#">Fire & EMS Discounts</a></li>
          <li><a href="#">Warranty</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3><b>ECOMMERCE</b></h3>
        <ul>
          <li><a href="#">Reviews</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Wholesale & Retail</a></li>
          <li><a href="#">Decibullz for Teams</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Accessibility Statement</a></li>
          <li><a href="#">Cookies Declaration</a></li>
          <li><a href="#">Do Not Sell My Info</a></li>
          <li><a href="#">Data Requests</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2025, ECOMMERCE.</p>
      <div class="social-icons">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-youtube"></i></a>
        <a href="#"><i class="fab fa-tiktok"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </footer>
</template>



<script>
import prodescrImage from '@/assets/prodescr.jpg';
import walletImage from '@/assets/wallet.jpg';
import handbagImage from '@/assets/handbag.jpg';
import shoesImage from '@/assets/shoes.jpg';
import ZaraLogo from '@/assets/zaralogo.jpg';
import Diorlogo from '@/assets/diorlogo.jpg';
import Nikelogo from '@/assets/nikelogo.jpg';
import Guccilogo from '@/assets/guccilogo.jpg';

export default {
  name: "AllInOnePage",
  data() {
    return {
      // Features data
      features: [
        {
          id: 1,
          title: "Timeless Elegance in Every Step",
          description:
            "Explore a world of fashion with our premium footwear collection. Perfect for any occasion, designed for comfort and style.",
          image: prodescrImage,
          
        },
        {
          id: 2,
          title: "Minimalist Wallets, Maximum Utility",
          description:
            "Our slim wallets keep your essentials organized without the bulk. Ideal for modern living with style.",
          image: walletImage,
        },
        {
          id: 3,
          title: "Chic Handbags for Every Occasion",
          description:
            "Discover handbags that blend elegance and practicality. Perfect for work, travel, or casual outings.",
          image: handbagImage,
        },
        {
          id: 4,
          title: "Shoes That Define Comfort and Style",
          description:
            "Upgrade your footwear with designs that match your lifestyle. From casual to formal, we’ve got you covered.",
          image: shoesImage,
        },
      ],
      // Brands data
      brands: [
        { id: 1, name: "ZARA", logo: ZaraLogo, description: "Innovative sportswear and footwear." },
        { id: 2, name: "Dior", logo: Diorlogo, description: "Luxury fashion and timeless elegance." },
        { id: 3, name: "Nike", logo: Nikelogo, description: "Affordable, trendy clothing for all." },
        { id: 4, name: "Gucci", logo: Guccilogo, description: "High-end fashion with a rich legacy." },
      ],
      // Email for subscription
      email: "",
    };
  },
  
  name: "FooterComponent",
  methods: {
    subscribe() {
      alert(`Thank you for subscribing with email: ${this.email}`);
      this.email = ""; // Reset email input
    },
  },
};
</script>


<style scoped>
/* General Layout */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto:wght@400;500&display=swap');


/* Add these to your global styles */
.ecommerce-page {
  font-family: 'Roboto', sans-serif;
}

h1, h2, h3 {
  font-family: 'Poppins', sans-serif;
}
.about-us-section {
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

.about-us-overlay {
  position: ax`bsolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(53, 48, 48, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-us-content {
  text-align: center;
  z-index: 2; 
  color: white; 
}

.about-us-content h2 {
  font-size: 3rem;
  margin-bottom: 15px;
  font-weight: bold;
}

.about-us-content p {
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 20px;
}
/* Hero Section */
.hero-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  background-color: #f9f9f9;
}

.hero-content {
  max-width: 50%;
}

.hero-content h1 {
  font-size: 3rem;
  color: #333;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
}

.hero-button {
  padding: 10px 20px;
  background-color: #6c757d;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.hero-image {
  position: relative;
}
.hero-image img {
  max-width: 100%;
  height: auto;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 100px;
}

.features-section {
  padding: 100px;
}

.features-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 60px; 
  justify-items: center; /* Center items in the grid */
}

.feature-card {
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  width: 100%; /* Card spans full column width */
  max-width: 500px; /* Limit card size */
}

.feature-image {
  width: 200%;
  height: 250px; /* Keep image heights consistent */
  object-fit: cover; /* Maintain aspect ratio */
}

.feature-description {
  padding: 15px;
}

.features-section h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.feature-description h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
}

.feature-description p {
  font-size: 1rem;
  color: #666;
}
/* Brands & Location */
.brands-location {
  padding: 40px;
}

.brands-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin: 40px auto;
  padding: 20px;
  max-width: 1200px;
}

.brands-content h2 {
  font-size: 2.5rem;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.brands-content p {
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  margin-bottom: 30px;
  line-height: 1.8;
  max-width: 800px;
}

.brand-description {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns for a balanced layout */
  gap: 20px;
  width: 100%;
}

.brand-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fafafa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.brand-logo {
  max-width: 80px;
  height: auto;
  border-radius: 5px;
}

.brand-text h3 {
  font-size: 1.5rem;
  color: #444;
  margin: 0;
}

.brand-text p {
  font-size: 1rem;
  color: #666;
  margin: 5px 0 0;
}


.location-section {
  padding: 40px;
}

.location-content {
  display: flex; /* Side-by-side layout for text and image */
  align-items: center; /* Vertically align text and image */
  justify-content: space-between; /* Equal spacing for text and image */
  gap: 20px; /* Space between the text and the image */
}

.location-text {
  flex: 1; /* Text takes half the space */
}

.location-header {
  font-size: 4rem;
  color: #333;
  margin-bottom: 10px; /* Space between header and description */
  font-weight: bold;
}

.location-description {
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
  
}

.map-container {
  flex: 1; /* Map takes half the space */
}

.map-container img {
  width: 100%; /* Fill the half-width area */
  height: auto; /* Maintain aspect ratio */
  object-fit: cover; /* Fit the image nicely */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional shadow */
}

/* Responsive Design */
@media (max-width: 768px) {
  .location-content {
    flex-direction: column; /* Stack text and map vertically */
    text-align: center; /* Center-align text */
  }

  .map-container img {
    max-width: 100%; /* Adjust image size for smaller screens */
  }
 @media (max-width: 768px) {
  .brand-description {
    grid-template-columns: 1fr; /* Single-column layout for mobile */
  }
}

}
/* Footer Styles */
.footer {
  background-color: #000;
  color: #fff;
  padding: 2rem;
  font-family: Arial, sans-serif;
}

.newsletter {
  text-align: center;
  margin-bottom: 2rem;
}

.newsletter h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.newsletter-input {
  display: flex;
  justify-content: center;
  align-items: center;
}

.newsletter-input input {
  width: 300px;
  padding: 0.5rem;
  border: none;
  border-radius: 4px 0 0 4px;
  font-size: 1rem;
}

.newsletter-input button {
  background-color: #444;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.newsletter-input button i {
  font-size: 1.2rem;
}
.footer-sections {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.footer-column {
  flex: 1;
}

.footer-column h3 {
  margin-bottom: 10px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column li {
  margin-bottom: 5px;
}

.footer-column a {
  color: #fff;
  text-decoration: none;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #444;
  padding-top: 10px;
}

.social-icons a {
  color: #fff;
  margin: 0 5px;
  font-size: 1.2rem;
}
</style>