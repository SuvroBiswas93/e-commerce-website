import { create } from 'zustand';
import { allProducts } from '../lib/data';
import { Product } from '../lib/types';

interface SearchStore {
  searchTerm: string;
  searchResults: Product[];
  setSearchTerm: (term: string) => void;
  isSearching: boolean;
}

// Flatten grocery products


allProducts

export const useSearch = create<SearchStore>((set) => ({
  searchTerm: '',
  searchResults: [],
  isSearching: false,
  setSearchTerm: (term) => {
    set({ searchTerm: term, isSearching: term.length > 0 });
    
    if (term.trim() === '') {
      set({ searchResults: [], isSearching: false });
      return;
    }

    const results = allProducts.filter((product) => {
      const searchTermLower = term.toLowerCase();
      return (
        product.name.toLowerCase().includes(searchTermLower) ||
        product.description.toLowerCase().includes(searchTermLower) ||
        product.category.toLowerCase().includes(searchTermLower)
      );
    });

    set({ searchResults: results });
  },
}));