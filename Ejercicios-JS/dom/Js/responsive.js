const d = document,
w = window;

export default function responsiveMedia (id, mq, mobileContent, desktopContent) {
 let breakPoint = w.matchMedia(mq);

const responsive = (e) => {
    if (e.matches) {  //matches es un metodo boolean, si es que se cumple devolvera un true de lo contrario un false
    d.getElementById(id).innerHTML = desktopContent;
    } else {
    d.getElementById(id).innerHTML = mobileContent;
    }

    //console.log(e.matches, breakPoint)
};

 breakPoint.addListener(responsive);
 responsive(breakPoint);
} 