<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
interface Props {
  title?: string;
  description?: string;
  price?: number;
  image?: string;
  status?: string;
  id?: number;
}

const props = defineProps<Props>();
const authStore = useAuthStore();
const { title, description, price, image, id } = props;
const { getIsAuth } = storeToRefs(authStore);

const routeString = `/ticket/details/${id}`;
</script>

<template>
  <div class="w-full p-6 flex justify-center items-center justify-items-center">
    <NuxtLink
      :to="!getIsAuth ? '/login' : status != 'Buy Ticket' ? '' : routeString"
    >
      <img class="h-96 w-72 object-cover object-center" :src="image" />
      <div class="pt-3 w-72 flex flex-col items-center justify-center mb-3">
        <p class="font-bold">{{ title }}</p>
        <button
          v-if="status === 'Buy Ticket'"
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full mt-2"
        >
          {{ status }}
        </button>
        <button
          v-else
          class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded w-full mt-2"
        >
          {{ status }}
        </button>
      </div>
    </NuxtLink>
  </div>
</template>

<style></style>
