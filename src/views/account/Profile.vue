<template>
  <div class="page">
    <!-- Profile Section -->
    <main class="profile-section">
      <div class="profile-card">
        <div class="title-container">
  <div class="title">Profile Page</div>
      </div>
        <div class="profile-left">
          <img :src="profileImage" alt="Profile Picture" class="profile-image" />
          <input
            type="file"
            accept="image/*"
            @change="handleImageUpload"   
            ref="fileInput"
            style="display: none;"
          />
          <button class="upload-image-btn" @click="$refs.fileInput.click()">
            <i class="fas fa-camera"></i> Upload Image
          </button>
        </div>
        <div class="profile-right">
         

          <div class="info">
            <div class="info-title">Name:</div>
            <div class="info-item">
              <i class="fas fa-user"></i>
              <span>{{ username }}</span>
            </div>
            <div class="info-title">Email:</div>
            <div class="info-item">
              <i class="fas fa-envelope"></i>
              <span>{{ email }}</span>
            </div>
            <div class="info-title">Phone:</div>
            <div class="info-item">
              <i class="fas fa-phone"></i>
              <span>{{ phone }}</span>
            </div>
            <div>
              <button class="update-btn" @click="openEditModal">Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Edit Profile Modal -->
    <div v-if="isEditing" class="modal">
      <div class="modal-content">
        <h2>Edit Profile</h2>
        <div class="form-group">
          <label for="edit-username">Username:</label>
          <input id="edit-username" v-model="editedUsername" type="text" />
        </div>
        <div class="form-group">
          <label for="edit-email">Email:</label>
          <input id="edit-email" v-model="editedEmail" type="email" />
        </div>
        <div class="form-group">
          <label for="edit-phone">Phone:</label>
          <input id="edit-phone" v-model="editedPhone" type="tel" />
        </div>
        <div class="modal-buttons">
          <button @click="saveProfile" class="save-btn">Save</button>
          <button @click="closeEditModal" class="cancel-btn">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileImage: "https://via.placeholder.com/150", // Replace with actual profile picture URL
      username: "Nay Sovannarith",
      email: "narith2004@gmail.com",
      phone: "012345678",
      isEditing: false,
      editedUsername: "",
      editedEmail: "",
      editedPhone: "",
    };
  },
  methods: {
    openEditModal() {
      this.isEditing = true;
      this.editedUsername = this.username;
      this.editedEmail = this.email;
      this.editedPhone = this.phone;
    },
    closeEditModal() {
      this.isEditing = false;
    },
    saveProfile() {
      this.username = this.editedUsername;
      this.email = this.editedEmail;
      this.phone = this.editedPhone;
      this.closeEditModal();
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.profileImage = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>

<style scoped>
/* Profile Section */
/* Container for the title */
.title-container {
  display: flex;
  justify-content: center; /* Centers horizontally */
  margin-top: 20px; /* Adjust top margin if needed */
}

/* Adjust the title */
.title {
  font-size: 24px; /* Adjust font size */
  font-weight: bold;
  margin: 0 auto;
  padding-right: 10px
}
.profile-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 20px;
}

.profile-card {
  display: flex;
  flex-direction: row;
  width: 800px;
  height: 500px;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.profile-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.profile-right {
  flex: 2;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 5%;
}
.info-title {
  font-size: 1.1em;
  font-weight:lighter;
  margin-bottom: 5px;
  color: #333;
}

.profile-image {
  width: 300px;
  height: 300px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 25px;
}

.upload-image-btn {
  padding: 10px 20px;
  font-size: 1em;
  color: white;
  background-color: #6097df;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.upload-image-btn:hover {
  background-color: #1818c4;
}

.upload-image-btn i {
  
}

h2 {
  margin: 10px 0;
  font-size: 1.8em;
  color: #333;
}

.info {
  margin-top: 10px;
  justify-content: center;
  height: 500px;
  align-items: center;
}

.info-item {
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px 15px;
  margin-bottom: 25px;
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
  background-color: #6097df;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 5.5%;
  transition: background-color 0.3s ease;
}

.update-btn:hover {
  background-color: #1818c4;
}

.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fefefe;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 3px;
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.save-btn, .cancel-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.save-btn {
  background-color: #28a745;
  color: white;
}

.save-btn:hover {
  background-color: #218838;
}

.cancel-btn {
  background-color: #dc3545;
  color: white;
}

.cancel-btn:hover {
  background-color: #c82333;
}
</style>

