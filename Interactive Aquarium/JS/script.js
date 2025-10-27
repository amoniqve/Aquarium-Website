// Bubbles animation
for (let i = 0; i < 30; i++) {
  let bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${5 + Math.random() * 5}s`;
  document.body.appendChild(bubble);
}

// Fish facts
const fishElements = document.querySelectorAll('.fish');
const factBox = document.getElementById('fact-box');

fishElements.forEach(fish => {
  fish.addEventListener('click', () => {
    factBox.textContent = fish.getAttribute('data-fact');
  });
});

// Looping animation 
document.addEventListener("DOMContentLoaded", () => {
  const loopers = [
    { selector: 'img[alt="Sea Turtle"]', speed: 1, direction: -1 },
    { selector: 'img[alt="Shark"]', speed: 2, direction: -1 },
    { selector: 'img[alt="Manta Ray"]', speed: 0.5, direction: -1 },
    { selector: 'img[alt="Clownfish"]', speed: 1, direction: 1 },
    { selector: 'img[alt="Blue Whale"]', speed: 0.5, direction: 1 },
    { selector: 'img[alt="Jellyfish"]', speed: 1, direction: -1, vertical: true },
    { selector: 'img[alt="Seahorse"]', speed: 1, direction: -1, vertical: true },
    { selector: 'img[alt="Octopus"]', speed: 1, direction: 1, vertical: true },
  ];

  loopers.forEach(({ selector, speed, direction, vertical }) => {
    const fish = document.querySelector(selector);
    if (!fish) return;

    let x = parseFloat(fish.style.left) || window.innerWidth;
    let y = parseFloat(fish.style.top) || 0;

    function swim() {
      if (vertical) {
        y += direction * speed;
        if (y < -fish.offsetHeight) {
          y = window.innerHeight;
        } else if (y > window.innerHeight) {
          y = -fish.offsetHeight;
        }
        fish.style.top = y + "px";
      } else {
        x += direction * speed;
        if (x < -fish.offsetWidth) {
          x = window.innerWidth;
        } else if (x > window.innerWidth) {
          x = -fish.offsetWidth;
        }
        fish.style.left = x + "px";
      }
      requestAnimationFrame(swim);
    }

    swim();
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach((btn) => {
    btn.addEventListener('click', function () {
      this.classList.toggle('active');
      const panel = this.nextElementSibling;
      panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    });
  });
});


// Fish clicking  (display facts and play sound)
document.querySelectorAll('.fish').forEach(fish => {
  fish.addEventListener('click', function () {
    // Show fact
    const factBox = document.getElementById('fact-box');
    factBox.textContent = fish.getAttribute('data-fact');

    const sound = document.getElementById('fish-sound');
    sound.currentTime = 0; 
    sound.play();
  });
});

// Background sound
window.addEventListener("load", () => {
  const ambientSound = document.getElementById('ambient-sound');
  
  // Button at the bottom
  ambientSound.play().catch(error => {
    console.error("Error playing background sound:", error);
  });

 
  ambientSound.volume = 0.3; 
});

