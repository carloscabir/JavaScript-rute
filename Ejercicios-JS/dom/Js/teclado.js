const d = document;
let x = 0,
y = 0;


export function moveBall (e, ball, stage) {
    const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    $limitsBall = $ball.getBoundingClientRect(),
    $limitsStage = $stage.getBoundingClientRect(); //Esto nos devolvera todos nuestros valores como de posicion x y (en pixeles), la distancia donde esta ubicado nuestro coso (en margen), la altura ancho y demas; todo esto nos lo enviara en un objeto DOMRect
    //Este metodo de getBoundingClientRect es muy importante por que este nos dara el limite del escenario, ademas, esto es muy importante si es que te quieres meter al desarrollo de videojuegos
    //console.log($limitsBall, $limitsStage)
    //const move = (direction) => {}
    switch (e.keyCode) {
        case 37: //izq
       //move("left");
       if (Math.floor($limitsBall.left) > Math.ceil($limitsStage.left)) {
        e.preventDefault();
        x--;
     }
     //Esto se describiria como.. Si el valor izquierdo de limitsBall es mayor a limitsStage izquierdo (que ese si tiene un limite (left en este caso)) (mayor por que estamos hablando de numeros negativos), va a permitir actualizar el valor de x a --; lo demas lo mismo pero dependiendo de el desplazamiento que daremos
       break;
       case 39: //der
       //move("right");
       if (Math.floor($limitsBall.right) < Math.ceil($limitsStage.right)){ 
           e.preventDefault();
           x++;
      }
       break;
       case 40: //abaj
       //move("down");
       if (Math.floor($limitsBall.bottom) < Math.ceil($limitsStage.bottom)) {
           e.preventDefault();
           y++;
      }
       break;
       case 38: //arri
       //move("up");
       if (Math.floor($limitsBall.top) > Math.ceil($limitsStage.top)) {
           e.preventDefault();
           y--; //Esto lo que haria es que nuestro comportamiento por defecto de las flechas se activara cuando nuestra ball no colisione con nuestro stage
      } //Solo se cancela el comportamiento cuando cumpla la condicion xd
        break;
     //Vamos prevenir en cada caso los eventos por defecto de las flechas (recuerda que estas manejan el scroll y pues no nos dejara usar bien esto xd)
     //Por lo que no lo vamos a hacer en todo el switch (en uno solo) debido a que inabilitaremos todas los eventos por defecto de nuestro teclado (y por eso lo hacemos en todos los casos (mas que nada especificarlos por asi decirlo )xd) 
     //Para desactivar este comportamiento, podemos hacer que solo desactive el evento por default de las flechas dentro de nuestro condicional a la hora que colicione, es decir: cuando nuestra ball colisione ya no se desactivatara nuestro evento por defecto de nuestras flechas
     default:
        break;
    }
    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}


//El teclado tiene tres eventos, keyup (cuando soltamos la tecla), keydown (cuando tocamos la tecla) y keyPress (que es cuando la presionamos) 
export function shorkuts (e){
 /* console.log(e.type);
 console.log(e.key); 
 console.log(e.keyCode); //En general nos devolvera un boolean basado en si es que se ejecuta dicho evento 
 console.log(e.ctrlKey); //Esto es para las teclas especiales, y nos devolvera un boolean dependiendo el evento que se ejecute (true a si, false a no xd)
 console.log(e.altKey);
 console.log(e); */

if (e.key === "a" && e.altKey) {
    alert("Esto es una alerta");
}

if (e.key === "p" && e.altKey) {
    prompt("Esto es un prompt");
}

if (e.key === "c" && e.altKey) {
    confirm("Esto es un confirm");
}

}
//Nos va a arrojar un objeto y datos, entre ellos uno de los mas importantes. keyCode, que nos dara el codigo de dicha tecla (si, cada tecla tiene su propio codigo xd)