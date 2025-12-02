# Tech Glossary

A minimal static Tech Glossary project with search functionality.

## Features

- Display glossary entries with terms, descriptions, and tags
- Real-time search filtering by term, description, or tags
- Clear search button
- Responsive design with Tailwind CSS

## Running the Project

Open `index.html` in a web browser. The project uses Tailwind CSS via CDN and requires no build step.

## Testing

The project uses [Vitest](https://vitest.dev/) for unit testing.

### Setup

Install dependencies:

```bash
npm install
```

### Running Tests

Run tests in watch mode:

```bash
npm test
```

Run tests once:

```bash
npm run test:run
```

### Test Coverage

Tests cover the `filterGlossaryEntries` function with cases for:
- Empty/null/undefined queries
- Filtering by term (case-insensitive)
- Filtering by description keywords
- Filtering by tags
- No matches
- Whitespace handling
