<template>
  <div class="flex flex-col items-center gap-y-3 transition-all duration-300 ease-in-out md:flex-row md:gap-x-3">
    <!-- LOGO CONTAINER -->
    <div class="flex flex-row items-center animate-fade-in-start animate-once animate-duration-400 animate-delay-1 animate-normal">
      <!-- LOGO -->
      <img :src="logo" alt="Crestvale Logo" class="w-16 h-16 object-contain">
      <!-- TEXT LOGO -->
      <span class="font-aldrich text-[20px] font-bold text-dark-blue">{{ logoName }}</span>
    </div>
    <!-- BUTTON CALL -->
    <ButtonCall :btnName="btnName" :btnStyle="btnStyle"></ButtonCall>
  </div>
</template>
<script setup>
import { ref } from 'vue'

import logo from '../Assets/crestvale_logo_noBG.png'
import ButtonCall from './ButtonCall.vue';

const logoName = ref("CresvaleConsultancy");
const btnName = ref("Free 45-minute strategy call");
const btnStyle = ref("min-w-0 w-full font-roboto p-2 bg-dark-blue text-white rounded-md md:cursor-pointer md:shadow-md md:hover:bg-light-blue md:active:bg-dark-blue md:duration-300 md:ease-in-out animate-fade-in-end animate-once animate-duration-400 animate-delay-1 animate-normal")
</script>