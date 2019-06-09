import { loginGoogle, observer } from "./../js/firebase_auth.js";
import { validationFormSignLogin } from "../controller/validation.js";
import { signLogin } from "../js/firebase_auth.js";
// import { aparece } from "../js/firebase_auth.js";

// import { loginGoogle } from "./../js/firebase_auth.js"; **** revisar ruta ****
// import {} from "";

export const templateLogin = () => {
  document.getElementById("root").innerHTML = `
                                                <div id="login" class="modal">
                                                  <div class="input-field">
                                                    <form id="login-form">
                                                      <div class="row"
                                                        <div class="col input-field">
                                                          <h3>Inicia Sesión</h3>
                                                        </div>
                                                      </div>

                                                      <div class="row"
                                                        <div class="col input-field">
                                                        <input type="email" placeholder="Correo" id="login-email" required />
                                                          
                                                        </div>
                                                      </div>

                                                      <div class="row"
                                                        <div class="col input-field">
                                                        <input type="password" placeholder="Contraseña" id="login-password" required />
                                                        </div>
                                                      </div>

                                              
                                                      <div class="row input-field">
                                                        <div class="row icol">
                                                          <button id="btnLogin" class="btn-create">Ingresa</button>
                                                        </div>
                                                      </div>

                                                      <div class="row"
                                                        <div class="col input-field">
                                                          <button class="btn-google" type="button" id="buttonGoogleLogin">Acceso con Google</button>
                                                        </div>
                                                      </div>

                                                    </form>
                                                  </div>
                                                </div>`;
//<label for="login-email"></label>
//<label for="login-password"></label>
  // 1. En Login click en btnLogin
  document.getElementById("btnLogin").addEventListener("click", () => {
  
    // valores desde imput text para function singLogin
    let email = document.getElementById('login-email').value;

    let password = document.getElementById('login-password').value;
    console.log(email);
    console.log(password);

    let resSignLogin = validationFormSignLogin(email, password);
    // conditions
    // para logearse los datos ingresados por el usuario deben estar completos y pasar las validaciones 
    // y ademas el user.emailverified deben retornar true
    // asi se ejecuta la fx singLogin y se muestra el muro
   
       if(resSignLogin){

        signLogin(email, password);
        console.log("logeado / parametros validados");
     
    } else {
      console.log("NO    createUser / parametros validos");
    }


  });

  // 2. En login click en btn google
  document.getElementById("buttonGoogleLogin").addEventListener("click", () => {
    console.log("presionaste boton google en Home!");
     loginGoogle();
    
   
  });

};
