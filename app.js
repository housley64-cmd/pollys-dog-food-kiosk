function showHome() {
  var home = document.getElementById('homeScreen');
  var section = document.getElementById('sectionScreen');
  var homeBtn = document.getElementById('homeBtn');

  home.className = 'screen active-screen';
  section.className = 'screen';
  homeBtn.style.display = 'none';

  window.scrollTo(0, 0);
}

function openSection(name) {
  var home = document.getElementById('homeScreen');
  var section = document.getElementById('sectionScreen');
  var title = document.getElementById('sectionTitle');
  var homeBtn = document.getElementById('homeBtn');

  title.innerHTML = name;
  home.className = 'screen';
  section.className = 'screen active-screen';
  homeBtn.style.display = 'block';

  window.scrollTo(0, 0);
}

document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
});
