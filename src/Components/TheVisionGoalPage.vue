<template>
  <div class="max-w-full min-h-screen flex flex-col items-center mt-10">
    <!-- VISION AND GOAL -->
    <div class="max-w-full flex flex-col gap-y-5 md:flex-row md:gap-x-5 animate-fade-in-end animate-once animate-duration-400 animate-delay-1 animate-normal">
      <!-- CARD 1 -->
      <div class="bg-gray-white max-w-full w-[358px] h-[251px] px-3 py-4 text-wrap rounded-xl flex flex-col gap-y-2 md:h-full">
        <!-- HEADER CARD 1 -->
        <div class="flex flex-row items-center gap-x-2">
          <div class="w-14 h-14 flex items-center justify-center rounded-full bg-dark-blue">
            <i class="fa-solid fa-eye text-white text-4xl"></i>
          </div>
          <span class="font-roboto text-[18px] tracking-tight text-slight-black font-bold">In vision your goals</span>
        </div>
        <p class="text-gray indent-8 text-[18px] line-clamp-5">{{ paragraph }}</p> 
      </div>
      <!-- CARD 2 -->
      <div class="bg-gray-white max-w-full w-[358px] h-[251px] px-3 py-4 text-wrap rounded-xl flex flex-col gap-y-2 md:h-full">
        <!-- HEADER CARD 2 -->
        <div class="flex flex-row items-center gap-x-2">
          <div class="w-14 h-14 flex items-center justify-center rounded-full bg-dark-blue">
            <i class="fa-solid fa-rocket text-white text-4xl"></i>
          </div>
          <span class="font-roboto text-[18px] tracking-tight text-slight-black font-bold">Launch your business</span>
        </div>
        <p class="text-gray indent-8 text-[18px] line-clamp-5">{{ paragraph }}</p> 
      </div>
      <!-- CARD 3 -->
      <div class="bg-gray-white max-w-full w-[358px] h-[251px] px-3 py-4 text-wrap rounded-xl flex flex-col gap-y-2 md:h-full">
        <!-- HEADER CARD 3 -->
        <div class="flex flex-row items-center gap-x-2">
          <div class="w-14 h-14 flex items-center justify-center rounded-full bg-dark-blue">
            <i class="fa-solid fa-trophy text-white text-4xl"></i>
          </div>
          <span class="font-roboto text-[18px] tracking-tight text-slight-black font-bold">Become a leader</span>
        </div>
        <p class="text-gray indent-8 text-[18px] line-clamp-5">{{ paragraph }}</p>
      </div>
    </div>
    <!-- APPLY SECTION -->
    <div class="mt-10 max-w-full flex flex-col-reverse items-center md:flex-row">
      <!-- TEXT CONTAINER -->
      <div class="flex flex-col items-center gap-y-5 animate-fade-in-start animate-once animate-duration-400 animate-delay-1 animate-normal">
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
      <div class="relative min-h-full">
        <div class="relative w-[400px] h-[400px] m-auto animate-spin-slow">
          <img :src="firstImage" alt="Profile Image 1" class="absolute top-[50%] left-[50%] w-30 h-30 rounded-full object-cover object-[center_10%] transform -translate-x-1/2 -translate-y-1/2">
          <img :src="secondImage" alt="Profile Image 2" class="absolute top-[25%] left-[65%] w-25 h-25 rounded-full object-cover object-[center_5%] transform -translate-x-1/2 -translate-y-1/2">
          <img :src="thirdImage" alt=" Profile Image 3" class="absolute top-[70%] left-[70%] w-20 h-20 rounded-full object-cover object-[center_15%] transform -translate-x-1/2 -translate-y-1/2">
          <img :src="fourthImage" alt="Profile Image 4" class="absolute top-[75%] left-[35%] w-15 h-15 rounded-full object-cover object-[center_10%] transform -translate-x-1/2 -translate-y-1/2">
          <img :src="fifthImage" alt=" Profile Image 5" class="absolute top-[40%] left-[25%] w-13 h-13 rounded-full object-cover object-[center_10%] transform -translate-x-1/2 -translate-y-1/2">
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

import firstImage from '../Assets/People_Landing.jpeg';
import secondImage from '../Assets/People.jpeg';
import thirdImage from '../Assets/People_1.jpeg';
import fourthImage from '../Assets/People_2.jpeg';
import fifthImage from '../Assets/People_3.jpeg';

const btnName = ref("Book a 15 minute call");
const btnStyle = ref("min-w-0 w-full font-roboto py-4 px-10 bg-dark-blue text-white rounded-md md:cursor-pointer md:shadow-md md:hover:bg-light-blue md:active:bg-dark-blue md:duration-300 md:ease-in-out");
const paragraph = ref("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae qui, quos at corporis voluptate aliquid unde aspernatur repellendus nostrum, recusandae sequi officia, provident quisquam. Odio quibusdam quas repellendus magnam totam.");

</script>