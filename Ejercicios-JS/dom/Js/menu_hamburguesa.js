export default function hamburgerMenu (panelBtn, panel, menuLink) {
const d = document;
//Delegacion de eventos

d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){  // La siguiente condicion es con el asteristico, por que hacemos referencia a todo lo que este dentro de él, no importa lo que sea. Y pues lo hacemos con template strings para hacer referncia a el parametro y el asteristico (lo del asteristico es de CSS aplicado en JS)
     d.querySelector(panel).classList.toggle("is-active");   
     d.querySelector(panelBtn).classList.toggle("is-active");    
    } //Aqui mismo tuvimos un error por la delegacion de eventos debido a que solamente le asignamos el evento a las orillas del boton pero no su contenido XDDD
    
    if (e.target.matches(menuLink)) {
     d.querySelector(panel).classList.remove("is-active");   
     d.querySelector(panelBtn).classList.remove("is-active");   
    }
})
}