// Récupération des éléments du menu
const menuItems = document.querySelectorAll('nav ul li a');

// Parcours de tous les éléments du menu
menuItems.forEach(item => {
  // Ajout d'un écouteur d'événements au clic sur chaque élément
  item.addEventListener('click', e => {
    // Empêche le comportement par défaut de l'élément (la redirection vers une autre page)
    e.preventDefault();

    // Récupération de la section correspondante à l'élément du menu cliqué
    const section = document.querySelector(item.getAttribute('href'));

    // Défilement de la page jusqu'à la section correspondante
    section.scrollIntoView({ behavior: 'smooth' });
  });
});