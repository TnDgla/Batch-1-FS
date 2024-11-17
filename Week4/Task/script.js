
function updateGlobalTime() {
    const date = new Date();
    
  
    let globalHour = date.getUTCHours();
    let globalMinute = date.getUTCMinutes();
    let globalSecond = date.getUTCSeconds();
    

    const formattedGlobalHour = String(globalHour).padStart(2, '0');
    const formattedGlobalMinute = String(globalMinute).padStart(2, '0');
    const formattedGlobalSecond = String(globalSecond).padStart(2, '0');
    

    const globalTime = document.querySelector('.global-time');
    globalTime.textContent = `${formattedGlobalHour}:${formattedGlobalMinute}:${formattedGlobalSecond}`;
}


updateGlobalTime(); 
setInterval(updateGlobalTime, 1000);


function updateCurrentTime() {
    const date = new Date();

    // Ensure we convert numbers to strings and then pad with leading zero if needed
    let hourT = String((date.getHours())).padStart(2, '0');
    let minuteT = String(date.getMinutes()).padStart(2, '0');
    let secondT = String(date.getSeconds()).padStart(2, '0');

    // Update current time elements
    const currentHour = document.querySelector('.hour-time');
    currentHour.textContent = `${hourT}:`;

    const currentMinute = document.querySelector('.minute-time');
    currentMinute.textContent = `${minuteT}:`;

    const currentSecond = document.querySelector('.second-time');
    currentSecond.textContent = `${secondT}`;
}

// Update current time immediately and every second
updateCurrentTime();
setInterval(updateCurrentTime, 1000);

const timer=document.querySelector('.timer')
const stopwatch=document.querySelector('.stopwatch');

timer.addEventListener('click',(event)=>{
    event.preventDefault();
    document.querySelector('.time-text').textContent='Timer:'
})

