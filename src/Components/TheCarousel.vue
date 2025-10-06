<template>
  <div class="max-w-full min-h-screen flex justify-center items-center">
    <n-carousel autoplay class="w-full py-6 flex justify-center items-center rounded-xl shadow-md">
      <n-carousel-item v-for="(person, index) in carouselPersonInfo" :key="index" class="w-full px-5 flex flex-col items-center justify-center gap-y-5">
        <p class="font-roboto font-bold tracking-tight text-slight-black text-[20px] text-center">{{ person.statement }}</p>
        <div class="flex flex-col items-center gap-y-3">
          <img :src="person.personalImage" alt="" class="w-20 h-20 object-cover object-[center_15%] rounded-full">
          <div class="flex flex-col items-center gap-y-2">
            <div class="flex flex-col items-center">
              <span class="font-roboto text-[15px] text-slight-black">{{ person.name }}</span>
              <span class="font-roboto text-[15px] text-gray">{{ person.role }}</span>
            </div>
            <div class="flex flex-row items-center">
              <Icon 
                v-for="i in 5"
                :key="i"
                :icon="i <= person.stars ? 'mdi:star' : 'mdi:star-outline'"
                class="text-yellow-400 text-xl"
              />
            </div>
          </div>
        </div>
      </n-carousel-item>
    </n-carousel>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import { Icon } from "@iconify/vue";
  import { NCarousel, NCarouselItem } from 'naive-ui';

  import person1Image from '../Assets/People_1.jpeg';
  import person2Image from '../Assets/People_4.jpeg';

  const carouselPersonInfo = ref([
    {
      name: "Lorenzo Laforteza",
      role: "CEO, Founder",
      personalImage: person1Image,
      statement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      stars: 4
    },
    {
      name: "Micaella Laforteza",
      role: "CEO, Founder",
      personalImage: person2Image,
      statement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      stars: 5
    }
  ]);

</script>