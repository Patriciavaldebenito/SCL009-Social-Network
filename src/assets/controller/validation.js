//  Validations  Functión createUser

//  validar = user / mail / edad / password /
//                   largo mail.length <6 caracteres
//                   pass contenga @
//                   considerar que input edad tenga solo valor numerico

export const validationForm = (user, age, email, password) => {

  if (user ==="" || typeof(user) === "undefined") {
    console.log("false");
    return false;
  }
  if (age <= 16 || typeof(age) === "undefined") {
    console.log("false");
    return false;
  }
  if (email ==="" || typeof(email) === "undefined") {
    console.log("false");
    return false;
  }
  if (password ==="" || password.length < 6 || typeof(password) === "undefined") {
    console.log("false");
    return false;
  }
  console.log("true");
  return true;
}


export const validateEmail = (email) => {

  // var re = /\S+@\S+/;
  //La prueba de validación de correo electrónico simple y futura será verificar la presencia del símbolo @
  var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  return re.test(email);

}