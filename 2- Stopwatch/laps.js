window.onload=function(){
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');
  const milliseconds = document.getElementById('milliseconds');
  const startStopBtn = document.getElementById('start-stop-btn');
  const lapBtn = document.getElementById('lap-btn');
  const resetBtn = document.getElementById('reset-btn');

  let minutesSet = 0;
  let secondsSet = 0;
  let millisecondsSet = 0;

  let lastUpdateTime = 0;
  let isRunning = false;
  let timerInterval;

  startStopBtn.onclick = function() {
    startTimer();
  };

  lapBtn.onclick = function() {
    const lap = document.getElementById('laps');
    const li = document.createElement('li');
    li.innerHTML = `lap: <span>${minutes.textContent}:${seconds.textContent}:${milliseconds.textContent}</span>`;
    lap.appendChild(li);
  };

  resetBtn.onclick = function() {
    millisecondsSet = 0;
    secondsSet = 0;
    minutesSet = 0;
    updateDisplay();
    document.getElementById('laps').innerHTML = '';
    isRunning = false;
    startStopBtn.innerHTML = 'Start';
  };

  function updateDisplay() {
    milliseconds.textContent = String(millisecondsSet).padStart(2, '0');
    seconds.textContent = String(secondsSet).padStart(2, '0');
    minutes.textContent = String(minutesSet).padStart(2, '0');
  }

  function startTimer() {
    if (!isRunning) {
      isRunning = true;
      startStopBtn.innerHTML = 'Stop';
      lastUpdateTime = Date.now();
      requestAnimationFrame(updateTimer);
    } else {
      isRunning = false;
      startStopBtn.innerHTML = 'Start';
      clearInterval(timerInterval);
    }
  }

  function updateTimer() {
    if (isRunning) {
      const currentTime = Date.now();
      const delta = currentTime - lastUpdateTime;

      if (delta >= 10) {
        millisecondsSet++;
        if (millisecondsSet === 100) {
          millisecondsSet = 0;
          secondsSet++;
        }
        if (secondsSet === 60) {
          secondsSet = 0;
          minutesSet++;
        }

        updateDisplay();
        lastUpdateTime = currentTime;
      }

      requestAnimationFrame(updateTimer);
    }
  }

  updateDisplay();
};
