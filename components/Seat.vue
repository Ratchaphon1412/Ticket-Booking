<script setup lang="ts">
import { computed, onMounted } from "vue";
import { storeToRefs } from "pinia";
interface Props {
  colum: number;
  row: number;
  calback: Function;
}
const conCertStore = useTicketStore();
const props = defineProps<Props>();
const route = useRoute();
const seatIndex: Ref<Array<Number>> = ref([]);
const { getUserSelectSeat }: any = storeToRefs(conCertStore);
const { getOtherSelectSeat }: any = storeToRefs(conCertStore);

function getSeat(seat: number): void {
  let checkEnable = true;

  if (checkSeat(seat, getOtherSelectSeat.value)) {
    checkEnable = false;
  } else {
    checkEnable = true;
    if (!seatIndex.value.includes(seat)) {
      seatIndex.value.push(seat);
    }
  }

  props.calback(seatIndex.value, checkEnable);
}

function checkSeat(seat: number, seatAll: Array<Object>) {
  let check = false;
  seatAll.map((item: any) => {
    if (item.seatNumber == seat) {
      check = true;
    }
  });
  return check;
}

onMounted(() => {
  conCertStore.getSeatZone(
    route.params.id.toString(),
    route.params.zone.toString()
  );
});
</script>

<template>
  <ul class="grid grid-cols-8 justify-items-center">
    <li
      v-for="seat in props.colum * props.row"
      :key="seat"
      class="rounded-lg"
      :class="[seatIndex.includes(seat) ? 'bg-green-500' : '']"
    >
      <span
        :class="[
          checkSeat(seat, getUserSelectSeat)
            ? 'text-green-500'
            : checkSeat(seat, getOtherSelectSeat)
            ? 'text-red-500'
            : 'text-black',
        ]"
      >
        <font-awesome-icon
          icon="fa-solid fa-couch"
          class="text-2xl p-3"
          v-on:click="getSeat(seat)"
        />
      </span>
    </li>
  </ul>
</template>

<style></style>
