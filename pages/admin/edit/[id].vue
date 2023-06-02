<script setup lang="ts">
import Swal from "sweetalert2";
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";

// set the dropdown menu element

definePageMeta({
  layout: "base",
  middleware: "authadmin",
});
const route = useRoute();
const concertStore: any = useTicketStore();
const { getDetailsData }: any = storeToRefs(concertStore);

const status = ref("Choose a Status");
const image = computed<string>((): string => concertStore.getDetailsData.image);
const name = computed<string>((): string => concertStore.getDetailsData.name);
const title = ref(name);

async function submitEdit() {
  try {
    let text = "";
    let choice = "";
    if (title.value === "") {
      text = getDetailsData.name;
    } else {
      text = title.value;
    }

    if (status.value === "Choose a Status") {
      choice = getDetailsData.status;
    } else {
      choice = status.value;
    }
    const response = await concertStore.editConcertAdmin(
      route.params.id.toString(),
      text,
      image.value,
      choice
    );
    if (response.status === 200) {
      await Swal.fire({
        title: "Success !",

        icon: "success",

        timer: 3000,
      });
      await navigateTo("/admin");
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

onMounted(() => {
  concertStore.getDetails(route.params.id.toString());
});
</script>

<template>
  <div>
    <section class="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden">
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
            <div class="flex -mx-4 flex-wrap items-center justify-center">
              <div
                class="flex flex-row justify-items-center items-center w-3/4 px-4"
              >
                <img
                  class="mb-5 w-full object-cover object-center rounded-3xl"
                  :src="getDetailsData.image"
                  alt=""
                />
              </div>
            </div>
          </div>
          <form class="w-full lg:w-1/2 px-4" v-on:submit.prevent="submitEdit">
            <div class="max-w-md mb-6">
              <!-- <h2 class="mt-6 mb-4 text-3xl font-heading font-medium">
                {{ getDetailsData.name }}
              </h2> -->
              <div>
                <label
                  for="first_name"
                  class="block font-bold mb-2 text-sm text-gray-900 dark:text-white"
                  >Title</label
                >
                <span class="text-md font-bold text-gray-400 tracking-wider">{{
                  getDetailsData.name
                }}</span>
                <input
                  type="text"
                  v-model="title"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mt-3 mb-3 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>

              <span class="text-xs font-bold text-black tracking-wider mb-2"
                >details
              </span>
              <p class="text-lg text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non
                iusto minima earum! Molestias distinctio fugit quidem dolor!
                Ratione ducimus dolore atque minus alias sapiente aliquid
                architecto, fuga dolorum illum!
              </p>
              <!--Zone Price-->
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                >Status</label
              >
              <select
                id="countries"
                v-model="status"
                class="bg-gray-50 mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700"
              >
                <option selected>Choose a Status</option>
                <option value="Buy Ticket">Buy Ticket</option>
                <option value="In coming">In coming</option>
                <option value="SoldOut">Sold Out</option>
              </select>
            </div>

            <div class="flex flex-wrap -mx-2 mb-12">
              <div class="w-full px-2 mb-2 md:mb-0">
                <!--Submit-->
                <button
                  type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>
