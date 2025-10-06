<template>
  <div class="max-w-full w-[900px] m-auto px-2 md:px-0">
    <TheHeader></TheHeader>
    <TheLandingPage></TheLandingPage>
    <TheVisionGoalPage></TheVisionGoalPage>
    <TheBookPage></TheBookPage>
    <TheFounderPage></TheFounderPage>
  </div>
  <div class="max-w-full bg-dark-blue">
    <div class="max-w-full w-[900px] m-auto px-2 bg-dark-blue md:px-0">
      <TheApplyPage></TheApplyPage>
    </div>
  </div>
  <div class="max-w-full w-[900px] m-auto px-2 md:px-0">
    <TheCarousel></TheCarousel>
    <TheNotSurePage></TheNotSurePage>
  </div>
</template>
<script setup>
import TheHeader from './Components/TheHeader.vue';
import TheLandingPage from './Components/TheLandingPage.vue';
import TheVisionGoalPage from './Components/TheVisionGoalPage.vue';
import TheBookPage from './Components/TheBookPage.vue';
import TheFounderPage from './Components/TheFounderPage.vue';
import TheApplyPage from './Components/TheApplyPage.vue';
import TheCarousel from './Components/TheCarousel.vue';
import TheNotSurePage from './Components/TheNotSurePage.vue';
</script>