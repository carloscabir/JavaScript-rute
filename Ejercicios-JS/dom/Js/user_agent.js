const d = document,
  n = navigator,
  us = n.userAgent;

export default function userDeviceInfo(id) {
  const $id = d.getElementById(id),
    isMobile = {
      android: () => us.match(/android/i),
      ios: () => us.match(/iphone|ipad|ipod/i),
      windows: () => us.match(/windows phone/i),
      any: function () {
        return this.android() || this.windows() || this.ios();
      },
    },
    isDesktop = {
      linux: () => us.match(/linux/i),
      windows: () => us.match(/windows nt/i),
      mac: () => us.match(/mac os/i),
      any: function () {
        return this.linux() || this.windows() || this.mac();
      },
    },
    isBrowser = {
      chrome: () => us.match(/chrome/i),
      safari: () => us.match(/safari/i),
      firefox: () => us.match(/firefox/i),
      opera: () => us.match(/opera|opera mini/i),
      edge: () => us.match(/edge/i),
      ie: () => us.match(/msie|iemobile/i),
      any: function () {
        return (
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera() ||
          this.edge() ||
          this.ie()
        );
      },
    };
  //console.log(us);
  //console.log(isMobile.any());
  //console.log(isDesktop.any());
  //console.log(isBrowser.any());
  $id.innerHTML = `<h3>${us}</h3>
 <p> Movil: ${isMobile.any()} </p>
 <p> Escritorio: ${isDesktop.any()} </p>
 <p> Navegador: ${isBrowser.any()} </p>`;

  /*CONTENIDO EXCLUSIVO*/
  if (isBrowser.chrome()) {
    $id.innerHTML += `
    <br>
    <br>
     <p>Tierrita Mojada - Ed Maverick.. Solo en Chrome</p>
    <audio src="assets/tierrita_mojada.mp3" controls></audio>`;
  }

  if (isBrowser.firefox()) {
    $id.innerHTML += `
    <br>
    <br> 
    <p>A mí - Ed Maverick.. Solo en FireFox</p>
    <audio src="assets/ami.mp3" controls></audio>  
    `;
  }

  /*REDIRECCIONES*/
  //  if (isMobile.android()) {
  //    window.location.href = "https://jonmircha.com";
  //  }
}
