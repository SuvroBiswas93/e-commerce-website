import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';
import { useCart } from '../store/useCart';
import { useSearch } from '../store/useSearch';
import { SearchResults } from './SearchResults';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const cartItems = useCart((state) => state.items);
  const { setSearchTerm } = useSearch();
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  // Clear search results on route change
  const location = useLocation();
  useEffect(() => {
    setSearchTerm('');
    setSearch("");
    window.scrollTo(0,0);
  }, [location.pathname, setSearchTerm]);

  const categories = [
    { name: 'Grocery', path: '/grocery' },
    { name: 'Mobile', path: '/mobile' },
    { name: 'Furniture', path: '/furniture' },
    { name: 'Home Appliances', path: '/home-appliances' }
  ];

    // Close search results when clicking outside
    const searchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          searchRef.current &&
          !searchRef.current.contains(event.target as Node)
        ) {
          setSearchTerm('');
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [setSearchTerm]);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              ModernShop
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {categories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>

          <div ref={searchRef} className="hidden md:block flex-1 max-w-md mx-8 relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setSearch(e.target.value);
                }}
                onFocus={()=> setSearchTerm(search)}
                className="w-full px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <SearchResults />
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ShoppingCart className="h-5 w-5 text-gray-600" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {categories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                className="block px-3 py-2 text-base text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}