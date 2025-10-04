<template>
  <div class="max-w-full w-[900px] m-auto px-2 md:px-0">
    <TheHeader></TheHeader>
    <TheLandingPage></TheLandingPage>
    <TheVisionGoalPage></TheVisionGoalPage>
    <TheBookPage></TheBookPage>
    <TheFounderPage></TheFounderPage>
  </div>
</template>
<script setup>
import TheHeader from './Components/TheHeader.vue';
import TheLandingPage from './Components/TheLandingPage.vue';
import TheVisionGoalPage from './Components/TheVisionGoalPage.vue';
import TheBookPage from './Components/TheBookPage.vue';
import TheFounderPage from './Components/TheFounderPage.vue';
</script>