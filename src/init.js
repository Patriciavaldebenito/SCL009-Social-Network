// Inicializando 
import { initRouter } from './route.js';
import { initiationFirebase } from './assets/js/firebase_init.js';
import { observer } from './assets/js/firebase_auth.js'

const init = () => {
  
  observer();
  initRouter();
  initiationFirebase();
 
};
window.addEventListener('load',init);