const d = document;

d.addEventListener("DOMContentLoaded", contactFormValidations);

function contactFormValidations() {
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

      // console.log($input, pattern, $input.name);

      //Email Dinamic
      /*
      Reference (me)
       action="https://formsubmit.co/youremail@.com"
        */
      if ($input.name === "email") {
        let $emailv = $input.value;
        // console.log($input);
        // console.log($emailv);
        $inputSubmit.dataset.email = $emailv;
        // console.log($inputSubmit);
      }

      if (pattern && $input.value !== "") {
        // console.log("El input tiene patron");
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }

      if (!pattern) {
        // console.log("El input no tiene patron");
        return $input.value === ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
    }
  });

  d.addEventListener("submit", (e) => {
    e.preventDefault();
    // alert("Enviando formulario");

    const $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response");

    $loader.classList.remove("none");

    /* (async () => {
      try {
        let options = {
            method: "POST",

            body: JSON.stringify({
              nombre: $form.name.value,
              email: $form.email.value,
              asunto: $form.subject.value,
              comentario: $form.comment.value,
            }),
          },
          res = await fetch(
            ` https://formsubmit.co/ajax/${$inputSubmit.dataset.email}`,
            options
          ),
          json = await res.json();

        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        if (res.ok) {
          $loader.classList.add("none");

          $response.innerHTML(`${json.message || json.responseText} `);
          $response.classList.remove("none");

          setTimeout(() => {
            $loader.classList.add("none");
            $response.classList.add("none");
            $response.innerHTML = "";
          }, 5000);
        }
      } catch (err) {
        let message = err.statusText || "Ocurrio un Error";

        $response.innerHTML = `<p><b>Error ${err.status}: ${message}</b></p>`;
        $response.classList.remove("none");

        setTimeout(() => {
          $loader.classList.add("none");
          $response.classList.add("none");
          $response.innerHTML = "";
        }, 5000);
      }
    })(); */

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
  // console.log($form.comments); Prueba si es que en verdad existen xd
}
