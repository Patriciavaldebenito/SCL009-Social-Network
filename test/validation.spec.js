import { validationForm } from "../src/assets/controller/validation.js";

describe('validationForm', () => {
  it('debería retornarnos false si falta un campo', () => {
    expect(validationForm(" ","16","abb@hh.cl","123456")).toBe(false)
    expect(validationForm("ana","16","abb@hh.cl","123")).toBe(false)
    expect(validationForm("ana","17","abb@hh.cl","123456")).toBe(true)
    expect(validationForm("ana","17","abb@hh.cl","12345678")).toBe(true)


  });

});