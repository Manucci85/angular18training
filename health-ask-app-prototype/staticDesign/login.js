function showLogin(type) {
  const patientBtn = document.getElementById('btn-patient');
  const medecinBtn = document.getElementById('btn-medecin');
  const patientLogin = document.getElementById('login-patient');
  const medecinLogin = document.getElementById('login-medecin');

  if (type === 'patient') {
    // Afficher le login patient et cacher son bouton
    patientLogin.style.display = 'block';
    patientBtn.style.display = 'none';
    // Afficher le bouton médecin si caché
    medecinBtn.style.display = 'inline-block';
    medecinLogin.style.display = 'none';
  } else if (type === 'medecin') {
    // Afficher le login médecin et cacher son bouton
    medecinLogin.style.display = 'block';
    medecinBtn.style.display = 'none';
    // Afficher le bouton patient si caché
    patientBtn.style.display = 'inline-block';
    patientLogin.style.display = 'none';
  }
}

function handleLogin(event, type) {
  event.preventDefault(); // Empêcher le rechargement de la page

  if (type === 'patient') {
    // Redirection vers la page patient
    window.location.href = '/Users/emmanuel/gitProjects/angular18training/health-ask-app-prototype/staticDesign/patient-dashboard.html';
  } else if (type === 'medecin') {
    // Redirection vers la page dashboard
    window.location.href = '/Users/emmanuel/gitProjects/angular18training/health-ask-app-prototype/staticDesign/dashboard.html';
  }
}
