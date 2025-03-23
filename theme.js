// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    themeToggle.textContent = '🌙'; // Update button icon
  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    themeToggle.textContent = '☀️'; // Update button icon
  }
});

// Language toggle
const languageToggle = document.getElementById('language-toggle');
const textElements = {
  en: {
    socials: 'Socials',
    projects: 'Projects',
    keyboard: 'Keyboard',
    aboutMe: 'About me',
    heroGreeting: "Hello, I'm Dorian",
    heroSubtext: 'a design enthusiast',
    learnMore: 'learn more',
    aboutHeading: 'About Me',
    aboutText: "I'm a high school student from France with a passion for multimedia, design, and technology. I love creating websites, programming, and testing tech-related things. My goal is to study multimedia and internet technologies at university and turn my passion into a career.",
    contactHeading: 'Contact Me',
    contactName: 'Your Name',
    contactEmail: 'Your Email',
    contactMessage: 'Your Message',
    sendMessage: 'Send Message',
  },
  fr: {
    socials: 'Réseaux',
    projects: 'Projets',
    keyboard: 'Clavier',
    aboutMe: 'À propos de moi',
    heroGreeting: "Bonjour, je suis Dorian",
    heroSubtext: 'un passionné de design',
    learnMore: 'en savoir plus',
    aboutHeading: 'À propos de moi',
    aboutText: "Je suis un lycéen français passionné par le multimédia, le design et la technologie. J'adore créer des sites web, programmer et tester des choses liées à la technologie. Mon objectif est d'étudier les technologies multimédias et internet à l'université et de transformer ma passion en carrière.",
    contactHeading: 'Contactez-moi',
    contactName: 'Votre Nom',
    contactEmail: 'Votre Email',
    contactMessage: 'Votre Message',
    sendMessage: 'Envoyer le message',
  },
};

let currentLanguage = 'en';

languageToggle.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
  languageToggle.textContent = currentLanguage.toUpperCase(); // Update button text

  // Update text content dynamically
  document.querySelector('a[href="#projects"]').textContent = textElements[currentLanguage].projects;
  document.querySelector('a[href="#about"]').textContent = textElements[currentLanguage].keyboard;
  document.querySelector('a[href="#contact"]').textContent = textElements[currentLanguage].aboutMe;
  document.querySelector('.hero-content h1').textContent = textElements[currentLanguage].heroGreeting;
  document.querySelector('.hero-content h3').textContent = textElements[currentLanguage].heroSubtext;
  document.querySelector('.hero-content button').textContent = textElements[currentLanguage].learnMore;
  document.querySelector('#about h1').textContent = textElements[currentLanguage].aboutHeading;
  document.querySelector('#about .about-content p').textContent = textElements[currentLanguage].aboutText;
  document.querySelector('#contact h2').textContent = textElements[currentLanguage].contactHeading;
  document.querySelector('#contact input[placeholder="Your Name"]').placeholder = textElements[currentLanguage].contactName;
  document.querySelector('#contact input[placeholder="Your Email"]').placeholder = textElements[currentLanguage].contactEmail;
  document.querySelector('#contact textarea').placeholder = textElements[currentLanguage].contactMessage;
  document.querySelector('#contact button').textContent = textElements[currentLanguage].sendMessage;
});