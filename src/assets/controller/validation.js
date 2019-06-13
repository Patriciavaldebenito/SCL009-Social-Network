// Validation of registration fields

// HU2 Validation Email Registry.
export const validationUser = user => {
  if (user === "") {
    alert('Ingrese un nombre de usuario');

    console.log("sin unsuario");
    return false;
  }
  if (typeof user === "undefined") {
    alert('Ingrese un nombre de usuario correcto');

    console.log("usuario indefinido");
    return false;
  }
  console.log("usuario OK");
  return true;
};

export const validationAge = age => {
  if (age === "") {
    alert('ingresa tu edad');

    console.log("aun no tienes la edad");
    return false;
  }
  if (age < 16) {
    alert('aun no tienes la edad');

    console.log("aun no tienes la edad");
    return false;
  }
  if (typeof age === "undefined") {
    alert('Ingresa una edad correcta');
    console.log("edad indefinido");
    return false;
  }

  console.log("edad OK");
  return true;
};

export const validationEmail = email => {
  if (email === "") {
    alert('Ingresa tu correo');

    console.log("sin correo ");
    return false;
  }
  if (typeof email === "undefined") {
    alert('Ingrese un correo valido');
    console.log("correo indefinido");
    return false;
  }

  console.log("correo OK");
  return true;
};

export const validationPassword = password => {
  if (password === "") {
    alert('Ingresa una contraseña con mayor o igual a 6 caracteres');

    console.log("sin password ");
    return false;
  }
  if (typeof password === "undefined") {
    alert('Ingresa una contraseña con mayor o igual a 6 caracteres');

    console.log("password indefinido");
    return false;
  }
  if (password.length < 6) {
    alert('Ingresa una contraseña mayor o igual a 6 caracteres');

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
  alert('Ingrese un correo valido');
  return re.test(email);
  
};

export const validationFormRegistre = (user, age, email, password) => {
  if (validationUser(user) === false || validationAge(age) === false || validationEmail(email) === false || validationPassword(password) === false || !validationExpRegEmail(email)) {

    console.log("Un campo no cumple el testeo");
    return false;
  }
  else {
    /*Swal.fire(
      'Buen Trabajo!',
      'Te registraste en Panoramix!, Te enviamos correo.',
      'success'
    )*/
    console.log("true test Ok");
    return true;

  }

};


// HU3 Validation Login Email
// export const resultValidationForm = validationForm(email, password);

export const validationEmailSign = email => {
  if (email === "") {
    alert('Ingresa tu correo');

    console.log("sin correo ");
    return false;
  }
}

export const validationPasswordSign = password => {
  if (password === "") {
    alert('Ingresa una contraseña con mayor o igual a 6 caracteres');

    console.log("sin password ");
    return false;
  }
}
export const validationFormSignLogin = (email, password) => {
  if (validationEmailSign(email) === false || validationPasswordSign(password) === false || !validationExpRegEmail(email)) {

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


export const validationEvent = event => {
  if (event === "") {
    alert('Ingrese tipo de evento');

    console.log("sin tipo de evento");
    return false;
  }
    console.log("evento OK");
    return true;
};

export const validationDate = date => {
  if (date === "") {
    alert('Ingrese fecha');

    console.log("sin fecha");
    return false;
  }
  if (typeof date === "undefined") {
    alert('Ingrese fecha correcta');

    console.log("fecha indefinida");
    return false;
  }
  console.log("fecha OK");
  return true;
};

export const validationAddress = address => {
  if (address === "") {
    alert('Ingrese dirección');

    console.log("sin dirección");
    return false;
  }
  if (typeof address === "undefined") {
    alert('Ingrese dirección correcta');

    console.log("dirección indefinida");
    return false;
  }
  console.log("dirección OK");
  return true;
};

export const validationSubway = subway => {
  if (subway === "") {
    alert('Ingrese metro referencia');

    console.log("sin metro referencia");
    return false;
  }
  if (typeof subway === "undefined") {
    alert('Ingrese metro correctamente');

    console.log("metro indefinido");
    return false;
  }
  console.log("metro OK");
  return true;
};

export const validationMessage = message => {
  if (message === "") {
    alert('Ingrese algun comentario');

    console.log("sin comentario");
    return false;
  }
    console.log("message OK");
    return true;
};

export const validationFormPublication = (event, date, address, subway, message) => {
  if (validationEvent(event) === false || validationDate(date) === false || validationAddress(address) === false || validationSubway(subway) ===false || validationMessage(message) ===false ) {

    console.log("Un campo no cumple");
    return false;
  }
  else {
    // swal.fire('vamos al muro logeado registrado')

    console.log("validos los imput de la publicación");
    return true;

  }

};