const d = document,
  n = navigator;

export default function geolocation(id) {
  const $id = d.getElementById(id),
    options = {
      eneableHighAcuracy: true, //esto servira para sacar la mejor lectura posible de nuestra ubicacion; esto obviamente dependera de nuestro hardaware y estado de red.
      timeout: 5000,
      maximumAge: 0, //Esto para que no se guarde cache de nuestra lectura anterior
    };

  const success = (position) => {
    let coo = position.coords;
    $id.innerHTML = `
    <p>
    Latitud: ${coo.latitude} 
    <br> Longitud: ${coo.longitude}
    <br> Presición: ${coo.accuracy} metros
    </p>
    <a href="https://www.google.com/maps/@${coo.latitude},${coo.longitude},17z" target="_blank" rel="noopener">Ver en Google Maps </a> `;
    // console.log(position);
  };

  const error = (err) => {
    $id.innerHTML = `
    <p><mark>Error: ${err.code} ${err.message}</mark></p>
    `;
    console.log(`Error: ${err.code} ${err.message}`);
  };

  n.geolocation.getCurrentPosition(success, error, options);
}
