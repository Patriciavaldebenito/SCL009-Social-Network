import { loginGoogle } from "./../js/firebase_auth.js";
import { validationFormSignLogin } from "../controller/validation.js";
import { signLogin } from "../js/firebase_auth.js";
//import { aparece } from "../js/firebase_auth.js";
import { templateHome } from "./templateHome.js";

// import { loginGoogle } from "./../js/firebase_auth.js"; **** revisar ruta ****
// import {} from "";

export const templateLogin = () => {

  document.getElementById("root").innerHTML = `
  <div class="demoT">
   <img src="https://i.ibb.co/9hHdDmd/logoPano.png" class="img-fluid" > 
</div> 

<h3 class ="parrLogin">Inicia Sesión</h3>
     
<form class ="formlogin" id="login-form">       
   <input type="email" placeholder=" Correo" class ="barr" id="login-email"/>
   <label for="login-email"></label>
   
   <input type="password" placeholder=" Contraseña" class ="barr" id="login-password"/>
   <label for="login-password"></label>
  
   <button class="btn-createLogin" id="btnLogin">Ingresa</button>
           
   <button class="btn-googleLogin" type="button" id="buttonGoogleLogin">Google</button>
            
   <button class ="backLogin" id="back" type="button"></button>  
</form>
  
</div>`;

  // 1. En Login click en btnLogin
  document.getElementById("btnLogin").addEventListener("click", (e) => {
    e.preventDefault();
    // valores desde imput text para function singLogin
    let email = document.getElementById('login-email').value;

    let password = document.getElementById('login-password').value;
    

    let resSignLogin = validationFormSignLogin(email, password);
    // conditions
    // para logearse los datos ingresados por el usuario deben estar completos y pasar las validaciones 
    // y ademas el user.emailverified deben retornar true
    // asi se ejecuta la fx singLogin y se muestra el muro

    if (resSignLogin) {
      signLogin(email, password);
      console.log("logeado / parametros validados");

    } else {
      console.log("NO    createUser / parametros validos");
    }


  });
  document.getElementById('back').addEventListener('click', () => {
    templateHome();
  });


  // 2. En login click en btn google
  document.getElementById("buttonGoogleLogin").addEventListener("click", () => {
    console.log("presionaste boton google en Home!");
    loginGoogle();



  });

};