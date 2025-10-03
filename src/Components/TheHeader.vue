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
    <ButtonCall buttonName="Free 45-minute strategy call"></ButtonCall>
  </div>
</template>
<script setup>
import { ref } from 'vue'

import logo from '../Assets/crestvale_logo_noBG.png'
import ButtonCall from './ButtonCall.vue';

const logoName = ref("CresvaleConsultancy");
</script>