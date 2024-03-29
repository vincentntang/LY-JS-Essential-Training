const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let hrPosition = 360*hr/12 + (360*(min/60)/12); //hours are 1-24 values
let minPosition = (360*min/60) +(360*(sec/60)/60); //minutes are 1-59 values
let secPosition = 360*sec/60 //seconds are 1-59 values

console.log("Hours: ", hr, "Minutes: ", min, "Seconds: ", sec);
console.log("Hours: " + hr, "Minutes: " + min, "Seconds: " + sec);

function runTheClock() {

  secPosition = secPosition+6;  //360*/60
  minPosition = minPosition+(6/60);
  hrPosition = hrPosition+(30/3600)

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock,1000); //runs clock 1000ms=1s
