import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import TheHeader from './Components/TheHeader.vue';
import ButtonCall from './Components/ButtonCall.vue';

const app = createApp(App);
// REGISTER GLOBAL
app.component('TheHeader', TheHeader);
app.component('ButtonCall', ButtonCall)

app.mount('#app')
