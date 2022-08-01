const d = document;

export default function scrollSpy() {
  const $sections = d.querySelectorAll("section[data-scroll-spy]");

  /*  const cb = (entries) => {
    // console.log("Entries:", entries);

    entries.forEach((entry) => {
      // console.log("entry", el);
      const id = entry.target.getAttribute("id");
      console.log(id);
      if (entry.isIntersecting) {
        d.querySelector(`a[href="#${id}"][data-scroll-spy]`).classList.add(
          "active"
        );
        // } else {
        // d.querySelector(`a[href="#${id}"][data-scroll-spy]`).classList.remove(
        //   "active"
        // );
      }
    });
  };

  const observer = new IntersectionObserver(cb, {
    //root:
    rootMargin: "-250px", //La zona interactiva va a estar a 250px hacia dentro, lo que hará que nuestra zona de interaccion disminuira lo suficiente para solucionar nuestro error
    threshold: [0.5, 0.75], //Limite, con esto vamos a especificar el limite del contenido, de 1 a 0 se mide, si es que quieres que se vea el 50% de nuestro contenido y se desencadene dicha programacion tendrás que poner 0.5, haciendo referencia al 50% de tu contenido (mucho mejor :D). Y si ejecutas esto en un arreglo con diferentes cantidades, puedes dar un minimo y maximo para nuestro observador
  });
  // console.log("observer", observer);

  $sections.forEach((el) => observer.observe(el)); */
}
