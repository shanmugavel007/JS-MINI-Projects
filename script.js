
function updateTime(){
const currentYear=new Date().getFullYear()
const newYear=new Date(` jan 1 ${currentYear+1} 00:00:00`)
const currentDate=new Date()
const diff=newYear-currentDate

const d=Math.floor(diff/1000/60/60/24)
const h=Math.floor((diff/1000/60/60)%24)
const m=Math.floor((diff/1000/60)%60)
const s=Math.floor((diff/1000)%60)
days.textContent=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h;
minutes.innerHTML=m<10?"0"+m:m;
seconds.innerHTML=s<10?"0"+s:s;
// console.log(`${d}:days ${h}:hours ${m}:minutes ${s}:second`)
}

setInterval(updateTime,1000);

let days=document.getElementById("days")
let hours=document.getElementById("hours")
let minutes=document.getElementById("minutes")
let seconds=document.getElementById("seconds")





