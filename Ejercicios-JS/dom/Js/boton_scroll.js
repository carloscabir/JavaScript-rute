const d = document,
w = window;

export default function scrollTopButton(btn){
 const $scrollBtn = d.querySelector(btn);

 
 w.addEventListener("scroll", e => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

    if (scrollTop > 600) {
        $scrollBtn.classList.remove("hidden")
    }else{
        $scrollBtn.classList.add("hidden")
    }

    // console.log(w.pageYOffset, d.documentElement.scrollTop)//Los dos metodos nos dan la ubicacion del scroll, tanto w.pageYOffset y d.documentElement.scrollTop
 });
 
 d.addEventListener("click", (e) => {
    if (e.target.matches(btn)){
        w.scrollTo({ //Window tiene una propiedad llamada scrollTo, y esta sera un objeto con tres propiedades: la trancision, donde quieres que vaya tanto como posicion Y y X
            behavior: "smooth",
            top: 0
            //left: 0 (Esto es por si interactuas con el pageXOfset)
        })
    }
 });
}