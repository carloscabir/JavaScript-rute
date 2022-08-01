for (let step = 10; step > 0; step--) {
    console.log('sepe');
  } alert('Hola, usuario?')
  const usuario1 = taisuru
  if (Chat.includes ('taisuru')){
      console.log('ola pendejo xd');
  }
  if (chat === 'no'){
      console.log('pelalo');
  }

  const usuario9 = [nombre = "carlito", pene = "16cm", saludo = "oli", exnovias = ["johana", "karla", "mayte",
"carol", "karol"] ]

// METODO (forEach)
/* esto recibe una funcion en la cual se va a ejecutar
todos los elementos que esten dentro de la variable */



 //nose aaaaaaaaaaaaaaaaaaaa sumas? xd



 
 /*si c borro mi codigo XD, CONDICIONALES pq 
 luego se me olvidan (IF)/



 let edad = 19
 if (edad >= 18){
     console.log("Eres mayor de edad =)");
   }else if (edad = 15 && edad >= 18){
       console.log("ta medio chico, pero si pode pasa oe");
    } else {
     console.log("eri menor de edad man");
 }






 /* ternario ojito, (condicion) ? verdadero : falso */
/* let = eresMayor = (edad >= 18)
 ? "eres mayor de edad"
 : "eres menor de edad"
 console.log(eresMayor);
*/





 /* switch case condicionales
 domingo 0
 lunes 1
 martes 2
 miercoles 3
 jueves 4
 viernes 5
 sabado 6
 */
 /*let dia = 3 */

   /* switch (dia) {
    case 0:
        console.log("Domingo")
        break;
 case 1: 
 console.log("Martes")
 break;
 case 2: 
  console.log("Miercoles")
  break;
  case 3: 
 console.log("Jueves")
 break;
   case 4: 
  console.log("Viernes")
  break;
    case 5: 
   console.log("Sabado")
    default:
        console.log("si");
     break;
}*/





 /* CICLOS   */

/* while */

while (condition) {
    
}
do {
    
} while (condition);
 /* let contador = 0
 while(contador < 10){
     console.log("while" + contador);
     contador++;
 }
 do {
    console.log("do while" + contador);
    contador++;
 } while (contador < 10)*/
    
 /*
 for (inicializacion de variable; condicion;
     decremento o incrementro){
 sentencias que ejecuta el for
  sentencias que ejecuta el for
   sentencias que ejecuta el for
 }*/

//TODO TIPO DE CICLOS AAAAAAA


 /* classic for */
/* for (let i = 0; i < 10; i++) {
     console.log("for" + i);
 }
 let numeros = [10, 20 ,30, 40, 50, 60, 70,
     80, 90];
     
     for (let i = 0; i < numeros.length; i++){
         console.log(numeros[i])
     } */

     /*"for in"*/
/* este accede a los datos de arreglos supongo */
   /*  for (const key in object) {
         if (Object.hasOwnProperty.call(object, key)) {
             const element = object[key];
             
         }
     } */

     /* for of, este itera por arreglos, cadenas y todo tipo de dato
     ieterando en cada uno de una forma con poco espacio*/
 /* for (const iterator of object) {
    
} */





/* MANEJO DE ERRORES nose */
/* para buscar y imprimir el error que tengas en tu codigo, sirve para checar que no tengas ningun un error de codigo en tu codigo (obvio)
try {
    console.log ("En el Try se agrega el codigo a evaluar");
console.log("segundo mensaje en el try");
} catch (error){
    console.log("Catch, captura cualquier error surgido o lanzado en el try ");

} finally{
    console.log("el bloque finally se ejecutara siempre en el final de un bloque try catch");

}*/



/*BREAK Y CONTINUE*/
/* esto sirve tal cual como dice su nombre y sirve para muchos primitivos xd
const numeros = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 0];


for (let i= 0; i < numeros.length; i++){
    if (i===5){
break;
 }
    console.log(numeros[i]);
}



for (let i = 0; i <numeros.length; i++){
    
    if (0 === 5){
        continue;
    }
    console.log(numeros[i]);
}
*/


// DESTRUCTURACION DE DATOS (arrays, objects, etc);
/* esto sirve para acceder directamente a las
cadenas de un objeto casi igual a lo de abajo xd
const yo = {
    nombre: "Carlito",
    apellido: "Dmc",
    edad: 15,
    novia: "aire"
};


let {nombre, apellido, novia, edad} = yo;
console.log(nombre, apellido, "novia", " ", "el ",  novia, "edad ", edad);

*/




// OBJETOS LITERALES.



/* este sirve para acceder a un valor directamente creo xd
const gato = {
    nombre: "sac",
    raza: "callejero",
    color: "amarrilo",
    sexo: "gato"
}
function maullar(){
    console.log("miau miau");
}

const cat =(
    nombre,
    raza,
    color,
    sexo
    );
 console.log(cat)
*/


//PARAMETROS REST

/*parametros con tres puntos suspensivos que tienen
valores infinitos y lo podes aplicar en tipos de operaciones yo que se xd*/
/*
function sumar (a, b, ...c){
let resultado = a + b;



c.forEach(function(n){
    resultado += n
});

return resultado;

}

console.log(sumar(1, 7, 8, 3, 5, 5));
*/

//SPREAD OPERATOR
/* Bueno, por lo que entendi sobre este es que podes
agregar una variable junto sus cosos que tengan dentro a otra 
variable (una tipo concatenacion) a otra variable, tipo poner
dos variables en una junto a sus valores con solo TRES PUNTOS
SUSPENSIVOS (...) antes de la variable dentro de la otra 
y pues hay un ejemplo abajo de como es xd*/


/*
let arr1 = [1, 2, 3, 4, 5],
arr2 = [6, 7, 8, 9, 0];

console.log(arr1, arr2);

const arr3 = [...arr1, ...arr2];
console.log(arr3);
*/








//TODO SOBRE ARROW FUNCTIONS (=>)

/* Recuerda que para llamar una funcion primero tenes
que declararla, si no esto dara un error de syntaxis
y pues no ejecutara tu codigo.

*/


//Una funcion sin Arrow Function
/*

const saludar = function (){
    console.log("Hola pinche putita");
}

saludar();

*/
//Con arrow function (varios valores de la funcion)
/*Tengamos en cuenta que para llamar una Arrow Function
de varios valores solo quitamos el "Function" de una funcion (wtf)

y ponemos un "=>" entre los parentesis "()" y las llaves EJEMPLO:
const saludar2 = () => {
    console.log("Hola pinche putita");
    "{}" y ya llamamos una Arrow function*/
    
    /*
    const saludar2 = () => {
        console.log("Hola pinche putita");
    }

saludar2();
*/
//Arrow Function (un valor) 
/*Esto es practicamente lo mismo pero si es con una sola linea
tenemos la oportunidad de borrar e omitir las llaves "{}"
y pasar nuestra Arrow Function a una sola linea de codigo.
  */

/*
const saludar3 = () => console.log("Hola pinche putita");

saludar3();
*/
//CIERTO CIERTO MIRA MAN 
/* Tipo para buscar o agregar algo que gustes hacer como tipo
un console y tenes que agregar un valor junto a una cadena de texto
solo usa el signo de dolar "$" y dentro de unos corchetes
"{}" el objeto que quieras poner tipo $[nombre]
ejemplo: console.log ("Hola ${nombre}");
y agregar esto dentro de la o una sola llave bro
*/


//Vale otra nota sobre esto, pero aun mas limpio el codigo
/* Bueno, esto solo sirve si tu Arrow Function tiene
un solo valor, ya que si tiene mas valores no va a funcionar;
esto ayyuda a que tu codigo se vea mas limpio y esto vendria siendo un
Return Implicito. 
Solo tenemos que borrar los parentesis (cabe a a clarar que solo funciona
    si tenes UN solo valor)
    Y vendria siendo mas limpio y tipo Return Implicito.

*/

//TIPOS DE ARROW FUNCTION

/*3 1
const saludar4 =nombre=> console.log(`Hola pinche putita ${nombre}`);

saludar4("Carlito");

/*
const sumar = function (a,b){
return a + b;
}*/
/*
const sumar = (a,b) => a + b;

 console.log(sumar(8,9)) 
//

 const funcionDeVariasLineas = () => {
console.log("Uno");
console.log("Dos");
console.log("Tres");
 }
 
 funcionDeVariasLineas();
 

*/



/*El metodo forEach recibe una function en donde puede recibir el elemento 
que esta en la posicion,
bueno el arrow function se usa como el siguente ejemplo
usamos la llamada de la variable primero
despues el metodo .forEach
despues (), Arrow Function (=>), y al ultimo el bloque de codigo
({})
*/




//ARROW FUNCTION BIEN HECHA xd (la mas simplificada posible wn)
/*
const numeros1 = [1,2,3,4,5];

numeros1.forEach((el, index) => console.log(`${el} esta en la posicion  ${index}`));

*/






/*
const gato2 = {
    nombre: "sac",
    maullar: function () {
        console.log(this)
    }
}

gato2.maullar()
*/



//CON ARROW FUNCTION
/*ojo que un this con un arrow solo imprimi window, mientras que una funcion
normal no imprimi esto vale
y rompe este objeto, lo salta y reconoce el campo donde se encuentra su objeto padre.
*/ 
/* Es una mala practica hacer esto en este tipo de objetos con un arrow function huh? */
/*
const gato2 = {
    nombre: "sac",
    maullar: () =>{
        console.log(this)
    }
}

gato2.maullar()

*/













//PROTOTIPOS (PROGRAMACION ORIENTADA A OBJETOS) POO

/*
Clases - Modelo a seguir (tipo, una funcion constructora)
Objetos - Es una instancia de una clase
  Atributos - Es una caracteristica o propiedad del objeto
  (son variables dentro de un objeto)
  Metodos - son las acciones que un objeto puede
  realizar (son funciones dentro de un objeto)
  */

  //Objeto Literal (no poo)

  /*
  const animal = {
      nombre: "Snoopy",    
    sonar(){
console.log("Hago sonidos por que estoy vivo");
    }
}

const animal2 = {
    nombre: "Lola Bunny",    
  sonar(){
console.log("Hago sonidos por que estoy vivo");
  }
}

console.log(animal);
console.log(animal2);

//Termina aqui esto
*/



//Funcion constructora (primera que duplica los resultados ya imprimidosxd)
/* //INSTANCIA
function Animal(nombre, genero){
//Atributos
this.nombre = nombre;
this.genero = genero;

//Metodos
this.sonar = function (){
    console.log("Hago sonidos por que estoy vivo")
  }

  this.saludar = function (){
      console.log(`Hola puta, me llamo ${this.nombre}`)
  }
}

const snoopy = new Animal("Snoopy", "Macho"),
lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.saludar();

lolaBunny.sonar();
lolaBunny.saludar();
*/

//Funcion constructora donde asignamos los metodos al Prototipo, no a la funcion como tal
/*
function Animal(nombre, genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
}

    //Metodos agregados al prototipo de la funcion constructora
    Animal.prototype.sonar = function (){
        console.log("Hago sonidos por que estoy vivo")
      }
    
      Animal.prototype.saludar = function (){
          console.log(`Hola puta, me llamo ${this.nombre}`)
      }
    

//Herencia Prototipica
function Perro(nombre, genero, tamanio){
    this.super = Animal;
    this.super(nombre, genero);
this.tamanio = tamanio;
}

//Perro esta herendando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;


//Sobreescritura de metodos del Prototipo padre en el hijo
Perro.prototype.sonar = function (){
    console.log("soy un perro y mi sonido es un ladrido");
}
Perro.prototype.ladrar = function () {
    console.log("guau guau");
}

   
    const snoopy = new Perro("Snoopy", "Macho", "chico"),
    lolaBunny = new Animal("Lola Bunny", "Hembra");
    
    console.log(snoopy);
    console.log(lolaBunny);
    
    snoopy.sonar();
    snoopy.saludar();
    snoopy.ladrar();
    
    lolaBunny.sonar();
    lolaBunny.saludar();
    
*/


    //Clases y herencia OJOOOOOOOOOOOO
/*Lo que hacen las clases simplemente es simplificarnos la escritura
a diferencia de los prototipos (clasesGOD prototiposZzz) pero igual Js sigue haciendo las clases en prototipos xd
para asignar nuevos valores a esto, no necesitas poner los metodos 
como en los prototipos,
Js lo hace por ti

*/ 
    /*
    class Animal{
        //El constructor es un metodo especial que se ejecuta en el momento de instanciar una clase
        
        constructor(nombre, genero){
     this.nombre = nombre;
     this.genero,
     this.pene = null;
        }
     //Metodos
     
     sonar(){
         console.log("hago sonidos por que estoy vivo");
     }
    
     
     saludar(){
         console.log(`ella no te ama bro, por cierto, Hola me llamo ${this.nombre}`);
     }*/
/*Un metodo estatico se puede ejecutar sin necesidad de 
instanciar una clase */
/*
static queEres() {
console.log("soy un perro we, mira guau guau, que guay verda?");

}
    }

class Perro extends Animal {
    constructor(nombre, genero, tamanio){
 //Con el metodo super() se manda a el constructor de la clase padre
   super(nombre, genero);
   this.tamanio = tamanio;
}
//Los setters y getters son metodos especiales que nos permiten
// establecer y obtener los valores de atributos de nuestra clase
get getPene(){
    return this.pene;
}
set setPene(pene){
    this.pene = pene;
}
}

Perro.queEres()
    const mimi =  new Animal("mimi", "hembra"),
    scooby = new Animal("scooby", "Macho");

console.log(mimi);
mimi.sonar();
mimi.saludar();

console.log(scooby);
scooby.sonar();
scooby.saludar();
console.log(scooby.getPene);
scooby.getPene = ("13 cm");
console.log(scooby.getPene);

*/





//OBJETO CONSOLE


console.log(console); //Imprimir en la consola
console.error("Hola, esto es un error"); //Para notificar un error
console.warn("Esto es un aviso"); //Para notificar una advertencia
console.info("Hola"); //Para ser informativo similar al .log


let nombre = "Taisuru",
apellido = "anal",
edad = 10;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre, apellido, edad);
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} anos`);

console.log(`Hola mi nombre es %s %s y tengo %s anos`, nombre, apellido, edad);

console.clear(); //Limpiar la consola



console.log(document);
console.dir(window);
console.dir(document);   //Objetos
console.clear();

console.group("Cursos de @jonmircha en YouTube")
console.log("Curso de Js")
console.log("Curso de Node.js")
console.log("Curso de Diseno y Programacion Web")
console.groupEnd();

//Hacer grupos
console.groupCollapsed("Cursos de @jonmircha en YouTube")
console.log("Curso de Js")
console.log("Curso de Node.js")
console.log("Curso de Diseno y Programacion Web")
console.groupEnd();
//Terminar grupos

console.clear();
//Hacer una tabla xd
 console.log(console);
 console.table(Object.entries(console).sort)//.sort sirve para ordenar alfabeticamente xd); //Para pasar datos a una tabla (estetico)

 console.clear();

const numeros = [1, 2, 3, 4, 5],
vocales = ["a", "e", "i", "o", "u"];

console.table(numeros);
console.table(vocales);

const perro = {
nombre: "kenai",
raza: "chi",
color: "pene"
}

console.table(perro);
console.clear();

//Console.time Ejemplo de como usarlo (cronometrando a milisegundos)
console.time("Cuanto tiempo tarda mi codigo");
const arreglo = Array(1000);

for (i = 0; i < arreglo.length; i ++) {
    arreglo[i] = i; 
}

console.timeEnd("Cuanto tiempo tarda mi codigo");
//console.log(arreglo);
console.clear();

//Metodo Count (Tal cual como el nombre para hacer conteos xd)

for (let i = 0; i <= 100; i++){
    console.count("codigo for");
    console.log(i);
}
console.clear();


//Metodo .assert, este sirve para hacer comparaciones entre variables (creo xd)

let x = 3,
y = 3,
pruebXY = "Se espera que x siempre sea menor a y";

console.assert(x <= y,{x,y,pruebXY});
//Si la condicion es correcta no se imprimira nada en la consola, en cambio si no lo es, si lo hará.

console.clear();














//OBJETO DATE
/*Esto servi para obtener el dato que especifiques
a el parametro, para un coso x*/
/*
console.log(Date());

let fecha = new Date();
console.log(fecha);
//Dia del mes
console.log(fecha.getDate());
//Dia de la semana D L M Mi J V S -> 0 1 2 3 4 5 6 
console.log(fecha.getDay());
//Mes del anio Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic -> 0 1 2 3 4 5 6 7 8 9 10 11
console.log(fecha.getMonth());
//Anio 
console.log(fecha.getFullYear());
//Hora
console.log(fecha.getHours());
//Milisegundos :00
console.log(fecha.getMilliseconds());
//Hora local
console.log(fecha.toLocaleString());


//calcular fecha de nacimiento pa

let cumpleCarlito = new Date(2007, 4, 13);
console.log(cumpleCarlito);

*/





//OBJETO MATH /*este sirve para hacer operaciones avanzadas de matematicas como: razones trigonometricas cos sen tan etc*/
//Metodo .abs, este nos devuelve un valor absoluto de un numero
//Metodo .ceil, este siempre noos va a redondear un valor al numero entero mayor.
//Metodo .floor, este hace lo mismo que el de arriba, redondear, pero este lo va a hacer al numero entero mas pequenio que tenga cerca
//Metodo .round, este nos va a redondear al valor mas cercano, tipo calificaciones de la telesecundaria xd
// Lo que dije en el primer parrafo, un ejemplo: raiz cuadrada = (metodo sqrt), potencias = (metodo pow)
//Metodo .sign, este nos dara tres respectivos valores por el numero que vaya despues de el; tipo si es positivo el numero este mandara 1, si es negativo -1 y 0 si es 0 xd
//Metodo .random, este tomara un numero al azar entre 0 y 1, si queres que sea de 0 a 1000 por ejemplo, solo lo multiplicas por 1000 


/*

console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-7.8));
console.log(Math.ceil(7.1));
console.log(Math.floor(7.9));
console.log(Math.round(7.3));
console.log(Math.sqrt(81));
console.log(Math.pow(5,2)); //primer valor es la base y el segundo la potencia, 5 al cuadrado
console.log(Math.sign(4));
console.log(Math.round(Math.random() * 1000));
*/









//OPERADORES DE CORTOCIRCUITO

/* 
Cortocircuito OR - cuando el valor de la izquierda en la expresion 
siempre pueda validar a true, es el valor que se 
encargara por defecto


Cortocircuito AND - cuando el valor de la izquierda en la expresion
siempre pueda validar a false, es el valor que se encargara por defecto

*/


//Cortocircuito OR ||
/*
function saludar (nombre){
nombre = nombre || "Desconocido";
    console.log(`Hola ${nombre}`);
}
console.log();

saludar("Carlito");

saludar();
saludar();

console.log("cadena" || "valor de la cadena");
console.log(true || "valor de la cadena");
console.log([] || "valor de la cadena");
console.log({} || "valor de la cadena");
console.log("cadena" || "valor de la cadena");
console.log(false || "valor de la cadena");
console.log(null || "valor de la cadena");
console.log(undefined|| "valor de la cadena");
 
 
 
 
 //Cortocircuito AND &&

 
console.log("cadena" && "valor de la cadena");
console.log(true && "valor de la cadena");
console.log([] && "valor de la cadena");
console.log({} && "valor de la cadena");
console.log("cadena" && "valor de la cadena");
console.log(false && "valor de la cadena");
console.log(null && "valor de la cadena");
console.log(undefined && "valor de la cadena");
 



*/





//ALERT, CONFIRM, PROMPT

//esto nos sirve para interactuar con el usuario en el navegador xd

/*
console.log(window);

//No es necesario agregar un window como inicio para ejecutar esto.
// alert("Hola esta es una alerta");
//confirm("Hola esta es una confirmacion");
//prompt("Hola esta es un aviso y le permite al usuario ingresar un valor");




let alerta = alert("Hola esta es una alerta"),
confirmacion = confirm("Hola esta es una confirmacion"),
aviso = prompt("Hola esta es un aviso y le permite al usuario ingresar un valor");

console.log(alerta);
//Alert no es necesario pasarlo a variable por que su valor en la consola siempre sera Undefined.
//en cambio los otros dos de esta clase no.
console.log(confirmacion);
//El aviso si se le entrega un valor y lo cancelas su valor en la consola sera null (null).
console.log(aviso);
*/








//EXPRESIONES REGULARES
/*Que son?
Son una secuencia de caracteres que forman un patron de busqueda,
principalmente usado para las busquedas de patrones
de cadenas de caracteres. Esto te puede servir para tipo un correo
donde para que el remitente en sus datos solo pueda poner datos como letras exeptuando
a los los caracteres especiales u otra cosa por ejemplo, para esto sirven las 
expresiones regulares.


https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
*/

/*
let cadena = "Lorem Sexo ipsum sna anal 4 sexo sexo de perrito en el monte yo que se"

//Primera forma de como llamar una expresion regular
//let expReg = new RegExp("sexo", "ig"); //Dentro de esto siempre hay una bandera, tipo que le indiques que caracteres reonocer y eso, hay mas arriba en os links que deje arriba siuuuuuuuuu


//Segunda forma de como llamar una expresion regular
let expReg2 = /sexo{1,2}/ig; //(ESTE ES EL FORMATO MAS USADO, recorda un codigo mas limpio y legible va a ser el mejor aca)
//Hay caracteres especiales que se pueden poner juntos a el metodo para hacer x funcion yo que se

//Metodos que veremos acá, .test y .exec

//El metodo .test solo te enviara un boolean
//console.log(expReg.test(cadena));
//El metodo .exec te enviara mas informacion sobre ello, como posicion, palabra buscada etc
//console.log(expReg.exec(cadena));

console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));


 */






 //FUNCION ANONIMA AUTOEJECUTABLE
 /*Esta es casi igual que una funcion normal, pero con 
 la diferencia de que esta se ejecutara automaticamente.
 Esta consta así: (function(){});
 /*
Esta ira encerrada en parentesis y lo demas es como una funcion normal
Nota: no es necesario usar tanto los punto y coma pero en estos casos sí, pq?
es una funcion anonima autoejecutable y si no lo haces, harás una concatenacion de varias fumciones autoejecutables
y haras un caos en tu codigo (supongo que ya sabes que el punto y como (;) sirve 
separar tu codigo xd).
*/
 
/*
//Formas de funciones anonimas autoejecutables 

//Clasica
(function(){
    console.log("Hola, soy una FAA clasica")
})();

//La Crockford
((function(){
    console.log("Hola, soy una FAA CrockFord")
}))();

//Unuaria
+function(){
    console.log("Hola, soy una FAA Unuaria")
}();

//Facebook
!function(){
    console.log("Hola, soy una FAA Facebook")
}();








/*Modulos Import and Export 

Esto que es?, esto es un coso que te ayuda a importar un codigo
de una ubicacion x, por ejemplo: en una carpeta tenes varios codigos y queres 
uno en otro nuevo y asi xd
pues solo usas el metodo? Import y Export, seleccionas la 
parte de cpdigo que gustes con un Import yyyyy pues en el codigo 
deseable donde quieras el codigo (aghhhh) pues solo lo
importas poniendo la ubicacion de este tipo:


 Hay una carpeta que tene dos codigos Aritmetica y Modulos (como ejemplo).
 (los archivos pertenecen a una misma carpeta)

 Aritmetica contiene:

 function sumar (a + b){
     return a + b
 };

 function restar (a - b){
return a - b
 };


Modulos contiene:

Console.log("Bienvenido a modulos, inserta acá el modulo");




//AHORA ESTO MODULOS CON MODULOS

NOTA: TODO ESTO SERA EJEMPLIFICADO EN OTRA CARPETA y etc xd


Aritmetica.js contiene:

 export function sumar (a + b){
     return a + b
 };

 export function restar (a - b){
return a - b
 };


Modulos.js contiene:

Console.log("Bienvenido a modulos, inserta acá el modulo");

import {sumas y restar} from "./Aritmetica.js";

console.log (sumar(8,2));
console.log (restar(12,2));

u o agrupamos o englobamos todo esto a un objeto {}


Aritmetica contiene:

 function sumar (a + b){
     return a + b
 };

 function restar (a - b){
return a - b
 };


 export const aritmetica = {
     sumar,
     restar
 };



Modulos contiene:

Console.log("Bienvenido a modulos, inserta acá el modulo");

//(El .js es clave pa)

import {arirtmetica} from "./Aritmetica.js;"

console.log(aritmetica.sumar(8, 2));
console.log(aritmetica.restar(10, 2));





// En los "export default" no hay necesidad de que 
tengas que mandar un import para exportar una function, solo con un "export default" es
 suficiente a 

 Nota: solo puedes tener un export default (pongamoslo a prueba xd)
Nota: Con el export default no puedes mandar a llamar varias functions como ejemplo
Nota: SI quieres llamar variables con el export default tenes que hacerlo simplemente con la variable (no con sus valores) de lo contrario no funcionara,
//No al momento, Nota2: Primero se hace la declaracion y despues el export default (en los export clasicos no es necesario pa)

//Las unicas cosas que aceptan esto normalmente serian las functiones y las clases 


METODOS AS  (nuevo alias)
esto dentro de los modulos sirve para dar nuevos nombres a un modulo y pues se puede llamar por su nuevo nombre en cambio esto no funciionara


*/



/* 
const correos = ["	tonydurancompean8@gmail.com,
gaspargardunoananeftaly@gmail.com,
ricardo.cedillo.esc@edomex.nuevaescuela.mx,
ximtrooste@gmail.com,
maoadh09@gmail.com,
jessicaalonso180@gmail.com,
maryperezc07@gmail.com,
natabm310@gmail.com,
ruizrorrin@gmail.com,
alanhervaz50@gmail.com,
mariajose.martinez.esp@edomex.nuevaescuela.mx,
alexitosolares88@gmail.com,
dani18.sof@gmail.com,
compean21@hotmail.com,
moralesjassiel141@gmail.com,
mirandamiranda60229@gmail.com,
josuedavidvelasquez05@gmail.com,
yvysuarez01@gmail.com,
antuan.zenteno12@gmail.com,
serra1520luis@gmail.com,
sanchezcarito56@gmail.com,
urbinamartinezcarolina@gmail.com,
edsammael@gmail.com,
brandoncuero6@gmail.com,
barbyfragoso9@gmail.com,
rc3282948@gmail.com,
ocampoitzy9@gmail.com,
miriamruiz70700@gmail.com,
alanaparicio2000@gmail.com,
lizetteperez9@gmail.com,
nellycas045@gmail.com,
carmendavilac24c24@gmail.com,
miramoneder1@gmail.com,
kevin.reyes.ara@edomex.nuevaescuela.mx,
priscilaesmerldazacarias54@gmail.com,
sg4936498@gmail.com,
oscar.eze.villor02@gmail.com,
ximenadelarosacarranza@gmail.com,
jobcaballero610@gmail.com,
juan.luis.rodriguez.lopez07@gmail.com,
loremen0491@gmail.com,
delacruzgonzalezdaniel307@gmail.com,
ko8421472@gmail.com,
chuchu.san.sal.2007@gmail.com,
paolayunuenrodriguezhdez@gmail.com,
ricardoess33upc@gmail.com,
julissavt08@gmail.com,
karymond83@gmail.com,
abigailvazquezmesa177@gmail.com,
danaolivares26@gmail.com,
jlpr5633@gmail.com,
emilianagize@gmail.com,
hannaxymena@gmail.com,
tovarluis397@gmail.com,
ara2503@hotmail.com,
colinsharonperalta@gmail.com,
zagacetabarcenasbernardocesar@gmail.com,
denissegundo922@gmail.com,
ivonmarelig@gmail.com,
elizzt0808@gmail.com,
d7291072837@gmail.com,
alexisgeobanirodriguezdelpilar@gmail.com,
fragayamileth2@gmail.com,
lanenasanma07@gmail.com,
taviem126@gmail.com,
sara.cruz.mor@edomex.nuevaescuela.mx,
esquivelsalcedoa@gmail.com,
naomialvarez0912@gmail.com,
marthasantiago499@gmail.com,
galindopepinillo@gmail.com,
slyadrian2007@gmail.com,
mahliortegalaluna@gmail.com,
ash.rodriguez.my.28@gmail.com,
jimenaitzelbenitez@gmail.com,
bolanosaraceli000@gmail.com,
jesusorivero@gmail.com,
shadaycuevas69@gmail.com,
angelaquinvilchis@gmail.com,
totoguzman2006@gmail.com,
albertoch29077@gmail.com,
mari84posa@gmail.com,
angelicagarcia110907@gmail.com,
laratadeo013@gmail.com,
alicyare@gmail.com,
silviaavilaramirez36@gmail.com,
mirinda1899@gmail.com,
lucksanchez88@gmail.com,
alexo.hdez.2014@gmail.com,
jesusdoblado32@gmail.com,
yanezirais9@gmail.com,
yuremvalle06@gmail.com,
sandramartinez.gaspar@gmail.com,
dani0729mc@gmail.com,
monserivera056@gmail.com,
gustavo.romero0627@gmail.com,
anuar.jaelh.07@gmail.com,
rosycuadros73@gmail.com,
fernandaheresteban03@gmail.com,
kshsuansjs@gmail.com,
elizabethtormenz@gmail.com,
galvankarla197@gmail.com,
salgadoimanol21@gmail.com,
aaaalicia.moma@gmail.com,
saddaifabricio@gmail.com,
jean.vargas.cam@edomex.nuevaescuela.mx,
xXlcococo07Xx@gmail.com,
manuel.tapia.arr@edomex.nuevaescuela.mx,
em757171@gmail.com,
moringarcia30@gmail.com,
davideduardoescamilla5@gmail.com,
cruzjoelbalbuenavazquez@gmail.com,
ismazepeda11@gmail.com,
gonraalex23@gmail.com,
reyna.lopez.dur@edomex.nuevaescuela.mx,
mariafernandarojasabundis@gmail.com,
ealondrash06@gmail.com,
zacariasjoaquinalfonsosalvador@gmail.com,
daylan140807@gmail.com,
metalinguistica7w7xdxx@gmail.com,
grhgalvan@hotmail.com,
alan.romero.mz1@gmail.com,
cris20072305@gmail.com,
ocampocortezn@gmail.com,
wonder.woman.epic@gmail.com,
oscar.mondragon.vil@edomex.nuevaescuela.mx,
angelcortesh@outlook.com,
jennifervshhs@gmail.com,
yuritzi.medina.pal@edomex.nuevaescuela.mx,
mel250806@gmail.com,
aidecarrilloramirez@gmail.com,
pepeesquivelreyes26@outlook.com,
cirnevictoria76@gmail.com,
diegoaguilar42017@gmail.com,
chimureynabisu@gmail.com,
adyflowerss21@gmail.com,
sebastiangutierrezaxel@gmail.com,
carlos.daniel.sosa.galicia@hotmail.com,
2ddavidla@gmai.com,
rodrigocardenas501@gmail.com,
urielpedrazarosales06@gmail.com,
yoselintorres053@gmail.com,
santoyoespinozalorenaitzel@gmail.com,
fernanda.rodriguez.cer0311@edomex.nuevaescuela.mx,
md8216977@gmal.com,
tovarfierro@gmail.com,
angelurieldelacruz5@gmail.com,
andreamichelbarreraluna841@gmail.com,
marcialsebastian15@gmail.com,
dm073828@gmail.com,
ep943748@gmail.com,
moralesgabrielgarcia2007@gmail.com,
ulisesfernandogarciaarias@gmail.com,
cruzcruzadriana456@gmail.com,
limartinez6612@gmail.com,
ithanmoreno98@gmail.com,
apolo.65.65@gmail.com,
memu041109hmcndra0@bggem.mx,
sara040615hdfncba4@bggem.mx,
marlenocadiz06@gmail.com,
sgyisus0@gmail.com,
morenoyoltzin948@gmail.com,
axelmm078@gmail.com,
camilamarianmendozaaguilar@gmail.com,
retamagomezdavid@gmail.com,
estradaesqui@gmail.com,
venanciodrosalba@gmail.com,
marco.camarillo290@gmail.com,
valitacruzglez@gmail.com,
pielroja86@gmail.com,
mariana2007zc@gmail.com,
dm.bandala13@gmail.com,
gustavogaliciaxd@gmail.com,
alexa13yoaly@gmail.com,
juanantolin40@gmail.com,
moragan2102@gmail.com,
barriosmedelmelany@gmail.com,
marittapia2@gmail.com,
karlysanjuan279@gmail.com,
mcs180480@gmail.com,
geraldindelacruz1@gmail.com,
mmelodylizbeth@gmail.com,
halo5juan42@gmail.com,
yaretzi4123@gmail.com,
angelesangie52@gmail.com,
nelligarcias69@gmail.com,
mariana.iglesias.san@edomex.nuevaescuela.mx,
maria.calderon.gom@edomex.nuevaescuela.mx,
anahimartinezcaselin@gmail.com,
joshuagomez.jua07@gmail.com,
snzxkwms@gmail.com,
nataly.viramontes.52@gmail.com,
apariciolugojohnalexander@gmail.com,
alejoramirezjaqueline@gmail.com,
aleriluz06@gmail.com,
edith.eg401@gmail.com,
quesopanela04@gmail.com,
lalaflores.q@gmail.com,
kevin.perez.tor0520@edomex.nuevaescuela.mx,
garciaiuem@gmail.com,
yahircmx11@gmail.com,
danna.giovanna.02@gmail.com,
mspolar26@gmail.com,
america.bovadilla.rio@edomex.nuevaescuela.mx,
jenni.arroyovite@gmail.com,
mbobadillazam2007@gmail.com,
rocio.garcia.xic@edomex.nuevaescuela.mx,
romina.gar22@gmail.com,
san.moralesluna@outlook.es,
gabiterron16@gmail.com,
rubenortiz0308@gmail.com,
miis00.100@gmail.com,
navaf5462@gmail.com,
angelnunes478@gmail.com,
leonelriv1507@gmail.com,
agpr17015@gmail.com,
reyesmelisa959@gmail.com,
berenicetoriztapia@gmail.com,
cervaaron28@gmail.com,
mhmoises2022@gmail.com,
antoniajuan6385@gmail.com,
jonathancruz0245@gmail.com,
juanpablomandujano7@gmail.com,
esnadi06@gmail.com,
andryckalcaya9@gmail.com,
juanpablo.jj2017@gmail.com,
liancandarabelian@hotmail.com,
fabian.serrano.cas@edomex.nuevaescuela.mx,
antoni870601@gmail.com,
gonzalezdiegoeleazar@gmail.com,
ernestoramon405@gmail.com,
alexviscaino35@gmail.com,
rmoises60romero@gmail.com,
juliage0001@gmail.com,
lopezcruzkarina8@gmail.com,
leslirenata7@gmail.com,
nebaigonz@gmail.com,
ysus46992@gmail.com,
quetzalrous@gmail.com,
pinaingrid812@gmail.com,
enriquemillantorres5@gmail.com,
carloaabelherrerasanchez@gmail.com,
pamelalizbethbarreraflores@gmail.com,
arturovelazgama1704@gmail.com,
diegoquintana2507@gmail.com,
melanysugeygonzalezortiz@gmail.com,
mane123457788@gmail.com,
martinezjimenezkaren315@gmail.com,
axeldavidrivera.montesori@gmail.com,
aguirrevane0724@gmail.com,
dulceadalireyesflores@gmail.com,
momajuan513@gmail.com,
nohemiencarmacion@gmail.com,
ycoronamillan08@gmail.com,
itzelths07@gmail.com,
gloriamartinchavez@gmail.com,
doriana.0723@gmail.com,
clondorado@gmail.com,
ap7908816@gmail.com,
luis.nava.leg@edomex.nuevaescuela.mx,
s.alvaradomorquechoo@gmail.com,
corteezalberto@gmail.com,
amauryjardon3@gmail.com,
ag7156121@gmail.com,
escobarcesar445@gmail.com,
galvanmariafernanda4@gmail.com,
mitiernoangelito828228@gmail.com,
arumyap032@gmail.com,
atencodaniela2@gmail.com,
juandiegogutierrezjimenez613@gmail.com,
alanis22zaid@gmail.com,
abigaillopezflores19@gmail.com,
chbailonanastacio@gmail.com,
pularosales54@gmail.com,
uriel.garduno.lop@edomexnuevaescuela.mx,
mario.zamflo.0916@gmail.com,
franciscojaviervaldezdelacruz@gmail.com,
tshuk06abishiro13@gmail.com,
mabelsantana0718@gmail.com,
uli.alex.ng@gmail.com,
alecksromdiz@gmail.com,
vasemario@gmail.com,
yeseniagarcia40383@gmail.com,
torresdelacruzjazmin@gmail.com,
erickxdgallegos@gmail.com,
juancarlosroblesmartinez7@gmail.com,
sakuranaruto233@gmail.com,
galindopenac@gmail.com,
emilianozepedaruiz@gmail.com,
ashleyantomp@icloud.com,
lospolinesio777@gmail.com,
erikizzz2020@gmail.com,
leopropama@gmail.com,
jazminiglesiascruz4@gmail.com,
dulcegardunoe@gmail.com,
aldairarciniega438@gmail.com,
fatimuxhaque@gmail.com,
yahiremmanuelrosalesgonzalez@gmail.com,
magalydelaluz99@gmail.com,
fabianram1214@gmail.com,
leonardo.paredes.mar@edomex.nuevaescuela.mx,
muno_fer@hotmail.com,
yanezjesusalfredo@gmail.com,
15josueaguilar02@gmail.com,
wjvh10@gmail.com,
bebegotsue@gmail.com,
Sterkarla.1005@gmail.com,
antoniosernaaxelfrancisco3a@gmail.com,
hverito89@gmail.com,
marely.sierra.aco@edomex.nuevaescuela.mx,
natalynancy25@gmail.com,
belemvargasarguello2603@gmail.com,
nyasmin115@gmail.com,
sil13quet07@gmail.com,
russell_lua@hotmail.com,
angela.fuentes.gut@edomex.nuevaescuela.mx,
juarezortizmaria4@gmail.com,
catecismo65@gmail.com,
jesusreyesbr12345@gmail.com,
ronyortizreyes25@gmail.com,
aphrilyenamihernandezjuarez@gmail.com,
leidianamartinez319@gmail.com,
yoselinemercado60@gmail.com,
esmeeosorio4@gmail.com,
titan180315@gmail.com,
ivan.pineda.hue@edomex.nuevaescuela.mx,
db2823793@gmail.com,
alex.mike.dg@gmail.com,
lizethdonan7@gmail.com,
gutierrezmalpicaalexis796tm@gmail.com,
eliaguilar319@gmail.com,
arizenilcia@gmail.com,
levyjonathan865@gmail.com,
juarezivan2703@gmail.com,
avilaselene777@gmail.com,
benijb2407@gmail.com,
monse101523@gmail.com,
paolacast285@gmail.com,
alejandroamores2007@gmail.com,
castbrandon345@gmail.com,
croswaldo0.k@gmail.com,
marianayoselinriveraaragon@gmail.com,
rgudino@equis.org.mx,
natalita01052007@gmail.com,
arletocampo2809@gmail.com,
americavazquez799@gmail.com,
benllilopez12@gmail.com,
mabs050923mmcrsla1@bggem.mx,
castropablojop@gmail.com,
iratzealejandramorenovelazquez@gmail.com,
valeria.sanchez.0802@gmail.com,
ztrellagar@gmail.com,
pollyespina1007@gmail.com,
abrahamventura965@gmail.com,
sebastianalejandra499@gmail.com,
javieradolfohernandezramirez@gmail.com,
adriyan.24.mar@gmail.com,
romanticasanantonio@outlook.com,
brayancordova553@gmail.com,
huixotitla1ca@gmail.com,
zaraanzaga@gmail.com,
gomezsanchezjosemanuel99@gmail.com,
noriegachristian843@gmail.com,
ykguadalupe@gamail.com,
andrade061085.sr.sr@gmail.com,
Santillanh019@gmail.com,
veronica.garcia.rey@edomex.nuevaescuela,
mirandajuli136@gmail.com,
leninagyv@gmail.com,
nacdjsnak@gmail.com,
deivalcrod@gmail.com,
colinjesus892@gmail.com,
itzelmeza069@gmail.com,
mar676219@gmail.com,
nauri02014@gmail.com,
lord060622mmcpdna9@bggem.com,
luzhaydee024@gmail.com,
elvegangel.12@gmail.com,
estrellayoaly35@gmail.com,
monmalgo121187@gmail.com,
edgar.lagunag@hotmail.com,
erikher.dom.2@gmail.com,
pr5702627@gmail.com,
moralesgomezabrahamrogelio21@gmail.com,
cruzene762@gmail.com,
medinanely82@gmail.com,
azaelcortes07@gmail.com,
sofiahernandez191107@gmail.com,
janynaguilar@gmai.com,
ac904832@gmail.com,
arauzmariadejesus49@gmail.com,
mendeztst17@gmail.com,
joseangelalonzogodinez@gmail.com,
esmeraldalucero998@gmail.com,
tatinani4236@gmail.com,
danieljimenez5626@gmail.com,
javieralvaradoyolanda71@gmail.com,
deysi.07morones@gmail.com,
juanpablosalazar855@gmail.com,
reaj80@hotmail.com,
resenval.ros78@gmail.com,
xoxy80@hotmail.com,
floragarrido57@gmail.com,
carolina.orihuela.carapia01@gmail.com,
karenciriaco117@gmail.com,
rruizsanabria88@googlemail.com,
chechemerc@gmail.com,
hernandezmonserrat84412@gmail.com,
segundoanabel79@gmail.com,
heri271007@gmail.com,
smery452@gmail.com,
maria2007ramirez21@gmail.com,
cg2384374@gmail.com,
dylan.issac.sg@gmail.com,
mateorojasd1@hotmail.com,
danidaniela.rani@gmail.com,
karina.gabriel.dom@edomex.nuevaescuela.mx,
erickzoco27@gmail.com,
noemisilvaespejel00000@gmail.com,
hernandezcarrillojosearturo96@gmail.com,
floreszahir160@gmail.com,
cg2834374@gmail.com,
mateoramirez5554@gmail.com,
gokujjjluis360@gmail.com,
carlangascamachobrigido@gmail.com,
nainalexandersg@gmail.com,
nadiamedinad@gmail.com,
itzelbautistabonce@gmail.com,
maryvega1984@gmail.com,
ortizyahir7629@gmail.com,
dariodhoyos@gmail.com,
guadalupejuliaortizbernal53@gmail.com,
diazdannapaola8@gmail.com,
laurgiovanni302@gmail.com,
kikags06@gmal.com,
iselatovar933@gmail.com,
ROELISSAIG@gmail.com,
valdescamika890@gmail.com,
romerogael275@gmail.com,
anaurbina726681@gmail.com,
angel.martinez.val0419@edomex.nuevaescuela.mx,
dafne050207@hotmail.com,
alexisgtzm2020@gmail.com,
arroyodianapaola0@gmail.com,
santiagomoralesromero7@gmail.com,
tegf060313mdflrra5@bggem.mx,
yacitperez1265@gmail.com,
kublaiestrada@gmail.com,
yulivaldezmon123@gmail.com,
strangearredondo@gmail.com,
alinndamoran2206@gmail.com,
at9170301@gmail.com,
marisol.vazquez.sal@edomex.nuevaescuela.mx,
jovanymillan5@gmail.com,
britani120307@gmail.com,
karimegasca78@gmail.com,
gabymperalta708@gmail.com,
demillanpaloma20075@gmail.com,
alexf2102829@gmail.com,
quirozvaleria350@gmail.com,
joseph.coronel.yes@edomex.nuevaescuela.mx,
crispg53@gmail.com,
dighrdz2000@gmail.com,
paubonigarcia@gmail.com,
yulianayanez0@gmail.com,
gmichell666@gmail.com,
alexacurielflores8@gmail.com,
sanchezrobledoesmeralda@gmail.com,
lh324902@gmail.com,
fatfalcon14@gmail.com,
tenagelavod13@gmail.com,
geroscastillo32@gmail.com,
palomaarana12@gmail.com,
alejanmugue15@gmail.com,
lugoivanof12@gmail.com,
brisaserratos122@gmail.com,
Edwinjesus299@gmail.com,
myg_00@hotmail.com,
noguezmariancamila@gmail.com,
cristobalcabrearajonathandaniel@gmail.com,
nav7277.an@gmail.com,
josue.martinez.cho@edomex.nuevaescuela.mx,
fannyesparza0847@gmail.com,
e.alejandra.r.v@gmail.com,
brisfloresreynoso@gmail.com,
camachoallison854@gmail.com,
cuevasdiana141@gmail.com,
mienano2007@gmail.com,
Ddmaris0705@gmail.com,
male.sanch47@hotmail.com"]
 */

