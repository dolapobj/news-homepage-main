

//Toggle the menu and screen overlay
document.getElementById('menuButton').addEventListener('click', function() {
    document.getElementById('menuOverlay').classList.toggle('open');
    document.getElementById('screenOverlay').classList.toggle('open');
  });


  //Clear menu when screen overlay is clicked
  document.getElementById('screenOverlay').addEventListener('click', function() {
    document.getElementById('menuOverlay').classList.remove('open');
    document.getElementById('screenOverlay').classList.remove('open');
  });

  // Clear menu when menu-close button is clicked 
  document.getElementById('menuButtonClose').addEventListener('click', function() {
    document.getElementById('menuOverlay').classList.remove('open');
    document.getElementById('screenOverlay').classList.remove('open');
  });