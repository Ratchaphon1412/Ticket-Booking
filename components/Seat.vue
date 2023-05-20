<script setup lang="ts">
import { computed } from "vue";
interface Props {
  colum: number;
  row: number;
}

const props = defineProps<Props>();

const seats = Array.from({ length: props.colum * props.row }, (_, i) => i);

const classObject = computed<string>(() => {
  return "grid grid-cols-" + props.colum + " gap-2";
});

function getSeat(seat: number): void {
  console.log(seat);
}
</script>

<template>
  <div :class="classObject">
    <div
      v-for="seat in seats"
      :key="seat"
      class="flex flex-col justify-center items-center p-4"
    >
      <font-awesome-icon
        icon="fa-solid fa-couch"
        class="text-black text-2xl font-bold"
        v-on:click="getSeat(seat)"
      />
    </div>
    <!-- <div
      v-for="seat in seats"
      :key="seat"
      class="seat"
      :class="{ 'seat--selected': seat === 5 }"
    >
      {{ seat }}
    </div> -->
  </div>
</template>

<style></style>
