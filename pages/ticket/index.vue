<script setup lang="ts">
import { storeToRefs } from "pinia";
const conCertStore = useTicketStore();
definePageMeta({
  layout: "base",
  middleware: ["authuser"],
});
const { getConcertData } = storeToRefs(conCertStore);

onMounted(async () => {
  await conCertStore.getConCert();
});
</script>

<template>
  <section class="bg-white py-8">
    <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
      <HeadStore />
      <CardTicket
        v-for="n in getConcertData"
        :key="n"
        :title="n.name"
        :image="n.image"
        :status="n.status"
        :id="n.id"
      />
    </div>
  </section>
</template>

<style></style>
