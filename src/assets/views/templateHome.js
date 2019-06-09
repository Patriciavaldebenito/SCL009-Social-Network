import { loginGoogle } from "./../js/firebase_auth.js";
// import { templateMuro } from "./templateMuro.js";


// import { initRealTime } from './../js/firebase_auth.js';

export const templateHome = () => {

  document.getElementById("root").innerHTML = `
                                                  <div class="modal" id="modal-home" >
                                                  <div class="modal-content">
                                                     <h3>Bienvenidos</h3>
                                                      <form id="home-form">
                                                        <br>
                                                        <button class="btn-google" type="button" id="buttonGoogleHome">Acceso con Google</button>
                                                        <button class="btn-create" id="btnRegistre" >Registrar</button>
                                                        <button class="btn-create" id="btnLogin" >Entrar</button>
                                                     </form>
                                                  </div>
                                               </div>`;

  // initRealTime ();
  //<div id="app" class="title"></div>

  // 1. En home click en btn  registrar
  document.getElementById("btnRegistre").addEventListener("click", () => {

    window.location.hash = "#/registre";
  });

  // 2. En home click en btn google
  document.getElementById("buttonGoogleHome").addEventListener("click", () => {
    console.log("presionaste boton google en Home!");
    loginGoogle();
  });

  //3. En home click en btn login

  document.getElementById("btnLogin").addEventListener("click", () => {
    window.location.hash = "#/login";
  });

};