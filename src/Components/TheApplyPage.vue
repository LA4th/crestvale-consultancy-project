<template>
  <div class="max-w-full flex flex-col gap-y-5 items-center justify-center">
    <div class="flex flex-col gap-y-3 opacity-0" ref="elementText" :class="{'opacity-100 animate-fade-in-start animate-once animate-duration-400 animate-delay-1 animate-normal':isVisibleText}">
      <span class="font-roboto text-center text-white text-[30px] font-bold tracking-tight">Let’s work together on your scalability</span>
      <span class="font-roboto text-center text-white text-[20px] tracking-tight">Start to day and apply for a free 45-min strategy call</span>
    </div>
    <div class="w-full md:w-auto opacity-0" ref="elementButton" :class="{'opacity-100 animate-fade-in-end animate-once animate-duration-400 animate-delay-1 animate-normal':isVisibleButton}">
      <ButtonCall :btnName="btnName" :btnStyle="btnStyle"></ButtonCall>
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import ButtonCall from './ButtonCall.vue';
  import { useScrollTrigger } from '../Composables/useScrollTrigger';

  const btnName = ref("Apply for a free strategy call");
  const btnStyle = ref("min-w-0 w-full font-roboto py-4 px-10 bg-light-blue text-white rounded-md md:cursor-pointer md:shadow-md md:hover:scale-110 md:active:scale-100 md:duration-300 md:ease-in-out");

  const { isVisible: isVisibleText, element: elementText } = useScrollTrigger();
  const { isVisible: isVisibleButton, element: elementButton} = useScrollTrigger();
</script>