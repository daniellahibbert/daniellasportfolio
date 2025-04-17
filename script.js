const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  alert(`Thank you, ${name}! Your message has been sent.`);
});

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
