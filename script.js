const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;

  fetch(contactForm.action, {
    method: contactForm.method,
    body: new FormData(contactForm),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      contactForm.reset();
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  }).catch(error => {
    alert("Oops! There was a problem submitting your form.");
  });
});

// Video modal functions (if still needed)
function openVideo(src) {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('modalVideo');
  video.src = src;
  modal.style.display = 'flex';
  video.play();
}

function closeVideo() {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('modalVideo');
  video.pause();
  video.currentTime = 0;
  modal.style.display = 'none';
}
