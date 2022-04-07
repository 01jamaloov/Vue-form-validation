import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'

createApp(App).mount('#app')

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  btn.classList.add("clicked");
  setTimeout(() => {
    btn.classList.remove("clicked");
  }, 4000);
});
