<script setup lang="ts">
interface Props {
  title?: string;
  description?: string;
  price?: number;
  image?: string;
  status?: string;
  id?: number;
}

const props = defineProps<Props>();

const { title, description, price, image, id } = props;

const routeString = `/ticket/details/${id}`;
</script>

<template>
  <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
    <NuxtLink :to="status != 'Buy Ticket' ? '' : routeString">
      <img
        class="hover:grow hover:shadow-lg h-96 w-72 object-cover object-center"
        :src="image"
      />
      <div class="pt-3 flex items-center justify-between mb-3">
        <p class="font-bold">{{ title }}</p>
      </div>

      <button
        v-if="status === 'Buy Ticket'"
        class="bg-blue-500 hover:bg-blue-600 text-gray-800 font-bold py-2 px-4 rounded w-full"
      >
        {{ status }}
      </button>
      <button
        v-else
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded w-full"
      >
        {{ status }}
      </button>
    </NuxtLink>
  </div>
</template>

<style></style>
