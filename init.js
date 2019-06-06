// Inicializando 
import { initRouter } from './route.js';
import { initiationFirebase } from './assets/js/firebase_init.js';

const init = () => {
  initRouter();
  initiationFirebase();
  
};
window.addEventListener('load',init);