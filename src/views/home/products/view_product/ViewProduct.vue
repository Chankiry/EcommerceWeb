<template>
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

            <form @submit.prevent="addToBag">
              <div class="my-10 flex">
                <h3 class="mr-4">Color:</h3>
                <div class="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    style="width: 40rem; height: 5rem; margin-top: -0.8rem;margin-left: -17rem;"
                  >
                    <circle
                      v-for="(color, index) in product.colors"
                      :key="index"
                      :cx="50 + index * 400"
                      cy="150"
                      r="140"
                      :fill="color"
                      class="cursor-pointer"
                      @click="selectColor(color)"
                    />
                  </svg>
                </div>
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

        <textarea
          v-model="newReview"
          placeholder=" Write your review here"
        ></textarea>
        <div style="margin-left: 38rem" class="flex mb-10">
          <button @click="submitReview" class="button mx-5">Send</button>
          <button @click="deleteReview(index)" class="button">Delete</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "ViewProduct",
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
        colors: ["#17315e", "#fff", "#1e5110", "#08020d"],
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
    selectColor(color) {
      console.log(`Selected color: ${color}`);
    },

    submitReview() {
      if (this.newReview.trim() !== "") {
        this.reviews.push({
          author: "You",
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
};
</script>

<style scoped>
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
</style>
