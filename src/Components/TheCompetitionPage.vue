<template>
  <div class="max-w-full min-h-screen flex justify-center items-center">
    <div class="flex flex-col gap-y-5">
      <!-- HEADER CONTAINER -->
      <div class="flex flex-col items-center gap-y-3 md:items-start md:w-2/4">
        <span class="font-roboto text-slight-black text-[30px] font-bold tracking-tight text-center md:text-left">Always be one step in front of your competition</span>
        <p class="font-roboto text-gray text-[20px] tracking-tight text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto in quibusdam quo consequatur atque vel vitae totam temporibus! Enim, dolorum. Saepe est fugit nihil explicabo quis adipisci vero eveniet! Tenetur!
        </p>
      </div>
      <!-- TEXT AND IMAGE CONTAINER -->
      <div class="w-full flex flex-col gap-y-5 items-center justify-center md:flex-row md:gap-x-5 md:py-10">
        <!-- TEXT -->
        <div class="flex flex-col gap-y-5 md:w-2/4">
          <div v-for="(info, index) in textInfo" :key="index" class="flex flex-col gap-y-3 p-5 rounded-xl shadow-md">
            <span class="font-roboto text-[20px] text-center text-slight-black font-bold md:text-left">{{ info.title }}</span>
            <p class="font-roboto text-[20px] text-center text-gray md:text-left">{{ info.paragraph }}</p>
          </div>
        </div>
        <!-- IMAGE -->
        <div class="md:w-2/4">
          <img :src="personImage" alt="Person Display" class="max-w-full rounded-xl md:shadow-md">
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import personImage from '../Assets/People_Landing.jpeg';

  const textInfo = ref([
    {
      title: "Use our proven strategies to get on top of your goals",
      paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto in quibusdam quo consequatur atque vel vitae totam temporibus! Enim, dolorum."
    },
    {
      title: "Work on your business plan and expand",
      paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto in quibusdam quo consequatur atque vel vitae totam temporibus! Enim, dolorum."
    },
    {
      title: "Become a market!",
      paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto in quibusdam quo consequatur atque vel vitae totam temporibus! Enim, dolorum."
    }
  ])

</script>