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
      stroke-linejoin: round;
      stroke-miterlimit: 2;
    "
  >
    <g id="B">
      <g id="BL" :stroke="idMap == 'BL' ? color : ''" stroke-width="20">
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
          x="1732.29px"
          y="2368.36px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 153.028px;
          "
          v-on:click="getInfor"
        >
          BL
        </text>
      </g>
      <g id="BR" :stroke="idMap == 'BR' ? color : ''" stroke-width="20">
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
          serif:id="BR"
          x="2294.22px"
          y="2373.35px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 153.028px;
          "
          v-on:click="getInfor"
        >
          BR
        </text>
      </g>
    </g>
    <g id="C">
      <g id="C1" :stroke="idMap == 'C1' ? color : ''" stroke-width="20">
        <rect
          id="C1"
          x="1204.18"
          y="1938.96"
          width="284.871"
          height="229.805"
          style="fill: #f40582"
          v-on:click="getInfor"
        />
        <text
          id="C1"
          x="1276.07px"
          y="2085.12px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 91.817px;
          "
          v-on:click="getInfor"
        >
          C1
        </text>
      </g>
      <g id="C4" :stroke="idMap == 'C4' ? color : ''" stroke-width="20">
        <rect
          id="C4"
          x="2718.37"
          y="2199.59"
          width="284.871"
          height="229.805"
          style="fill: #f40582"
          v-on:click="getInfor"
        />
        <text
          id="C4"
          x="2805.31px"
          y="2344.37px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 91.817px;
          "
          v-on:click="getInfor"
        >
          C4
        </text>
      </g>
      <g id="C3" :stroke="idMap == 'C3' ? color : ''" stroke-width="20">
        <rect
          id="C3"
          x="2718.56"
          y="1942.66"
          width="284.871"
          height="229.805"
          style="fill: #f40582"
          v-on:click="getInfor"
        />
        <text
          id="C3"
          x="2802.9px"
          y="2089.22px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 91.817px;
          "
          v-on:click="getInfor"
        >
          C3
        </text>
      </g>
      <g id="C2" :stroke="idMap == 'C2' ? color : ''" stroke-width="20">
        <rect
          id="C2"
          x="1199.4"
          y="2194.92"
          width="284.871"
          height="229.805"
          style="fill: #f40582"
          v-on:click="getInfor"
        />
        <text
          id="C2"
          serif:id="C2"
          x="1280.59px"
          y="2336.7px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 91.817px;
          "
          v-on:click="getInfor"
        >
          C2
        </text>
      </g>
    </g>
    <g id="A">
      <g id="AL" :stroke="idMap == 'AL' ? color : ''" stroke-width="20">
        <rect
          id="AL"
          x="1229.78"
          y="944.14"
          width="693.668"
          height="542.846"
          style="fill: #ffff01"
          v-on:click="getInfor"
        />
        <rect
          id="AL"
          x="1230.4"
          y="1448.57"
          width="501.099"
          height="431.397"
          style="fill: #ffff01"
          v-on:click="getInfor"
        />
        <text
          id="AL"
          x="1415.38px"
          y="1348.44px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 153.028px;
          "
          v-on:click="getInfor"
        >
          AL
        </text>
      </g>
      <g id="AR" :stroke="idMap == 'AR' ? color : ''" stroke-width="20">
        <rect
          id="AR"
          x="2293.39"
          y="940.494"
          width="693.668"
          height="542.846"
          style="fill: #ffff01"
          v-on:click="getInfor"
        />
        <rect
          id="AR"
          x="2485.34"
          y="1444.92"
          width="501.099"
          height="431.397"
          style="fill: #ffff01"
          v-on:click="getInfor"
        />
        <text
          id="AR"
          x="2561.41px"
          y="1354.29px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 153.028px;
          "
          v-on:click="getInfor"
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
    <g id="DL">
      <g id="DL1" :stroke="idMap == 'DL1' ? color : ''" stroke-width="5">
        <rect
          id="DL1"
          serif:id="DL1"
          x="847.758"
          y="946.402"
          width="277.789"
          height="244.63"
          style="fill: #0b0247"
          v-on:click="getInfor"
        />
        <text
          id="DL1"
          x="936.73px"
          y="1081.5px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 50px;
            fill: #fff8f8;
          "
          v-on:click="getInfor"
        >
          DL1
        </text>
      </g>
      <g id="DL2" :stroke="idMap == 'DL2' ? color : ''" stroke-width="5">
        <rect
          id="DL2"
          serif:id="DL2"
          x="837.374"
          y="1254.1"
          width="277.789"
          height="244.63"
          style="fill: #0b0247"
          v-on:click="getInfor"
        />
        <text
          id="DL2"
          x="928.026px"
          y="1396.78px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 50px;
            fill: #fff8f8;
          "
          v-on:click="getInfor"
        >
          DL2
        </text>
      </g>
      <g id="DL3" :stroke="idMap == 'DL3' ? color : ''" stroke-width="5">
        <rect
          id="DL3"
          serif:id="DL3"
          x="829.703"
          y="1572.21"
          width="277.789"
          height="244.63"
          style="fill: #0b0247"
          v-on:click="getInfor"
        />
        <text
          id="DL3"
          x="921.183px"
          y="1709.43px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 50px;
            fill: #fff8f8;
          "
          v-on:click="getInfor"
        >
          DL3
        </text>
      </g>
      <g id="DL4" :stroke="idMap == 'DL4' ? color : ''" stroke-width="5">
        <rect
          id="DL4"
          serif:id="DL4"
          x="821.158"
          y="1903.18"
          width="277.789"
          height="244.63"
          style="fill: #0b0247"
          v-on:click="getInfor"
        />
        <text
          id="DL4"
          x="911.835px"
          y="2047.88px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 50px;
            fill: #fff8f8;
          "
          v-on:click="getInfor"
        >
          DL4
        </text>
      </g>
      <g id="DL5" :stroke="idMap == 'DL5' ? color : ''" stroke-width="5">
        <rect
          id="DL5"
          serif:id="DL5"
          x="816.583"
          y="2241.65"
          width="277.789"
          height="244.63"
          style="fill: #0b0247"
          v-on:click="getInfor"
        />
        <text
          id="DL5"
          x="909.602px"
          y="2380.9px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 50px;
            fill: #fff8f8;
          "
          v-on:click="getInfor"
        >
          DL5
        </text>
      </g>
      <g id="DL6" :stroke="idMap == 'DL6' ? color : ''" stroke-width="5">
        <rect
          id="DL6"
          serif:id="DL6"
          x="914.979"
          y="2546.16"
          width="205.31"
          height="177.437"
          style="fill: #0b0247"
          v-on:click="getInfor"
        />
        <text
          id="DL6"
          x="973.024px"
          y="2645.87px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 50px;
            fill: #fff8f8;
          "
          v-on:click="getInfor"
        >
          DL6
        </text>
      </g>
      <g id="DL7" :stroke="idMap == 'DL7' ? color : ''" stroke-width="5">
        <rect
          id="DL7"
          serif:id="DL7"
          x="1188.21"
          y="2551.12"
          width="277.789"
          height="244.63"
          style="fill: #0b0247"
          v-on:click="getInfor"
        />
        <text
          id="DL7"
          x="1279.98px"
          y="2686.41px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 50px;
            fill: #fff8f8;
          "
          v-on:click="getInfor"
        >
          DL7
        </text>
      </g>
    </g>
    <g id="DR">
      <g id="DR1" :stroke="idMap == 'DR1' ? color : ''" stroke-width="5">
        <rect
          id="DR1"
          serif:id="DR1"
          x="3057.14"
          y="957.252"
          width="277.789"
          height="244.63"
          style="fill: #0b0247"
          v-on:click="getInfor"
        />
        <text
          id="DR1"
          x="3144.86px"
          y="1100.33px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 50px;
            fill: #fff8f8;
          "
          v-on:click="getInfor"
        >
          DR1
        </text>
      </g>
      <g id="DR2" :stroke="idMap == 'DR2' ? color : ''" stroke-width="5">
        <rect
          id="DR2"
          serif:id="DR2"
          x="3067.53"
          y="1264.95"
          width="277.789"
          height="244.63"
          style="fill: #0b0247"
          v-on:click="getInfor"
        />
        <text
          id="DR2"
          serif:id="DR2"
          x="3162.2px"
          y="1399.87px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 50px;
            fill: #fff8f8;
          "
          v-on:click="getInfor"
        >
          DR2
        </text>
      </g>
      <g id="DR3" :stroke="idMap == 'DR3' ? color : ''" stroke-width="5">
        <rect
          id="DR3"
          serif:id="DR3"
          x="3075.2"
          y="1583.06"
          width="277.789"
          height="244.63"
          style="fill: #0b0247"
          v-on:click="getInfor"
        />
        <text
          id="DR3"
          serif:id="DR3"
          x="3162.14px"
          y="1716.66px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 50px;
            fill: #fff8f8;
          "
          v-on:click="getInfor"
        >
          DR3
        </text>
      </g>
      <g id="DR4" :stroke="idMap == 'DR4' ? color : ''" stroke-width="5">
        <rect
          id="DR4"
          serif:id="DR4"
          x="3083.74"
          y="1914.03"
          width="277.789"
          height="244.63"
          style="fill: #0b0247"
          v-on:click="getInfor"
        />
        <text
          id="DR4"
          x="3176.33px"
          y="2056.72px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 50px;
            fill: #fff8f8;
          "
          v-on:click="getInfor"
        >
          DR4
        </text>
      </g>
      <g id="DR5" :stroke="idMap == 'DR5' ? color : ''" stroke-width="5">
        <rect
          id="DR5"
          serif:id="DR5"
          x="3087.79"
          y="2249.66"
          width="277.789"
          height="244.63"
          style="fill: #0b0247"
          v-on:click="getInfor"
        />
        <text
          id="DR5"
          x="3179.24px"
          y="2388.54px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 50px;
            fill: #fff8f8;
          "
          v-on:click="getInfor"
        >
          DR5
        </text>
      </g>
      <g id="DR6" :stroke="idMap == 'DR6' ? color : ''" stroke-width="5">
        <rect
          id="DR6"
          serif:id="DR6"
          x="3062.4"
          y="2557.01"
          width="205.31"
          height="177.437"
          style="fill: #0b0247"
          v-on:click="getInfor"
        />
        <text
          id="DR6"
          x="3122.91px"
          y="2662.19px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 50px;
            fill: #fff8f8;
          "
          v-on:click="getInfor"
        >
          DR6
        </text>
      </g>
      <g id="DR7" :stroke="idMap == 'DR7' ? color : ''" stroke-width="5">
        <rect
          id="DR7"
          serif:id="DR7"
          x="2716.69"
          y="2561.97"
          width="277.789"
          height="244.63"
          style="fill: #0b0247"
          v-on:click="getInfor"
        />
        <text
          id="DR7"
          x="2807.84px"
          y="2696.03px"
          style="
            font-family: 'Arial-BoldMT', 'Arial', sans-serif;
            font-weight: 700;
            font-size: 50px;
            fill: #fff8f8;
          "
          v-on:click="getInfor"
        >
          DR7
        </text>
      </g>
    </g>
  </svg>
</template>

<style></style>
