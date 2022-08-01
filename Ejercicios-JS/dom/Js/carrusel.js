const d = document;

export default function slider() {
  const $nextBtn = d.querySelector(".slider-btns .next"),
    $prevBtn = d.querySelector(".slider-btns .prev"),
    $bucleBtn = d.querySelector(".bucle"),
    $sliders = d.querySelectorAll(".slider-slide");

  let i = 0;

  d.addEventListener("click", (e) => {
    if (e.target === $prevBtn) {
      e.preventDefault();
      $sliders[i].classList.remove("active");
      i--;

      if (i < 0) {
        i = $sliders.length - 1;
      }

      $sliders[i].classList.add("active");
    }

    if (e.target === $nextBtn) {
      e.preventDefault();
      $sliders[i].classList.remove("active");
      i++;

      if (i > $sliders.length - 1) {
        i = 0;
      }

      $sliders[i].classList.add("active");
    }

    var repeat;

    function loop() {
      repeat = setInterval((e) => {
        $sliders[i].classList.remove("active");
        i++;

        if (i > $sliders.length - 1) {
          i = 0;
        }

        $sliders[i].classList.add("active");
      }, 3000);
    }

    if (e.target === $bucleBtn) {
      e.preventDefault();
      loop();
    }
  });
}
