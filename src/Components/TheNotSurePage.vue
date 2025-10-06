<template>
  <div class="max-w-full min-h-screen">
    <div class="flex flex-col gap-y-5 items-center md:flex-row md:gap-x-5 md:py-10">
      <div class="flex flex-col items-center gap-y-5 md:w-2/4">
        <!-- PARAGRAPH -->
        <div class="flex flex-col items-center gap-y-3">
          <span class="font-roboto text-[30px] font-bold text-slight-black text-center tracking-tight md:text-left">
            Not sure yet, book a free strategy call
          </span>
          <p class="font-roboto text-[20px] text-gray text-center tracking-tight md:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo laboriosam asperiores optio ab blanditiis cupiditate! Quo asperiores corrupti vel natus, voluptatem autem illo excepturi quos iste provident suscipit delectus quod.
          </p>
        </div>
        <!-- BUTTON -->
        <div class="w-full md:w-auto md:mr-auto">
          <ButtonCall :btnName="btnName" :btnStyle="btnStyle"></ButtonCall>
        </div>
      </div>
      <!-- IMAGE -->
      <div class="bg-gray-white p-5 flex flex-col items-center justify-center rounded-xl gap-y-5 md:w-2/4 md:shadow-md">
        <img :src="listInfo[0].personImage" alt="Person Image" class="w-30 h-30 rounded-full object-cover object-[center_10%]">
        <!-- LIST -->
        <ul class="flex flex-col gap-y-10">
          <li v-for="(info, index) in listInfo[0].listInfo" :key="index" class="flex flex-row items-start gap-x-3">
            <span class="flex justify-between items-center">
              <Icon icon="mdi:check" class="text-white w-10 h-10 rounded-full bg-dark-blue p-1" />
            </span>
            <span class="font-roboto text-gray font-bold text-[20px] tracking-normal">{{ info }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { Icon } from "@iconify/vue";

import ButtonCall from './ButtonCall.vue';
import personImage from '../Assets/People_Landing.jpeg';

const btnName = ref("Apply for a free strategy call");
const btnStyle = ref("min-w-0 w-full font-roboto py-4 px-10 bg-dark-blue text-white rounded-md md:cursor-pointer md:shadow-md md:hover:bg-light-blue md:active:bg-dark-blue md:duration-300 md:ease-in-out");
const listInfo = ref([
  {
    personImage: personImage,
    listInfo: ["45 Minute strategy call.", "Become a market leader.", "Learn how to build relatioship with your client.", "Transcend yourself and business to a new dimension."]
  }
])
</script>