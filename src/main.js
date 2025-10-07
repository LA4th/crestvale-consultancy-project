import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './Router'

import TheHeader from './Components/TheHeader.vue';
import TheLandingPage from './Components/TheLandingPage.vue';
import TheVisionGoalPage from './Components/TheVisionGoalPage.vue';
import TheBookPage from './Components/TheBookPage.vue';
import TheFounderPage from './Components/TheFounderPage.vue';
import TheApplyPage from './Components/TheApplyPage.vue';
import TheCarousel from './Components/TheCarousel.vue';
import TheNotSurePage from './Components/TheNotSurePage.vue';
import TheCompetitionPage from './Components/TheCompetitionPage.vue';
import TheFooter from './Components/TheFooter.vue';
import ButtonCall from './Components/ButtonCall.vue';

const app = createApp(App);
// REGISTER GLOBAL
app.component('TheHeader', TheHeader);
app.component('TheLandingPage', TheLandingPage);
app.component('TheVisionGoalPage', TheVisionGoalPage);
app.component('TheBookPage', TheBookPage)
app.component('TheFounderPage', TheFounderPage);
app.component('TheApplyPage', TheApplyPage);
app.component('TheCarousel', TheCarousel);
app.component('TheNotSurePage', TheNotSurePage);
app.component('TheCompetitionPage', TheCompetitionPage);
app.component('TheFooter', TheFooter);
app.component('ButtonCall', ButtonCall);

app.use(Router)
app.mount('#app')
