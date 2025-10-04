<template>
  <div class="min-h-screen max-w-full flex flex-col items-center gap-y-5 md:flex-row md:gap-x-5">
    <!-- DIPLAY TEXT -->
    <div class="flex flex-col gap-y-5 md:gap-y-15 md:w-2/4">
      <!-- TEXT CONTAINER -->
      <div class="flex flex-col gap-y-3 animate-fade-in-start animate-once animate-duration-400 animate-delay-1 animate-normal">
        <span class="font-roboto font-bold text-slight-black text-[40px] text-center tracking-tight text-base/12 md:text-left">We help you <span class="text-dark-blue">evolve</span> and <span class="text-dark-blue">escape the competition</span></span>
        <span class="font-roboto text-[20px] text-gray text-center tracking-tight md:text-left">Get up to <span class="font-bold text-slight-black">15 new clients</span> each and every month</span>
      </div>
      <!-- BUTTON CONTAINER -->
      <div class="flex flex-col items-center animate-fade-in-start animate-once animate-duration-400 animate-delay-1 animate-normal md:mr-auto">
        <ButtonCall :btnName="btnName" :btnStyle="btnStyle"></ButtonCall>
        <span class="font-roboto text-gray text-center tracking-tight">it's free :)</span>
      </div>
    </div>
    <!-- DISPLAY IMAGE -->
    <div class="md:w-2/4 md:shadow-xl md:overflow-hidden md:rounded-xl">
      <img :src="imageDisplay" alt="Person Display" class="max-w-full max-h-full object-contain m-auto rounded-xl">
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

import imageDisplay from '../Assets/People_Landing.jpeg';

const btnName = ref("Book a strategy call");
const btnStyle = ref("min-w-0 w-full font-roboto py-4 px-10 bg-dark-blue text-white rounded-md md:cursor-pointer md:shadow-md md:hover:bg-light-blue md:active:bg-dark-blue md:duration-300 md:ease-in-out");
</script>