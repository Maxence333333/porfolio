// Sélection des éléments
const navLinks = document.querySelectorAll('.nav-links li a');
const sections = document.querySelectorAll('.section');
const contactForm = document.querySelector('form');
const projects = document.querySelectorAll('.project');
const projectDetails = document.getElementById('project-details');
const projectTitle = document.getElementById('project-title');
const projectDetailImage = document.getElementById('project-detail-image');
const projectDescription = document.getElementById('project-description');
const projectTechnologies = document.getElementById('project-technologies');
const projectElements = document.getElementById('project-elements');
const closeDetailsButton = document.getElementById('close-details');
const filterButtons = document.querySelectorAll('.filter-button');

const projectData = {
    project1: {
        title: 'Javascript API',
        image: 'img/js.png',
        description: "L'objectif de ce projet est de créer une application web qui utilise une API pour afficher des données dynamiques.",
        technologies: ['HTML', 'CSS', 'JavaScript'],
        elements: ['Requete GET', 'Requete POST', 'Gestion des erreurs']
    },
    project2: {
        title: 'Mini Shell',
        image: 'img/minishell.png',
        description: "L'objectif de ce projet est de créer un mini shell qui permet d'exécuter des commandes système.",
        technologies: ['C', 'Linux'],
        elements: ['allocation de mémoire','pointeur','fork']
    },
    project3: {
        title: 'Gestion de competition ROBOCUP',
        image: 'img/projetSymfonyRoboCup.png',
        description: "L'objectif de ce projet est de créer une application web pour gérer et afficher des compétitions de robots jouant au foot.",
        technologies: ['Symfony', 'PHP', 'MySQL'],
        elements: ['CRUD', 'Authentification']
    },
    project4: {
        title: 'Site web vitrine',
        image: 'img/siteWeb.png',
        description: "L'objectif de ce projet est de créer un site web vitrine pour une entreprise fictive.",
        technologies: ['HTML', 'CSS'],
        elements: ['Responsive design', 'CSS', 'Flexbox']
    },
    project5: {
        title: "Configuration d'une mini station méteo",
        image: 'img/stationMeteo.png',
        description: "L'objectif de ce projet est de configurer une mini station météo pour afficher les données météorologiques.",
        technologies: ['Java'],
        elements: ['Lecture de données', 'Affichage des données', 'Gestion des erreurs']
    },
    project6: {
        title: "Amélioration d'un jeu de cartes en 1c1",
        image: 'img/jeuDeCartes.png',
        description: "L'objectif de ce projet est d'améliorer un jeu de cartes en 1c1 en ajoutant de nouvelles fonctionnalités.",
        technologies: ['C#'],
        elements: ['Gestion des cartes', 'Gestion des joueurs', 'Gestion des tours']
    },
    project7: {
        title: "Tuto de création  d'environnement informatique",
        image: 'img/environnementReseaux.png',
        description: "L'objectif de ce projet est de créer un tutoriel pour la création d'un environnement informatique.",
        technologies: ['Virtual Machine'],
        elements: ['Responsive design', 'CSS', 'Flexbox']
    },
    project8: {
        title: "Configuration d'une mini station méteo",
        image: 'img/labyrinthe.png',
        description: "L'objectif de ce projet est de configurer une mini station météo pour afficher les données météorologiques.",
        technologies: ['Java'],
        elements: ['Lecture de données', 'Affichage des données', 'Gestion des erreurs']
    },
    project9: {
        title: "Amélioration d'un jeu de cartes en 1c1",
        image: 'img/jeuDeCartes.png',
        description: "L'objectif de ce projet est d'améliorer un jeu de cartes en 1c1 en ajoutant de nouvelles fonctionnalités.",
        technologies: ['C#'],
        elements: ['Gestion des cartes', 'Gestion des joueurs', 'Gestion des tours']
    }
    // Add more project data as needed
};

// Fonction pour afficher la section sélectionnée
function showSection(sectionId) {
    // Masque toutes les sections
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Affiche la section correspondante
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        // Ajoute une barre sous le lien du menu actif
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        const activeLink = document.querySelector(`.nav-links li a[data-section="${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
}

// Écoute les clics sur les liens du menu
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        const sectionId = link.getAttribute('data-section');
        showSection(sectionId);
    });
});

// Affiche la première section par défaut (par exemple "À propos")
showSection('home');

window.onload = function () {
    const form = document.getElementById('contact-form');
    const submitButton = form.querySelector('button[type="submit"]');
    let isSending = false; // Flag to prevent multiple submissions

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (isSending) {
            alert('Veuillez patienter avant de soumettre à nouveau.');
            return;
        }

        isSending = true;
        submitButton.disabled = true; // Disable the button to prevent multiple submissions

        emailjs.sendForm('service_d9lt1g2', 'template_tlees9b', this)
            .then(() => {
                console.log('SUCCESS!');
                alert('Votre message a bien été envoyé !');
                form.reset(); // Reset all form fields
            })
            .catch((error) => {
                console.log('FAILED...', error);
                alert('Une erreur est survenue lors de l\'envoi du message.');
            })
            .finally(() => {
                setTimeout(() => {
                    isSending = false; // Reset the flag after the delay
                    submitButton.disabled = false; // Re-enable the button
                }, 5000); // 5 seconds delay
            });
    });

    projects.forEach(project => {
        project.addEventListener('click', () => {
            const projectId = project.getAttribute('data-project');
            const data = projectData[projectId];

            projectTitle.textContent = data.title;
            projectDetailImage.src = data.image;
            projectDescription.textContent = data.description;
            projectTechnologies.innerHTML = data.technologies.map(tech => `<li>${tech}</li>`).join('');
            projectElements.innerHTML = data.elements.map(element => `<li>${element}</li>`).join('');

            projectDetails.classList.remove('hidden');
        });
    });

    closeDetailsButton.addEventListener('click', () => {
        projectDetails.classList.add('hidden');
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            projects.forEach(project => {
                const tags = project.getAttribute('data-tags').split(' ');
                if (filter === 'all' || tags.includes(filter)) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
};


