// Validation of registration fields


// HU2 Validation Email Registry.
export const validationUser = user => {
  if (user === "") {
    Swal.fire('Ingrese un nombre de usuario');

    console.log("sin unsuario");
    return false;
  }
  if (typeof user === "undefined") {
    Swal.fire('Ingrese un nombre de usuario correcto');

    console.log("usuario indefinido");
    return false;
  }
  console.log("usuario OK");
  return true;
};

export const validationAge = age => {
  if (age === "") {
    swal.fire('ingresa tu edad');

    console.log("aun no tienes la edad");
    return false;
  }
  if (age < 16) {
    swal.fire('aun no tienes la edad');

    console.log("aun no tienes la edad");
    return false;
  }
  if (typeof age === "undefined") {
    swal.fire('Ingresa una edad correcta');
    console.log("edad indefinido");
    return false;
  }

  console.log("edad OK");
  return true;
};

export const validationEmail = email => {
  if (email === "") {
    swal.fire('Ingresa tu correo');

    console.log("sin correo ");
    return false;
  }
  if (typeof email === "undefined") {
    swal.fire('Ingrese un correo valido');
    console.log("correo indefinido");
    return false;
  }

  console.log("correo OK");
  return true;
};

export const validationPassword = password => {
  if (password === "") {
    swal.fire('Ingresa una contraseña con mayor o igual a 6 caracteres');

    console.log("sin password ");
    return false;
  }
  if (typeof password === "undefined") {
    swal.fire('Ingresa una contraseña con mayor o igual a 6 caracteres');

    console.log("password indefinido");
    return false;
  }
  if (password.length < 6) {
    swal.fire('Ingresa una contraseña mayor o igual a 6 caracteres');

    console.log("no cumple el largo de contraseña");
    return false;
  }

  console.log("password OK");
  return true;
};

export const validationExpRegEmail = email => {
  // var re = /\S+@\S+/;
  //La prueba de validación de correo electrónico simple y futura será verificar la presencia del símbolo @
  var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  swal.fire('Ingrese un correo valido');
  return re.test(email);
  
};

export const validationFormRegistre = (user, age, email, password) => {
  if (validationUser(user) === false || validationAge(age) === false || validationEmail(email) === false || validationPassword(password) === false || !validationExpRegEmail(email)) {

    console.log("Un campo no cumple el testeo");
    return false;
  }
  else {
    Swal.fire(
      'Buen Trabajo!',
      'Te registraste en Panoramix!, Te enviamos correo.',
      'success'
    )
    console.log("true test Ok");
    return true;

  }

};


// HU3 Validation Login Email
// export const resultValidationForm = validationForm(email, password);

export const validationEmailSing = email => {
  if (email === "") {
    swal.fire('Ingresa tu correo');

    console.log("sin correo ");
    return false;
  }
}

export const validationPasswordSing = password => {
  if (password === "") {
    swal.fire('Ingresa una contraseña con mayor o igual a 6 caracteres');

    console.log("sin password ");
    return false;
  }
}
export const validationFormSignLogin = (email, password) => {
  if (validationEmailSing(email) === false || validationPasswordSing(password) === false || !validationExpRegEmail(email)) {

    console.log("Un campo no cumple el testeo");
    return false;
  }
  else {
    // swal.fire('vamos al muro logeado registrado')

    console.log("validos los imput del formulario Login");
    return true;

  }

};

//HU4 Validation Post Publication.

export const validationDate = date => {
  if (date === "") {
    Swal.fire('Ingrese fecha');

    console.log("sin fecha");
    return false;
  }
  if (typeof date === "undefined") {
    Swal.fire('Ingrese fecha correcta');

    console.log("fecha indefinida");
    return false;
  }
  console.log("fecha OK");
  return true;
};

export const validationAdrees = adrees => {
  if (adrees === "") {
    Swal.fire('Ingrese dirección');

    console.log("sin dirección");
    return false;
  }
  if (typeof adrees === "undefined") {
    Swal.fire('Ingrese dirección correcta');

    console.log("dirección indefinida");
    return false;
  }
  console.log("dirección OK");
  return true;
};

export const validationSubway = subway => {
  if (subway === "") {
    Swal.fire('Ingrese metro referencia');

    console.log("sin metro referencia");
    return false;
  }
  if (typeof subway === "undefined") {
    Swal.fire('Ingrese metro correctamente');

    console.log("metro indefinido");
    return false;
  }
  console.log("metro OK");
  return true;
};

export const validationFormPublication = (date, adrees, subway) => {
  if (validationDate(date) === false || validationAdrees(adrees) === false || !validationSubway(subway)) {

    console.log("Un campo no cumple");
    return false;
  }
  else {
    // swal.fire('vamos al muro logeado registrado')

    console.log("validos los imput de la publicación");
    return true;

  }

};