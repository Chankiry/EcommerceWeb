<template>
  <div class="page">
    <!-- Profile Section -->
    <main class="profile-section">
      <div class="profile-card">
        <!-- Title Section -->
        <div class="title">Profile Page</div>

        <div class="profile-content">
          <!-- Left Section (Image) -->
          <div class="profile-left">
            <img :src="avatar" alt="Profile Picture" class="profile-image" />
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

          <!-- Right Section (Information) -->
          <div class="profile-right">
            <div class="info">
              <div class="info-title">Name:</div>
              <div class="info-item">
                <i class="fas fa-user"></i>
                <span>{{ name }}</span>
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
      </div>
    </main>

    <!-- Edit Profile Modal -->
    <div v-if="isEditing" class="modal">
      <div class="modal-content">
        <h2>Edit Profile</h2>
        <div class="form-group">
          <label for="edit-name">Username:</label>
          <input id="edit-name" v-model="editedUsername" type="text" />
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
import ProfileService from './service';


export default {
  data() {
    return {
      fileUrl: import.meta.env.VITE_FILE_BASE_URL,
      avatar: "https://via.placeholder.com/150", // Default profile image
      name: "", // Will be populated from localStorage
      email: "", // Will be populated from localStorage
      phone: "", // Will be populated from localStorage
      isEditing: false,
      editedUsername: "",
      editedEmail: "",
      editedPhone: "",
    };
  },
  created() {
    // Fetch the user object from localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    // Map the user data to component variables
    if (user) {
      this.name = user.name || "Nay Sovannarith"; // Fallback to default if name is not available
      this.email = user.email || "narith2004@gmail.com"; // Fallback to default if email is not available
      this.phone = user.phone || "012345678"; // Fallback to default if phone is not available
      this.avatar = this.fileUrl + user.avatar || this.avatar; // Use the avatar from localStorage or fallback to default
    }
  },
  methods: {
    openEditModal() {
      this.isEditing = true;
      this.editedUsername = this.name;
      this.editedEmail = this.email;
      this.editedPhone = this.phone;
    },
    closeEditModal() {
      this.isEditing = false;
    },
    async saveProfile() {
      try {
        // Prepare the updated profile data
        const updatedProfile = {
          name: this.editedUsername,
          email: this.editedEmail,
          phone: this.editedPhone,
        };

        // Call the updateProfile method from ProfileService
        const response = await ProfileService.updateProfile(updatedProfile);
        const token = response.data.access_token;
        const user = response.data.user;

        // Store token, role, and user in localStorage
        localStorage.setItem('Token', token);
        localStorage.setItem('user', JSON.stringify(user)); // Store user as a JSON string

        // Update the component data
        this.avatar = this.fileUrl + user.avatar;
        this.name  = user.name;
        this.email = user.email;
        this.phone = user.phone;

        this.closeEditModal();
        alert('Profile updated successfully!');
      } catch (error) {
        console.error('Failed to update profile:', error);
        alert('Failed to update profile. Please try again.');
      }
    },
    async handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = async (e) => {
          // Convert the image to Base64
          const base64Image = e.target.result;

          // Update the avatar in the component
          this.avatar = base64Image;

          try {
            // Call the updateProfile method from ProfileService to upload the image
            const response = await ProfileService.updateProfile({ name: this.name, email: this.email, phone: this.phone ,avatar: base64Image });
            const token = response.data.access_token;
            const user = response.data.user;

            // Store token, role, and user in localStorage
            localStorage.setItem('Token', token);
            localStorage.setItem('user', JSON.stringify(user)); // Store user as a JSON string
            // Update the component data
            this.avatar = this.fileUrl + user.avatar;
            this.name  = user.name;
            this.email = user.email;
            this.phone = user.phone;
          } catch (error) {
            console.error('Failed to update profile image:', error);
            alert('Failed to update profile image. Please try again.');
          }
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>

<style scoped>
/* Profile Section */
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f9f9f9;
  padding: 20px;
}

.profile-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.profile-card {
  width: 800px;
  padding: 20px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #000000;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.profile-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.profile-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.profile-image {
  width: 250px;
  height: 250px;
  object-fit: cover;
  margin-bottom: 15px;
  border-radius: 50%;
}

.upload-image-btn {
  padding: 10px 20px;
  font-size: 1em;
  color: white;
  background-color: #78716c;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.upload-image-btn:hover {
  background-color: #453e3e;
}

.profile-right {
  flex: 1.5;
  padding-left: 20px;
}

.info-title {
  font-size: 1.1em;
  font-weight: bold;
  margin-bottom: 5px;
  color: #000000;
  margin-right: 100%;
}

.info-item {
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px 15px;
  margin-bottom: 15px;
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
  background-color: #78716c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.update-btn:hover {
  background-color: #453e3e;
}

/* Modal Styles */
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
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

.save-btn {
  background-color: #28a745;
  color: white;
  width: 30%;
  border-radius: 5px;
}

.cancel-btn {
  background-color: #dc3545;
  color: white;
  width: 30%;
  border-radius: 5px;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .profile-card {
    width: 100%;
    padding: 15px;
  }

  .profile-content {
    flex-direction: column;
    align-items: center;
  }

  .profile-right {
    padding-left: 0;
  }

  .profile-image {
    width: 200px;
    height: 200px;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 24px;
  }

  .info-item {
    font-size: 0.85em;
  }

  .update-btn {
    padding: 8px 16px;
  }

  .upload-image-btn {
    padding: 8px 16px;
  }
}
</style>
