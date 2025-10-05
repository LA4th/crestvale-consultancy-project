<template>
  <div class="max-w-full min-h-screen flex flex-col items-center gap-y-5 md:flex-row md:gap-x-10">
    <!-- TEXT CONTAINER -->
    <div class="max-w-full flex flex-col md:w-2/4 opacity-0" ref="elementText" :class="{'opacity-100 animate-fade-in-start animate-once animate-duration-400 animate-delay-1 animate-normal':isVisibleText}">
      <span class="font-roboto text-[30px] text-slight-black font-bold text-center md:text-left">Our road to success</span>
      <div class="flex flex-col gap-y-3">
        <p class="indent-8 font-roboto text-gray text-[20px] text-justify md:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p class=" font-roboto text-gray text-[20px] text-justify md:text-left">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p class=" font-roboto text-gray text-[20px] text-justify md:text-left">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
    <!-- IMAGE CONTAINER -->
    <div class="max-w-full relative flex flex-col md:w-2/4 md:shadow-xl md:overflow-hidden md:rounded-b-xl">
      <img :src="ceoImage" alt="Ceo Picture" class="max-w-full max-h-full object-contain m-auto rounded-xl">
      <div class="bg-gray-white p-3 flex flex-col gap-y-2 md:absolute md:bottom-0 md:right-0 md:rounded-b-xl opacity-0" ref="elementQuote" :class="{'opacity-100 animate-fade-in-end animate-once animate-duration-400 animate-delay-1 animate-normal':isVisibleQuote}">
        <p class="font-roboto text-[18px] text-center text-gray">Even if your ambitions are huge, start slow, start small, build gradually, build smart.</p>
        <span class="font-roboto text-[18px] text-center text-slight-black font-bold">- Micaella Fresado</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useScrollTrigger } from '../Composables/useScrollTrigger';

import ceoImage from '../Assets/Ceo.jpeg';

const { isVisible: isVisibleText, element: elementText } = useScrollTrigger();
const { isVisible: isVisibleQuote, element: elementQuote } = useScrollTrigger();
</script>