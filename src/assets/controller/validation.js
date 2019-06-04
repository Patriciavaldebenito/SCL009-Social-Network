// Validation of registration fields

  export const validationUser = (user) => {

  if (user ===""){
    console.log("sin unsuario");
    return false;
  }
  if ( typeof(user) === "undefined") {
    console.log("usuario indefinido");
    return false;
  }
  console.log("usuario OK")
  return true;
  
 }
 
 export const validationAge = (age) => {

  if (age <=16){
    console.log("aun no tienes la edad ");
    return false;
  }
  if ( typeof(age) === "undefined") {
    console.log("edad indefinido");
    return false;
  }

  console.log("edad OK")
  return true;
 
 }

 export const validationEmail = (email) => {

  if (email === ""){
    console.log("sin correo ");
    return false;
  }
  if ( typeof(email) === "undefined") {
    console.log("correo indefinido");
    return false;
  }

  console.log("correo OK")
  return true;
 
 }

 export const validationPassword = (password) => {

  if (password === ""){
    console.log("sin password ");
    return false;
  }
  if ( typeof(password) === "undefined") {
    console.log("password indefinido");
    return false;

  } if ( password.length < 6 ) {
    console.log("no cumple el largo de contraseña");
    return false;
  }


  console.log("password OK")
  return true;
 
 }


export const validationExpRegEmail = (email) => {

  // var re = /\S+@\S+/;
  //La prueba de validación de correo electrónico simple y futura será verificar la presencia del símbolo @
  var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  return re.test(email);

}

export const validationForm = (user, age, email, password) => {
  if ( validationUser(user) === false || validationAge(age) ===false|| validationEmail(email) === false || validationPassword(password) ===false || !validationExpRegEmail(email)){
    console.log("Un campo no cumple el testeo")
    return false;
  }

  console.log("true test Ok");
  return true;
}