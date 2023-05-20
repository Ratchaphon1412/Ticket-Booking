<script setup lang="ts">
definePageMeta({
  layout: "base",
});
</script>

<template>
  <section class="bg-white py-8">
    <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
      <HeadStore />
      <CardTicket v-for="n in 10" :key="n" />
    </div>
  </section>
</template>

<style></style>
