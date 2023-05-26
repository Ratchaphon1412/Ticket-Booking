<script setup lang="ts">
interface Props {
  callback: Function;
}
const props = defineProps<Props>();
const { callback } = props;
const idMap = ref("");
const color = "green";
function getInfor(e: any) {
  // this.$emit("zone", e.target.id);
  callback(e.target.id);
  idMap.value = e.target.id;
  // e.target.style.stroke = "#00ff00";
}
</script>

<template>
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 4267 3200"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
    xmlns:serif="http://www.serif.com/"
    style="
      fill-rule: evenodd;
      clip-rule: evenodd;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-miterlimit: 1.5;
    "
  >
    <g id="A">
      <g id="AL" :stroke="idMap == 'AL' ? color : ''" stroke-width="20">
        <rect
          id="AL"
          x="1437"
          y="1447.04"
          width="696.64"
          height="960.083"
          style="fill: #ff0001"
          v-on:click="getInfor"
        />
        <g transform="matrix(0.999299,0,0,1,-1.39459,0)">
          <text
            id="AL"
            x="1671.79px"
            y="1949.32px"
            style="
              font-family: 'Arial-BoldMT', 'Arial', sans-serif;
              font-weight: 700;
              font-size: 195.126px;
            "
            v-on:click="getInfor"
          >
            AL
          </text>
        </g>
      </g>
      <g id="AR" :stroke="idMap == 'AR' ? color : ''" stroke-width="20">
        <rect
          id="AR"
          x="2167.44"
          y="1454.95"
          width="696.64"
          height="960.083"
          style="fill: #ff0001"
          v-on:click="getInfor"
        />
        <g id="AR" serif:id="AR" transform="matrix(0.999299,0,0,1,-0.892807,0)">
          <text
            id="AR"
            x="2387.8px"
            y="1955.69px"
            style="
              font-family: 'Arial-BoldMT', 'Arial', sans-serif;
              font-weight: 700;
              font-size: 195.126px;
            "
            v-on:click="getInfor"
          >
            AR
          </text>
        </g>
      </g>
    </g>
    <rect
      x="1391.81"
      y="1014.14"
      width="1499.52"
      height="376.187"
      style="stroke: #0b0247; stroke-width: 4.17px"
    />
    <g transform="matrix(0.999299,0,0,1,-0.251206,0)">
      <text
        x="2010.39px"
        y="1211.11px"
        style="
          font-family: 'Arial-BoldMT', 'Arial', sans-serif;
          font-weight: 700;
          font-size: 106.259px;
          fill: #fff8f8;
        "
      >
        Stage
      </text>
    </g>
  </svg>
</template>

<style scoped>
.noshow {
  fill: none;
  stroke: black;
  stroke-width: 1;
  pointer-events: visible;
}
</style>
