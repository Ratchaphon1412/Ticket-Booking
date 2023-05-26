<script setup lang="ts">
import { onMounted, ref } from "vue";
const route = useRoute();
const concertStore = useTicketStore();
const data: any = computed(() => concertStore.getDetailsData);

definePageMeta({
  layout: "base",
  middleware: "authuser",
});
let zoneID = ref(0);
function getDataComponent(data: number) {
  zoneID.value = data;
}

onMounted(() => {
  concertStore.getDetails(route.params.id.toString());
});

//route.params.id
</script>

<template>
  <div>
    <section class="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden">
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full px-4">
            <ul class="flex flex-wrap items-center mb-16">
              <li class="mr-6">
                <NuxtLink
                  to="/"
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
              <li>
                <a
                  class="text-sm font-medium text-indigo-500 hover:text-indigo-600"
                  href="#"
                  >{{ data.name }}</a
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
                <StageLisa
                  v-if="route.params.id == '1'"
                  class="mb-5 w-full h-full object-cover object-center rounded-3xl"
                  :callback="getDataComponent"
                />
                <StageLisa2
                  v-else-if="route.params.id == '2'"
                  class="mb-5 w-full h-full object-cover object-center rounded-3xl"
                  :callback="getDataComponent"
                />
                <StageLisa3
                  v-else-if="route.params.id == '3'"
                  class="mb-5 w-full h-full object-cover object-center rounded-3xl"
                  :callback="getDataComponent"
                />
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 px-4">
            <div class="max-w-md mb-6">
              <span class="text-xs text-gray-400 tracking-wider">{{
                data.name
              }}</span>
              <h2 class="mt-6 mb-4 text-3xl font-heading font-medium">
                {{ data.name }}
              </h2>
              <!-- <p class="flex items-center mb-6">
                <span class="mr-2 text-sm text-blue-500 font-medium">$</span>
                <span class="text-3xl text-blue-500 font-medium">44.90</span>
              </p> -->
              <p class="text-lg text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non
                iusto minima earum! Molestias distinctio fugit quidem dolor!
                Ratione ducimus dolore atque minus alias sapiente aliquid
                architecto, fuga dolorum illum!
              </p>
              <!--Zone Price-->
              <ul
                v-if="route.params.id == '1'"
                class="flex flex-col justify-center items-center w-full"
              >
                <li class="w-full">
                  <div class="flex flex-row w-full justify-between mt-4">
                    <div class="bg-yellow-300 rounded-lg shadow">
                      <span
                        class="w-full h-full flex justify-center items-center p-4 text-xl font-black"
                        >A Zone</span
                      >
                    </div>
                    <div
                      class="h-full flex flew-row items-center justify-center"
                    >
                      <p class="self-center p-4">
                        <span class="mr-2 text-sm text-blue-500 font-medium"
                          >$</span
                        >
                        <span class="text-3xl text-blue-500 font-medium"
                          >79.90</span
                        >
                      </p>
                    </div>
                  </div>
                </li>
                <li class="w-full">
                  <div class="flex flex-row w-full justify-between mt-4">
                    <div class="bg-red-500 rounded-lg shadow">
                      <span
                        class="w-full h-full flex justify-center items-center p-4 text-xl font-black"
                        >B Zone</span
                      >
                    </div>
                    <div
                      class="h-full flex flew-row items-center justify-center"
                    >
                      <p class="self-center p-4">
                        <span class="mr-2 text-sm text-blue-500 font-medium"
                          >$</span
                        >
                        <span class="text-3xl text-blue-500 font-medium"
                          >49.90</span
                        >
                      </p>
                    </div>
                  </div>
                </li>
                <li class="w-full">
                  <div class="flex flex-row w-full justify-between mt-4">
                    <div class="bg-pink-500 rounded-lg shadow">
                      <span
                        class="w-full h-full flex justify-center items-center p-4 text-xl font-black"
                        >C Zone</span
                      >
                    </div>
                    <div
                      class="h-full flex flew-row items-center justify-center"
                    >
                      <p class="self-center p-4">
                        <span class="mr-2 text-sm text-blue-500 font-medium"
                          >$</span
                        >
                        <span class="text-3xl text-blue-500 font-medium"
                          >39.90</span
                        >
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <ul
                v-else-if="route.params.id == '2'"
                class="flex flex-col justify-center items-center w-full"
              >
                <li class="w-full">
                  <div class="flex flex-row w-full justify-between mt-4">
                    <div class="bg-yellow-300 rounded-lg shadow">
                      <span
                        class="w-full h-full flex justify-center items-center p-4 text-xl font-black"
                        >A Zone</span
                      >
                    </div>
                    <div
                      class="h-full flex flew-row items-center justify-center"
                    >
                      <p class="self-center p-4">
                        <span class="mr-2 text-sm text-blue-500 font-medium"
                          >$</span
                        >
                        <span class="text-3xl text-blue-500 font-medium"
                          >79.90</span
                        >
                      </p>
                    </div>
                  </div>
                </li>
                <li class="w-full">
                  <div class="flex flex-row w-full justify-between mt-4">
                    <div class="bg-red-500 rounded-lg shadow">
                      <span
                        class="w-full h-full flex justify-center items-center p-4 text-xl font-black"
                        >B Zone</span
                      >
                    </div>
                    <div
                      class="h-full flex flew-row items-center justify-center"
                    >
                      <p class="self-center p-4">
                        <span class="mr-2 text-sm text-blue-500 font-medium"
                          >$</span
                        >
                        <span class="text-3xl text-blue-500 font-medium"
                          >49.90</span
                        >
                      </p>
                    </div>
                  </div>
                </li>
                <li class="w-full">
                  <div class="flex flex-row w-full justify-between mt-4">
                    <div class="bg-pink-500 rounded-lg shadow">
                      <span
                        class="w-full h-full flex justify-center items-center p-4 text-xl font-black"
                        >C Zone</span
                      >
                    </div>
                    <div
                      class="h-full flex flew-row items-center justify-center"
                    >
                      <p class="self-center p-4">
                        <span class="mr-2 text-sm text-blue-500 font-medium"
                          >$</span
                        >
                        <span class="text-3xl text-blue-500 font-medium"
                          >39.90</span
                        >
                      </p>
                    </div>
                  </div>
                </li>
                <li class="w-full">
                  <div class="flex flex-row w-full justify-between mt-4">
                    <div class="bg-blue-800 rounded-lg shadow">
                      <span
                        class="w-full h-full flex justify-center items-center p-4 text-xl font-black"
                        >D Zone</span
                      >
                    </div>
                    <div
                      class="h-full flex flew-row items-center justify-center"
                    >
                      <p class="self-center p-4">
                        <span class="mr-2 text-sm text-blue-500 font-medium"
                          >$</span
                        >
                        <span class="text-3xl text-blue-500 font-medium"
                          >29.90</span
                        >
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="w-full flex flex-row justify-between mt-4">
                <h3 class="font-bold text-base">Choose Zone</h3>
                <span v-if="zoneID != 0" class="text-base font-semibold">{{
                  zoneID
                }}</span>
                <span v-else class="text-base font-semibold">Not Choose</span>
              </div>
            </div>

            <div class="flex flex-wrap -mx-2 mb-12">
              <div class="w-full md:w-3/4 px-2 mb-2 md:mb-0">
                <NuxtLink
                  class="block py-4 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-center focus:ring-2 focus:ring-opacity-50 rounded-xl"
                  :class="[
                    zoneID == 0
                      ? 'text-white bg-gray-500 hover:bg-gray-600 focus:ring-gray-500'
                      : 'text-white  bg-blue-500  hover:bg-blue-600 focus:ring-blue-500',
                  ]"
                  :to="
                    zoneID != 0
                      ? `/ticket/details/${data.id}/zone-${zoneID}`
                      : ''
                  "
                  >Buy Ticket</NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>
