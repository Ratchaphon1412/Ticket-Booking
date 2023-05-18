<script setup lang="ts">
function getInfor(e: any) {
  console.log(e.target.id);
  console.log(e.target.getAttribute("price"));
}
</script>

<template>
  <div class="">
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
      <g id="Stage">
        <rect
          x="726.13"
          y="328.354"
          width="2751.71"
          height="564.653"
          style="fill: #170000"
        />
        <rect x="1823.5" y="888.126" width="574.145" height="1162.69" />
      </g>
      <rect
        id="A1"
        x="1126.18"
        y="943.68"
        width="641.092"
        height="1098.07"
        style="fill: #96f195"
        v-on:click="getInfor"
      />
      <rect
        id="CL"
        x="433.664"
        y="943.667"
        width="641.092"
        height="1098.07"
        style="fill: #e7757f"
        v-on:click="getInfor"
      />
      <rect
        id="A2"
        x="2452.82"
        y="950.235"
        width="641.092"
        height="1098.07"
        style="fill: #96f195"
        v-on:click="getInfor"
      />
      <rect
        id="CR"
        x="3165.08"
        y="957.486"
        width="641.092"
        height="1098.07"
        style="fill: #e7757f"
        v-on:click="getInfor"
      />
      <rect
        id="DL"
        x="440.661"
        y="2113.46"
        width="941.24"
        height="486.306"
        style="fill: #c475e7"
        v-on:click="getInfor"
      />
      <rect
        id="DR"
        x="2857.83"
        y="2122.32"
        width="941.24"
        height="486.306"
        style="fill: #c475e7"
        v-on:click="getInfor"
      />
      <rect
        id="B1"
        x="1433.95"
        y="2124.76"
        width="618.665"
        height="472.782"
        style="fill: #7589e7"
        v-on:click="getInfor"
      />
      <rect
        id="B2"
        x="2145.39"
        y="2132.74"
        width="618.665"
        height="472.782"
        style="fill: #7589e7"
        v-on:click="getInfor"
      />
      <rect
        x="453.78"
        y="2689.11"
        width="572.942"
        height="207.97"
        style="fill: #9b9eac"
      />
      <rect
        x="3228.84"
        y="2684.49"
        width="572.942"
        height="207.97"
        style="fill: #9b9eac"
      />
      <rect
        x="2547.82"
        y="2688.96"
        width="572.942"
        height="207.97"
        style="fill: #9b9eac"
      />
      <rect
        x="1871.04"
        y="2689.53"
        width="572.942"
        height="207.97"
        style="fill: #9b9eac"
      />
      <rect
        x="1158.21"
        y="2689.29"
        width="572.942"
        height="207.97"
        style="fill: #9b9eac"
      />
    </svg>
  </div>
</template>

<style></style>
