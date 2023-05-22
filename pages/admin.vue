<script lang="ts">
import { defineComponent } from "vue";
definePageMeta({
  layout: "base",
  middleware: ["authadmin"],
});
</script>

<template>
  <div>
    <h1>Admin</h1>
  </div>
</template>
