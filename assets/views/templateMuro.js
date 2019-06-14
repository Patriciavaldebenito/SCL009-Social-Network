import { signOutRedSocial } from './../js/firebase_auth.js';
import { savePostData } from '../js/firebase_data.js';
import { getDataPost } from '../js/firebase_data.js';
// import { getDataRegistry } from '../js/firebase_data.js';

export const templateMuro = () => {
  // getName();
  // getDataRegistry();
  document.getElementById('root').innerHTML = ` 

  <header class="header">
  <div class="wall-header">
      <h3>Publica tu Evento Aquí. </h3>
      <! --<h4 id="title"></h4></h4><br> -->
      <button class="btn-create2" id="button-sign-out"  type="button">Salir </button>              
  </div>
</header>

<!-- SECTION USERS WRITING EVENT WHITH DATES  -->
<section class="aside aside-1">
  <div class="modal" id="modal-post" >
      
      <form id="post-form">
          <!-- input event -->
           <div class="input-field2">
                <p>Tipo de Actividad o Evento:</p>
                <input type="text" placeholder="Danza,Teatro,Música, etc." class ="inputevent" id="event" />
                <label for="event"></label>
           </div>
       
          <!-- input coordenadas  -->
          <div class=" input-field2">
                <p> Coodenadas </p>
                <input type="text" placeholder="Dirección" class ="inputadrees" id="address"/>
                <label for="address"></label>
          </div>
 
           <!-- input metro de referencia -->
          <div class=" input-field2">
               <p>Metro de Referencia</p>
               <input type="text" placeholder="Baquedano, Salvador, etc." class ="inputsubway" id="subway"/>
               <label for="subway"></label>
          </div>
   
           <!-- input fecha -->
          <div class=" input-field2">
                <p> Fecha del Evento</p>
                <input type="text" placeholder="01-06" class ="inputdate" id="date"/>
                <label for="date"></label>
          </div>
   
          <!-- input comentarios  -->
          <div class=" input-field2">
               <p> Comentarios </p>
               <input type="text" placeholder="Descripcion del evento" class ="inputmessage" id="message" />
               <label for="message"></label>
          </div>
         <!-- -------------------------------------------- -->
         <!-- button create post in wall -->
         <div class = "row" >
               <button class="btn-create2" id="btn-post" >Publicar</button>
        </div>
      
      </form>
    </div>
  </section>

<!-- SECTION USERS PUBLICATIONS -->
<section class="main">
  <article >
   <div>
    <h3>Observa El Muro con lo Publicado...</h3>
    <div>






   <div id>"publications-users">
   <p id="paraghaphName"></p>
   </div>
    






   <table class="resp">
   <thead>
     <tr>
       <h3>
       <th scope="col">USUARIO</th>
       <th scope="col">EVENTO</th>
       <th scope="col">COORDENADAS</th>
       <th scope="col">METRO</th>
       <th scope="col">FECHA</th>
       <th scope="col">COMENTARIOS</th>
       <th scope="col">ME GUSTA</th>
       </h3>
     </tr>
   </thead>
   <tbody id="tabla">
    
   </tbody>
 </table>
   <div>

  <div class = "row" >
      <button class="btn-create2" id="btn-edit" >Editar</button>
  </div>

    <!-- button create delete in wall -->
    <div class = "row" >
        <button class="btn-create2" id="btn-delete" >Borrar</button>
     </div>
 </section>



 <footer class="footer">
    <div class = "row" >
      <div class = "col" >
           <button id="back" type="button"></button>
      </div>
    </div>
  </footer>`;
  getDataPost();
//<aside class="aside aside-2"></aside>
  // Eventos en el muro de la aplicacion 


  document.getElementById("btn-post").addEventListener("click", (e) => {
    e.preventDefault();
    savePostData();
    getDataPost();
    console.log("click en boton publicar");
    let event = document.getElementById("event").value;
    let adrees = document.getElementById("adrees").value;
    let subway = document.getElementById("subway").value;
    let date = document.getElementById("date").value;
    let message = document.getElementById("message").value;

    let resPublication = validationFormPublication(event, date, adrees, subway, message);
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

  
  document.getElementById('button-sign-out').addEventListener('click', () => {

    signOutRedSocial();
  });

}