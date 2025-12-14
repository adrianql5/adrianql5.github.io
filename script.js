// =====================================================
// PORTFOLIO - INTERACTIVE JAVASCRIPT
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
    initCursorGlow();
    initNavigation();
    initLanguageSelector();
    initTypingEffect();
    initScrollAnimations();
    initSkillBars();
    initCounters();
    initFormHandler();
    initMusicPlayer();
});

// =====================================================
// INTERNATIONALIZATION (i18n)
// =====================================================

let currentLang = 'es';

const translations = {
    es: {
        // Navigation
        'nav.home': 'Inicio',
        'nav.about': 'Sobre Mí',
        'nav.skills': 'Conocimientos',
        'nav.projects': 'Proyectos',
        'nav.contact': 'Contacto',

        // Hero
        'hero.greeting': '¡Hola! Soy',
        'hero.student': 'Estudiante de ',
        'hero.description': 'Apasionado por el desarrollo de software, la arquitectura de sistemas y el mundo Linux. Transformando ideas en código eficiente desde Debian + Hyprland.',
        'hero.viewProjects': 'Ver Proyectos',
        'hero.contact': 'Contactar',
        'hero.graduation': 'Graduación',
        'hero.technologies': 'Tecnologías',
        'hero.projectsCount': 'Proyectos',

        // About
        'about.title': 'Conóceme',
        'about.education': 'Formación',
        'about.educationText': 'Estudiante de <strong>Ingeniería Informática</strong> en la <a href="https://www.usc.gal/" target="_blank">Universidad de Santiago de Compostela (USC)</a>. Graduación esperada en <strong>2027</strong>.',
        'about.linuxText': 'Usuario apasionado de <strong>Debian</strong> con <strong>Hyprland</strong> como compositor. Creo firmemente en el software libre y la personalización total del entorno de trabajo.',
        'about.philosophy': 'Filosofía',
        'about.philosophyText': 'Me apasiona crear soluciones eficientes, optimizar rendimiento y explorar la intersección entre hardware y software. Siempre aprendiendo, siempre mejorando.',
        'about.hobbies': 'Hobbies',
        'about.hobbiesText': 'Fuera del código disfruto del <strong>gimnasio</strong>, el <strong>pádel</strong>, el <strong>ajedrez</strong>, <strong>viajar</strong> y la <strong>música</strong> (toco el clarinete).',

        // Skills
        'skills.title': 'Áreas que domino',
        'skills.intro': 'Principales áreas de conocimiento en las que desarrollo mi formación académica y proyectos:',
        'skills.architecture': '<i class="fas fa-microchip"></i> Arquitectura de Computadores',
        'skills.networks': '<i class="fas fa-network-wired"></i> Redes',
        'skills.os': '<i class="fas fa-hard-drive"></i> Sistemas Operativos',
        'skills.distributed': '<i class="fas fa-cubes"></i> Computación Distribuida',
        'skills.graphics': '<i class="fas fa-gamepad"></i> Computación Gráfica',
        'skills.dataStructures': '<i class="fas fa-sitemap"></i> Estructuras de Datos',
        'skills.algorithms': '<i class="fas fa-project-diagram"></i> Algoritmos',
        'skills.concurrent': '<i class="fas fa-cogs"></i> Programación Concurrente',
        'skills.databases': '<i class="fas fa-database"></i> Bases de Datos',

        // Projects
        'projects.title': 'Proyectos Destacados',
        'projects.survivor': 'Guía para instalar IA local, Wikipedia y mapas offline en caso de apocalipsis.',
        'projects.hyperdeb': 'Guía completa para instalar Debian desde cero y configurar Hyprland.',
        'projects.ixildu': 'Sistema de gestión para cines con reservas, sesiones y consultas SQL.',
        'projects.dominivm': 'Videojuego de estrategia por turnos con diseño UML y patrones de software.',
        'projects.chat': 'Chat grupal distribuido implementado con Java RMI.',
        'projects.monopoly': 'Implementación completa del juego de mesa Monopoly con interfaz gráfica.',
        'projects.shaderssea': 'Juego de barcos con gráficos OpenGL y shaders en C++.',
        'projects.syncall': 'Sistema automatizado para sincronización de proyectos, gestión de licencias y conversión de bóvedas Obsidian a PDF.',
        'projects.auction': 'Sistema de subastas distribuido implementado con agentes JADE.',

        // Contact
        'contact.title': 'Conectemos',
        'contact.intro': '¿Tienes un proyecto interesante o simplemente quieres charlar sobre tecnología? ¡Me encantaría saber de ti!',

        // Typing words
        'typing': ['Ingeniería Informática', 'Desarrollo de Software', 'Linux Enthusiast', 'Arquitectura de Sistemas', 'Computación Gráfica']
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About Me',
        'nav.skills': 'Knowledge',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',

        // Hero
        'hero.greeting': 'Hi! I\'m',
        'hero.student': 'Student of ',
        'hero.description': 'Passionate about software development, system architecture, and the Linux world. Turning ideas into efficient code from Debian + Hyprland.',
        'hero.viewProjects': 'View Projects',
        'hero.contact': 'Contact',
        'hero.graduation': 'Graduation',
        'hero.technologies': 'Technologies',
        'hero.projectsCount': 'Projects',

        // About
        'about.title': 'About Me',
        'about.education': 'Education',
        'about.educationText': '<strong>Computer Engineering</strong> student at the <a href="https://www.usc.gal/" target="_blank">University of Santiago de Compostela (USC)</a>. Expected graduation in <strong>2027</strong>.',
        'about.linuxText': 'Passionate <strong>Debian</strong> user with <strong>Hyprland</strong> as compositor. I firmly believe in free software and total customization of the work environment.',
        'about.philosophy': 'Philosophy',
        'about.philosophyText': 'I\'m passionate about creating efficient solutions, optimizing performance, and exploring the intersection between hardware and software. Always learning, always improving.',
        'about.hobbies': 'Hobbies',
        'about.hobbiesText': 'Outside of code I enjoy the <strong>gym</strong>, <strong>padel</strong>, <strong>chess</strong>, <strong>traveling</strong> and <strong>music</strong> (I play the clarinet).',

        // Skills
        'skills.title': 'Areas I Master',
        'skills.intro': 'Main areas of knowledge in which I develop my academic training and projects:',
        'skills.architecture': '<i class="fas fa-microchip"></i> Computer Architecture',
        'skills.networks': '<i class="fas fa-network-wired"></i> Networks',
        'skills.os': '<i class="fas fa-hard-drive"></i> Operating Systems',
        'skills.distributed': '<i class="fas fa-cubes"></i> Distributed Computing',
        'skills.graphics': '<i class="fas fa-gamepad"></i> Computer Graphics',
        'skills.dataStructures': '<i class="fas fa-sitemap"></i> Data Structures',
        'skills.algorithms': '<i class="fas fa-project-diagram"></i> Algorithms',
        'skills.concurrent': '<i class="fas fa-cogs"></i> Concurrent Programming',
        'skills.databases': '<i class="fas fa-database"></i> Databases',

        // Projects
        'projects.title': 'Featured Projects',
        'projects.survivor': 'Guide to install local AI, Wikipedia and offline maps in case of apocalypse.',
        'projects.hyperdeb': 'Complete guide to install Debian from scratch and configure Hyprland.',
        'projects.ixildu': 'Cinema management system with reservations, sessions and SQL queries.',
        'projects.dominivm': 'Turn-based strategy game with UML design and software patterns.',
        'projects.chat': 'Distributed group chat implemented with Java RMI.',
        'projects.monopoly': 'Complete implementation of the Monopoly board game with GUI.',
        'projects.shaderssea': 'Ship game with OpenGL graphics and shaders in C++.',
        'projects.syncall': 'Automated system for project sync, license management and Obsidian vault to PDF conversion.',
        'projects.auction': 'Distributed auction system implemented with JADE agents.',

        // Contact
        'contact.title': 'Let\'s Connect',
        'contact.intro': 'Have an interesting project or just want to chat about technology? I\'d love to hear from you!',

        // Typing words
        'typing': ['Computer Engineering', 'Software Development', 'Linux Enthusiast', 'System Architecture', 'Computer Graphics']
    }
};

function initLanguageSelector() {
    const langBtns = document.querySelectorAll('.lang-btn');

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang !== currentLang) {
                currentLang = lang;

                // Update button states
                langBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Update HTML lang attribute
                document.documentElement.lang = lang;

                // Apply translations
                applyTranslations(lang);

                // Restart typing effect with new language
                restartTypingEffect();
            }
        });
    });
}

function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = translations[lang][key];

        if (translation) {
            // Use innerHTML for elements that may contain HTML
            if (translation.includes('<')) {
                el.innerHTML = translation;
            } else {
                el.textContent = translation;
            }
        }
    });
}

function restartTypingEffect() {
    const typedText = document.getElementById('typedText');
    if (typedText) {
        typedText.textContent = '';
    }
}

// =====================================================
// MUSIC PLAYER (Avatar Click)
// =====================================================

function initMusicPlayer() {
    const avatar = document.getElementById('avatarMusicToggle');
    const audio = document.getElementById('backgroundMusic');

    if (!avatar || !audio) return;

    let isPlaying = false;

    // Make avatar look clickeable
    avatar.style.cursor = 'pointer';

    avatar.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            avatar.classList.remove('music-playing');
        } else {
            audio.play().catch(e => console.log('Audio play failed:', e));
            avatar.classList.add('music-playing');
        }
        isPlaying = !isPlaying;
    });

    // Sync state if audio ends (though we have loop enabled)
    audio.addEventListener('ended', () => {
        isPlaying = false;
        avatar.classList.remove('music-playing');
    });
}

// =====================================================
// CURSOR GLOW EFFECT
// =====================================================

function initCursorGlow() {
    const cursorGlow = document.getElementById('cursorGlow');
    if (!cursorGlow) return;

    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        // Smooth follow effect
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        cursorGlow.style.left = currentX + 'px';
        cursorGlow.style.top = currentY + 'px';

        requestAnimationFrame(animate);
    }

    animate();
}

// =====================================================
// NAVIGATION
// =====================================================

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active link
        updateActiveLink();
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// =====================================================
// TYPING EFFECT
// =====================================================

function initTypingEffect() {
    const typedText = document.getElementById('typedText');
    if (!typedText) return;

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const words = translations[currentLang]['typing'];
        const currentWord = words[wordIndex % words.length];

        if (isDeleting) {
            typedText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typedText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            // Pause at end of word
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    setTimeout(type, 1000);
}

// =====================================================
// SCROLL ANIMATIONS
// =====================================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animation
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 100);
            }
        });
    }, observerOptions);

    // Observe elements
    const animateElements = document.querySelectorAll(
        '.about-card, .skill-card, .tech-tag, .tool-item, .project-card, .contact-link'
    );

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add animate-in class styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// =====================================================
// SKILL BARS ANIMATION
// =====================================================

function initSkillBars() {
    const skillCards = document.querySelectorAll('.skill-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.querySelector('.skill-progress');
                const skillLevel = entry.target.getAttribute('data-skill');

                setTimeout(() => {
                    progress.style.width = `${skillLevel}%`;
                }, 200);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillCards.forEach(card => observer.observe(card));
}

// =====================================================
// COUNTER ANIMATION
// =====================================================

function initCounters() {
    const stats = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.getAttribute('data-target');

                // Check if it's just a year (don't animate)
                if (finalValue === '2027') {
                    target.textContent = '2027';
                } else {
                    animateCounter(target, parseInt(finalValue));
                }

                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
}

function animateCounter(element, target) {
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeOut * target);

        element.textContent = current + '+';

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target + '+';
        }
    }

    requestAnimationFrame(update);
}

// =====================================================
// FORM HANDLER
// =====================================================

function initFormHandler() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const button = form.querySelector('button[type="submit"]');
        const originalHTML = button.innerHTML;

        // Success animation
        button.innerHTML = '<span>¡Mensaje enviado!</span><i class="fas fa-check"></i>';
        button.style.background = 'linear-gradient(135deg, #10b981, #059669)';

        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.style.background = '';
            form.reset();
        }, 3000);
    });
}

// =====================================================
// PARALLAX TILT EFFECT FOR CARDS
// =====================================================

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// =====================================================
// REDUCE MOTION FOR ACCESSIBILITY
// =====================================================

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--transition', '0s');
    document.documentElement.style.setProperty('--transition-fast', '0s');
    document.documentElement.style.setProperty('--transition-slow', '0s');
}
