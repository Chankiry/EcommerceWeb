<template>
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
      <div class="flex-1 flex flex-col items-center justify-center">
        <router-view />
      </div>

    </div>
  </div>
</template>

<script>
import SideNav from '@/components/SideNav.vue';

export default {
  name: 'Home',
  components: {
    SideNav,
  },
  data() {
    return {
      currentIndex: 0, // Track the current image index
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
  },
};
</script>

<style scoped>
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
.fixed {
  position: fixed;
}


</style>
