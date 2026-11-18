// ---------- Screen switching ----------

// Show one screen, hide the others
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(function (screen) {
    screen.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

// Splash shows for 2.5 seconds, then the question appears
setTimeout(function () {
  showScreen('question');
}, 2500);

// ---------- Yes button ----------

const yesBtn = document.getElementById('yes-button');

yesBtn.addEventListener('click', function () {
  showScreen('success');
});

// ---------- No button (dodges!) ----------

const noBtn = document.getElementById('no-button');

// Pure logic: pick a random position inside the given limits.
// Kept separate so we can write an automated test for it in Week 2.
function getRandomPosition(maxX, maxY) {
  return {
    x: Math.floor(Math.random() * maxX),
    y: Math.floor(Math.random() * maxY)
  };
}

// Move the No button somewhere else on the screen
function moveNoButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;
  const pos = getRandomPosition(maxX, maxY);

  noBtn.style.position = 'fixed';
  noBtn.style.left = pos.x + 'px';
  noBtn.style.top = pos.y + 'px';
}

// Mouse: dodge as soon as the cursor gets near
noBtn.addEventListener('mouseover', moveNoButton);

// Phone: there is no hover on touch screens, so dodge on touch instead
noBtn.addEventListener('touchstart', function (event) {
  event.preventDefault(); // stops the tap from counting as a click
  moveNoButton();
});

// Safety net: if a click ever gets through, dodge instead of accepting it
noBtn.addEventListener('click', function (event) {
  event.preventDefault();
  moveNoButton();
});