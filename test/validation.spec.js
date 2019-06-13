import { validationUser, validationFormSignLogin, validationEmailSign, validationPasswordSign } from "../src/assets/controller/validation.js";
import { validationAge } from "../src/assets/controller/validation.js";
import { validationEmail} from "../src/assets/controller/validation.js";
import { validationPassword } from "../src/assets/controller/validation.js";
import { validationFormRegistre} from "../src/assets/controller/validation.js";
describe('', () => {
  it('debería retornarnos false si faltan campos', () => {
    expect(validationUser("")).toBe(false)
    expect(validationAge("")).toBe(false)
    expect(validationEmail("")).toBe(false)
    expect(validationPassword("")).toBe(false)
    expect(validationFormRegistre("")).toBe(false)
    expect(validationEmailSign("")).toBe(false)
    expect(validationPasswordSign("")).toBe(false)
    expect(validationFormSignLogin("")).toBe(false)
    
  });
  it('debería retornarnos true si están los campos', () => {
    expect(validationUser("ana")).toBe(true)
    expect(validationAge("33")).toBe(true)
    expect(validationEmail("ana@hotmail.com")).toBe(true)
    expect(validationPassword("1234567")).toBe(true)
    expect(validationFormRegistre("ana","33","ana@hotmail.com","1234567")).toBe(true)
    expect(validationEmailSign("na@hotmail.com")).toBe(true)
    expect(validationPasswordSign("1234567")).toBe(true)
    expect(validationFormSignLogin("ana@hotmail.com","1234567")).toBe(true)
    
  });
  
});

    