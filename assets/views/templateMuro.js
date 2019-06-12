import { signOutRedSocial } from './../js/firebase_auth.js';

export const templateMuro = () => {
   
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
  </div>`; 
  // Eventos en el muro de la aplicacion 
  // document.getElementById('').addEventListener('click', () => {
  // })


  document.getElementById('buttonSignOut').addEventListener('click', () => {
      signOutRedSocial();
  });

}