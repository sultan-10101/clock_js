const WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function updateTime(){
    var now = new Date();



    document.getElementById("time").innerHTML = zeroPadding(now.getHours(), 2) + ":" + zeroPadding(now.getMinutes(), 2) + ":" + zeroPadding(now.getSeconds(), 2);

    document.getElementById("date").innerHTML = WEEK[now.getDay()] + "-" + now.getFullYear() + "." + zeroPadding(now.getMonth() + 1, 2) + "." + zeroPadding(now.getDate(), 2) + " " + WEEK[now.getDay()];

}

updateTime();
setInterval(updateTime, 1000);

document.body.addEventListener('mousemove', (e) => {
    document.body.style.setProperty('--x', `${e.clientX}px`);
    document.body.style.setProperty('--y', `${e.clientY}px`);
  });

function zeroPadding(num, digit) {
    return String(num).padStart(digit, "0");}

    // script2.js
