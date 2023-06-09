const a = document.querySelector(".off");
const b = document.querySelector(".on");
const c = document.querySelector(".btnOn");
const d = document.querySelector(".btnOff");

let flag = true;

function onOff() {
  if (flag) {
    a.innerHTML = `<div class="on">
            <img src="https://media.istockphoto.com/id/1400469622/photo/led-filament-tungsten-vintage-light-bulb-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=9qPwQzQRb8zEcauCNFWWMP2AJPbP6cUwY1rxtY0EqPE=" alt="">
         </div>`;
         d.innerHTML = "Click to OFF the bulb";
         d.style.backgroundColor = "rgb(241, 241, 168)";
    flag = false;
  } else {
    a.innerHTML = ` <div class="off"  style="width: 100%">
            <img
              src="https://media.istockphoto.com/id/185206958/photo/light-bulb.jpg?s=2048x2048&w=is&k=20&c=ntDUh84CnKqTEMk-kyERM7qjwzSRu0sx1uWOZpPa6Wc="/>
         </div>`;
         d.innerHTML = "Click to ON the bulb";
         d.style.backgroundColor = "rgb(231, 141, 109)";
    flag = true;
  }
}
