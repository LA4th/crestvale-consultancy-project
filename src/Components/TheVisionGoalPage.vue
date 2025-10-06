<template>
  <div class="max-w-full">
    <!-- VISION AND GOAL -->
    <div class="max-w-full flex flex-col gap-y-5 md:flex-row md:gap-x-5 transition-opacity duration-700 opacity-0" ref="element" :class="{'opacity-100 animate-fade-in-end animate-once animate-duration-400 animate-delay-1 animate-normal': isVisible}">
      <!-- CARD 1 -->
      <div class="max-w-full w-[358px] h-[251px] px-3 py-4 text-wrap rounded-xl flex flex-col gap-y-2 shadow-md md:h-full">
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
      <div class="max-w-full w-[358px] h-[251px] px-3 py-4 text-wrap rounded-xl flex flex-col gap-y-2 shadow-md md:h-full">
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
      <div class="max-w-full w-[358px] h-[251px] px-3 py-4 text-wrap rounded-xl flex flex-col gap-y-2 shadow-md md:h-full">
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
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useScrollTrigger } from '../Composables/useScrollTrigger';

const paragraph = ref("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae qui, quos at corporis voluptate aliquid unde aspernatur repellendus nostrum, recusandae sequi officia, provident quisquam. Odio quibusdam quas repellendus magnam totam.");
const { isVisible, element } = useScrollTrigger();
</script>