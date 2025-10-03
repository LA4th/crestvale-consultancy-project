<template>
  <div class="w-full md:w-auto md:ml-auto">
    <button type="button" class="min-w-0 w-full font-roboto p-2 bg-dark-blue text-white rounded-md md:cursor-pointer md:shadow-md md:hover:bg-light-blue md:active:bg-dark-blue md:duration-300 md:ease-in-out animate-fade-in-end animate-once animate-duration-400 animate-delay-1 animate-normal">{{ buttonName }}</button>
  </div>
</template>
<script setup>
  defineProps({
    buttonName: String
  })
</script>