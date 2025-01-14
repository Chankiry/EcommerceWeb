<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
    integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <main class="flex font-mono">
    <div class="block w-full">
      <div class="m-10 flex review">
        <div class="flex">
          <div>
            <div role="tabpanel" aria-labelledby="product-image-tab">
              <img
                alt="Product image"
                :src="currentImage.url"
                class="h-96 w-full object-cover"
              />
            </div>

            <div class="flex mt-2">
              <button
                v-for="(image, index) in product.productImages"
                :key="index"
                role="tab"
                type="button"
                :aria-selected="index === selectedImageIndex"
                @click="selectImage(index)"
                class="flex items-center justify-center mx-2"
              >
                <img
                  :src="image.url"
                  alt=""
                  class="h-24 w-24 object-cover img-thumbnail"
                />
              </button>
            </div>
          </div>

          <div class="ml-12 mt-10">
            <h1 class="text-3xl font-bold mb-5">
              {{ currentImage.productName }}
            </h1>
            <p class="font-bold text-2xl">${{ currentImage.price }}</p>

            <!-- stars -->
            <div class="flex items-center mt-2.5 mb-5">
              <div class="flex items-center space-x-1">
                <svg
                  v-for="n in 5"
                  :key="n"
                  class="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <span
                  class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                  >5.0</span
                >
              </div>
            </div>

            <p class="my-3">{{ currentImage.productDescription }}</p>

            <!-- color -->
            <form @submit.prevent="addToBag">
              <div class="my-4 flex">
                <h3 class="mr-4 mt-3">Color:</h3>
                <div class="flex">
                  <button
                    v-for="(color, index) in product.colors"
                    :key="index"
                    :cx="50 + index * 400"
                    cy="150"
                    r="140"
                    :fill="color"
                    style="width: 2.5rem; height: 2.5rem"
                    class="mx-4 rounded-full btn"
                    type="button"
                    @click="activeBtnColor = color"
                    :class="{ activeColor: activeBtnColor === color }"
                    :style="{ backgroundColor: color.code }"
                  ></button>
                </div>
              </div>
              <div class="flex my-5">
                <h3 class="mr-4">Size:</h3>
                <button
                  v-for="(size, index) in product.sizes"
                  :key="index"
                  :cx="50 + index * 400"
                  cy="150"
                  r="140"
                  :fill="color"
                  style="width: 3rem; height: 2rem"
                  class="mx-3 rounded-lg mt-[-3px] btn"
                  type="button"
                  @click="activeBtn = size"
                  :class="{ active: activeBtn === size }"
                >
                  {{ size.name }}
                </button>
              </div>
              <div class="flex">
                <div class="counter flex items-center mx-10">
                  <button type="button" class="p-2" @click="decrement">
                    -
                  </button>
                  <span>{{ count }}</span>
                  <button type="button" class="p-2" @click="increment">
                    +
                  </button>
                </div>

                <button
                  type="submit"
                  class="button mt-5 text-black bg-gray-900 hover:bg-gray-700 rounded-lg px-5 py-2.5"
                >
                  Add to bag
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="review-container">
        <div class="reviews">
          <div v-for="(review, index) in reviews" :key="index" class="review">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style="width: 2.5rem; height: 2.5rem"
              >
                <path
                  fill="#7c7d7e"
                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                />
              </svg>
              <h4 class="mx-4">
                {{ review.author }}
                <div>
                  <small class="text-gray-5">{{ review.date }}</small>
                </div>
              </h4>
            </div>
            <p>{{ review.content }}</p>
            <!-- <button @click="deleteReview(index)" class="button">Delete</button> -->
          </div>
        </div>

        <!-- Popup -->
        <div
          class="border border-3xl p-3 w-auto mb-10 hover:text-blue-900 rounded-md "
          @click="() => TogglePopup('buttonTriggers')"
        >
          <h2 class="text-center font-bold">Rate this websit</h2>

          <div class="my-5 w-auto flex justify-center">
            <form action="#">
              <div class="stars flex gap-10 text-center">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </form>
          </div>
        </div>
        <Popup
          v-if="popupTriggers.buttonTriggers"
          :TogglePopup="() => TogglePopup('buttonTriggers')"
        >
          <h2 class="text-center font-bold">Rate this websit</h2>

          <div class="my-5 w-auto flex justify-center">
            <form action="#">
              <div class="stars flex gap-10 text-center">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </form>
          </div>

          <textarea
            v-model="newReview"
            placeholder=" Write your review here"
            class="border border-md p-2"
          ></textarea>

          <!-- <div class="modal-footer">
            <button class="btn btn-primary" type="button" @click="handleSubmit">
              Submit
            </button>
            <button
              class="btn btn-secondary"
              type="button"
              @click="handleCancel"
            >
              Cancel
            </button>
          </div> -->
        </Popup>
      </div>
    </div>
  </main>
  <RouterLink />
</template>

<script>
import { ref } from "vue";
import Popup from "../view_product/PopupViewProduct.vue";
import { RouterLink } from "vue-router";

const stars = document.querySelectorAll(".stars i");
stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
  });
});

export default {
  name: "ViewProduct",
  props: ["TogglePopup"],
  components: {
    Popup,
  },
  data() {
    return {
      count: 1,
      selectedImageIndex: 0,
      product: {
        productImages: [
          {
            url: "https://tailwindui.com/plus/img/ecommerce-images/product-page-03-product-01.jpg",
            productDescription:
              "The  Tote Basket is the perfect midpoint between shopping tote and comfy backpack.",
            price: 140,
            productName: "Zip Tote Basket",
          },
          {
            url: "https://tailwindui.com/plus/img/ecommerce-images/product-page-03-product-02.jpg",
            productDescription:
              "The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack.",
            price: 130,
            productName: "Zip Tote Basket",
          },
          {
            url: "https://tailwindui.com/plus/img/ecommerce-images/product-page-03-product-03.jpg",
            productDescription:
              "The Zip Tote  is the perfect midpoint between shopping tote and comfy backpack.",
            price: 150,
            productName: "Zip Tote Basket",
          },
          {
            url: "https://tailwindui.com/plus/img/ecommerce-images/product-page-03-product-04.jpg",
            productDescription:
              "The Zip  Basket is the perfect midpoint between shopping tote and comfy backpack.",
            price: 180,
            productName: "Zip Tote Basket",
          },
        ],
        colors: [
          { code: "#17315e" },
          { code: "#fff" },
          { code: "#1e5110" },
          { code: "#08020d" },
        ],
        sizes: [{ name: "S" }, { name: "M" }, { name: "L" }, { name: "XL" }],
      },
      reviews: [
        {
          author: "RithRith",
          date: "Today 7:21am",
          content:
            "The Michael Kors Men's Leather Billfold Wallet impresses with its genuine leather construction and sleek design. Despite its slim profile, it offers ample storage with well-organized compartments for cards, ID, and cash.",
        },
        {
          author: "Top",
          date: "Today 7:22am",
          content:
            "The Michael Kors Men's Leather Billfold Wallet impresses with its genuine leather construction and sleek design. Despite its slim profile, it offers ample storage with well-organized compartments for cards, ID, and cash.",
        },
      ],
      newReview: "",
      activeBtn: "",
      activeBtnColor: "",
    };
  },
  computed: {
    currentImage() {
      return this.product.productImages[this.selectedImageIndex];
    },
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count > 1) {
        this.count--;
      }
    },
    addToBag() {
      alert(`Added ${this.count} items to the bag.`);
    },
    selectImage(index) {
      this.selectedImageIndex = index;
    },

    setActiveBtn(btn) {
      this.activeBtn = btn; // Set the currently active button
      this.activeBtnColor = btncolor;
    },

    handleSubmit() {
      this.submitReview(); // Call the submitReview method
      this.TogglePopup(); // Close the modal
    },
    handleCancel() {
      this.deleteReview(); // Call the deleteReview method
      this.TogglePopup(); // Close the modal
    },
    submitReview() {
      const author = getUsername();
      if (this.newReview.trim() !== "") {
        this.reviews.push({
          author,
          date: new Date().toLocaleString(),
          content: this.newReview,
        });
        this.newReview = "";
      }
    },
    deleteReview(index) {
      this.reviews.splice(index, 1);
    },
  },
  setup() {
    const popupTriggers = ref({
      buttonTriggers: false,
      // timedTriggers: false,
    });

    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };

    return {
      Popup,
      popupTriggers,
      TogglePopup,
    };
  },
};
</script>

<style scoped>
.star-rating {
  margin-bottom: 10px;
}
.counter {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

button {
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  /* padding: 10px; */
  cursor: pointer;
}

button:hover {
  background-color: #e3dfdf;
}

span {
  margin: 0 10px;
  font-size: 1.2em;
}

img.img-thumbnail {
  border: 2px solid #ccc;
  border-radius: 4px;
}
.review-container {
  max-width: 50rem;
  margin: auto;
}

.reviews {
  margin-bottom: 20px;
}

.review {
  border-bottom: 1px solid #414040;
  padding: 10px 0;
}

textarea {
  width: 50rem;
  height: 80px;
  margin-bottom: 10px;
}

.button {
  padding: 10px 15px;
  background-color: #06203c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}
.stars i.active {
  color: #ffd43b;
}
.stars i {
  color: #e3dfdf;
  cursor: pointer;
  transition: color 0.2 ease;
}
textarea {
  width: 30rem;
}

.active {
  background-color: #d1d2d3;
}
.activeColor {
  border: 3px solid goldenrod;
}
</style>
