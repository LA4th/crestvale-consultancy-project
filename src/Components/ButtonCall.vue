<template>
  <div class="w-full md:w-auto md:ml-auto">
    <button type="button" :class="btnStyle">{{ btnName }}</button>
  </div>
</template>
<script setup>
  defineProps({
    btnName: {
      type: String,
      required: true
    },
    btnStyle: {
      type: String
    }
  });
</script>