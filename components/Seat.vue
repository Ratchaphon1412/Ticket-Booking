<script setup lang="ts">
import { computed, onMounted } from "vue";
interface Props {
  colum: number;
  row: number;
  calback: Function;
}
const conCertStore = useTicketStore();
const props = defineProps<Props>();
const route = useRoute();
const activeIndex = ref(0);
const seatIndex = ref(-99);

const otherSeat = computed<Array<Object>>(() => {
  return conCertStore.getOtherSelectSeat;
});

const userSeat = computed<any>(() => {
  return conCertStore.getUserSelectSeat;
});

function getSeat(seat: number): void {
  let checkEnable;

  if (checkSeat(seat, otherSeat.value)) {
    checkEnable = false;
  } else {
    checkEnable = true;
  }
  seatIndex.value = seat;
  props.calback(seat, checkEnable);
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
      :class="[seatIndex == seat ? 'bg-green-500' : '']"
    >
      <span
        :class="[
          userSeat.seatNumber == seat
            ? 'text-green-500'
            : checkSeat(seat, otherSeat)
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
