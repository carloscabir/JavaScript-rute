
import {Saludar, saludar, usuario } from "./constantes";
import {Saludar, saludar, usuario } from "./constantes" //tambien existe el metodo nomodule para dar soporte navegadores con ES5;
Console.log("Bienvenido a modulos, inserta acá el modulo");

//El metodo "as" sirve para dar nuevos nombres u o alias a una cosa dentro de los calculos a
import { aritmetica as calculos } from "./Aritmetica.js";
//(El .js es clave pa)

//import {aritmetica} from "./aritmetica.js;"

console.log(usuario);
//console.log(aritmetica.sumar(8, 2));
//console.log(aritmetica.restar(10, 2));
 

console.log(calculos.sumar(8, 2));
console.log(calculos.restar(10, 2));


//saludar()

let saludo = new Saludar ();
saludo;


