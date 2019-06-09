import {
  loginGoogle
} from "./../js/firebase_auth.js";
// import { templateMuro } from "./templateMuro.js";


// import { initRealTime } from './../js/firebase_auth.js';

export const templateHome = () => {

  document.getElementById("root").innerHTML = `
                                                  <div class="modal" id="modal-home" >
                                                    <div class="modal-content">
                                                      <form id="home-form">
                                                        <br>
                                                        <div class="row"
                                                          <div class="col input-field">
                                                            <h3>Bienvenidos</h3>
                                                          </div>
                                                        </div>
                                                        <div class="row"
                                                          <div class="col input-field">
                                                            <button class="btn-create" id="btnRegistreHome" >Registrar</button>
                                                          </div>
                                                        </div>
                                                        <div class="row"
                                                          <div class="col input-field">
                                                            <button class="btn-create" id="btnLoginHome" >Entrar</button>
                                                          </div>
                                                        </div>
                                                        <div class="row"
                                                          <div class="col input-field">
                                                            <button class="btn-google" type="button" id="buttonGoogleHome">Google</button>
                                                          </div>
                                                        </div>     
                                                      </form>
                                                    </div>
                                                  </div>`;

  // initRealTime ();
  //<div id="app" class="title"></div>

  // 1. En home click en btn  registrar
  document.getElementById("btnRegistreHome").addEventListener("click", () => {

    window.location.hash = "#/registre";
  });

  // 2. En home click en btn google
  document.getElementById("buttonGoogleHome").addEventListener("click", () => {
    console.log("presionaste boton google en Home!");
    loginGoogle();
  });

  //3. En home click en btn login

  document.getElementById("btnLoginHome").addEventListener("click", () => {
    window.location.hash = "#/login";
  });

};