<script setup lang="ts">
import { storeToRefs } from "pinia";
const conCertStore = useTicketStore();
definePageMeta({
  layout: "base",
  middleware: "main",
});
const { getConcertData }: any = storeToRefs(conCertStore);

onMounted(() => {
  conCertStore.getConCert();
});
</script>

<template>
  <section class="bg-white py-8">
    <div
      class="container mx-auto flex items-center flex-wrap pt-4 pb-12 justify-items-center justify-center"
    >
      <HeadStore />
      <div
        v-if="getConcertData.length > 0"
        class="grid md:grid-cols-3 grid-cols-1 justify-between w-full"
      >
        <CardTicket
          v-for="n in getConcertData"
          :key="n"
          :title="n.name"
          :image="n.image"
          :status="n.status"
          :id="n.id"
        />
      </div>
      <div
        v-else
        class="w-screen h-screen flex flex-row justify-center justify-items-center items-center"
      >
        <h3 class="text-xl text-gray-500 font-bold">Not Found</h3>
      </div>
    </div>
  </section>
</template>

<style></style>
