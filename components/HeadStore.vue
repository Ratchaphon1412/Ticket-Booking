<script setup lang="ts">
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";

const concertStore = useTicketStore();
const searchText = ref("");
async function searchData() {
  try {
    await concertStore.findConcert(searchText.value);
  } catch (e) {
    console.log(e);
  }
}
</script>

<template>
  <nav id="store" class="w-full z-30 top-0 px-6 py-1">
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3"
    >
      <a
        class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
        href="#"
      >
        Store
      </a>

      <div class="flex items-center" id="store-nav-content">
        <div>
          <input
            type="text"
            v-model="searchText"
            @keyup.enter="searchData"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mt-3 mb-3 focus:ring-blue-500 focus:border-blue-500 block w-full px-5"
            placeholder="find the product"
          />
        </div>

        <a class="pl-3 inline-block no-underline hover:text-black">
          <svg
            class="fill-current hover:text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"
            />
          </svg>
        </a>
        <a class="pl-3 inline-block no-underline hover:text-black" href="#">
          <svg
            class="fill-current hover:text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
          </svg>
        </a>
      </div>
    </div>
  </nav>
</template>

<style></style>
