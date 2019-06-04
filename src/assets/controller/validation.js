/*global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

describe('example', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof example, 'function');
  });

  it('debería retornar "example"', () => {
    assert.equal(example(), 'example');
  });
})*/



//  Validations  Functión createUser

//  validar = user / mail / edad / password /
//                   largo mail.length <6 caracteres
//                   pass contenga @
//                   considerar que input edad tenga solo valor numerico

export const validateAccount = (user,age,email,password) => {
  if( password.length < 6 || user === ""|| age ==="" || email ==="" || password==="" || !validateEmail(emailNewUser)){
    return false;
  }else{
    return true;
  }
}


export const validateEmail = (emailNewUser)=>{

  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(emailNewUser);
}



// const  validateForm = (user, age, email, password) => {

//   // verifican las condiciones enviar formulario

//   if (user.length === 0 || age.length === 0 || email.length === 0 || password.length === 0) {
//     // Si no se verifican las condiciones no se enviará el formulario
//     return false;
//     // Si  se verifican las condiciones no se enviará el formulario
//   } else {
//     return true;

//   }

// }


// const resultValidationForm = (validateForm) => {

 

//   if (validateForm == false) {

//     alert("FALTAN DATOS")

//   } else {
    
//     console.log("el usuario esta registrado en firebase")

//   }

// }


