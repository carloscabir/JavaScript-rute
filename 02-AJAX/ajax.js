//XMLHttpRequest
(() => {
  const xhr = new XMLHttpRequest(), //Instancia de XMLHttpRequest
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  // console.log(xhr);

  xhr.addEventListener("readystatechange", (e) => {
    //Asignacion del evento, y pues la programacion
    if (xhr.readyState !== 4) return;

    // console.log(xhr);

    if (xhr.status >= 200 && xhr.status < 300) {
      //Parte de exito
      // console.log("Exito");
      // console.log(xhr.responseText);
      // $xhr.innerHTML = xhr.responseText;
      let json = JSON.parse(xhr.responseText); //Convertimos nuestro formato JSON a un objeto JavaScript
      //console.log(json);

      json.forEach((el) => {
        //Lo insersamos con DOM
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $xhr.appendChild($fragment);
    } else {
      //Parte de error
      // console.log("Error");
      let message = xhr.statusText || "Ocurrio un error";
      $xhr.innerHTML = `Error ${xhr.status} ${message} `;
    }
    // console.log("Este mensaje cargara de cualquier forma");
  });

  //Aparte vamos a necesitar dos metodos más

  //Abrir la peticion y establecer el metodo en el que lo vamos a hacer; y metodo de recurso de api's a la que vamos a acceder (aprendiendo a consumir, despues sera el CRUD)
  xhr.open("GET", "http://jsonplaceholder.typicode.com/users"); //Metodo por el cual nos vamos a comunicar, y recurso
  //xhr.open("GET", "assets/users.json"); //Manera local
  //Y el envio con o sin datos (dependiendo las necesidades)(Ahora, debido a que estamos aprendiendo a consumir)
  xhr.send();
})();

//Fetch
(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  //Aqui tendremos dos parametros, de donde vamos a sacar los datos y un objeto de opciones (revisar documentacion)
  fetch("http://jsonplaceholder.typicode.com/users")
    // fetch("assets/users.json") Al igual se pueden leer archivos locales
    /* .then((res) => {
      console.log(res);
      // res.text() Tambien podemos convertir formato html o xml a texto
      // res.blob() Para convertir aquello que no es texto (revisar documentacion)
      return res.ok ? res.json() : Promise.reject(res); //Validacion del catch, aplicamos un Promise.reject para que nuestro catch no vuelva a enviar un objeto vacio
    }) */
    .then((res) => (res.ok ? res.json() : Promise.reject(res))) //El then de arriba, pero en una sola linea
    .then((json) => {
      // console.log(json);
      // $fetch.innerHTML = json;
      json.forEach((el) => {
        //Lo insersamos con DOM
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      // console.log("Estamos en el catch", err);
      let message = err.statusText || "Ocurrio un error";
      $fetch.innerHTML = `Error ${err.status} ${message} `;
    })
    // Este se ejecutara si o si debido a que es independiente y es OPCIONAL
    .finally(() => {
      /*  console.log(
        "El codigo se ejecutara independientemente del resultado de la primera Promesa Fetch"
      );
 */
    });
  //Esto se puede convertir en una Promise Hell, cuidado.
})();

//Fetch + Async-Await
(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();

      // console.log(res, json);

      // if (!res.ok)  throw new Error("Ocurrio un error al solicitar los datos");

      if (res.ok === false)
        throw { status: res.status, statusText: res.statusText };

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetchAsync.appendChild($fragment);
    } catch (err) {
      // console.log("Estoy en el catch " + err);
      // Aqui no puedes manejar los errores como en el fetch solo
      let message = err.statusText || "Ocurrio un error";
      $fetchAsync.innerHTML = `Error ${err.status} ${message} `;
    } finally {
      // console.log("Esto se ejecutara independientemente de el try y catch");
    }
  }
  getData();
})();

//Axios
(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    // .get("assets/users.json")
    .then((res) => {
      // console.log(res);
      let json = res.data;
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $axios.appendChild($fragment);
    })
    .catch((err) => {
      // console.log(err.response);
      let message = err.response.statusText || "Ocurrio un error";
      $axios.innerHTML = `Error ${err.response.status} ${message} `;
    })
    .finally(() => {
      // console.log(
      // "Esto se ejecutara independientemente del resultado de Axios"
      // );
    });
})();

//Axios + Async-Await
(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  axios.get("https://jsonplaceholder.typicode.com/users");

  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
        json = await res.data;

      json.forEach((el) => {
        let $li = document.createElement("li");
        $li.innerHTML = `${el.nombre} --- ${el.email} --- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $axiosAsync.appendChild($fragment);
      console.log(res, json);
    } catch (err) {
      let message = err.response.statusText || "Ocurrio un error";
      $axiosAsync.innerHTML = `Error ${err.response.status} ${message} `;
    } finally {
      console.log("Esto se ejecutara independientemente al catch");
    }
  }
  getData();
})();
