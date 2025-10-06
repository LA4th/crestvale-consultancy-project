<template>
  <footer class="max-w-full py-10">
    <!-- SUBSCRIBE FOR NEWSLETTER -->
    <div class="flex flex-col gap-y-5">
      <div class="max-w-full flex flex-col items-center md:flex-row md:py-5 md:px-3 md:rounded-xl md:shadow-xl">
        <span class="font-roboto text-slight-black text-[18px] tracking-tight md:w-1/3">
          Subscribe to our news letter
        </span>
        <div class="w-full flex flex-col items-center gap-y-3 md:flex-row md:gap-x-3">
          <input type="email" name="" id="" placeholder="Enter email address" class="font-roboto w-full p-2 rounded-xl border-2 border-dark-blue md:w-full md:bg-white">
          <!-- BUTTON -->
          <button type="submit" class="p-3 w-full rounded-md font-roboto bg-dark-blue text-white md:w-1/3 md:p-2">Submit</button>
        </div>
      </div>
      <!-- COPYRIGHT -->
      <div class="flex flex-col gap-y-3 items-center">
        <!-- LOGO -->
        <div class="flex flex-row items-center justify-center">
          <div>
            <img :src="logo" alt="Crestvale Logo" class="w-10 h-10">
          </div>
          <span class="font-aldrich text-[18px] text-dark-blue tracking-tight">CresvaleConsultancy</span>
        </div>
        <!-- COPY RIGHT -->
        <div class="flex flex-col items-center justify-center gap-y-1.5">
          <p>&copy; <span>{{ year }}</span> Created by <strong>LA4TH</strong>. All rights reserved.</p>
          <a :href="githubLink"><Icon icon="skill-icons:github-dark" class="w-10 h-10" /></a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { ref } from 'vue';
import { Icon } from "@iconify/vue";

import logo from '../Assets/crestvale_logo_noBG.png';

const year = ref(2025);
const githubLink = "https://github.com/LA4th"
</script>