import { ShoppingCart, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../store/useCart';

export function Header() {
  const items = useCart((state) => state.items);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-gray-900">
            ModernShop
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-gray-900">
              Products
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-gray-900">
              Categories
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/cart"
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="ml-1 text-sm font-medium">{itemCount}</span>
              )}
            </Link>
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}