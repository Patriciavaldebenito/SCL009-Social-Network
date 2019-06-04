export const templateHome = () => {
  document.getElementById('root').innerHTML = `<div id="modal-signup" class="modal">
                                                  <div class="modal-content">
                                                     <h3>Template Home</h3>
                                                     <button class="btn-google" type="button" id="buttonGoogle">Acceso con Google</button>
                                                     <button id="btnRegistre" class="btn-create">Sign up</button>
                                                     <button id="btnLogin" class="btn-create">Sign up</button>
                                                  </div>
                                               </div>` 
}
// import { templateRegistre } from './templateAboutRegistre';
// import { templateLogin } from './templateProjectLogin';

// document.getElementById('btnRegistre').addEventListener('click', () => {
//   templateRegistre(); // ir alli
//   window.location.hash = '#/registre';
// })

// document.getElementById('btnLogin').addEventListener('click', () => {
//   templateLogin(); // ir alli
//   window.location.hash = '#/login';
// })