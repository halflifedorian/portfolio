
window.addEventListener('load', () => {
  const popup = document.getElementById('popup');
  const closePopup = document.getElementById('close-popup');

  popup.classList.add('show');

  closePopup.addEventListener('click', () => {
    popup.classList.remove('show');
  });
});

const learnMoreButton = document.getElementById('learn-more');
const aboutSection = document.getElementById('about');

learnMoreButton.addEventListener('click', () => {
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});

const languageToggle = document.getElementById('language-toggle');
const textElements = {
  en: {
    socials: 'Socials',
    projects: 'Projects',
    keyboard: 'Keyboard',
    aboutMe: 'About Me',
    heroGreeting: "Hello, I'm <span class='highlight'>Dorian</span>",
    heroSubtext: 'a tech enthusiast',
    learnMore: 'learn more',
    aboutHeading: 'About Me',
    aboutText: "I'm a high school student from France with a passion for <span class='highlight2'>multimedia, design, and technology</span>. I love creating websites, programming, and testing tech-related things. My goal is to study multimedia and programming at university and turn my passion into a career. I also enjoy working on <span class='highlight2'>3D projects with Blender</span> and experimenting with <span class='highlight2'>music production using FL Studio</span>. Additionally, I run my own Minecraft server, which has given me hands-on experience with <span class='highlight2'>network configuration, server management, and troubleshooting</span>.",
    contactHeading: 'Contact Me',
    contactName: 'Your Name',
    contactEmail: 'Your Email',
    contactMessage: 'Your Message',
    sendMessage: 'Send Message',
    project1Title: 'Corne keyboard',
    project1Description: 'My wired 48 key keyboard using different layers to work.',
    project2Title: 'VerdantOS',
    project2Description: "An Arch Linux-based operating system I'm trying to make using ArchISO.",
    project3Title: 'Caac',
    project3Description: 'A Python demake of the famous game The Binding Of Isaac.',
  },
  fr: {
    socials: 'Réseaux',
    projects: 'Projets',
    keyboard: 'Clavier',
    aboutMe: 'À propos de moi',
    heroGreeting: "Bonjour, je suis <span class='highlight'>Dorian</span>",
    heroSubtext: 'un passionné de technologie',
    learnMore: 'en savoir plus',
    aboutHeading: 'À propos de moi',
    aboutText: "Je suis un lycéen français passionné par le <span class='highlight2'>multimédia, le design et la programmation</span>. J'adore créer des sites web, programmer et tester des choses liées à la technologie. Mon objectif est d'étudier tout ce qui concerne le multimédia et la programmation à l'université et de transformer ma passion en carrière. J'aime également travailler sur des <span class='highlight2'>projets 3D avec Blender</span> et expérimenter la <span class='highlight2'>production musicale avec FL Studio</span>. De plus, je gère mon propre serveur Minecraft, ce qui m'a permis d'acquérir une expérience pratique en <span class='highlight2'>configuration réseau, gestion de serveur et dépannage</span>.",
    contactHeading: 'Contactez-moi',
    contactName: 'Votre Nom',
    contactEmail: 'Votre Email',
    contactMessage: 'Votre Message',
    sendMessage: 'Envoyer le message',
    project1Title: 'Clavier Corne',
    project1Description: 'Mon clavier filaire à 48 touches utilisant différentes couches pour fonctionner.',
    project2Title: 'VerdantOS',
    project2Description: "Un système d'exploitation basé sur Arch Linux que j'essaie de créer avec ArchISO.",
    project3Title: 'Caac',
    project3Description: 'Un demake Python du célèbre jeu The Binding Of Isaac.',
  },
};

let currentLanguage = 'en';

languageToggle.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
  languageToggle.textContent = currentLanguage.toUpperCase();

  // Update navigation links
  document.querySelector('a[href="https://github.com/halflifedorian/corne"]').textContent = textElements[currentLanguage].keyboard;
  document.querySelector('a[href="https://halflifedorian.github.io/VerdantOS/"]').textContent = textElements[currentLanguage].projects;
  document.querySelector('a[href="https://github.com/halflifedorian/caac/"]').textContent = textElements[currentLanguage].aboutMe;

  // Update hero section
  document.querySelector('.hero-content h1').innerHTML = textElements[currentLanguage].heroGreeting;
  document.querySelector('.hero-content h3').textContent = textElements[currentLanguage].heroSubtext;
  document.querySelector('.hero-content button').textContent = textElements[currentLanguage].learnMore;

  // Update the "About Me" section
  document.querySelector('#about h1').textContent = textElements[currentLanguage].aboutHeading;
  document.querySelector('#about .about-content p').innerHTML = textElements[currentLanguage].aboutText; // Use innerHTML here

  // Update projects section
  const projectCards = document.querySelectorAll('.project-card');
  projectCards[0].querySelector('h3').textContent = textElements[currentLanguage].project1Title;
  projectCards[0].querySelector('p').textContent = textElements[currentLanguage].project1Description;
  projectCards[1].querySelector('h3').textContent = textElements[currentLanguage].project2Title;
  projectCards[1].querySelector('p').textContent = textElements[currentLanguage].project2Description;
  projectCards[2].querySelector('h3').textContent = textElements[currentLanguage].project3Title;
  projectCards[2].querySelector('p').textContent = textElements[currentLanguage].project3Description;

  // Update contact section
  document.querySelector('#contact h2').textContent = textElements[currentLanguage].contactHeading;
  document.querySelector('#contact input[placeholder="Your Name"]').placeholder = textElements[currentLanguage].contactName;
  document.querySelector('#contact input[placeholder="Your Email"]').placeholder = textElements[currentLanguage].contactEmail;
  document.querySelector('#contact textarea').placeholder = textElements[currentLanguage].contactMessage;
  document.querySelector('#contact button').textContent = textElements[currentLanguage].sendMessage;
});

const input = document.getElementById('dynamic-input');
        const placeholders = [
          "search..",
          "github..",
          "projects..",
          "about me..",
        ];
        let placeholderIndex = 0;
        let charIndex = 0;

        function typePlaceholder() {
          if (charIndex < placeholders[placeholderIndex].length) {
            input.setAttribute('placeholder', placeholders[placeholderIndex].substring(0, charIndex + 1));
            charIndex++;
            setTimeout(typePlaceholder, 100); 
          } else {
            setTimeout(deletePlaceholder, 1000);
          }
        }

        function deletePlaceholder() {
          if (charIndex >= 0) {
            input.setAttribute('placeholder', placeholders[placeholderIndex].substring(0, charIndex));
            charIndex--;
            setTimeout(deletePlaceholder, 50); 
          } else {
            placeholderIndex = (placeholderIndex + 1) % placeholders.length; 
            setTimeout(typePlaceholder, 500); 
          }
        }

        typePlaceholder();
        
        input.addEventListener('keydown', function (event) {
          if (event.key === 'Enter') {
            const userInput = input.value.trim().toLowerCase();
            redirectUser(userInput); 
          }
        });

        function redirectUser(input) {
          const redirectMap = {
            "github": "https://github.com/halflifedorian",
            "socials": "/socials",
            "keyboard": "/keyboard",
            "projects": "#projects",
            "about me": "#about"
          };

          if (redirectMap[input]) {
            if (redirectMap[input].startsWith("#")) {
              // Smooth scroll to the section
              const targetSection = document.querySelector(redirectMap[input]);
              if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
              }
            } else {
              // Redirect to the URL
              window.location.href = redirectMap[input];
            }
            
          }
        }

        window.addEventListener('load', () => {
          document.querySelector('.hero-content h1').classList.add('loaded');
          document.querySelector('.hero-content h3').classList.add('loaded');
          document.querySelector('.hero-content button').classList.add('loaded');
          document.body.classList.add('loaded');
        });

        const sections = document.querySelectorAll('section');

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        }, { threshold: 0.01 });
        
        sections.forEach(section => observer.observe(section));


        const footer = document.querySelector('footer');

        observer.observe(footer);

        window.addEventListener('load', () => {
          document.body.classList.add('loaded');
        });