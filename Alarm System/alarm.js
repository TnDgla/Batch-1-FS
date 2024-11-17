const currentTimeElement = document.getElementById("current-time");
const alarmTimeInput = document.getElementById("alarm-time");
const setAlarmButton = document.getElementById("set-alarm");
const alarmAlert = document.getElementById("alarm-alert");
const snoozeAlarmButton = document.getElementById("snooze-alarm");
const stopAlarmButton = document.getElementById("stop-alarm");

let alarmTime = null;
let alarmTimeout = null;

function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString("en-US", { hour12: false });
  currentTimeElement.textContent = timeString;

  if (timeString === alarmTime) {
    triggerAlarm();
  }
}

setInterval(updateTime, 1000);


setAlarmButton.addEventListener("click", () => {
  alarmTime = alarmTimeInput.value + ":00"; 
  if (alarmTime) {
    alert(`Alarm set for ${alarmTime}`);
  } else {
    alert("Please select a valid time.");
  }
});


function triggerAlarm() {
  alarmAlert.classList.remove("hidden");
  alarmTimeout = setTimeout(() => {
    playSound();
  }, 500);
}


snoozeAlarmButton.addEventListener("click", () => {
  alarmAlert.classList.add("hidden");
  alarmTime = null; 
});


stopAlarmButton.addEventListener("click", () => {
  alarmAlert.classList.add("hidden");
  alarmTime = null;
  clearTimeout(alarmTimeout);
});


function playSound() {
  const audio = new Audio("alarm-sound.mp3");
  audio.play();
}
