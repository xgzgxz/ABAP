document.addEventListener('DOMContentLoaded', () => {
    const localSearchInput = document.getElementById('lexicon-search');
    const globalSearchInput = document.getElementById('global-search');
    const lexiconContainer = document.querySelector('.lexicon-container');
    
    if (!lexiconContainer) return;

    const entries = lexiconContainer.querySelectorAll('.lexicon-entry');
    const letterHeadings = lexiconContainer.querySelectorAll('h2');

    const filterLexicon = (searchTerm) => {
        const normalizedSearchTerm = searchTerm.toLowerCase().trim();
        const sectionVisibility = {};
        letterHeadings.forEach(h => {
            sectionVisibility[h.id] = false;
        });

        entries.forEach(entry => {
            const term = entry.querySelector('dt').textContent.toLowerCase();
            const definition = entry.querySelector('dd').textContent.toLowerCase();
            const isVisible = term.includes(normalizedSearchTerm) || definition.includes(normalizedSearchTerm);
            
            entry.style.display = isVisible ? '' : 'none';

            if (isVisible) {
                let currentElement = entry;
                while (currentElement && currentElement.previousElementSibling) {
                    currentElement = currentElement.previousElementSibling;
                    if (currentElement.tagName === 'H2') {
                        sectionVisibility[currentElement.id] = true;
                        break;
                    }
                }
            }
        });

        letterHeadings.forEach(h => {
            h.style.display = sectionVisibility[h.id] ? '' : 'none';
        });
    };

    // Event listener for the local search bar on the lexicon page
    if (localSearchInput) {
        localSearchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value;
            if (globalSearchInput) {
                globalSearchInput.value = searchTerm;
            }
            filterLexicon(searchTerm);
        });
    }

    // Check for search query from URL on page load
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');

    if (query) {
        const decodedQuery = decodeURIComponent(query);
        if (localSearchInput) {
            localSearchInput.value = decodedQuery;
        }
        if (globalSearchInput) {
            globalSearchInput.value = decodedQuery;
        }
        filterLexicon(decodedQuery);
    }
});
