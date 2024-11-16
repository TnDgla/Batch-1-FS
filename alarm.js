
document.getElementById("timeBtn").addEventListener("click", function() {
    document.getElementById("mainPage").classList.add("hidden");
    document.getElementById("timePage").classList.remove("hidden");
    updateTime();
});


document.getElementById("alarmBtn").addEventListener("click", function() {
    document.getElementById("mainPage").classList.add("hidden");
    document.getElementById("alarmPage").classList.remove("hidden");
});

// Show stopwatch page when "StopWatch" button is clicked
document.getElementById("stopwatchBtn").addEventListener("click", function() {
    document.getElementById("mainPage").classList.add("hidden");
    document.getElementById("stopwatchPage").classList.remove("hidden");
});

// Return to main page when "Back" button is clicked on time page
document.getElementById("backBtn").addEventListener("click", function() {
    document.getElementById("timePage").classList.add("hidden");
    document.getElementById("mainPage").classList.remove("hidden");
});

// Return to main page when "Back" button is clicked on stopwatch page
document.getElementById("stopwatchBackBtn").addEventListener("click", function() {
    document.getElementById("stopwatchPage").classList.add("hidden");
    document.getElementById("mainPage").classList.remove("hidden");
});

// Return to main page when "Back" button is clicked on alarm page
document.getElementById("alarmBackBtn").addEventListener("click", function() {
    document.getElementById("alarmPage").classList.add("hidden");
    document.getElementById("mainPage").classList.remove("hidden");
});

// Function to update time in the boxes
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById("hour").textContent = hours;
    document.getElementById("minute").textContent = minutes;
    document.getElementById("second").textContent = seconds;

    // Refresh every second
    setTimeout(updateTime, 1000);
}

// Stopwatch functionality
let stopwatchInterval;
let stopwatchTime = { hours: 0, minutes: 0, seconds: 0 };

function updateStopwatchDisplay() {
    document.getElementById("stopwatchHour").textContent = stopwatchTime.hours.toString().padStart(2, '0');
    document.getElementById("stopwatchMinute").textContent = stopwatchTime.minutes.toString().padStart(2, '0');
    document.getElementById("stopwatchSecond").textContent = stopwatchTime.seconds.toString().padStart(2, '0');
}

function startStopwatch() {
    if (stopwatchInterval) return; // If already running, do nothing

    stopwatchInterval = setInterval(() => {
        stopwatchTime.seconds++;
        if (stopwatchTime.seconds === 60) {
            stopwatchTime.seconds = 0;
            stopwatchTime.minutes++;
        }
        if (stopwatchTime.minutes === 60) {
            stopwatchTime.minutes = 0;
            stopwatchTime.hours++;
        }
        updateStopwatchDisplay();
    }, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

function resetStopwatch() {
    stopStopwatch();
    stopwatchTime = { hours: 0, minutes: 0, seconds: 0 };
    updateStopwatchDisplay();
}

// Stopwatch button event listeners
document.getElementById("startBtn").addEventListener("click", startStopwatch);
document.getElementById("stopBtn").addEventListener("click", stopStopwatch);
document.getElementById("resetBtn").addEventListener("click", resetStopwatch);

// Alarm functionality
let alarmTime = null;

function setAlarm() {
    const alarmHour = parseInt(document.getElementById("alarmHour").value);
    const alarmMinute = parseInt(document.getElementById("alarmMinute").value);
    
    alarmTime = new Date();
    alarmTime.setHours(alarmHour, alarmMinute, 0, 0); // Set alarm time

    // Confirm the alarm time with a popup
    alert(`Your alarm is set for ${alarmHour}:${alarmMinute.toString().padStart(2, '0')}`);

    // Start checking if the alarm time has been reached
    checkAlarm();
}

// Check if the alarm time has come
function checkAlarm() {
    setInterval(() => {
        const currentTime = new Date();
        const currentHours = currentTime.getHours();
        const currentMinutes = currentTime.getMinutes();

        // When current time matches the alarm time
        if (alarmTime && currentHours === alarmTime.getHours() && currentMinutes === alarmTime.getMinutes()) {
            alert("Wake UP!"); // Display alert when alarm goes off
            alarmTime = null; // Reset the alarm after it rings
        }
    }, 1000); // Check every second
}

// Set the alarm when button is clicked
document.getElementById("setAlarmBtn").addEventListener("click", setAlarm);
