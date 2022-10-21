export function ContactForm() {
  const d = document,
    $form = d.createElement("form"),
    $styles = d.getElementById("dynamic-styles");

  $form.classList.add("contact-form");
  $form.method = "POST";
  $form.target = "_blank";

  $styles.innerHTML = `
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  text-align: center;
}

.contact-form {
  --form-ok-color: #d8bfd8;
  --form-error-color: #f44846;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

.contact-form > * {
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 100%;
}

.contact-form textarea {
  resize: none;
}

.contact-form legend,
.contact-form-response {
  font-size: 1rem;
  background-color: gray;
  border-radius: 0.5rem;
  text-align: center;
}

.contact-form input,
.contact-form textarea {
  font-size: 1rem;
  font-family: sans-serif;
}

.contact-form input[type="submit"] {
  width: 50%;
  font-weight: bold;
  cursor: pointer;
}

.contact-form *::placeholder {
  color: #222;
}

.contact-form [required]:valid {
  border: 3px solid var(--form-ok-color);
}

.contact-form [required]:invalid {
  border: 3px solid var(--form-error-color);
}

.contact-form-error {
  margin-top: -1rem;
  font-size: 80%;
  background-color: var(--form-error-color);
  color: #fff;
  transition: all 800ms ease;
}

.contact-form-error.is-active {
  display: block;
  animation: show-message 1s normal 0s ease-out both;
}

.none {
  display: none;
}

@keyframes show-message {
  0% {
    visibility: hidden;
    opacity: 0;
  }

  100% {
    visibility: visible;
    opacity: 1;
  }
}

  
  `;

  $form.innerHTML = `
   <legend>Evianos tus comentarios!</legend>
          <input
            type="text"
            name="name"
            placeholder="Inserta tu nombre"
            title="Nombre solo acepta letras y espacios en blanco"
            pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Inserta tu Email"
            title="Correo electronico invalido"
            pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Asunto a tratar"
            title="El asunto es requerido"
            required
          />
          <textarea
            name="comments"
            cols="30"
            rows="10"
            placeholder="Escribe tus comentarios!"
            data-pattern="^.{1,300}$"
            title="Tu comentario no debe de exeder los 255 caracteres"
            required
          ></textarea>
         
          <input type="submit" value="Enviar" />
          <div class="contact-form-loader none">
            <img src="../app/assets/hearts.svg" alt="Loader" />
          </div>
          <div class="contact-form-response none"></div>  
  `;

  function ValidationsForm() {
    const $form = d.querySelector(".contact-form"),
      $inputs = d.querySelectorAll(".contact-form [required]"),
      $inputSubmit = $form.querySelector('input[type="submit"]');
    // console.log($form.submit);
    // console.log($inputs);

    $inputs.forEach((el) => {
      const $span = d.createElement("span");
      $span.id = el.name;
      $span.textContent = el.title;
      $span.classList.add("contact-form-error", "none");
      el.insertAdjacentElement("afterend", $span);
    });

    d.addEventListener("keyup", (e) => {
      if (e.target.matches(".contact-form [required]")) {
        let $input = e.target,
          pattern = $input.pattern || $input.dataset.pattern;

        if ($input.name === "email") {
          let $emailv = $input.value;

          $inputSubmit.dataset.email = $emailv;
        }

        if (pattern && $input.value !== "") {
          let regex = new RegExp(pattern);
          return !regex.exec($input.value)
            ? d.getElementById($input.name).classList.add("is-active")
            : d.getElementById($input.name).classList.remove("is-active");
        }

        if (!pattern) {
          return $input.value === ""
            ? d.getElementById($input.name).classList.add("is-active")
            : d.getElementById($input.name).classList.remove("is-active");
        }
      }
    });

    d.addEventListener("submit", (e) => {
      e.preventDefault();

      const $loader = d.querySelector(".contact-form-loader"),
        $response = d.querySelector(".contact-form-response");

      $loader.classList.remove("none");

      fetch(` https://formsubmit.co/ajax/${$inputSubmit.dataset.email}`, {
        method: "POST",
        body: new FormData(e.target),
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          $loader.classList.add("none");

          $response.innerHTML = `<p><b>${json.message}</b></p>`;
          $response.classList.remove("none");
        })
        .catch((err) => {
          let message = err.statusText || "Ocurrio un Error";

          $response.innerHTML = `<p><b>Error ${err.status}: ${message}</b></p>`;
          $response.classList.remove("none");
        })
        .finally(() => {
          setTimeout(() => {
            $loader.classList.add("none");
            $response.classList.add("none");
            $response.innerHTML = "";
            $form.reset();
          }, 5000);
        });
    });
  } // Nuestra funcion nos devolvera un error de propiedades relacionadas con clases, en general esto pasa por cargar contenido dinamicamente.
  // Para darle tiempo a la UI para que el contenido se cargue por completo vamos a ejecutar la funcion en un setTimeout para darle tiempo como ya dije antes y pues que la funcion (sus validaciones en especifico) se ejecute sin ningun problema.
  // Esto se puede hacer en un tiempo corto que puede que no sea perceptible por nosotros. 200ms p.e

  setTimeout(() => {
    ValidationsForm();
  }, 200);

  return $form;
}
