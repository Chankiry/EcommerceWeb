<template>
  <div class="admin-page">
    <!-- Include Narbar-Admin -->
    <NarbarAdmin />
    <div class="h-full flex flex-col bg-gray-100 -mt-[90px]">
      <!-- Full-space image slider -->
      <div class="slider-container bg-slate-200 h-[800px] w-full flex items-center justify-center">
        <div class="slider" ref="slider">
          <div class="image-wrapper">
            <img src="@/assets/Clothes.jpg" alt="Cloth background" class="slide-image" />
          </div>
          <div class="image-wrapper">
            <img src="@/assets/hand.jpg" alt="Cloth background" class="slide-image" />
          </div> 
          <div class="image-wrapper">
            <img src="@/assets/wallet2.jpg" alt="Cloth background" class="slide-image" />
          </div>
         <div class="image-wrapper">
            <img src="@/assets/prodescr.jpg" alt="Cloth background" class="slide-image" />
          </div>  
        </div>
      </div>
  
      <div class="w-full h-full flex">
        <SideNav />
        <div class="flex-1 flex items-center justify-center">
          <router-view />
        </div>
      </div>
    </div>
    
    <!-- Add Item Section -->
    <div class="add-item-section">
      <button class="add-item-btn" @click="toggleAddItemForm">
        {{ showAddItemForm ? 'Close Add Item Form' : 'Add New Item' }}
      </button>
      <div v-if="showAddItemForm" class="add-item-form">
        <h3>Add New Item</h3>
        <form @submit.prevent="addItem">
          <div class="form-group">
            <label for="item-name">Item Name:</label>
            <input id="item-name" v-model="newItem.name" type="text" required />
          </div>
          <div class="form-group">
            <label for="item-description">Description:</label>
            <textarea id="item-description" v-model="newItem.description" rows="3" required></textarea>
          </div>
          <div class="form-group">
            <label for="item-image">Image:</label>
            <input id="item-image" type="file" accept="image/*" @change="handleImageUpload" required />
          </div>
          <button type="submit" class="save-btn">Save Item</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import NarbarAdmin from './Narbar-Admin.vue';
import SideNav from '@/components/SideNav.vue';

export default {
  name: 'PageAdmin',
  components: {
    NarbarAdmin,
    SideNav,
  },
  data() {
    return {
      currentIndex: 0, // Track the current image index
      showAddItemForm: false,
      newItem: {
        name: "",
        description: "",
        image: null,
      },
    };
  },
  mounted() {
    this.startAutoSlide();
  },
  methods: {
    startAutoSlide() {
      setInterval(() => {
        const slider = this.$refs.slider;
        this.currentIndex = (this.currentIndex + 1) % 4; // Cycle through 4 images
        const translateValue = -this.currentIndex * 100; // Move slider by 100% per image
        slider.style.transform = `translateX(${translateValue}%)`;
      }, 3000); // Slide every 3 seconds
    },
    toggleAddItemForm() {
      this.showAddItemForm = !this.showAddItemForm;
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.newItem.image = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    addItem() {
      if (this.newItem.name && this.newItem.description && this.newItem.image) {
        alert(`Item "${this.newItem.name}" added successfully!`);
        this.newItem = { name: "", description: "", image: null };
        this.showAddItemForm = false;
      } else {
        alert("Please complete all fields.");
      }
    },
  },
};
</script>

<style scoped>
.add-item-btn {
  padding: 10px 20px;
  margin-bottom: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-item-btn:hover {
  background-color: #0056b3;
}

.slider-container {
  overflow: hidden;
  width: 100%;
  height: 450px;
  position: relative;
  display: flex;
}

.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 400%; /* 4 images */
}

.image-wrapper {
  flex: 0 0 100%; /* Each image takes 100% of the width */
}

.slide-image {
  width: 100%;
  height: 800px;
}

.admin-btn {
  background-color: #f9a825;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease-in-out;
}

.admin-btn:hover {
  background-color: #e68a00;
}

.fixed {
  position: fixed;
}

/* Add Item Section */
.add-item-section {
  margin-top: 40px;
  text-align: center;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.add-item-form {
  margin-top: 15px;
  text-align: left;
  max-width: 400px;
  margin: 0 auto;
}

.add-item-form .form-group {
  margin-bottom: 15px;
}

.add-item-form label {
  display: block;
  margin-bottom: 5px;
}

.add-item-form input,
.add-item-form textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.save-btn {
  display: block;
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.save-btn:hover {
  background-color: #218838;
}
</style>