var btn = document.querySelector('.switchBtn');
var video = document.querySelector('.videoController');

btn.addEventListener('click', function () {
  if (!btn.classList.contains('slide')) {
    btn.classList.add('slide');
    video.pause();
  } else {
    btn.classList.remove('slide');
    video.play();
  }
});

const preloader = document.querySelector('.preloader');
window.addEventListener('load', function () {
  preloader.classList.add('hidePreloader');
});
