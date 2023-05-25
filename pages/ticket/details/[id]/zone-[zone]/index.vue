<script setup lang="ts">
import Swal from "sweetalert2";
import { onMounted, ref } from "vue";
definePageMeta({
  layout: "base",
  middleware: "authuser",
});
const route = useRoute();
const concertStore = useTicketStore();
const data: any = computed(() => concertStore.getDetailsData);
const seat = ref(0);
const row = 8;
const colum = 8;
const enable = ref(false);
const userSeat = computed<any>(() => {
  return concertStore.getUserSelectSeat;
});

onMounted(() => {
  concertStore.getDetails(route.params.id.toString());
  concertStore.getSeatZone(
    route.params.id.toString(),
    route.params.zone.toString()
  );
});
function checkSubmit() {
  if (userSeat.value.length == 0 && enable.value == true) {
    return true;
  }
  return false;
}

async function enableSubmit() {
  try {
    if (checkSubmit()) {
      await concertStore.saveSeat(
        route.params.id.toString(),
        route.params.zone.toString(),
        seat.value
      );
      await Swal.fire({
        title: "Success !",

        icon: "success",

        timer: 3000,
      });
      navigateTo("/ticket");
    }
  } catch (e) {
    await Swal.fire({
      title: "Error!",

      icon: "error",

      timer: 3000,
    });
    console.log(e);
  }
}

function getSeat(seatSelect: number, enableToSelect: boolean): void {
  enable.value = enableToSelect;
  seat.value = seatSelect;
}
</script>

<template>
  <section class="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full px-4">
          <ul class="flex flex-wrap items-center mb-16">
            <li class="mr-6">
              <NuxtLink
                to="/ticket"
                class="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500"
              >
                <span>Ticket</span>
                <ArrowRight />
              </NuxtLink>
            </li>
            <li class="mr-6">
              <a
                class="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500"
              >
                <span>Details</span>
                <ArrowRight />
              </a>
            </li>
            <li class="mr-6">
              <NuxtLink
                :to="`/ticket/details/${data.id}`"
                class="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500"
                ><span>{{ data.name }}</span>
                <ArrowRight />
              </NuxtLink>
            </li>
            <li>
              <a
                class="text-sm font-medium text-indigo-500 hover:text-indigo-600"
                href="#"
                >{{ $route.params.zone }}</a
              >
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
          <div
            class="flex -mx-4 flex-wrap items-center justify-between lg:justify-start lg:items-start xl:items-center"
          >
            <div class="w-full px-4">
              <!-- <img
                class="mb-5 w-full object-cover object-center rounded-3xl"
                src="https://www.thaiticketmajor.com/img_poster/prefix_1/2556/5556/beluca-fourtiverse-concert-640ece64e5a7a-l.jpg"
                alt=""
              /> -->
              <Seat :colum="colum" :row="row" :calback="getSeat" />
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-4">
          <div class="max-w-md mb-6">
            <h2 class="mt-6 mb-4 text-3xl font-heading font-medium">
              Detail Booking
            </h2>
            <span class="mt-6 mb-4 text-lg font-medium">
              Zone : {{ $route.params.zone }}
            </span>
            <h3
              v-if="userSeat.length != 0"
              class="mt-6 mb-4 text-base font-medium"
            >
              Seat : Can't Select because you Selected
            </h3>
            <h3 v-else-if="seat == 0" class="mt-6 mb-4 text-base font-medium">
              Seat : No Select Seat
            </h3>
            <h3 v-else-if="enable" class="mt-6 mb-4 text-base font-medium">
              Seat : {{ seat }}
            </h3>
            <h3 v-else class="mt-6 mb-4 text-base font-medium">
              Seat : Can't Select because other user selected
            </h3>
          </div>

          <div class="flex flex-wrap -mx-2 mb-12">
            <div class="w-full md:w-3/4 px-2 mb-2 md:mb-0">
              <Button
                v-on:click="enableSubmit"
                class="block py-4 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-center focus:ring-2 focus:ring-opacity-50 rounded-xl"
                :class="[
                  checkSubmit()
                    ? 'text-white bg-blue-500 focus:ring-blue-500 hover:bg-blue-600'
                    : 'text-white bg-gray-500 focus:ring-gray-500 hover:bg-gray-600',
                ]"
                >Confirm</Button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
