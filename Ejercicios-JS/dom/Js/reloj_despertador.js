const d = document;
export function digitalClock (clock, buttonPlay, buttonStop) {
  let clockTime;
    d.addEventListener("click", (e) => {
   if (e.target.matches(buttonPlay)){
      clockTime = setInterval(() => {
           let clockHour = new Date().toLocaleTimeString();
            d.querySelector(clock).innerHTML = `<h3> ${clockHour} </h3>`
        }, 1000);

        e.target.disabled = true;
   }

   if (e.target.matches(buttonStop)){
       clearInterval(clockTime);
       d.querySelector(clock).innerHTML = null;
       d.querySelector(buttonPlay).disabled = false;
   }
 })
}

export function alarm (sound, btnPlay, btnStop, time) {
 let alarmTempo;
 const $alarm = d.createElement("audio");
 $alarm.src = sound;

 d.addEventListener("click", e => {
   if (e.target.matches(btnPlay)){
      alarmTempo = setTimeout(() => {
      $alarm.play();
    }, time);

    e.target.disabled = true;
   }
   
   if (e.target.matches(btnStop)){
    clearTimeout(alarmTempo);
    //NO existe un metodo stop
   $alarm.pause(); //Este metodo nos pausara el audio, pero ten en cuenta que una vez ejecutado de nuevo el boton, la alarma se reproducira desde del punto donde lo dejamos, por lo tanto deberemos que cambiar su tiempo a cero y yap
   $alarm.currentTime = 0; //este devolvera el tiempo recurrente a 0, como se lo explicamos en el paramtro del metodo xd   
   d.querySelector(btnPlay).disabled = false;
  }
 });
}
