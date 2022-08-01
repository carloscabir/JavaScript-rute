/* ******* Curso Js 60. WEB APIs ****** */

//web APIs
/* https://developer.mozilla.org/es/docs/Glossary/DOM */
/*  https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model */
/* https://developer.mozilla.org/es/docs/Web/API/CSS_Object_Model */

//console.log(window);
//console.log(document);

//Un ejemplo de una API ya integrada en el navegador speechSynthesis  miau
/* 
const hablar = (texto) => {
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}

hablar("oye culona..... te amo"); */

/* 
const talk = (txt) => {
speechSynthesis.speak(new SpeechSynthesisUtterance(txt));
}

talk("Bueno, eran épocas distintas. Ella quería dejar su mundo por mí y las circunstancias me cegaron con cosas innecesarias. Porque aunque mi mundo estaba cambiando por completo, yo sentía que se detenía. Y mientras ella esperaba por mí, yo en mi desesperación le di la espalda. Y según le prometí que la amaría en esta vida y en la siguiente. Y ahora, después de que el mundo se detuviera y nos encerráramos en nosotros mismos. Abro la puerta y veo un mundo distinto, un cielo distinto, una vida distinta. Como que ahora me arrepiento demasiado y en estos momentos. Lo dejaría todo para volar hasta donde ella está para amarla ahora. En la vida que sigue, porque la vida sigue y ya está");
 */

//Introduccion al DOM
/* 
//Formas de sacar ramas del DOM (nodos mejor dicho xd)
console.log("****ELementos del documento****");
console.log(window.document);
console.log(document.head);
console.log(window.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.fomrs);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
    console.log(document.getSelection().toString());

}, 3000)
document.write("<h1>Hola Mundo desde el DOM </h2>")


 */

/* 
//DOM: NODOS, ELEMENTOS & SELECTORES 
//Primero que nada no tienes que confundir las etiquetas HTML (que para Js es un elemnto) con un nodo
//Hay diferentes tipos de nodos como: los comenterios HTML son nodos, las etiquetas como etiquetas textuales parrafos, encabezados son nodos
//pero no te rompas la cabeza, puedes buscar los nodos en mdn node.nodeType


//Los nodos que aqui nos van a interesar por la interaccion de HTML son los Node.ELEMENT_NODE (nodos de tipo elemento) y los Node.TEXT_NODE (nodos de tipo texto)


//Ahora si podemos revisar cuales son los metodos del DOM para poder guardar elementos HTML en variables de Js


//Elementos que antes se utilizaban, pero que fueron remplazados por elementos mas optimos


//Elemento para capturar elemetos por nombre de etiqueta
console.log(document.getElementsByTagName("li"));  //Recuerda, esto no es un arrglo, es una coleccion HTMl, parecida, pero no xd

//Elemento para capturar elementos por nombre de clase
console.log(document.getElementsByClassName("card")); //Como explicitamente este elemento dice que vas a buscar la clase por su nombre, no es necesario ponerle un punto miau

//Elemeto para capturar elementos por la etiqueta name=""
console.log(document.getElementsByName("nombre")); //Recuerda que a la hora de hacer elementos de tipo formulario, es importante colocarle la etiqueta name, por que a la hora de procesar la informacion del lado del servidor, el lenguaje del servidor la detecta como una variable tipo post o get, dependiendo el envio de formulario que hayas hecho. YYYy esto nos devolvera un NodeList, parecido devuelta un arreglo pero no lo es, si no un elemento que tiene que ver con el DOM

//Elemento para poder capturar elementos el Id que le hayamos asignado
console.log(document.getElementById("menu"));  //Ahora por que este elemnto esta en singular?, recuerda que los identificadores son solo para un objeto unico; al igual no es necesario poner algo antes del identificador, debido a que lo estamos buscando explicitamente por su identificador


// *** Estos cuatro han sido remplazados por dos metodos muy populares***

//Consulta de selector
console.log(document.querySelector("#menu"));  //Lo que hace es recibir como parametro un selector valido de CSS, es decir, un Id, Clase, etiqueta HTML que este dentro de una Id u o Clase y Ids (cualquier selector valido que no sean seudoclases o seudoelementos); 
//Pero a diferencia de los de arriba, acá si tienes que especificar lo que quisieses buscar con el "." o "#"

//Entonces, getElementById queda obsoleto no?, no, de hecho en cuestion de rendimiento el mas rapido getElementById, así que no xd


//Ahora vamos a imprimir con otro metodo jiji
console.log(document.querySelector("a"));  //Aqui solo mandaremos a traer a solo un elemento que es Seccion 1, por su especificacion. Ahora veremos para mandar a traer a todos los elementos

//Todos y el metodo que viene remplazando a los tres primeros de arriba.
console.log(document.querySelectorAll("a"));  //De nueva cuenta esta es una NodeList y no un Arreglo 

//Los dos elementos que se utilizan mas en la industria serian.
//.getElementById (mandar a llamar un NodeList por su Id (identificador)) y .querySelenctorAll & .querySelector (mandar a llamar a traer como por Clases, Etiquetas y por Nombre. Este remplazando los tres primeros metodos how)

//cierto, los querySelector, nos envian una NodeList mientras que los primeros metodos (getElementsBy(x)) nos devuelven una HTMLCollection (exepto getElementByName & Id) xd

//Estos son como los Arrays pero no lo son, así que se pueden recorrer xd
console.log(document.querySelectorAll("a").length); 

document.querySelectorAll("a").forEach(el => console.log(el)); 


console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card")); //Aqui imprimimos todas las clases existentes con el nombre card 
//Aqui para buscar dicho coso, pues ponemos la posicion de dicho elemento dentro de la impresion a un lado de la busqueda con unos corchetes "[]" y su posicion (esto aplica si es que hay varios selectores de CSS)
console.log(document.querySelectorAll(".card")[2]);

console.log(document.querySelectorAll("#menu li")); //Aqui especificamos que selector de CSS queremos imprimir (esto aplica si es que hay varios selectores de CSS en una misma clasea)
console.log(document.querySelector("#menu li"));

//Estos tres elementos los vamos a utilizar durante las clases en adelante así que tienen que quedar claro
//getElementById() Para buscar un elemento valido de Id
//querySelector() Para buscar UN elemento valido, como Clases, Etiquetas, Y por nombre
// Y querySelectorAll() Para buscar Todos los elementos 
// querySelectorAll(.property[]) para buscar una posicion 

 */

/* 

//DOM: ATRIBUTOS Y DATA-ATTRIBUTES
//aqui veremos a como interactuar con lo de arriba xd

//Los cosos como los href, type, name, src, charset; son atributos que tienen las etiquetas HTML

//Recuerda que desde HTML 5, podemos crear nuestros atributos
//Al igual para crear nuestros data atributes, HTML solo pide que colequemos al inicio data, guíon medio y ahí el dato que queramos. P.e: data-description="" 




//Ahora vemos como acceder a un atributo de la etiqueta HTML 
//pues primero va el document indicando el documento, despues el documentElement haciendo referecia a un elemento, y para el atributo, con la notacion del punto (y como los atributos son de una sola palabra pues solamente ingresamos en nombre del atributo tal cual yya) 
console.log(document.documentElement.lang);

//Otra manera que digamos que es mejor (por que aveces pasa que no pasa lo mismo que te traiga el mismo valor con la notacion del punto que con esta)
//Los elementos tienen un atributo que es get.Attribute y pues le pasas el nombre del atributo, que este es lang 
console.log(document.documentElement.getAttribute("lang"));
//Pero no siempre es el mismo, por ejemplo en los enlaces ahí es donde podemos ver la principal diferencia



//Aqui capturamos la barra de estado u o dato x (del a: DOM) con esto, por su selector o nombre de su clase 
console.log(document.querySelector(".ola").href); //Posteriormente de ingresar el selector, fuera de los parentesis indicamos que queremos obtener (si es que hay mas elementos en esa clase, en este caso si)

//Ahora con el getAttribute, se que es como que una forma mas verbosa, pero es la correcta por obtener atributos de un documento HTML
console.log(document.querySelector(".ola").getAttribute("data-description"));
console.log(document.querySelector(".mdl").getAttribute("data-description"));

//Bueno ya aprendimos a obtener los atributos de un elemento
//de HTML, esto lleva una teoria similar a la de los getters
// y setters, asi que vayamos ayá :D

//Ahora veremos como establecer un nuevo valor a los atributos

//con la notacion del punto seria así

document.documentElement.lang = "es";
console.log(document.documentElement.lang); //comprobacion de que si fue cambiado el valor

//La otra es con un setAtribute(), obviamente si tenemos un getAttribute vamos a tener esto, similar a las clases que ya mencione 

document.documentElement.setAttribute("lang", "en");  //getAttribute recibia el nombre del atributo, setAttribute recibe el nombre del atributo y el nuevo atributo miau (dos parametros)
console.log(document.documentElement.lang);



//Ahora vamos a guardar valores en variables, esto se puede hacer en let y const; pero, por que const?
//No importa si con Js o CSSle hacemos algo a ese elemento DOM, va a seguir siendo el mismo en nuestro proyecto, pero si gustas usar let adelante jiji

//Otra regla importante por asi decirlo. Algunos desarroladores al momento de instanciar una nueva variable de tipo DOM, lo hacen con el simbolo de dolar antes de poner su nombre, como un identificador para ya saber de que se trata esa variable. Más que nada un identificador
//Si es que has visto codigos haci, y no incluyan ninguna libreria, es por eso, que hacen referencia a un elemento del DOM
const $linkDOM = document.querySelector(".ola"); 

//Ahora un elemento que haga que abramos una nueva pestana con Js (un ejemplo de dar un nuevo atributo este elemento)
//Con target y _blank
$linkDOM.setAttribute("target", "_blank");
//Una buena practica de HTML para hacer esto y evitar algun tipo de hackeo por dependencia a esta pagina, aplicariamos rel y noopener
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://youtu.be/M0YKOq_lWSQ");
 
//recuerdas esas clases que tambien tenian los metodos has y delete, pues aqui tambien!!!

console.log($linkDOM.hasAttribute("rel"));
console.log($linkDOM.removeAttribute("rel"));
console.log($linkDOM.hasAttribute("rel"));



//Ahora vamos a trabajar con los data-attributes
//metodo get
console.log($linkDOM.getAttribute("data-description"));

//Ahora con notacion del punto, cabe a clarar que DOM, hace un mapa de los data-attributes y los guarda en una collecion llamada dataset
console.log($linkDOM.dataset);  //Devolvera que sera un stringMap, un mapa xd //Y devolvera todos los mapas que estan donde buscas xd
console.log($linkDOM.dataset.description); //Aca solo imprimiremos un dato solo


//Como establecer nuevos valores
//metodo god
$linkDOM.setAttribute("data-description", "Modelo del Objeto del Documento");
console.log($linkDOM.getAttribute("data-description"));

//notacion de punto
$linkDOM.dataset.description = "Hola Mundo"
console.log($linkDOM.getAttribute("data-description"));
 //haciendo lo final del anterior, simplemente lo mismo, pero con el data xd
console.log($linkDOM.hasAttribute("data-id"));
console.log($linkDOM.removeAttribute("data-id"));
console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.setAttribute("rel", "noopener");

console.log($linkDOM.hasAttribute("rel")); 

*/

/* 
//DOM: ESTILOS Y VARIABLES CSS
//Hoy veremos como intereactuar con archivos CSS, como estilos 

//Primero instanciamos nuestro link como arriba
const $linkDOM = document.querySelector(".ola", "dom"),
$linkMDL = document.querySelector(".mdl");
//Para acceder a los elementos de CSS con DOM en Js, lo hacemos con la notacion del punto (despues de asignar nuestro valor obviamente)
//Importante; lo tenes que hacer con la notacion del punto, aquí ya no importara mucho el getAttribute.
//Y en la notcion del punto agregamos .style, que nos devolvera un mapa de todos los elementos, y pues los unicos atributos que van a estar llenos van a ser los que tenga nuestro elemento CSS (style)
console.log($linkDOM.style); //Dato, normalmente en CSS para separar nombre de un estilo (si es que es de mas de una palabra), el DOM lo va a interpretar o imprimir de forma 'lowerCamelCase', por la razon de que si hay un guion, puede que Js lo interprete como una resta xd

//dato: es mas frecuente ver la notacion del punto (.style) que ver a getAttribute
console.log($linkDOM.getAttribute("style")); //Hay ciertas diferencias entre distintos tipos de llamadas, el getAttribute solo nos devolvera los atributos que tenemos en el elemento, mientras que en la notacion del punto nos da un mapeo total de todo.

//Igual la forma mas comoda de estas es con la notacion del punto, pero recuerda que a la hora de llamar un atributo en especifico, lo tienes que hacer con la tecnica lowerCamelCase
console.log($linkDOM.style.backgroundColor);


//Otra manera de acceder a estilos CSS vendria siendo window.getComputedStyle("parametro"), este ocupara un parametro al que gustes acceder, en este caso el de siempre. Este devolvera un Mapa paracido al de la notacion del punto, pero este vendra con un mapeo de todo y le asigna a todos un indice (cierto, los ordena alfabeticamente)  
console.log(window.getComputedStyle($linkDOM));
//Una de las diferencias de los mapas de las computeStyles y con los styles (notacion de punto), es que en el mapa de la notacion del punto, solo les asigna valor a los atributos que si lo tienen y los que no estan vacios; mientras que en el mapa de los computedStyle, los atributos tienen el valor por defecto que les asigna el navegador (y pues obviamente los atributos que deberian estar vacios tienen el valor por defecto) mientras que los que si tienen valor en su atributo, se muestra.

//Forma de obtener solo el atributo en especifico
console.log(window.getComputedStyle($linkDOM).getPropertyValue("background-color"));

//Recuerda que como es un metodo colgado de window, no es necesario poner explicitamente window 
console.log(getComputedStyle($linkDOM).getPropertyValue("background-color"));

//Digamos que asi podemos obtener los Estilos (styles), con .style, .getAttribute("style") o .getComputedStyle(value).getPropertyValue("value")

//recuerda, que si estas definiendo un atributo dentro de un string, lo tienes que hacer con la sintaxis normal de CSS

//Ahora como definimos un atributo?, de esta manera!


//Es tipo con el setAttribute, pero aqui es con el setProperty (CSS, manejo), de la manera que tiene que quedar como: attribute.style.setProperty("text-decoration", "none"); mmmmm   //Recuerda lo que mencione arriba
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("font-family", "courier");
$linkDOM.style.setProperty("font-size", "smaller");
$linkDOM.style.setProperty("display", "block");

//tambien se puede hacer por la notacion del punto
$linkDOM.style.width ="50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";    //en la notacion del punto es neceesario hacer la tecnica lowerCamelCase 
$linkDOM.style.marginTop = "10px";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = "30px 30px 0 0";

//Mandando los estilos a la consola con los diferentes tipos de metodos que acabamos de ver
console.log("Border radius ",$linkDOM.style.borderRadius);
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM).getPropertyValue("border-radius"));
//Digamos que esto es lo basico del manejo de estilos del CSS


//Hace un par de anos se vio la llegada de las variables 
//CSS - Custom Properties (propiedades dinamicas de CSS)
const $html = document.documentElement,
$body = document.body,
$mdl = document.querySelector(".mdl");

//En el documento HTML no sabia por que los dos guiones antes de la variable, pero es para eso; asi que recuerda que, siempre antes de declarar una variable CSS tiene que tener dos guiones antes de ella

//Para acceder a las propiedades de dark-color (Custom Propiertie) se tiene que hacer con getComputedStyle(value (en este caso $html)).getPropertiyValue("propiedadad"(en este caso "--dark-color"))
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
 varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color"),  //Ahora por que estas variables no tienen el signo del dolar?, por que es una variable normal que no va a almacenar algun valor del DOM, asi que asi ta bien xd
varWhiteColor = getComputedStyle($html).getPropertyValue("--white-color"),
varSizeLarge = getComputedStyle($html).getPropertyValue("--font-size");

console.log(varDarkColor, varYellowColor, varWhiteColor, varSizeLarge);


$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;
$mdl.style.color = varWhiteColor;
$mdl.style.fontSize = varSizeLarge;


//Ahora para modificar una variable CSS 
$html.style.setProperty("--dark-color", "pink"); //No es lo que esperabas, cierto?, aqui solo le estas asignando un nuevo valor a --dark-color, pero al que se lo estabas aplicando no era a la variable $html, si no a $body
//digamos que le dimos el valor nuevo dinamicamente a html, pero no tenemos la variable actualizada actuando sobre $body, asi que actualizala y tendra el nuevo valor que le asignamos a nuestra variable
//lo que vamos a hacer es actualizar el valor de la variable para posteriormente aplicarsela a nuestro $body

varDarkColor= getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.setProperty("background-color", varDarkColor);


$html.style.setProperty("--yellow-color", "black");
varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
$body.style.setProperty("color", varYellowColor);

$mdl.style.setProperty("--white-color", "black");
varWhiteColor = getComputedStyle($mdl).getPropertyValue("--white-color");
$mdl.style.setProperty("color", varWhiteColor); 


$linkMDL.style.setProperty("background-color", "white");
$linkMDL.style.width = "50%";
$linkMDL.style.textAlign = "center"


console.log($linkMDL.style);
console.log($linkMDL.getAttribute("style"));
console.log(window.getComputedStyle($linkMDL)); 

*/

/* 

//DOM: CLASES CSS

//En esta clase aprenderemos a manejar Clases de CSS, similar a como acceder a las variables y estilos CSS
//Pensaras que se puede acceder directamente con una notacion de punto con Class; perono es asi, Class es una palabra reservada asi que no se podra, pero tendra dos alternativas que veremos adelante miau

const $card = document.querySelector(".card");

console.log($card); //Nos devolvera una referencia de 5 (creo, por que hay 5 clases usandose en nuestro HTML), y hara referencia al primero que tengamos, pienso que habra un metodo que nos devuelva todos
console.log($card.className); //Esto nos enviara el nombre de la clase, literalmente xd
console.log($card.classList); //Esto nos enviara un DOMTokenList (que es parecido a un arreglo pero NO lo es )

//Metodos para classList()


//Metodo para comprobar si es que existe una clase en un elemento
//Esto es un metodo para comprobar si es que hay una clase en dicho elemento, como si estuviesemos preguntando en la parte del Parametro de contains(), si es que tiene dicha clase como lo de abajo xd
console.log($card.classList.contains("--color-yellow")); //Nos devolvera false porque esa clase no existe en nuestro elemento
console.log($card.classList.contains("card")); //Devolvera true por que si existe esta clase en este elemento miau


//Metodo para agregar clases a un elemento HTML?
//Este metodo lo usamos para agregar clases a un elemento, indicandolo en la parte del parametro; esto se hace con el metodo add()

$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className); //Aqui comprobamos con el className si es que existen esas clases y siiiiii

//Si tenemos en metodo Add, tambien tendremos el metodo remove!

$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);

//Metodo de interruptor
//este sirve como una palanca, en el comprobamos si es que existe una clase, si existe se la quita y si no la agrega  que

$card.classList.toggle("rotate-45");   //Aqui como toggle valida que nuestra clase no existe la agrega 
console.log($card.classList.contains("rotate-45"));
console.log($card.className); //Validaciones

$card.classList.toggle("rotate-45");  //Aqui lo va a remover ya que esta en el
console.log($card.classList.contains("rotate-45"));
console.log($card.className); //Validacion
//Un ejemplo de uso para esto seria el modo oscuro, ya que como no existe dicha clase pues la va a agregar y esa clase seria un modo oscuro o modo luz por asi decirloxd


//Metodo para intercambiar alguna CLase por otra, tipo agregar una funcionalidad nueva yo que se
$card.classList.toggle("rotate-45"); //Aqui agregamos una clase x, pq no tiene ninguna xd
//Y se hace con el metodo .replace(), esto va a tener dos parametro, el primero va a ser el rempazado y el segundo el que va a remplazar, tal cual.
 $card.classList.replace("rotate-45", "rotate-135")
console.log($card.classList.contains("rotate-135"));
console.log($card.className);
//No es que le hayamos agregado la nueva clase, si no que la remplazamos por otra xd


//Si se te antoja agregar o borrar varias clases de un Elemento, ten en cuenta que las tienes que separar por comas xd 

//Agregacion y comprobacion de varias clases en un Elemento
$card.classList.add("opacity-80", "sepia");
console.log($card.classList.contains("opacity-80", "sepia", "rotate-135"));
console.log($card.className);

//Eliminacion y comprobacion de varias clases en un Elemento
$card.classList.remove("opacity-80", "sepia", "rotate-135");
console.log($card.classList.contains("opacity-80", "sepia", "rotate-135"));
console.log($card.className);

//Uso de toggle y comprobacion pq si
$card.classList.toggle("opacity-80");
$card.classList.toggle("sepia");
$card.classList.toggle("rotate-135");
console.log($card.classList.contains("opacity-80", "sepia", "rotate-135"));
console.log($card.className);

//Practicamente con esto tenemos cubierto todo sobre los metodos de manejo de las Clases CSS con la API de DOM 


const $p = document.querySelector(".p");
console.log($p.classList);

$p.classList.add("card");
$p.classList.toggle("flex");

 */

/* 

//DOM: TEXTO Y HTML

//En esta clase veremos como interactuar con el texto y el documento como tal 
//Como agregar texto a el documento HTML por medio de una Id


//Primero vamos a capturar la Id en una variable
const $whatIsDOM = document.getElementById("que-es");

//Lo que vamos a hacer es remplazar esta variable por el contenido del Id que ya esta en la variable (variable de arriba)
let text = `
<p>
El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
</p>
<p>
Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
</p>
<p>
    <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
</p>
`;

//Ahora mismo instanciaremos un metodo (innerText) para agregar contenido de una forma que no esta estandarizada, unicamente fue creada para Internet Explorer, recuerda que Internet Explorer esta obsoleto; peroo, esta si puede ser usada en cualquier navegador (PERO NO ES UN ESTANDAR A DIFERENCIA DEL SIGUENTE)
//Mientras que textCounter si es el estandar general para agregar texto a x coso

//Tres metodos con diferentes resultados jiji

$whatIsDOM.innerText = text; //Esto nos devolvera como tal el texto viendolo en la consola este tendra <br>, porque?, por que como encapsulamos esto en una TemplateString, esta reconocera las tabulaciones que estemos agregando xd yyyy
//Otro detalle es que nos devolvera el texto como tal, este no reconocera las etiquetas y pues imprimira como tal el nuevo texto xd, esta es una caracteristica de innerText y por eso es que no esta estandarizado 

//Ahora el estandar 
$whatIsDOM.textContent = text; //Aqui va a pasar lo mismo, pero aqui no se generan los <br> (tabulaciones), pero de igual no se esta renderizando como contenido HTML

//Si lo que quieres es interpretarlo - renderizarlo en codigo HTML, en lugar de textContent, tendrias que usar innerHTML, lo que hace es remplazar el contenido que tiene ese nodo lo reemplaza por contenido HTML, en este caso las etiquetas que tene 
$whatIsDOM.innerHTML = text;

//Cuando usar esto innerHTML y textContent?

//Un gran ejemplo es el chat de Youtube, si es que tratas de agregar al chat una etiqueta de HTML como con una etiqueta de una imagen que apunte a una URL, Youtube no lo permitira por que seguramente tenga una validacion para que ese input no permita que inyecte ningun tipo de codigo HTML
//Sin enbargo hay muchos chats de Soporte que si soportan codigo HTML, es decir ese input no esta validado o es asi xd
//Conclusion, si es que solo necesitas en tu input codigo HTML usa innerHTML, y si solo contenido normal pues textContent


//Hay otra propiedad que se llama ouder HTML, que lo que hara es borrar ese error de sintaxis que tenemos al momento de usar el metodo innerHTML, que nuestras etiquetas se englozan en usa sola etiqueta que no es un div o section
//Les borrara eso y inyectara por asi decirlo, a todos nuestros elementos tal cual, sin que esten encapsulados a una etiqueta con Id

//Por asi decirlo, en vez de encapsular todos nuestros parrafos dentro de uno (en este caso) y que tengan el dicho id, solo vamos a inyectar nuestro codigo tal cual 
//Cabe a aclarar que esto visualmente no se vera, solamente internamente, es decir en el codigo HTML

$whatIsDOM.outerHTML = text;

//si

 */

/* 
//DOM: Traversing _ Recorriendo el DOM
//Esto no es mas que nada una serie de propiedades que nos da el DOM
//para poder recorrer elementos teniendo referencia a un Nodo, receuerda que hay 12 tipos de Nodos diferentes, si tenes dudas checha mdn
//p.e, cuando tienes un codigo de HTML inventado y pasas de una linea a otra, pues ese espacio es un tipo de nodo; peroo a nosotros quiza no nos va a interesar capturar esos tipos de nodos, como las etiquetas <li> sí por ejemplo xd


//Este DOM Traversing va a ser enfocado a los elementos, a las etiquetas HTML como tal, si tu gustas capturar otro dato, deberiamos de hacerlo con otro metodo para dicho nodo

const $cards = document.querySelector(".cards");

console.log($cards);
//Si queremos hacer referencia a los hijos de esta Section se haria de la siguente forma
console.log($cards.children); //Obviamente nos devolvera a sus hijos, que vendrian siendo todos los elementos que hay dentro de esta Section (en este caso xd)
//Si quereis hacer referencia a un hijo como tal, tendrias que hacerlo con la notacion de los corchetes [number]
console.log($cards.children[3]);

//Si quieres saber el Padre de dicho elemento pues usas el metodo parentElement
console.log($cards.parentElement); //Devolvera Body, por que section es hijo de body, tal cual xd
console.log($cards.parentNode); //Este metodo es para otro tipo de nodos pero igual lo incluyo xd, en el nodo que se encuentra nuestra Section evidentemente es en el Nodo Body


//Tambien tenemos metodos para identificar el primer Nodo y Ultimo, excluyendo a los intermedios que se pueden hacer con la notacion de corchetes xd

//Primer Nodo hijo
console.log($cards.firstChild); //Que esperabas, la figura?, pues no es asi chico, recuerdas lo de la clase pasada, sobre los saltos de linea?, pues revisa tu codigo HTML si es que no esta modificado, pero cuando intancias tu Section das un salto de linea (tab-tabulador), y pues eso es un Nodo (o algo asi xd) yyyy pues ese vendrian siendo el primero Nodo y el segundo la Figure debido al espacio
//Devolvera que es un tipo de dato texto (enter) debido a el salto de linea que existe 
//Tambien existe para hacer referencia a todos los nodos hijosxd

//Ahora si para que nos devuelva el primer ELEMENTO hijo
console.log($cards.firstElementChild); //Ahora este si nos devolvera Figure debido a que estoo si es un elemnto, y especificamos explicitamente en el metodo un ELEMENTO hijo, no el primer hijo como tal xd

//Y el metodo para poder devolver el ultimo elemento hijo

console.log($cards.lastChild);  //Nos devolvera el ultimo hijo por que es un NODO y no un elemento, como arriba xd
console.log($cards.lastElementChild);

//Cabe a aclarar que el metodo sin la palabra element, hara referencia a los nodos mientras que con Element si xd



//Ahora los metodos que hagan referencia a sus hermanos (como anterior y despues), y tambien contaremos los que tengan y no tengan la palabra element xd
//Para el anterior tenemos .previousSibling y .previousElementSibling
console.log($cards.previousSibling); //Nos devolvera que es un espacio por lo mismo que ya ecplique arriba xd
console.log($cards.previousElementSibling); //Ahora si nos devolvera el tipo de Elemento que hay anteriormente al que estamos haciendo referencia xd


//Y ahora el siguente hermano tenemos .nextSibling y .nextElementSibling
console.log($cards.nextSibling); //Ya me canse de ecplicarlo y estoy exausto xd
console.log($cards.nextElementSibling);


//Evidentemente este es un nuevo metodo que se llama .closest()
//Lo que hace es buscar el ancestro, ven que hemos visto hacia los lados que son los Siblings y los hijos que son los children, pero viendo hacia fuera este va a buscar al padre mas cercano del tipo de selector que le demos
//p.e

console.log($cards.children[4].closest("section")); //aqui buscamos el ancestro  section mas cercano de nuestro hijo de la variable, y pues obviamente sera esta section de la variable xd

//Y para esto nos sirve el metodo closest
//YYYYY asi se recorre el DOM, estoy exausto xd


 */

/* 
//DOM: Creando ELementos y Fragmentos
//En esta clase aprenderemos tal cual el titulo el video (etiquetas dinamicas mas que nada). Nota: recuerda que un elemento es una etiqueta HTML, yy tambien recuerda que estamos viendo la API del DOM para poder interactuar con HTML desde Js

//Todo elemento que quieras crear (obviamente hablamos de HTML), se haria con el metodo, document.createElement("parametro");
const $figure = document.createElement("figure"),  //Este es un nuevo elemento HTML que es una figura
 $img = document.createElement("img"), //Nuevo elemento de HTML que es una imagen
 $figcaption = document.createElement("figcaption"), //Nueva figcaption  //Recuerda que tenemos que configurar los atributos de la img, pero en este caso figcaption no tiene atributos, pero si un nodo de texto, recuerda que en la especificaion del DOM hay 12 tipos de nodos diferentes, unos de ellos las etiquetas y nodos de texto
 //para el nodo de texto tenemos que crear otro elemento de tipo de texto, que se puede crear directamente con la propiedad textContent, pero Jon nos ensenara a crear nodos de texto
 $figcaptionText = document.createTextNode("People"); //Un nodo de texto para la figcaption pq la necesitara //aqui como tenes un createElement para crear un elemento, tambien tendremos un createTextNode (crear nodo de texto, o algo asi xd) obviamente 
 
//Vamos a crear una variable para seleccionar una clase en especifico, en este caso va a ser la section por su clase "cards"
 const $cards = document.querySelector(".cards");


//Digamos que dinamicamente ya estan creadas nuestras etiquetas HTML en una variable, pero no incorporadas en el arbol del DOM, posteriormente lo veremos 

//tenemos un metodo en el DOM, que es appendChild(var()), la traduccion de este vendria siendo como: agregar hijo (a una elemeto padre obvia)

//$cards.appendChild($figure); //Visualmente parace que no hay nada, pero en los elementos sí, tenemos una figure
//Pero recuerda, antes de agregar el figure le tenemos que configurar dichos elementos u o agregar los nodos por asi decirlo xd 

$img.setAttribute("src", "https://placeimg.com/200/200/people");
$img.setAttribute("alt", "People");

$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure); //Esto no nos devolvera nada si es que no tiene valor obviamente, vamos a asignarselos arriba!

//Y asi se crea un nodo 

//Tambien hay otra forma de crear esto de una forma mas rapida, pero no la mas correcta debido a que usamos el innerHTML y JS no lo considera un nodo por asi decirlo

const $figure2 = document.createElement("figure");

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/animals" alt="Animals">
<figcaption> Animals <figcaption/>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);



//Otro ejemplo, creo xddd

const estacionesDelAno = ["Primavera", "Verano", "Otono", "Invierno"],
$ul= document.createElement("ul");
document.body.appendChild($ul);



estacionesDelAno.forEach(el => {
const $li = document.createElement("li");
$li.textContent = el;
$ul.appendChild($li);
});
//digamos que esta es una tecnica correcta, por que utilizamos createElement, al igual podriamos haber usado createNode


//Si lo quieres hacer con el innerHTML, seria tipo asi

const continentes = ["Africa", "America", "Asia", "Europa", "Oceanía"],
$ul2 = document.createElement("ul");

document.write("<h1>Continentes</h1>");
document.body.appendChild($ul2);

$ul2.innerHTML = "";   //Es recomendable hacer esto, para agregar el codigo HTML (en este caso que se encuentra en un Array) ya a esto, pero algunos navegadores ya no lo necesitan debido a su compilador de codigo

continentes.forEach((el) => {$ul2.innerHTML += `<li>${el}</li>`});



//ESTA VENDRIA SIENDO LA MEJOR MANERA por asi decirlo xd
//Esto nos serviria para pocos datos, pero al momento de estar ya manejando muchos datos esto va a aunmentar el consumo de recursos y de alguna manera alentar tu aplicacion, una alternativa serian los fragmentos dinamicos, es decir una variable que se crea dinamicamente y a ese fragmento del DOM en lugar de estar pegandole directamente al DOM (que es lo que hacemos en lo anterior), le pegamos a ese fragmento del DOM (que digamos que esta en memoria y no directamente al DOM), se introduciran todos esos elementos al fragmento y le pegariamos ese fragmento al DOM en una sola incersion y no en demasiadas directamente (como arriba) para tener el mejor rendimiento posible

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ],
$ul3 = document.createElement("ul"),
$fragment = document.createDocumentFragment();   //Con el metodo createDocumentFragment(),  creariamos el fragmento xd

meses.forEach(el => {
const $li = document.createElement("li");
$li.textContent = el;
$fragment.appendChild($li);
});

document.write("<h1>Meses del anio </h1>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);

//Esta seria la manera mas optima para hacer esto :^).



const exnoviasXD = ["Jzzz", "Kzzz", "Mgod", "Mgod", "Czzz", "Kgod", "carlos mujeriego"],
$ul4 = document.createElement("ul"),
$fragment2 = document.createDocumentFragment();

exnoviasXD.forEach(el => {
const $li = document.createElement("li");
$li.textContent = el;
$fragment2.appendChild($li);
});

document.write("<h1> Que </h1>");
$ul4.appendChild($fragment2);
document.body.appendChild($ul4);


const $img5 = document.createElement("img"),
$figure3 = document.createElement("figure");

$img5.classList.add("nena");
$img5.setAttribute("src", "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages7.memedroid.com%2Fimages%2FUPLOADED730%2F622a9e04c72d6.jpeg&imgrefurl=https%3A%2F%2Fes.memedroid.com%2Fuser%2Fview%2FL.o.p.p.y&tbnid=8FrhZWZLaB8eaM&vet=12ahUKEwiS-N6AvPn3AhVkg2oFHRJOBgcQMygIegQIARBi..i&docid=AuzPamtRTGXrsM&w=718&h=702&q=gato%20imitando%20emojis&ved=2ahUKEwiS-N6AvPn3AhVkg2oFHRJOBgcQMygIegQIARBi");
$img5.setAttribute("alt", "Imitando emojis");

const $linkDOM = document.querySelector(".nena");
$linkDOM.style.setProperty("border-radius", "1rem");
$linkDOM.style.setProperty("flex", "block");
$linkDOM.style.setProperty("margin", "50px 0 50px 0");

$figure3.appendChild($img5);
document.body.appendChild($figure3);


 */

/* 
//DOM: TEMPLATES HTML
//La etiqueta es un modelo a seguir en el cual tu estructuras el contenido HTML que quieras de Js se convierta en dinamico y pues vendria siendo otra forma de interactuar con el DOM
//En esta clase vamos a aprender a utilizar esta etiqueta, cabe a aclarar que esta etiqueta no se visualiza gr
//En el documento ya agregamos contenido con la id "template-card"

const $cards = document.querySelector(".cards"),
$template = document.getElementById("template-card").content,   //Para poder acceder a un contenido de algo lo hariamos con el metodo .content
$fragment = document.createDocumentFragment(),
cardContent = [
    {
        title: "Tecnología",
        img: "https://placeimg.com/200/200/tech"
    },
    {
        title: "Gente",
        img: "https://placeimg.com/200/200/people"
    },
    {
        title: "Arquitectura",
        img: "https://placeimg.com/200/200/arch"
    },
    {
        title: "Naturaleza",
        img: "https://placeimg.com/200/200/nature"
    },
    {
        title: "Animales",
        img: "https://placeimg.com/200/200/animals"
    }
]   

//Ya teniendo esto, vamos a asignar cardContent al HTML de una forma similar a como ya hemos visto
//Primero agregandole los valoress del cardContent a nuestros elementos del template del documento HTML
cardContent.forEach(el => {
$template.querySelector("img").setAttribute("src", el.img);
$template.querySelector("img").setAttribute("alt", el.title);
$template.querySelector("figcaption").textContent = el.title;

//Aqui vamos a crear un clon del nodo de todo el documento con el importNode(template(var(modelo a seguir por asi decirlo)), boolean(dato: true equivale copear toda la estructura y false solo la primera y ultima)) (refierendose a este por que solo estamos asignando los atributos a los elementos, pero como este es un template unico, y como lo utilizamos solo para uno, pues podriamos utilizarlo de referencia y clonar de el la asignacion de los atributos y contenido textual a los demas xd)
let $clone = document.importNode($template, true);
//Le agregamos el clone a el template
$fragment.appendChild($clone);
});
//Y incersamos nuestro fragmento a nuestro cuerpo de HTML
$cards.appendChild($fragment);

//Y asi estaria definida nuestra Template
//Cabe a clarar que las etiquetas Template no se renderizan en el DOM y por lo tanto no se veran visualmente solo en los recursos de la pagina

//El objetivo de las Template es un modelo a seguir (similar a una clase), para que con ellas podamos crear estructuras DOM dinamicamente, en este caso figure


//Esto vendria siendo una manera eficiente de crear elementos dinamicamente :)


 */

/* 

//DOM: MODIFICANDO ELEMENTOS (Old style)
//En esta clase vamos a aprender los viejos metodos para modificar elementos aparte de appendChils

const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true);   //De igual manera como con el importNode, le tendremos que pasar un True si queremos que nos copee toda la estructura de nuestra section Cards (en este caso), al contrario solo nos copeara la estructura del section (solo eso, no todo lo que tene dentro, creo XD), y pue ya

  $newCard.innerHTML = `
  <img src= "https://placeimg.com/200/200/any" alt= "Any">
  <figcaption> Any </figcaption>
  `;
$newCard.classList.add("card");

//Hay un metodo que nos ayuda a remplazar, recuerda que tambien aplicaremos el DOM Traversing, replaceChild(var(reemplazo),var[index](elemnto a reemplazar junto a su posicion index) )
//$cards.replaceChild($newCard, $cards.children[3]); //children hace referencia a los hijos de la variable DOM que ya tenemos

//Tambien hay un metodo que hace que insertemos un elemento antes de que tomemos a un nodo de referencia, p.e queremos integrar un elemento antes de la primera figure, pues seria con el metodo insertBefore(var(reemplazo), var(referencia para insertar un elemento antes de el))
//$cards.insertBefore($newCard, $cards.firstElementChild); //Vamos a insertar un figure antes del primer figure 

//Tambien hay un metodo para poder eliminar nodos, obviamente tenes que saber que nodo queres eliminar
//$cards.removeChild($cards.lastElementChild); //Vamos a eliminar el ultimo nodo-figure-elemento de nuestra clase .cards


//Hay un metodo para clonar elementos dinamicos, funciona casi igual al de la clase importNode, pero este tendra nombre de cloneNode
//Ya arriba con las variables tengo la explicacion
document.body.appendChild($cloneCards); //Vamos a agregar al final nuestra variable que obviamente va a clonar esas tarjetas jiji


 */

//DOM: MODIFCANDO ELEMENTOS (CoolStyle)
//Recuerda que estamos viendo, como quitar, insertar, insertar antes y demas en estas dos clases, mas que nada destinados a modificar elementos, tal cual el titulo; la anterior fue con los metodos viejos y ahora sera con los nuevos debido al avanze del estandar de esta API que estamos trabajando pues se ha ido actualizando =)
//Estos nuevos metodos nos permitiran modificar de una mejor manera por así decirlo y hacerlo de una forma mas facil

//Bueno los tres metodos te los dejare aca bajo, y por cierto, sus nombres son largos como de costumbre con el DOM, y son muyyyy similares
/*
.insertAdjacent  //Insertar de manera adyecente, traduccion?
  .insertAdjacentElement(position, el) //Su funcion sera insertar un elemnto x, sus parametros seran la posicion donde las quieras insertar y el elemnto; similar al appendChild o insertBefore
  .insertAdjacentHTML(position, html) //Este insertara un codigo html, y en sus parametros lleva la posicion x y el codigo HTML que quieras insertar, similar al .innerHTML
  .insertAdjacent(position, text) //Insertara un texto, sus parametros seran la posicion y el texto como tal; similar al textContent

 Posiciones: (unicas, dadas que ya estan en la documentacion) //Estas posiciones solo son para estos metodos nuevos, pronto nos daremos cuenta
 beforebegin(hermano anterior (del que estamos haciendo referencia))
 afterbegin(primer hijo (del nodo que estamos haciendo referencia como tal))
 beforeend(ultimo hijo (del nodo de referencia))
 afterend(hermano siguente (hermano siguente del que estamos haciendo referencia))
*/
/* 
//Ejemplos con estos metodos

const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");
 
let $cardContent = `
  <img src= "https://placeimg.com/200/200/any" alt= "Any">
  <figcaption></figcaption>
  `;
$newCard.classList.add("card");

//Cuando me refiero al nodo de referencia es al que le estamos aplicando el metodo como
//$cards.insertAdjacentElement("afterbegin", $newCard);
$newCard.insertAdjacentHTML("beforeend", $cardContent); //Aqui no importa la posicion como tal por que vamos a asignar contenido a nuestra variable vacia, asi que no importa tanto xd
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any"); //Igual que arriba con lo de las posiciones

console.log($newCard);

//Como extra unos metodos que venian en la famosa libreria JQuery y que ya se han implementado nativamente a JS con el paso del tiempo

//Agregar como primer hijo, traduccion del metodo .prepend(var)
//$cards.prepend($newCard);
//Agregar como hermano anterior de la referencia del nodo que estemos haciendo
//$cards.before($newCard); //El nombre en espanol por su metodo seria "antes"
//Agregar como ultimo hijo del nodo de referencia
//$cards.append($newCard);
//Agregar como hermano posterior del nodo de referencia
//$cards.after($newCard);


//En estas dos clases dedicadas a la modificacion de elementos de forma antigua y moderna, tienen un gran abanico de posiciones a elegir; ademas de que los nuevos metodos por asi decirlo, ya vienen reemplazando a JQuery, y esa es una de las razones por la cual ya no tiene sentido aprendarla por lo mismo de que JS cada vez mejora mas, desafortunadamente se le sigue dando soporte por grandes proyectos, entre uno de ellos wordpress

 */

/* 

//DOM: Manejadores De Eventos (serie)
//Los eventos es aquel mecanismo de JS para poder controlar las acciones del usuario y definir ciertos comportamientos del documento que sucedan en cierto o que cumplan una condicion

//Las funciones que se ejecutan en un evento que en Inglés es eventHangler o manejadores de eventos, observadores o escuchadores(espanol), 

//Bueno, hay tres maneras de definirlas en JS que las veremos en esta clase
//Y veremos varios eventos, por que en realidad hay muchos xd

//Si investigas en MDN los diferentes tipos de eventos puede que te topes con unos marcados de rojos, estos no serviran para futuras versiones de navegadores o puede que ya no sirvan, tomalo como dato p

//Primera forma, mala practica?
//Esta ya vendria siendo nuestro manejador de eventos u eventHangler
*/ /*function holaMundo(){
  alert("Hola mundo");
  console.log(event); //Esto nos arrojara un PointerEvent y este desencadenara varias caracteristicas, como flujo de los eventos, con que?, entre las mas importantes; el tipo de evento que se desencadeno y el elemento que origino el evento (que sera terget y sera el boton que desencadenaba el evento) y pues si lo observamos a fondo vendran las propiedades de ese target
}

//Segunda forma (la mejor manera por asi decirlo) con manejador semántico

const $eventoSemantico = document.getElementById("evento-semantico");

//Si queremos ejecutar esta variable como manejador semántico seria de la siguente manera
//Seria con una formula, muyyyy similar como la fisica por ejemplo xd

//Hacemos referencia al evento HTML, en este caso ya lo tenemos en nuestro documento, y con la notacion del punto seleccionamos nuestro metodo (ya mencionados en el documento HTML), un "=" y su codigo JS a ejecutar; nota: si es que vas a ejecutar una funcion hazlo sin los parentesis, de lo contrario se ejecutara inmediatamente y se desencadenara el evento (y cuando imprimes el evento será null, por que no hay codigo en tu evento semantico y pues esa es la razón xd)
//$eventoSemantico.onclick = holaMundo(); //Esta se ejecuta debido a los parentesis, cuando nombres un evento de forma semantica y es una funcion siempre hazla sin los parentesis, por que cuando tiene los parentesis significa que se va a ejecutar obviamente xd

$eventoSemantico.onclick = holaMundo;

//Ahora te has dado cuenta que una misma funcion sirve para desencadenar diferentes eventos
//AHORAA, los elementos semanticos tienen un pequenio inconveniente, recuerda la clase de los Prototipos, cuando hablabamos de los prototipos estaba la funcion constructora, y cuando queriamos mas prototipos lo teniamos que hacer con su funcion constructora
//Esto es algo similar, has de cuenta que cuando agregas un metodo a tu variable es como si le estuvieses agregando un prototipo a tu funcion constructora (en este caso "onclick" a $eventoSemantico)
//Va a ver veces en las que tengas que ejecutar un codigo JS con diferentes eventos, 
//Y su unica limitante de los eventos semanticos seria que solo puedes usar una funcion para un solo evento



$eventoSemantico.onclick = function (e) {
  alert("Hola mundo desde nuevo evento semantico");
 console.log(e);
 console.log(event);

}//Los manejadores de eventos (funcion que contiene el manejador como tal, no se si me explique bien xd) tambien se pueden actualizar como las variables, por ejemplo una variable vale 1 pero por el flujo de codigo su valor cambia a 2, lo mismo pasara con nuestra variable que contiene nuestro manejador de eventos semantico
//Otro dato de los manejadores de eventos es que no pueden recibir parametros, el unico parametro que puede recibir es el evento en si (evento) o se puede simplificar solamente a "e", como lo hacen varios programadores 

//Esta es la forma mas eficiente que digamos a definir los eventos como atributos del HTML, pero el unico inconveniente es que no podemos asignar diferentes funciones a un mismo evento por que lo reemplazariamos


//Ahora que pasa cuando tienes la necesidad agregar diferentes funciones a un evento, pues para esto se harian con los eventos multiples
//Para esto se haria con el metodo addEventListener
//Por evento multiple nos referimos a ejecutar multiples funciones o funciones que ya le hayan pertenecido a otros eventos a ejecutarlos en un solo evento
const $eventoMultiple = document.getElementById("evento-multiple");

//Como se declara?, con el metodo ya mencionado y llevará tres parametros, pero nos concentraremos en solo dos que seran los mas importantes. Estos seran, el nombre dek evento (y te daras cuenta que ya no necesitaremos del "on" (palabra semantica) que teniamos que ingresar a la hora de llamar el evento); Y luego la funcion (manejador, listener, etc) u o codigo, y recuerda que sin los parentesis por que eso significa ejecucion inmediata  
$eventoMultiple.addEventListener("click", holaMundo);
//Tambien se puede hacer con funciones anonimas, ahora lo haremos con la arrow function xd
$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola mundo, desde un manejador de eventos anonimo");
  console.log(e);
  console.log(e.type); //Imprimimos el tipo de evento
  console.log(e.target); //Y el evento que lo origina
});

//A este si se le pueden asignar varias funciones (su nombre xd), y pues a la hora de ejecutar el evento se hara conforme lo hayas ordenado 

//Estas son las tres formas de poder trabajar con los eventos, en el atributo, semanticos y multiples
 /* 

function changer() {
const $linkDOM = document.body;
$linkDOM.style.background = "#222";
alert("El background cambio :o");

}

function changerw() {
  const $linkDOMc = document.body;
  $linkDOMc.style.background = "#FFF";
  
  }
  
const $semanticEvent = document.getElementById("color"),
 $semanticEventqw = document.getElementById("colorw");

$semanticEvent.addEventListener("click", changer);
$semanticEventqw.addEventListener("click", changerw);
 //C codigo
 */

/* 

//DOM: Eventos con Parametros y Remover Eventos
//Recuerdas la parte de la clase anterior cuando decia que no, bueno vamos a entrar mas en contexto
//Recuerdas cuando dije que una funcion que se ejecuta en un evento su nombre viene siendo eventHangler o manejador de eventos no?, y cuando especificaba que este eventHangler no podia llevar metodos a menos de la propiedad event?
//Pues en esta clase enganaremos un poco el DOM, por asi decirlo, por que vamos a asignarles parametros!

function saludar (nombre = "desconocid@"){
alert(`Hola ${nombre} - ${event}`);
}

//$eventoMultiple.addEventListener("click", saludar); //Con esto comprobamos que no se le pueden agregar parametros a un event hangler, porque?, por que como vemos en el resultado de nuestro evento nos va a devolver un resultado no esperado, en este caso no devolvio el valor por defecto de nombre
//Solamente se le puede agregar como parametro el evento en si


//Ahora si, pues lo que vamos a hacer es ejecutar esa funcion dentro de otra, y esa otra pasara a ser el event hangler, por lo que tendremos que mandar a llamar la funcion como siempre yyyy pues esta no se ejecutara automaticamente como cuando era una event hangler 
//Solo mandamos a llamar nuestra funcion dentro de otra (que sea anonima) y pues a la hora de hacer el evento nos arrojara el resultado que estabamos esperando =)
$eventoMultiple.addEventListener("click", () => {
  saludar("Tairitsu");
  saludar();

});
//Esta es la manera en la que podemos pasar parametros en un evento




//Ahora veremos como eliminar eventos 
//Bueno, cabe a aclarar que para poder eliminar eventos solo se puede con manejadores de eventos multiples
//Y, tambien, vez que tenemos un addEventListener no?, pues tendremos un removeEventListener (obviamente para poder remover eventos xd)

//Al igual, si vas a tener como manejador de eventos una funcion anonima (tanto como una arrow function y funcion anonima), el metodo para remover no va a funcionar
//Ya que este requerira de dos parametros, el evento a remover y el manejador de eventos a remover 
//Posteriormente dare ejemplos de estos

const $eliminadorDeEventos = document.getElementById("evento-remover");
//Metodo incorrecto (funcion anonima)
//$eliminadorDeEventos.addEventListener("dblclick", (e) => {
//alert(`Hola, soy un eliminador de eventos tipo ${e.type}`);
//console.log(e);
//});
//Y ahora vamos a eliminarlo, pero como?
//el metodo lleva dos parametros, el evento a remover y el manejador de eventos como tal, pero aqui esta el problema, ya que nuestro manejador de eventos es anonimo y no hay manera de que se pueda hacer referencia (aun dejando el segundo parametro vacio, por que tendremos un error de sintaxis)
//$eliminadorDeEventos.removeEventListener("dblclick"); //Error de sintaxis
//$eliminadorDeEventos.removeEventListener("dblclick", //??????); //Error de sintaxis


 //Ahora de forma correcta por asi decirlo
 const manejadorEvento = (e) => {
  alert(`Hola, soy un eliminador de eventos tipo ${e.type}`);
  console.log(e);
  $eliminadorDeEventos.removeEventListener("dblclick", manejadorEvento);
$eliminadorDeEventos.disabled = true; //Esto para agregarlo en el codigo HTML
};
 
 $eliminadorDeEventos.addEventListener("dblclick", manejadorEvento);
//mas que nada es una forma de desabilitar un evento 

 */

//DOM: Flujo de Eventos (burbuja y captura)
//Hoy abarcaremos el flujo de los eventos, que es muy importante para el manejo de los eventos

//Recuerdas la clase anterior cuando mencionabamos los tres parametros del addEventListener.?
//yyy cuando dije que solo ibamos a mencionar a solo dos siendo los mas importantes.
//Pues en esta clase veremos sobre ese tercer parametro.

//Tras haber agregado un par de cosas en el html de esta serie
//El flujo de eventos principalmente hay dos maneras de como propagarlo
//A eso se refiere cuando se habla del flujo del evento (xd)

//Cuando un evento se origina tiene una propagacion a lo largo en el arbol del DOM
//Por defecto esa propagacion se va dando desde el elemento mas interno hasta el mas externo, en este caso el documento como tal
//Y esa fase se llama fase de borbuja
//Piensa una burbuja, como cuando desde lo mas interno se propaga hasta lo mas externo, en el caso de aqui es al elemento window
//Entonces, ese es el esquema-modelo que los navegadores soportan
//Y no hay necesidad de que se le haga algo a nuestros addEventListeners para que funcione esta capa de captura, como dije es por defecto (que?)

//Ejemplo para entender bien como funciona este paso
/* 
const $divEventos = document.querySelectorAll(".eventos-flujo div");
console.log($divEventos); */ //Esto arrojara un NodeList junto a las div que hay dentro de la clase de la constante ya mencionada arriba

//Lo hacemos dinamicamente, solo para ejemplificar, por si un dia tenemos que trabajar dinamicamente con bases de datos
/* function flujoEvento (e) {
  console.log(`Hola te saluda ${//this.className, esto nos arrojaria undefined por que estabamos haciendo contexto a ESTA clase, por this; y si solo tuviesemos this nos arrojaria window (recuerda que el evento esta enlazado con el nodo raiz)
  e.target.className}, el click lo origino ${e.target.className}`);
 
}
 document.addEventListener("click", (e) =>{
 console.log(e.target);

if(e.target.matches(".eventos-flujo a")){
   alert("Hola soy tu amigo y docente digital... Jonathan MirCha");
   e.preventDefault();
 };

 if (e.target.matches(".acurrucar")){
  alert("Un día más, una vez más, es tus brazos yo me quiero acurrucar");
  e.preventDefault();
  };
  //Recuerdan la propagacion, pues ya no se da!, por que?, pues como el document tiene el evento"click", y como el document es el nodo raiz, pues ya no hay ningun elemento padre despues de el y no sera necesario del .stopPropagation();
 
 if (e.target.matches(".eventos-flujo div")) {
  flujoEvento(e);
 };


});
 */
//Esto es un claro ejemplo de la propagacion ya antes mencionada
//El evento 3 hara tres veces la funcion debido a la propagacion de que es la tercera div?
//El evento 2 dos veces y 1 uno????

//Por que?, internamente la div tres esta dentro de la dos y la uno, y como los tres elementos tienen asignado el evento "click"
//justamente ahi vemos la propagacion del EVENTO. Lo que pasa ya explicado arriba (mal)

//----$divEventos.forEach(div => {
//Fase de burbuja, dos metodos =>
//---div.addEventListener("click", flujoEvento);
//              div.addEventListener("click", flujoEvento, false);

//Fase de captura, un metodo
//div.addEventListener("click", flujoEvento, true);
//div.addEventListener("click", flujoEvento, { //En el tercer parametro podemos ingresar un objeto como tal (y mas cosas, revisa la documentacion sobre los addEventListener y sus terceros parametros permitidos)
//Y pues uno de ellos que podemos poner en el objeto seria el capture (fase captura), y especificar si es false o true
//false nos devolvera la fase burbuja y pues true la fase captura como tal xd
//capture: true,  //EN este caso pues lo haremos true ak
//En la clase anterior usamos un metodo para poder remover un evento cuando fuera ejecutado, puees en este objeto podemos hacer uso de "once" que hara que se ejecute una sola vez dicho evento (aqui incluimos para todos los div, debido tienen el mismo evento)
//once: true //llevara booleans, true hara la funcion dicha y false pues NO
//});//Esto en react en el ciclo de eventos de los componentes esto es como todos los eventos que se ejecutan cuando se monta el componente, o en la fase del desmontaje
//---});

//Esto en el JS vanilla, y quieres hacer que el event hangler se ejecute una sola vez sin importar los elementos, podrias hacer uso de estos metodos.

//Ahora explicado el ejemplo dos (hecho en la misma funcion)
//Cuando se hace el evento del evento 1, pues nos devuelve lo esperado como tal (Hola te saluda uno, el click lo origino uno)
//Pues cuando lo haces el evento tres, devuelve las tres funciones desde el evento tres hast el uno (desisivamente)
//Esto es la FASE DE BORBUJA, que va desde el elemento mas interno hasta el mas externo.

//Ahora, la opcion addEventListener tiene tres parametros (ya mencionados los dos primeros exepto el tercero)
//Pues si le colocas false (boolean), pues nos devolvera la fase de borbuja, si, fase de borbuja

//Pero si quieres el modelo contrario del burbuja, seria el modelo de captura (nombre debido a que ahora capturas a esa burbuja y pues se hace DESDE el elemento mas EXTERNO hasta el elemento mas INTERNO)
//Para intercambiar de fase, en este caso a Fase de Captura
//Pues lo haces especificando en el tercer parametro del tu addEventListener, true; p.e  addEventListener("click", callBackFunction, true )

//Cuando la estructura del DOM tienes eventos asociados al mismo elemento, concatenados; abuelo, padre, hijo, etc
//Pues la fase de captura  seria la mas optima por que consume menos memoria

//Esta fase de captura y burbuja realmente se puede omitir si tu delegas los eventos a un elemento padre más externo,
//y esto tambien va a ayudar a mejorar el rendimiento del navegador y el dispositivo donde se despliega la app

//Resumen, vimos sobre la fase burbuja, desde lo mas interno hasta lo mas externo y captura (lo inverso de la fase burbuja)
//y sobre el tercer parametro de la addEventListener() que esta relacionado con estas dos fases
//En la siguente sesion seguiremos hablando sobre caracteristicas mas importantes sobre los eventos
//Mas eventos mas que nada, todo esto aplica para cualquier evento que quieras :^)

//DOM: stopPropagation & preventDefault
//En esta clase veremos como detener la propagacion de los eventos (clase anterior), esto si es que quieres que tu elemento no se propague y se ejecute una sola vez con tu eventHangler

//Y tambien va a ver ciertos elementos del DOM que tengan eventos o comportamientos por default, piensa en el boton submit que tiene un formulario, cuando tocas un boton de tipo submit va procesar la informacion automaticamente sin necesitar de programarlo con JS
//un claro ejemplo es el scroller del mouse, o los enlaces de los enlaces (valga la redundancia)

//imagina que tienes un formulario que en vez de procesar la informacion convencionalmente, lo que haces es que la programas via AJAX para que consulte una API o una base de datos, y procesara la informacion dandote una respuesta x
//Pues esto hara nuestro otro coso que veremos hoy.

//Para detener la propagacion que teniamos de la clase anterior, tenemos que agregar a nuestro eventHangler (manejador de eventos)
//a el parametro (recuerda que solo le podemos agregar como parametero el evento como tal (e || event))
//pues dentro del eventHangler solo hacemos mencion al parametro (e) junto al metodo .stopPropagation()
//y listo, eliminamos esa propagacion jiji

//TODO ESTO ESTA APLICADO EN EL CODIGO DE LA CLASE ANTERIOR

//Ahora vamos a hacer otra funcion con el enlace a la pagina de Jon, recuerda la funcion del a por defecto, pues le cambiaremos eso (supongo xd)
//En sintesis vamos a cambiar la funcion de un elemento (su funcion por defecto)
//---const $linkEventos = document.querySelector(".eventos-flujo a");

//---
//---$linkEventos.addEventListener("click", (e) => {
//---alert("Hola, soy tu amigo y docente digital... Jonathan MirCha");
//---e.preventDefault();
//---}); //Esto nos ejecutara un alert y despues la etiqueta hara su funcion como tal
//para evitar esto y solo hacer la funcion que queramos, pues tenemos un metodo y lo hacemos de la misma forma pero con este metodo
//.preventDefault();, esto lo que hara es cancelar la funcion por default de la variable DOM (aqui seria la etiqueta a de jon) y pues eso, cancelara su funcion

//Aqui solo asignamos el metodo.
//dato: Es importante en como concanetamos los eventos debido a que causamos la propagacion en fase burbuja y captura,
//en la siguente clase veremos como evitar pasar en esto :^)

//En esta sesion hemos visto detener la propagacion con el metodo .stopPropagation
//y como evitar la funcion por defecto de elemento con el metodo .preventDefault

//DOM: Delegacion de Eventos
//Hoy aprenderemos un concepto que es muy importante que se encuentra dentro de librerias como React o frameworks como view y angular
//internamente es como asi manejan mucho los eventos, y asi optimizan mucho la memoria, app JS; que es la delegacion de los eventos

//por ejemplo, imaginate el ejercicio de la clase anterior, que estuvimos asignando de manera dinamica los div, que eran tres, ahora imaginate que serian 1000?
//Esto no seria lo mas optimo ni con un ciclo for, lo que aqui haciamos es generar un listener por cada uno de esos elementos

//Cuando lo mas vitable seria determinar un solo evento como un "click", a todo el documento como tal
//para que en vez de estar generando 1000 listner generado al evento "clicks" (ejemplo), solo generar un listener al evento "click"
//Esto seria como agregarle una funcion al nodo-padre superior (en este caso document como tal) y por ultimo solo detectar el elemento donde queremos desencadenar ese evento
//segun yo

//A continuacion

//bueno en esta clase reutilizaremos el codigo que hemos estado viendo durante estas dos ultimas clases
//Un detalle de la delegacion de los eventos es que vamos a detener la propagacion debido a que el evento esta asignado al nodo superior que es el document (en este caso) ya no es necesario detener la propagacion
//Y posteriormente vamos a comprobarlo

//Pues ya asignado el evento al document, ahora para desencadenar nuestra funcion vamos a hacer uso de, bueno ya tenemos nuestro listener agregado a el document, pues vamos a buscar la concidencia de un elemento en un condicional y dentro de ese condicional vamos a desencadenar la programacion para cada evento del DOM que queramos hacer el evento de "click"

//Pues lo buscariamos con el metodo .matches("enlace(dentro de comillas)")
//if(e.target.matches(".evento-flujo a"(EJEMPLO))){
//Aqui vamos a ejecutar el mismo codigo que teniamos con la funcion de nuesto listener, pero ahora con delegacion de eventos (la manera mas optimizada)
//alert("Hola soy tu amigo y docente digital... Jonathan MirCha");
// e.preventDefault()
//};
//Lo que vamos a hacer es quitarle el evento default a nuesto <a> y vamos a ejecutar un alert
/* 
const $acurrucar = document.querySelector(".acurrucar");

document.addEventListener("click", (e) => {
if (e.target.matches(".acurrucar")){
alert("Un día más, una vez más, es tus brazos yo me quiero acurrucar");
e.preventDefault();
};
}); */
//Ejemplo de la delegacion de eventos xd

//Pues con esta tecnica aparte de mejorar el estado de memoria y recursos
//Pues solo asignamos el evento una vez y unicamente con una condicional ubicando nuestro elemento desencadenamos nuestra programacion x

//Esto tambien es usado en la programacion asincrona como con Fecth, elementos dinamicos
//Estos temas los retomaremos mas adelante

//esta es la forma mas optima para trabajar con eventos en JS
//Yo soy tu amigo y docente digital, hasta siempre bye

/* 

//BOM: Propiedades y eventos
//Es muy importante aprender esta parte de las API que no es un estandar, pero que ya es soportada perfectamente por los navegadores
//BOM: Browser Object Model
//Esto no es mas que una serie de metodos - objetos que cuelga de window
//hoy vamos a ver un par de propiedades que son importantes para una ventana

//Esto sirve para sacar la medida de nuestra ventana(inner) y el tamano de la ventana de nuestro navegador(outer), tanto como para el ancho y alto
window.addEventListener("resize", (e) => {  //El evento resize se ejecuta solo cuando se redimensiona la pantalla.
  console.clear(); //Limpiemos un poco la consola a la hora de ejecutar el evento 
  console.log("*******Evento Resize*******");
console.log(window.innerHeight); //Tamanio de nuestra ventana, el viewport o la parte que es visible como tal (si tiene que ver el resultado con la caja de herramientas)
console.log(window.innerWidth);
console.log(window.outerWidth);//Tamanio de la resolucion de nuestro monitor 
console.log(window.outerHeight);
console.log(window.scrollX);
console.log(window.scrollY);
console.log(e); //Imprimira el evento como tal
});


//Ahora generemos un evento con el scroll, arriba y abajo pero con un scroll de evento
/* 
window.addEventListener("scroll", (e) => {
console.clear();
console.log("********Evento Scroll*******");
console.log(window.scrollX);
console.log(window.scrollY);
console.log(e);
});

 */ /*
//En tu pantalla tambien podemos ver en que coordenadas se empieza a dibujar la ventana de tu navegador
//Para esto hariamos uso de las propiedades screenX y screenY

window.addEventListener("load", (e) => { //Este evento se va a ejecutar cuando la ventana del navegador ha terminado de cargar, esto es el tipico load de JQuery 
  //console.clear();
  console.log("********Evento Load*******");
  console.log(window.screenX); //Por que dice un valor negativo? (monitor extra), si es que tienes un monitor extra pues va a tomar de referencia a tu PC como y entonces este se representara en valores negativos por que es el izquuierdo mientras que el monitor seria el derecho que sera si
  console.log(window.screenY);
  //Esto nos arrojara las coordenadas de nuestra ventana de nuestro navegador
  console.log(e);
});
//Y posteriormente veremos el ready del JQuery pero en JS Vanilla
//(document).load(function);
//(document).ready(function);

//Ahora un evento que sera mas rapido que el evento "load", este sera "DOMContentLoad"
document.addEventListener("DOMContentLoaded", (e) => {  //Este es definido en ducument y no window, pero recuerda que document cuelga de window
  //console.clear(); Lo comentamos para comprobar cual es el mas rapido
  console.log("********DOMContentLoaded*******");
  console.log(window.screenX); //Por que dice un valor negativo? (monitor extra), si es que tienes un monitor extra pues va a tomar de referencia a tu PC como y entonces este se representara en valores negativos por que es el izquuierdo mientras que el monitor seria el derecho que sera si
  console.log(window.screenY);
  console.log(e);
});   //En conclusion este evento es el mas rapido xd 
//Cuando querramos hacer peticiones asincronas (o cargo de tu app o webapage), esto sera la mejor opcion

//conclusion, todo lo que quieras cargar al momento sera DOMContentLoaded..

 */

//DOM: Metodos
//El dia de hoy veremos un par de eventos, alguno de los metodos que vamos a ver del BOM ya los vimos anteriormente pero igualxd
//Serán; confirm, alert, prompt

//alert("alert");
//prompt("aviso (incluido input)");
//confirm("confirmacion");
//Aqui no lo mandamos con window, por que recuerda que todo lo que cuelga de window pues no es necesario usarlo xd

//Ahora veremos mas metodos x //Estas seran para los botones que ya hemos agregado que seran para las ventanas

const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnSuprimir = document.getElementById("suprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", (e) => {
  ventana = open("https://jonmircha.com"); //Recuerda que no es necesario ingresar el window por que esta variable DOM ya cuelga del window
});
$btnCerrar.addEventListener("click", (e) => {
  //close(); Esto evento nos eliminara la venta que tengams abierta OJO
  //Para cerrar la ventana que abrimos con el evento de arriba seria lo de abajo p
  ventana.close(); //Lo que hacemos es asignarle el valor a ventana con el evento de arriba que sera el dominio de Jon como tal y pues como esta variable "vacia" ya tene un valor pues solo con ESTE evento lo eliminamos a la hora de que este se ejecuta
});
$btnSuprimir.addEventListener("click", (e) => {
  //La ventana tiene un window.print, pues esto nos hara imprimir nuestra ventana xd
  //Si es que quieres crear estilos para imprimir esa pagina pues lo puedes usar para esto xd
  window.print(); //creo que aqui si tendremos que darle uso al window xd?
  //pero tambien se puede guardar como PDF
});
//Un claro ejemplo de cuando usar una ventana emergente, lo podrias hacer cuando quieres que alguien se loguee a tu pagina o web
//En la siguente clase veremos sobre los metodos hijos creo XDDDDDD

//BOM: URL, Historial y Navegador
//hoy nos aprenderemos tres objetos muy importantes y asi como document, este cuelga de window

//En esta clase solo estaremos usando console.log, cuando empezemos a realizar ejercicios ya los veremos en accion!
//Para que entres en contexto
//por ejemplo en grandes librerias para el manejo de librerias como para el manejo de rutas en aplicaciones dinamicas, como reactRouter Js; basicamente estan construidos con los dos primeros objetos que veremos hoy
/* console.log("****Objeto URL (location)*****");
console.log(location); //veremos que es un objeto que tiene varias propiedades y metodos; como reload, assign y demas que veremos abajo xde
console.log(location.origin); //Este metodo nos devolvera la localicacion de nuestra maquina junto al puerto
console.log(location.protocol); //Protocolo, recuerda que hay dos "http y https"
console.log(location.host); //host incluyendo el puerto
console.log(location.hostname); //nombre del host, dominio web
console.log(location.port); //puerto
console.log(location.href); //Esta la location href (aqui se imprimira el nombre del archivo como tal u o URL  debido a que esta webpage no tiene href como tal)
console.log(location.hash); //Esto nos ayudara a detectar el valor de la url que esta despues de un hash;  angular, view y demas frameworks usan estos hash para hacer rutas amigables
console.log(location.pathname); //y pues este sera el archivo al que estamos consultando 
console.log(location.search); //El paso de los parametros en el href, el search observa el paso de los parametros y te los imprimirá
 //Estas son las propiedades mas importantes de location
 //Un metodo x
 //location.reload(); //recargar pag

//Si nosotros agregaramos parametros por la url, pues en el location.href se observa el paso de los parametros
 */

//El siguente objeto es el historial
//console.log("******Objeto History (historial)******");
//console.log(history); //Este hace referencia a las paginas que podemos viajar, como regresar y avanzar (flecahs xd) y demas metodos
//console.log(history.length); //Este nos devolvera la longitud del historial
//history.back(2); //Con este puedes volver las paginas que gustes cuando estes dentro de un sitio web junto a el numero de paginas cuantas quieras regresar en el parametro. Ten de referencia el historial de tu pagina
//history.forward(2); //Ahora con este puedes ir a paginas de tu historial dentro del sitio web
//Más que nada estos dos metodos sirven como los botones de regresar e ir de nuestro navegador, pues a esto me refiero con el historial que digamos

//Ahora otro metodo del historial, go
//history.go(); //Aqui a diferencia de los dos anteriores, aquí vamos a especificar cuantas paginas queremos ir hacia adelante, esto lo estamos ejemplificando en el dominio de jon gud
//A diferencia de ellos, pues aqui especificamos con signos tipo así
//Adelante 1, atrás -1

/* 

console.log("*****Objeto Navigator*****");
console.log(navigator); //Lo primero que veremos es que tenemos un objeto muy complejo, tenemos API para interactuar con bluetooth o clipboard, la geolocalicacion (que a pesar es un objeto que tiene sus objetos), lenguaje, una cookie y demás!
//y un dato, userAgent, este lo emplearemos en un ejercicio del DOM para identificar sistemas operativos (este nos dara informacion importante del usuario para nuestra app)

//Unas propiedades y objetos del navigator (unas, no todas) que son cosas utiles que digamos x

console.log(navigator.geolocation); //La geolocalicazion como tal xd
console.log(navigator.connection); //Nos motrara nuestra conexion, alguans cosas sobre la conexion del usuario
console.log(navigator.mediaDevices); //Dispositivos como camaras o microfonos
console.log(navigator.mimeTypes); //Los mimeTypes son los tipos de aplicaciones que soporta el navegador 
console.log(navigator.onLine); //Este nos devolvera un true; por que el navegador tiene eventos cuando pierde la conexion o la recupera, y nos devolvera un boolean (supongo xd)
console.log(navigator.serviceWorker); //Este es un API que justamente hace progresive app, un sitio instalable (p.e: el sitio de jon) 
console.log(navigator.storage); //
console.log(navigator.usb); //La capacidad de detectar cuando se conecta un usb, cuando se conectan y se desconectan podria hacer ciertos comportamientos nuestra sitio web
console.log(navigator.userAgent); //Esto nos dara mucha informacion sobre el dispositivo que esta en nuestro sitio (xd?)



 */
