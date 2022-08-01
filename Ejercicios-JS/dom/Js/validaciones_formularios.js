const d = document;

export default function contactFormValidations() {
  const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]");

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
        $form.setAttribute("action", `https://formsubmit.co/${$emailv}`);
        console.log($form.getAttribute("action"));
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
    //e.preventDefault();
    // alert("Enviando formulario");

    const $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response");

    $loader.classList.remove("none");

    setTimeout((e) => {
      $loader.classList.add("none");
      $response.classList.remove("none");
      $form.reset();
      setTimeout((e) => $response.classList.add("none"), 4000);
    }, 3000);
  });
}
