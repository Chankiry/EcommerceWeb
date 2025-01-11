<template>
  <div class="page">
    <!-- Profile Section -->
    <main class="profile-section">
      <div class="profile-card">
        <img src="@/assets/profile2.png" :src="profileImage" alt="Profile Picture" />				        <h2>{{ name }}</h2>
        
        <div class="info-item">
            <i class="fas fa-phone"></i>
            <span>{{ dob }}</span>
          </div>
        <div class="info">
          <div class="info-item">
            <i class="fas fa-user"></i>
            <span>{{ username }}</span>
          </div>
          <div class="info-item">
            <i class="fas fa-envelope"></i>
            <span>{{ email }}</span>
          </div>
          <div class="info-item">
            <i class="fas fa-phone"></i>
            <span>{{ phone }}</span>
          </div><div>
            <button class="update-btn" @click="updateProfile">Edit Profile</button>
          </div>
          
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileImage: "https://via.placeholder.com/150", // Replace with actual profile picture URL
      name: "Rith",
      dob: "9 May 1988",
      username: "Nay Sovannarith",
      email: "narith2004@gmail.com",
      phone: "012345678",
    };
  },
  methods: {
    updateProfile() {
      alert("Update button clicked!");
    },
  },
};
</script>

<style scoped>
/* Profile Section */
.profile-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 20px;
}

.profile-card {
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.profile-image {
  display: block; /* Ensures the image behaves as a block-level element */
  margin: 0 auto; /* Centers the image horizontally */
  width: 120px; /* Set equal width */
  height: 120px; /* Set equal height */
  border-radius: 50%; /* Makes the shape circular */
  object-fit: cover; /* Ensures proper cropping of the image */
  overflow: hidden; /* Ensures any overflow content is hidden */
}


h2 {
  margin: 10px 0;
  font-size: 1.8em;
  color: #333;
}

.info {
  margin-top: 20px;
}

.info-item {
  display: flex;
 
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 0.95em;
  color: #555;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.info-item i {
  margin-right: 10px;
  color: #888;
}
.update-btn {
  padding: 10px 20px;
  font-size: 1em;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.update-btn:hover {
  background-color: #0056b3;
}

</style>
