function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    hours = hours % 12 || 12; // Convert 24-hour time to 12-hour format
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
    document.getElementById('ampm').innerText = ampm;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  updateClock();
  