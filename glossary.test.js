import { describe, it, expect } from 'vitest';
import { filterGlossaryEntries, glossaryEntries } from './glossary.js';

describe('filterGlossaryEntries', () => {
    it('returns all entries when query is empty or null', () => {
        expect(filterGlossaryEntries('')).toEqual(glossaryEntries);
        expect(filterGlossaryEntries(null)).toEqual(glossaryEntries);
        expect(filterGlossaryEntries(undefined)).toEqual(glossaryEntries);
    });

    it('filters by term (case-insensitive)', () => {
        const result = filterGlossaryEntries('api');
        expect(result.length).toBe(3);
        expect(result.some(entry => entry.term === 'API')).toBe(true);
        expect(result.some(entry => entry.term === 'REST')).toBe(true);
        expect(result.some(entry => entry.term === 'GraphQL')).toBe(true);
    });

    it('filters by description keyword', () => {
        const result = filterGlossaryEntries('containerization');
        expect(result.length).toBe(1);
        expect(result[0].term).toBe('Docker');
    });

    it('filters by tag', () => {
        const result = filterGlossaryEntries('devops');
        expect(result.length).toBe(2);
        expect(result.some(entry => entry.term === 'Docker')).toBe(true);
        expect(result.some(entry => entry.term === 'CI/CD')).toBe(true);
    });

    it('returns empty array when no matches found', () => {
        const result = filterGlossaryEntries('nonexistentterm');
        expect(result).toEqual([]);
        expect(result.length).toBe(0);
    });
});

