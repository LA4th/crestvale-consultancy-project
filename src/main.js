import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import TheHeader from './Components/TheHeader.vue';
import TheLandingPage from './Components/TheLandingPage.vue';
import TheVisionGoalPage from './Components/TheVisionGoalPage.vue';
import TheBookPage from './Components/TheBookPage.vue';
import TheFounderPage from './Components/TheFounderPage.vue';
import ButtonCall from './Components/ButtonCall.vue';

const app = createApp(App);
// REGISTER GLOBAL
app.component('TheHeader', TheHeader);
app.component('TheLandingPage', TheLandingPage);
app.component('TheVisionGoalPage', TheVisionGoalPage);
app.component('TheBookPage', TheBookPage)
app.component('TheFounderPage', TheFounderPage);
app.component('ButtonCall', ButtonCall);

app.mount('#app')
