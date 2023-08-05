let rotated = false;

function rotateIcon() {
  const icon = document.getElementById('left');
  rotated = !rotated;
  icon.style.transform = rotated ? 'rotate(90deg)' : 'rotate(0deg)';
}

function playsimpl() {
  var audio = new Audio('c1.wav');
  audio.play();
}

function playrev() {
  var audio = new Audio('c2.wav');
  audio.play();
}

function playel() {
  var audio = new Audio('c3.wav');
  audio.play();
}
function toggleButton(button) {
  // Überprüfe, ob der Button bereits aktiviert ist
  const isActive = button.classList.contains('active');

  // Wenn der Button aktiv ist, entferne die 'active'-Klasse und mache ihn wieder normal
  if (isActive) {
      button.classList.remove('active');
  }
  // Wenn der Button nicht aktiv ist, füge die 'active'-Klasse hinzu, um ihn dunkler zu machen
  else {
      button.classList.add('active');
  }
}

const notes = {
  C: new Audio('c1.wav'),
  D: new Audio('c1.wav'),
  E: new Audio('c1.wav'),
  F: new Audio('c1.wav'),
  G: new Audio('c1.wav'),
  A: new Audio('c1.wav'),
  B: new Audio('c1.wav'),
  C2: new Audio('c1.wav'),
};

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('click', () => {
      const note = key.getAttribute('data-note');
      if (note) {
          notes[note].currentTime = 0;
          notes[note].play();
      }
  });
});