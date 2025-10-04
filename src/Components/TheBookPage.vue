<template>
  <div class="max-w-full min-h-screen flex flex-col-reverse items-center md:flex-row">
    <!-- TEXT CONTAINER -->
    <div class="flex flex-col items-center gap-y-5 opacity-0 md:w-2/4" ref="element" :class="{'animate-fade-in-start animate-once animate-duration-400 animate-delay-1 animate-normal':isVisible}">
      <!-- TEXT SECTION -->
      <div class="flex flex-col items-center gap-y-3">
        <p class="font-roboto text-slight-black text-[30px] font-bold text-center tracking-tight md:text-left">How <span class="text-dark-blue">CrestvaleConsultancy</span> can help you reach your potential and become a market leader</p>
        <p class="font-roboto text-gray text-[20px] text-center tracking-tight md:text-left">Lorem ipsum dolor sit amet, <span class="text-slight-black">consectetur adipiscing</span> elit, sed do <span class="text-slight-black">eiusmod tempor</span> incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <!-- BUTTON -->
      <div class="w-full md:w-auto md:mr-auto">
        <ButtonCall :btnName="btnName" :btnStyle="btnStyle"></ButtonCall>
      </div>
    </div>
    <!-- IMAGE DISPLAY CONTAINER -->
    <div class="relative min-h-full md:w-2/4">
      <div class="relative w-[400px] h-[400px] m-auto animate-spin-slow">
        <img :src="firstImage" alt="Profile Image 1" class="absolute top-[50%] left-[50%] w-30 h-30 rounded-full object-cover object-[center_10%] transform -translate-x-1/2 -translate-y-1/2">
        <img :src="secondImage" alt="Profile Image 2" class="absolute top-[25%] left-[65%] w-25 h-25 rounded-full object-cover object-[center_5%] transform -translate-x-1/2 -translate-y-1/2">
        <img :src="thirdImage" alt=" Profile Image 3" class="absolute top-[70%] left-[70%] w-20 h-20 rounded-full object-cover object-[center_15%] transform -translate-x-1/2 -translate-y-1/2">
        <img :src="fourthImage" alt="Profile Image 4" class="absolute top-[75%] left-[35%] w-15 h-15 rounded-full object-cover object-[center_10%] transform -translate-x-1/2 -translate-y-1/2">
        <img :src="fifthImage" alt=" Profile Image 5" class="absolute top-[40%] left-[25%] w-13 h-13 rounded-full object-cover object-[center_10%] transform -translate-x-1/2 -translate-y-1/2">
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useScrollTrigger } from '../Composables/useScrollTrigger';

import firstImage from '../Assets/People_Landing.jpeg';
import secondImage from '../Assets/People.jpeg';
import thirdImage from '../Assets/People_1.jpeg';
import fourthImage from '../Assets/People_2.jpeg';
import fifthImage from '../Assets/People_3.jpeg';

const btnName = ref("Book a 15 minute call");
const btnStyle = ref("min-w-0 w-full font-roboto py-4 px-10 bg-dark-blue text-white rounded-md md:cursor-pointer md:shadow-md md:hover:bg-light-blue md:active:bg-dark-blue md:duration-300 md:ease-in-out");
const { isVisible, element } = useScrollTrigger();
</script>