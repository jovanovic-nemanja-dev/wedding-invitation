(function () {
  // June 6, 2026 15:00 Belgrade time (CEST = UTC+2)
  var TARGET = new Date('2026-06-06T15:00:00+02:00');

  var daysEl = document.getElementById('days');
  var hoursEl = document.getElementById('hours');
  var minutesEl = document.getElementById('minutes');
  var secondsEl = document.getElementById('seconds');
  var countdownEl = document.querySelector('.countdown');
  var doneEl = document.getElementById('countdown-done');

  function pad(n) {
    return n < 10 ? '0' + n : String(n);
  }

  function update() {
    var now = Date.now();
    var diff = TARGET - now;

    if (diff <= 0) {
      if (countdownEl) countdownEl.hidden = true;
      if (doneEl) {
        doneEl.hidden = false;
      }
      return;
    }

    var totalSeconds = Math.floor(diff / 1000);
    var seconds = totalSeconds % 60;
    var totalMinutes = Math.floor(totalSeconds / 60);
    var minutes = totalMinutes % 60;
    var totalHours = Math.floor(totalMinutes / 60);
    var hours = totalHours % 24;
    var days = Math.floor(totalHours / 24);

    if (daysEl) daysEl.textContent = days;
    if (hoursEl) hoursEl.textContent = pad(hours);
    if (minutesEl) minutesEl.textContent = pad(minutes);
    if (secondsEl) secondsEl.textContent = pad(seconds);
  }

  update();
  setInterval(update, 1000);
})();
