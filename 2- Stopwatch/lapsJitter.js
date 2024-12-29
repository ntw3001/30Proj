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
  let interval;

  startStopBtn.onclick = function() {
    startStopBtn.classList.toggle('timer-on');
    const lapTime = document.querySelector('.lap-time');
    lapTime.classList.toggle("dimming-effect");
    if (startStopBtn.classList.contains('timer-on')) {
      startStopBtn.innerHTML = 'Stop';
      interval = setInterval(startTimer, 10);
    } else {
      startStopBtn.innerHTML = 'Start';
      clearInterval(interval);
      return;
    }
  };

  lapBtn.onclick = function() {
    const lap = document.getElementById('laps');
    const li = document.createElement('li');
    li.innerHTML = `lap: <span>${minutes.innerHTML}:${seconds.innerHTML}:${milliseconds.innerHTML}</span>`;

    lap.appendChild(li);
  };

  resetBtn.onclick = function() {
    clearInterval(interval);
    minutesSet = 0;
    secondsSet = 0;
    millisecondsSet = 0;
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';
    milliseconds.innerHTML = '00';

    document.getElementById('laps').innerHTML = '';

    startStopBtn.classList.remove('timer-on');
    startStopBtn.innerHTML = 'Start!';
  }

  function startTimer() {
    millisecondsSet++;
    let millisecondsDisplay = ('00' + millisecondsSet).slice(-3);
    milliseconds.textContent = millisecondsDisplay.slice(-2);
    if (millisecondsSet < 10) {
      milliseconds,'0' + millisecondsSet;
    } else {
      milliseconds.textContent = millisecondsSet;
    }
    if (millisecondsSet === 100) {
      millisecondsSet = 0;
      secondsSet++;
      let secondsDisplay = ('00' + secondsSet).slice(-3);
      seconds.textContent = secondsDisplay.slice(-2);
      if (secondsSet < 10) {
        seconds.textContent = '0' + secondsSet;
      } else {
        seconds.textContent = secondsSet;
      }
    }
    if (secondsSet === 60) {
      secondsSet = 0;
      minutesSet++;
      let minutesDisplay = ('00' + minutesSet).slice(-3);
      minutes.textContent = minutesDisplay.slice(-2);
      if (minutesSet < 10) {
        minutes.textContent = '0' + minutesSet;
      } else {
        minutes.textContent = minutesSet;
      }
    }
  }
}
