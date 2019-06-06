// Inicializando 
import { initRouter } from './route.js';
import { initiationFirebase } from './assets/js/firebase_init.js';
import { initRealTime } from './assets/js/firebase_auth.js';
const init = () => {
  initRouter();
  initiationFirebase();
  initRealTime();
};
window.addEventListener('load',init);