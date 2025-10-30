document.addEventListener("DOMContentLoaded", async () => {
    // Funktion zum Laden von HTML-Komponenten (Header, Footer, etc.)
    const loadComponent = async (selector, url) => {
        const element = document.querySelector(selector);
        if (element) {
            try {
                const response = await fetch(url);
                if (response.ok) {
                    element.innerHTML = await response.text();
                } else {
                    console.error(`Fehler beim Laden von ${url}: ${response.statusText}`);
                }
            } catch (error) {
                console.error(`Netzwerkfehler beim Laden von ${url}:`, error);
            }
        }
    };

    // Lade Header, Navigation und Footer
    await loadComponent("#header-placeholder", "/html/_header.html");
    await loadComponent("#navigation-placeholder", "/html/_navigation.html");
    await loadComponent("#footer-placeholder", "/html/_footer.html");

    // Warte kurz, bis die Komponenten geladen und im DOM sind
    await new Promise(resolve => setTimeout(resolve, 50));

    // Seitenspezifische Titel und Untertitel setzen
    const headerTitleEl = document.getElementById('header-title');
    const headerSubtitleEl = document.getElementById('header-subtitle');
    const path = window.location.pathname;

    if (headerTitleEl && headerSubtitleEl) {
        if (path.includes("theory-quiz.html")) {
            headerTitleEl.textContent = "ABAP Theorie-Quiz";
            headerSubtitleEl.textContent = "Teste dein Wissen zu SAP ABAP";
        } else { // Gilt für index.html und alle zukünftigen Seiten
            headerTitleEl.textContent = "SAP ABAP Lernpfad";
            headerSubtitleEl.textContent = document.title;
        }
    }
    
    // Logik für den Fortschrittsbalken
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        // Auf Lernseiten (wie index.html) basiert der Fortschritt auf dem Scrollen
        if (path === '/' || path.includes("index.html") || path.includes("week-")) {
            window.addEventListener('scroll', () => {
                const sections = document.querySelectorAll('.content-section');
                const totalSections = sections.length;
                if (totalSections === 0) return;

                let completedSections = 0;
                const triggerPoint = window.innerHeight * 0.7; 

                sections.forEach(section => {
                    if (section.getBoundingClientRect().top < triggerPoint) {
                        completedSections++;
                    }
                });
                const progressPercentage = (completedSections / totalSections) * 100;
                progressBar.style.width = `${progressPercentage}%`;
            });
        } else {
            progressBar.style.width = '0%';
        }
    }

    // Aktiven Navigationslink in der Hauptnavigation hervorheben
    const mainNavLinks = document.querySelectorAll('#main-navigation a');
    mainNavLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === path || (href.endsWith('/index.html') && (path === '/' || path.endsWith('/')))) {
            link.classList.add('active');
        }
    });

    // Scroll-basierte "active" Logik für die Seitenleiste auf Lernseiten
    if (path === '/' || path.includes("index.html") || path.includes("week-")) {
        const sections = document.querySelectorAll('.content-section');
        const sidebarLinks = document.querySelectorAll('.sidebar-navigation a');

        const updateActiveSidebarLink = () => {
            let currentSectionId = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 150) {
                    currentSectionId = section.getAttribute('id');
                }
            });

            sidebarLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === currentSectionId) {
                    link.classList.add('active');
                }
            });
        };
        window.addEventListener('scroll', updateActiveSidebarLink);
        updateActiveSidebarLink();
    }
});