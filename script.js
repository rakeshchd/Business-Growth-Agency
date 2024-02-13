document.addEventListener("DOMContentLoaded", function() {
    const totalTime = 10 * 60;
    let timeLeft = totalTime;
    let timerInterval;
  
    // Function to update the timer
    function updateTimer() {
      const hours = Math.floor(timeLeft / 3600);
      const minutes = Math.floor((timeLeft % 3600) / 60);
      let seconds = timeLeft % 60;
  
      // Add leading zero to seconds if needed
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
  
      // Update the timer display
      document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
      document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
      document.getElementById('seconds').innerText = seconds;
  
      // Check if the timer has reached zero
      if (timeLeft === 0) {
        clearInterval(timerInterval);
        // Here you can add any additional actions you want to perform when the timer ends
      } else {
        // Decrement time left
        timeLeft--;
      }
    }
  
    // Call updateTimer every second
    timerInterval = setInterval(updateTimer, 1000);
    
    // Form Slide-up after 15 seconds
    setTimeout(function() {
      document.getElementById('form-container').style.display = 'block';
    }, 15000);
  
    var modal = document.getElementById("popupForm");
    var btn = document.getElementById("openFormBtn");
    var span = document.getElementsByClassName("close")[0];
  
    btn.onclick = function() {
      modal.style.display = "block";
      btn.style.display = "none";
    }
  
    span.onclick = function() {
      modal.style.display = "none";
      btn.style.display = "block";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        btn.style.display = "block";
      }
    }
  });
  
  var words = ['Hi i like HTML', 'I also like css', 'Lorem ipsum dolor sit amet', ' consectetur adipiscing elit', 'sed do eiusmod tempor incididunt'],
      part,
      i = 0,
      offset = 0,
      len = words.length,
      forwards = true,
      skip_count = 0,
      skip_delay = 15,
      speed = 70;
  
  var wordflick = function () {
    setInterval(function () {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      }
      else {
        if (offset == 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      part = words[i].substr(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        }
        else {
          offset--;
        }
      }
      $('.word').text(part);
    },speed);
  };
  
  $(document).ready(function () {
    wordflick();
  });
  