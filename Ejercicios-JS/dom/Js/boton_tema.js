const d = document,
  b = document.body,
  ls = localStorage;

export default function tema(btn, classDark, classLight) {
  const $btn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");

  //console.log($selectors);

  let moon = "🌙",
    sun = "☀️";

  const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove(classDark));
    $selectors.forEach((el) => el.classList.add(classLight));
    $btn.textContent = moon;
    ls.setItem("theme", "light");
  };

  const darkMode = () => {
    $selectors.forEach((el) => el.classList.remove(classLight));
    $selectors.forEach((el) => el.classList.add(classDark));
    $btn.textContent = sun;
    ls.setItem("theme", "dark");
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($btn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");

    if (ls.getItem("theme") === "light") lightMode();

    if (ls.getItem("theme") === "dark") darkMode();
  });
}
