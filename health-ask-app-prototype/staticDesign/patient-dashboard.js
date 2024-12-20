// Afficher un modal
function showModal(modalId) {
  console.log("Opening modal:"+modalId);
  const modal = document.getElementById(modalId);
  if(modal){
    modal.style.display='flex';
  }else{
    console.error("Modal not found:",modalId);
  }
}

// Fermer un modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Soumettre un formulaire
function submitForm(event) {
  event.preventDefault();
  alert('Formulaire soumis avec succès.');
  closeModal('respond-form-modal');
}

// Supprimer les données
function deleteData() {
  alert('Vos données ont été envoyées par email et supprimées.');
  window.location.href = 'login.html'; // Redirige vers la page de login
}

// Se déconnecter
function logout() {
  alert('Vous avez été déconnecté.');
  window.location.href = 'login.html';
}

document.querySelectorAll('.btn').forEach((button) => {
  button.addEventListener('click', (event) => {
    const modalId = button.getAttribute('data-modal-id');
    if (modalId) showModal(modalId);
  });
});

// Liste des formulaires avec leurs questions et réponses
const formDetails = {
  "Avant Première Consultation": [
    { question: "Avez-vous déjà consulté un médecin pour ce problème ?", answer: "Oui" },
    { question: "Avez-vous des antécédents médicaux ?", answer: "Non" }
  ],
  "Questionnaire Maux de Tête": [
    { question: "À quelle fréquence avez-vous des maux de tête ?", answer: "Une fois par semaine" },
    { question: "Quels traitements utilisez-vous ?", answer: "Paracétamol" }
  ],
  "Questionnaire Stress": [
    { question: "Comment évaluez-vous votre niveau de stress ?", answer: "Modéré" },
    { question: "Quels facteurs provoquent ce stress ?", answer: "Travail, famille" }
  ]
};

// Afficher la section des formulaires

function showFormDataSection(){
  const userDataSection = document.getElementById('user-data-section');
  const formDataSection = document.getElementById('form-data-section');

  if(userDataSection.style.display=='block'){
    userDataSection.style.display='none';
  }

  formDataSection.style.display='block';

}

// Afficher les détails d'un formulaire dans un modal
function showFormDetails(formName) {
  const modal = document.getElementById('form-details-modal');
  const titleElement = document.getElementById('form-title');
  const contentElement = document.getElementById('form-content');

  // Injecter les détails du formulaire
  titleElement.innerText = formName;
  contentElement.innerHTML = formDetails[formName]
    .map(item => `<p><strong>${item.question}</strong>: ${item.answer}</p>`)
    .join('');

  // Afficher le modal
  modal.style.display = 'flex';
}

// Fermer un modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}


function showUserDataSection(){
  const userDataSection = document.getElementById('user-data-section');
  const formulairesSection = document.getElementById('form-data-section');

  if(formulairesSection.style.display=='block'){
    formulairesSection.style.display='none';
  }

  userDataSection.style.display='block';

}

function hideUserDataSection(){
  const userDataSection = document.getElementById('user-data-section');
  userDataSection.style.display='none';
}

function hideFormDataSection(){
  const userDataSection = document.getElementById('form-data-section');
  userDataSection.style.display='none';
}

// Fonction pour afficher la section de suppression des données
function showDeleteUserSection() {
  const deleteUserSection = document.getElementById('delete-user-content');
  const formulairesSection = document.getElementById('form-data-section');
  const userDataSection = document.getElementById('user-data-section');

  // Masquer les autres sections si elles sont visibles
  if (formulairesSection.style.display === 'block') {
    formulairesSection.style.display = 'none';
  }
  if (userDataSection.style.display === 'block') {
    userDataSection.style.display = 'none';
  }

  // Afficher la section de suppression des données
  deleteUserSection.style.display = 'block';
}

// Fonction pour masquer la section de suppression des données
function hideDeleteUserSection() {
  const deleteUserSection = document.getElementById('delete-user-content');
  deleteUserSection.style.display = 'none';
}

// Fonction pour confirmer la suppression des données
function confirmDataDeletion() {
  alert('Vos données ont été supprimées. Un email de confirmation vous sera envoyé.');
  // Logique pour effectuer la suppression des données
  hideDeleteUserSection();
  logout();
}
