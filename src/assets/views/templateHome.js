import {
  loginGoogle
} from "./../js/firebase_auth.js";
// import { templateMuro } from "./templateMuro.js";


// import { initRealTime } from './../js/firebase_auth.js';

export const templateHome = () => {

  document.getElementById("root").innerHTML = `
  <div class="flexbox-item">

  <div class="demoT">

  
    <img src="https://i.ibb.co/9hHdDmd/logoPano.png" class="img-fluid">
   
  </div>

  <div class="containerparrafohome">
     <p class="welcomeHome">Bienvenido</p>
   </div>

   <div class="containerbotoncreatehome">
      <button class="btn-create" id="btn-registre-home">Registrar</button>
   </div>

  <div class="containerbotonentrarhome"> 
     <button class="btn-create" id="btn-login-home">Entrar</button>
  </div>

  <div class="containerbotongooglehome">
    <button class="btn-google" type="button" id="button-google-home">Google</button>
  </div>

</div>`;

  // initRealTime ();
  //<div id="app" class="title"></div>

  // 1. En home click en btn  registrar
  document.getElementById("btn-registre-home").addEventListener("click", () => {

    window.location.hash = "#/registre";
  });

  // 2. En home click en btn google
  document.getElementById("button-google-home").addEventListener("click", () => {
    console.log("presionaste boton google en Home!");
    loginGoogle();
    
  });

  //3. En home click en btn login

  document.getElementById("btn-login-home").addEventListener("click", () => {
    window.location.hash = "#/login";
  });

};