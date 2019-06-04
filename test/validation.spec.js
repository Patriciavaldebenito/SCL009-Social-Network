import { validationUser } from "../src/assets/controller/validation.js";
import {  } from "../src/assets/controller/validation.js";
import {  } from "../src/assets/controller/validation.js";
import {  } from "../src/assets/controller/validation.js";


describe('', () => {
  it('debería retornarnos false si falta un campo', () => {
    expec(" ","16","abb@hh.cl","123456")).toBe(false)
    expect(("ana","16","abb@hh.cl","123")).toBe(false)
    expect(("ana","17","abb@hh.cl","123456")).toBe(true)
    expect(("ana","17","abb@hh.cl","12345678")).toBe(true)


  });

});