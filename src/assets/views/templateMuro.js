import { signOutRedSocial } from './../js/firebase_auth.js';
import { postCreate } from '../js/firebase_data.js';

export const templateMuro = () => {
   
<<<<<<< HEAD
  document.getElementById('root').innerHTML = `<button class="btn-create2" id="buttonSignOut"  type="button">Cerrar Sesion </button>                                               
    <div class="wrapper">
      <header class="header"><h4>Bienvenido al Muro!....+(get.name).</h4></header>
      <aside class="aside aside-1">
        <div class="modal" id="modal-signup" >
          <div class="modal-content">
            <h3>Publica tu Evento Aquí. </h3>
            <br>
            <form id="signup-form">
             
              <div class="row input-field2">
                <div class = "col" >
                  <p>Tipo de Actividad o Evento:</p>
                  <input type="text" placeholder="Danza,Teatro,Música, etc." class ="inputevent" id="event" />
                  <label for="event"></label>
                </div>
              </div>
              <br>
              <div class="row input-field2">
                <div class = "col" >
                  <p> Coodenadas </p>
                  <input type="text" placeholder="Dirección" class ="inputadrees" id="adrees"/>
                  <label for="adrees"></label>
                </div>
              </div>
              <br>
              <div class="row input-field2">
                 <div class = "col" >
                  <p>Metro de Referencia</p>
                  <input type="text" placeholder="Baquedano, Salvador, etc." class ="inputsubway" id="subway"/>
                  <label for="subway"></label>
                </div>
              </div>
              <br>
              <div class="row input-field2">
                <div class = "col" >
                  <p> Fecha del Evento</p>
                  <input type="number" placeholder="01/06/2019" class ="inputdate" id="date"/>
                  <label for="date"></label>
                </div>
              </div>
              <br>
              <div class="row input-field2">
                <div class = "col" >
                  <p> Comentarios </p>
                  <input type="text" placeholder="Descripcion del evento" class ="inputmessage" id="message" />
                  <label for="message"></label>
                </div>
              </div>
              <div class = "row" >
                <div class = "col" >
                   <button class="btn-create2" id="btnPublicar" >Publicar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </aside>
      <aside class="aside aside-2">
        <div class = "row" >
          <div class = "col" >
            <button class="btn-create2" id="btnEditar" >Editar</button>
          </div>
        </div>
        <div class = "row" >
          <div class = "col" >
            <button class="btn-create2" id="btnBorrar" >Borrar</button>
          </div>
        </div>
      </aside>
      <section class="main">
        <article ><p>Ver Aqui lo Publicado...</p><br>
        
        
        </article>
      </section>
      
      
    <footer class="footer">
      <br>
      <div class = "row" >
        <div class = "col" >
          <button id="back" type="button"></button>
        </div>
      </div>
    </footer>
=======
  document.getElementById('root').innerHTML = `<header class="logoMuro">
                                               <button class="btn-signOut" id="buttonSignOut"  type="button">Cerrar Sesion </button>
                                               </header>
    <div class="wrapper">
      <section>
      <div>
      <p>Actividad o evento:</p>
      <input type="text" placeholder="¿Cual es tu actividad ?"><br>

      <p> Direccion:</p>
      <input type="text" placeholder="¿Donde es?"><br>

      <p>Metro de referencia:</p>
      <input type="text" placeholder="ejemplo : metro Baquedano linea verde"><br>

      <p>Fecha y direccion:</p>
      <input type="text" placeholder="ejemplo"><br>

      <p>comentarios:</p>
      <input type="text" placeholder="¿Porque asistir? - ¡motivanos! "><br>
      </div>
      </section>
      <section class="main">
        <article >
            <p>Pellentesquelibero sit amet quam egestas semper. Aenean ultricies mi vitae est. Maend leo.</p>  
        </article>
      </section>
      <aside class="aside aside-1">Aside 1</aside>
      <!-- <aside class="aside aside-2">Aside 2</aside> -->
      <footer class="footer">Footer</footer>
>>>>>>> a5817a193ac147aed89328fccd0f68b33e7366fa
  </div>`; 
  // Eventos en el muro de la aplicacion 
  // document.getElementById('').addEventListener('click', () => {
  // })

  document.getElementById("btnPublicar").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("click en boton publicar");
    let event = document.getElementById("event").value;
    let adrees = document.getElementById("adrees").value;
    let subway = document.getElementById("subway").value;
    let date = document.getElementById("date").value;
    let message = document.getElementById("message").value;
    
    let resPublication = validationFormPublication( event,date, adrees, subway, MSMediaKeyMessageEvent);
    if (resPublication) {
      console.log(" se ejecutara postCreate");
      postCreate(userPost);
     
      console.log("postCreate ejecutando ");
    } else {
      console.log("NO corre postCreates / parametros no validos");
    }
  })

  document.getElementById('back').addEventListener('click', () => {
    templateProjectLogin();
  });
  document.getElementById('buttonSignOut').addEventListener('click', () => {
      signOutRedSocial();
  });

}