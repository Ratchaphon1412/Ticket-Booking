<script setup lang="ts">
import { storeToRefs } from "pinia";
import { h } from "vue";
const conCertStore = useTicketStore();
const { getSeatBooking }: any = storeToRefs(conCertStore);
const { getBooking }: any = storeToRefs(conCertStore);

definePageMeta({
  layout: "base",
  middleware: "authuser",
});

function getSeatBookingById(id: number) {
  const seatBooking = getSeatBooking.value.filter(
    (seat: any) => seat.concertId === id
  );

  return seatBooking;
}

onMounted(() => {
  conCertStore.userBooking();
});
</script>

<template>
  <h1 class="text-3xl text-center text-black mt-10">Booking List</h1>
  <div
    class="relative overflow-x-auto shadow-md sm:rounded-lg bg-gray-600 mr-52 ml-52 mt-20"
  >
    <table
      class="w-full text-sm text-left bg-gray-600 text-gray-500:text-gray-400"
    >
      <thead
        class="text-xs text-gray-50 uppercase bg-gray-600 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">ID</th>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">Image</th>
          <th scope="col" class="px-6 py-3">Seat</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product in getBooking"
          :key="product.id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ product.id }}
          </td>
          <td class="px-6 py-4">
            {{ product.name }}
          </td>
          <td class="px-6 py-4">
            <img
              :src="product.image"
              alt="Product Image"
              width="200"
              height="200"
            />
          </td>
          <td class="px-6 py-4 text-center">
            <!-- {{ getSeatBookingById(product.id) }} -->
            <span
              v-for="items in getSeatBookingById(product.id)"
              :key="items"
              class="text-center"
            >
              {{ items.zone }} : {{ items.seatNumber }}<br />
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style></style>
