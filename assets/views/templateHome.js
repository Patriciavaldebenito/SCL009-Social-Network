import {
  loginGoogle
} from "./../js/firebase_auth.js";
// import { templateMuro } from "./templateMuro.js";


// import { initRealTime } from './../js/firebase_auth.js';

export const templateHome = () => {

  document.getElementById("root").innerHTML = `
  <div class="flexbox-item fixed">

  <div class="demoT">

  
    <img src="https://i.ibb.co/9hHdDmd/logoPano.png" class="img-fluid" >
   
  </div>

  <div class="demoP">
     <p class="aa">bienvenido</p>

   </div>

   <div class="demoR">
      <button class="btn-create" id="btnRegistreHome" >Registrar</button>
   </div>

  <div class="demoE"> 
     <button class="btn-create" id="btnLoginHome" >Entrar</button>
  </div>

  <div class="demoG">
     <button class="btn-google" type="button" id="buttonGoogleHome">Google</button>

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