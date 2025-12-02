// Glossary data
const glossaryEntries = [
    {
        term: "API",
        description: "Application Programming Interface - a set of protocols and tools for building software applications.",
        tags: ["web", "development", "backend"]
    },
    {
        term: "REST",
        description: "Representational State Transfer - an architectural style for designing networked applications.",
        tags: ["web", "api", "architecture"]
    },
    {
        term: "JavaScript",
        description: "A high-level programming language that enables interactive web pages and is an essential part of web applications.",
        tags: ["programming", "web", "frontend"]
    },
    {
        term: "Docker",
        description: "A platform for developing, shipping, and running applications using containerization technology.",
        tags: ["devops", "containers", "deployment"]
    },
    {
        term: "Microservices",
        description: "An architectural approach where applications are built as a collection of loosely coupled services.",
        tags: ["architecture", "backend", "scalability"]
    },
    {
        term: "GraphQL",
        description: "A query language for APIs and a runtime for executing those queries with your existing data.",
        tags: ["api", "web", "data"]
    },
    {
        term: "CI/CD",
        description: "Continuous Integration and Continuous Deployment - practices for automating software delivery pipelines.",
        tags: ["devops", "automation", "deployment"]
    },
    {
        term: "TypeScript",
        description: "A typed superset of JavaScript that compiles to plain JavaScript, adding static type definitions.",
        tags: ["programming", "web", "types"]
    }
];

// Filter glossary entries by query
function filterGlossaryEntries(query) {
    if (!query || query.trim() === '') {
        return glossaryEntries;
    }
    
    const lowerQuery = query.toLowerCase().trim();
    
    return glossaryEntries.filter(entry => {
        // Check term
        if (entry.term.toLowerCase().includes(lowerQuery)) {
            return true;
        }
        
        // Check description
        if (entry.description.toLowerCase().includes(lowerQuery)) {
            return true;
        }
        
        // Check tags
        if (entry.tags.some(tag => tag.toLowerCase().includes(lowerQuery))) {
            return true;
        }
        
        return false;
    });
}

// Render glossary entries
function renderGlossary(entries = glossaryEntries) {
    const container = document.getElementById('glossary-container');
    
    if (!container) {
        console.error('Glossary container not found');
        return;
    }

    container.innerHTML = entries.map(entry => `
        <article class="bg-white rounded-lg shadow-sm border border-gray-200 p-5 hover:shadow-md hover:border-gray-300 transition-all">
            <h2 class="text-2xl font-bold text-gray-900 mb-2.5 leading-tight tracking-tight">${entry.term}</h2>
            <p class="text-gray-700 mb-4 leading-relaxed text-base">${entry.description}</p>
            <div class="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                ${entry.tags.map(tag => `
                    <span class="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-md uppercase tracking-wide" aria-label="Tag: ${tag}">
                        ${tag}
                    </span>
                `).join('')}
            </div>
        </article>
    `).join('');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderGlossary();
    
    const searchInput = document.getElementById('search-input');
    const clearButton = document.getElementById('clear-search');
    
    // Function to update clear button visibility
    function updateClearButton() {
        if (searchInput && clearButton) {
            if (searchInput.value.trim() !== '') {
                clearButton.classList.remove('hidden');
            } else {
                clearButton.classList.add('hidden');
            }
        }
    }
    
    // Add search input event listener
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value;
            const filteredEntries = filterGlossaryEntries(query);
            renderGlossary(filteredEntries);
            updateClearButton();
        });
    }
    
    // Add clear button event listener
    if (clearButton) {
        clearButton.addEventListener('click', () => {
            if (searchInput) {
                searchInput.value = '';
                renderGlossary();
                searchInput.focus();
                updateClearButton();
            }
        });
    }
});

