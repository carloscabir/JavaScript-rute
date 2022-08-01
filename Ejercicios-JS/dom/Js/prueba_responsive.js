const d = document;

export default function responsiveTester(form) {
  const $form = d.getElementById(form);
  let tester;

  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault;
      //alert("Ella no te ama");
      tester = window.open(
        $form.address.value,
        "tester",
        `innerHeight = ${$form.height.value},
        innerWidth = ${$form.width.value}`
      );
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target === $form.cerrar) tester = window.close();
  });
}
