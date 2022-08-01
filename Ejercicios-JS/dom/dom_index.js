import hamburgerMenu from "./Js/menu_hamburguesa.js";
import { digitalClock, alarm } from "./Js/reloj_despertador.js";
import { shorkuts } from "./Js/teclado.js";
import { moveBall } from "./Js/teclado.js";
import countdown from "./Js/contador.js";
import scrollTopButton from "./Js/boton_scroll.js";
import tema from "./Js/boton_tema.js";
import responsiveMedia from "./Js/responsive.js";
import responsiveTester from "./Js/prueba_responsive.js";
import userDeviceInfo from "./Js/user_agent.js";
import estadoDeRed from "./Js/estado_de_red.js";
import webcam from "./Js/webcam.js";
import geolocation from "./Js/geolocalizacion.js";
import searchFilters from "./Js/filtro_busquedas.js";
import draw from "./Js/sorteo.js";
import slider from "./Js/carrusel.js";
import scrollSpy from "./Js/scroll_spy.js";
import smartVideo from "./Js/video_inteligente.js";
import contactFormValidations from "./Js/validaciones_formularios.js";
import speechReader from "./Js/lector-voz.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#clock", "#inicio-reloj", "#parar-reloj");
  alarm(
    "/CursoJavaScript/Ejercicios Js/dom/assets/alarma.mp3",
    "#iniciar-alarma",
    "#parar-alarma",
    2000
  );
  countdown(
    "countdown",
    "October 5, 2022 06:20:18",
    "Feliz Cumpleños culona 🖤"
  );
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    '<a href="https://youtu.be/SiyGLy5TGo0" target="_blank" rel="nofollow">Youtube</a>',
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/SiyGLy5TGo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    '<a href="https://www.google.com.mx/maps/place/Palacio+de+Bellas+Artes/@19.4352,-99.1412,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1f92b75aa014d:0x17d810d20da6e8cf!8m2!3d19.4352!4d-99.1412" target="_blank" rel="nofollow">Maps</a>',
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.472147824537!2d-99.1412!3d19.4352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92b75aa014d%3A0x17d810d20da6e8cf!2sPalacio%20de%20Bellas%20Artes!5e0!3m2!1ses-419!2smx!4v1655428291533!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webcam("webcam");
  geolocation("geolocation");
  searchFilters(".card-filter", ".card");
  draw("#obtain", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
});

d.addEventListener("keydown", (e) => {
  shorkuts(e);
  moveBall(e, ".ball", ".stage");
});

tema(".dark-light-btn", "dark-mode", "light-mode");
estadoDeRed();
speechReader();
