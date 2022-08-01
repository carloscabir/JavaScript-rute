const d = document,
  w = window,
  n = navigator;

export default function estadoDeRed() {
  const isOnline = () => {
    const $div = d.createElement("div");

    if (n.onLine) {
      $div.textContent = "Conexion Restablecida";
      $div.classList.add("conexion-restablecida");
      $div.classList.remove("conexion-perdida");
    } else {
      $div.textContent = "Conexion Perdida";
      $div.classList.add("conexion-perdida");
      $div.classList.remove("conexion-restablecida");
    }

    d.body.insertAdjacentElement("afterbegin", $div);
    setTimeout((e) => d.body.removeChild($div), 2000);
  };
  w.addEventListener("online", (e) => isOnline());
  w.addEventListener("offline", (e) => isOnline());
}
