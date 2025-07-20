// Navigation-related shared data and utilities

// Common interface for navigation items
export interface NavItem {
  id: string;
  fragment: string;
  label: string;
}

// Utility function to get current year
export const getCurrentYear = (): number => new Date().getFullYear();

// English navigation items (used in navbar)
export const NAV_ITEMS: NavItem[] = [
  { id: 'home', fragment: 'home', label: 'Home' },
  { id: 'alphabet', fragment: 'alphabet', label: 'Alphabet' },
  { id: 'practice', fragment: 'practice', label: 'Practice' },
  { id: 'resource', fragment: 'resource', label: 'Resources' },
  { id: 'about', fragment: 'about', label: 'About' },
  { id: 'contact', fragment: 'contact', label: 'Contact' }
];

// Alias for NAV_ITEMS for backward compatibility
export const ENGLISH_NAV_ITEMS = NAV_ITEMS;

