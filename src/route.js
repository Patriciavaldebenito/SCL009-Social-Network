//import todas las vistas
import { templateHome } from './assets/views/tempateHome.js';
// import { templateRegistre } from './assets/views/templateAboutRegistre';
// import { templateLogin } from './assets/views/templateProjectLogin';


const changeRoute = (hash) => {
   console.log("si estoy leyendo changeRoute");
  if (hash === '#/registre' || hash === '#/login' || hash === '#/home' || hash === '' || hash === '#/' || hash === '/#') {
    return showTemplate(hash)
  }
  return showTemplate(hash)
}

// segunda función showTemplate(hash)

const showTemplate = (hash) => {
  // #/about
  const router = hash.substring(2); // home about project
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  switch (router) {
    // case 'registre':
    //   templateRegistre();
    //   break;
    // case 'login':
    //   templateLogin();
    //   break;
    case 'home':
      templateHome();
      break;
    case '':
      templateHome();
      break;
    default:
      containerRoot.innerHTML = `<h1>Error 404</h1>`
  }
}

export const initRouter = () => {
  console.log("comprobando que lee los cambios de ruta");
  // cuando la ventana se carga saca el hash y se lo pasa a changeRoute
  window.addEventListener('load', changeRoute(window.location.hash));

  // si encuentra un cambio en el hash lo vuelve a sacar y pasar como parámetro a changeRoute
  if ('onhashchange' in window) {
    window.onhashchange = () => {
      changeRoute(window.location.hash);
    }
  }
}