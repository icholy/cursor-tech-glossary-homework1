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

// Render glossary entries
function renderGlossary() {
    const container = document.getElementById('glossary-container');
    
    if (!container) {
        console.error('Glossary container not found');
        return;
    }

    container.innerHTML = glossaryEntries.map(entry => `
        <article class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <h2 class="text-xl font-semibold text-gray-900 mb-1.5 leading-tight">${entry.term}</h2>
            <p class="text-gray-800 mb-3 leading-relaxed text-sm">${entry.description}</p>
            <div class="flex flex-wrap gap-1.5">
                ${entry.tags.map(tag => `
                    <span class="px-2.5 py-0.5 bg-blue-600 text-white text-xs font-medium rounded-md" aria-label="Tag: ${tag}">
                        ${tag}
                    </span>
                `).join('')}
            </div>
        </article>
    `).join('');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', renderGlossary);

