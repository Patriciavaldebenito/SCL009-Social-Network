import { templateRegistre } from './templateAboutRegistre.js';

export const templateHome = () => {
  document.getElementById('root').innerHTML = `<div id="modal-home" class="modal">
                                                  <div class="modal-content">
                                                     <h3>Template Home</h3>
                                                     <button class="btn-google" type="button" id="buttonGoogle">Acceso con Google</button>
                                                     <button id="btnRegistre" class="btn-create">Sign up</button>
                                                     <button id="btnLogin" class="btn-create">Sign up</button>
                                                  </div>
                                               </div>` 
   
   
  document.getElementById('btnRegistre').addEventListener('click', () => {
   templateRegistre(); 
   window.location.hash = '#/registre';
 })
      
}

// import { templateLogin } from './templateProjectLogin';
// document.getElementById('btnLogin').addEventListener('click', () => {
//   templateLogin(); // ir alli
//   window.location.hash = '#/login';
// })