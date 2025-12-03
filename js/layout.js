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
    
    // HIER IST DER FIX (V3):
    // Wir nutzen die absolute URL des Scripts, um den Root-Pfad zu finden.
    // Das ist sicherer als relative Pfade, die je nach Aufruf variieren können.
    const getBaseUrl = () => {
        const scripts = document.getElementsByTagName('script');
        for (let script of scripts) {
            if (script.src && script.src.includes('js/layout.js')) {
                // Wir nehmen alles vor "js/layout.js" als Basis-Pfad
                return script.src.split('js/layout.js')[0];
            }
        }
        return "./";
    };

    const baseUrl = getBaseUrl();
    console.log("Layout Base URL:", baseUrl);

    // Lade Header, Navigation und Footer
    await loadComponent("#header-placeholder", baseUrl + "html/_header.html");
    await loadComponent("#navigation-placeholder", baseUrl + "html/_navigation.html");
    await loadComponent("#footer-placeholder", baseUrl + "html/_footer.html");

    // Warte kurz, bis die Komponenten geladen und im DOM sind
    await new Promise(resolve => setTimeout(resolve, 50));

    // FIX: Links in der Navigation anpassen, wenn wir in einem Unterordner sind
    const fixNavigationLinks = () => {
        // Wenn wir NICHT im Root sind (also z.B. in /html/), müssen wir die Links anpassen
        // Die Links in _navigation.html sind jetzt relativ zum Root (z.B. "html/grundlagen.html")
        // Wenn wir aber schon in "html/" sind, müssen wir "../" davor setzen oder den Pfad bereinigen.
        
        // Einfacherer Ansatz: Wir machen alle Links absolut zur BaseUrl
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('http') && !href.startsWith('#')) {
                link.href = baseUrl + href;
            }
        });

        // Auch das Suchformular anpassen
        const searchForm = document.getElementById('global-search-form');
        if (searchForm) {
            const action = searchForm.getAttribute('action');
            if (action && !action.startsWith('http')) {
                searchForm.action = baseUrl + action;
            }
        }
    };

    fixNavigationLinks();

    // Seitenspezifische Titel und Untertitel setzen
    const headerTitleEl = document.getElementById('header-title');
    const headerSubtitleEl = document.getElementById('header-subtitle');
    const path = window.location.pathname;
    const isIndexPage = path.endsWith('/') || path.includes("index.html");

    if (headerTitleEl && headerSubtitleEl) {
        if (path.includes("theory-quiz.html")) {
            headerTitleEl.textContent = "ABAP Theorie-Quiz";
            headerSubtitleEl.textContent = "Teste dein Wissen zu SAP ABAP";
        } else { // Gilt für index.html und alle zukünftigen Seiten
            headerTitleEl.textContent = "SAP ABAP";
            headerSubtitleEl.textContent = document.title;
        }
    }
    
    // Logik für den Fortschrittsbalken
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        // Auf Lernseiten (wie index.html) basiert der Fortschritt auf dem Scrollen
         if (isIndexPage || path.includes("week-")) {
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
        if (path.endsWith(href) || (href.includes('index.html') && isIndexPage)) {
            link.classList.add('active');
        }
    });

    // Scroll-basierte "active" Logik für die Seitenleiste auf Lernseiten
     if (isIndexPage || path.includes("week-")) {
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