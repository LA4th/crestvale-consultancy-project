<template>
  <n-message-provider>
    <router-view></router-view>
  </n-message-provider>
</template>
<script setup>
  import { RouterView } from 'vue-router';
  import { NMessageProvider } from 'naive-ui'
</script>