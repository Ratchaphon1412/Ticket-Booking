<script setup lang="ts">
import { ref } from "vue";

interface Props {
  callback: Function;
}
const props = defineProps<Props>();
const { callback } = props;
function getInfor(e: any) {
  // this.$emit("zone", e.target.id);
  callback(e.target.id);
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
      stroke-linejoin: round;
      stroke-miterlimit: 2;
    "
  >
    <g id="B">
      <g>
        <rect
          id="BL"
          x="1550.04"
          y="1974.44"
          width="546.723"
          height="752.945"
          style="fill: #ff0001"
          v-on:click="getInfor"
        />
        <text
          id="BL"
          v-on:click="getInfor"
          x="1732.29px"
          y="2368.36px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 153.028px;
          "
        >
          BL
        </text>
      </g>
      <g id="BR">
        <rect
          id="BR"
          x="2123.29"
          y="1980.65"
          width="546.723"
          height="752.945"
          style="fill: #ff0001"
          v-on:click="getInfor"
        />
        <text
          id="BR"
          v-on:click="getInfor"
          serif:id="BR"
          x="2294.22px"
          y="2373.35px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 153.028px;
          "
        >
          BR
        </text>
      </g>
    </g>
    <g id="C">
      <g id="C1">
        <rect
          id="C1"
          v-on:click="getInfor"
          x="1204.18"
          y="1938.96"
          width="284.871"
          height="229.805"
          style="fill: #f40582"
        />
        <text
          id="C1"
          v-on:click="getInfor"
          x="1276.07px"
          y="2085.12px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 91.817px;
          "
        >
          C1
        </text>
      </g>
      <g id="C4">
        <rect
          id="C4"
          v-on:click="getInfor"
          x="2718.37"
          y="2199.59"
          width="284.871"
          height="229.805"
          style="fill: #f40582"
          stroke="black"
        />

        <text
          id="C4"
          v-on:click="getInfor"
          x="2805.31px"
          y="2344.37px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 91.817px;
          "
        >
          C4
        </text>
      </g>
      <g id="C3">
        <rect
          id="C3"
          v-on:click="getInfor"
          x="2718.56"
          y="1942.66"
          width="284.871"
          height="229.805"
          style="fill: #f40582"
        />
        <text
          id="C3"
          v-on:click="getInfor"
          x="2802.9px"
          y="2089.22px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 91.817px;
          "
        >
          C3
        </text>
      </g>
      <g id="C2">
        <rect
          id="C2"
          v-on:click="getInfor"
          x="1199.4"
          y="2194.92"
          width="284.871"
          height="229.805"
          style="fill: #f40582"
        />
        <text
          id="C2"
          v-on:click="getInfor"
          serif:id="C2"
          x="1280.59px"
          y="2336.7px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 91.817px;
          "
        >
          C2
        </text>
      </g>
    </g>
    <g id="A">
      <g id="AL">
        <rect
          id="AL"
          v-on:click="getInfor"
          x="1229.78"
          y="944.14"
          width="693.668"
          height="542.846"
          style="fill: #ffff01"
        />
        <rect
          id="AL"
          v-on:click="getInfor"
          x="1230.4"
          y="1448.57"
          width="501.099"
          height="431.397"
          style="fill: #ffff01"
        />
        <text
          id="AL"
          v-on:click="getInfor"
          x="1415.38px"
          y="1348.44px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 153.028px;
          "
        >
          AL
        </text>
      </g>
      <g id="AR">
        <rect
          id="AR"
          v-on:click="getInfor"
          x="2293.39"
          y="940.494"
          width="693.668"
          height="542.846"
          style="fill: #ffff01"
        />
        <rect
          id="AR"
          v-on:click="getInfor"
          x="2485.34"
          y="1444.92"
          width="501.099"
          height="431.397"
          style="fill: #ffff01"
        />
        <text
          id="AR"
          v-on:click="getInfor"
          x="2561.41px"
          y="1354.29px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 153.028px;
          "
        >
          AR
        </text>
      </g>
    </g>
    <g id="Stage">
      <rect x="1449.73" y="266.648" width="1303.45" height="594.359" />
      <rect x="2005.34" y="860.222" width="205.978" height="698.172" />
      <rect x="1790.78" y="1546" width="622.594" height="362.884" />
      <rect x="1589.84" y="2760.5" width="1026.54" height="104.294" />
      <text
        x="1909.12px"
        y="580.012px"
        style="
          font-family: 'Arial-BoldMT', 'Arial', sans-serif;
          font-weight: 700;
          font-size: 137.725px;
          fill: #fff;
        "
      >
        Stage
      </text>
    </g>
  </svg>
</template>

<style></style>
