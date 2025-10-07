<template>
  <div class="w-full md:w-auto md:ml-auto">
    <button @click="$router.push('/form')" type="button" :class="btnStyle">{{ btnName }}</button>
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