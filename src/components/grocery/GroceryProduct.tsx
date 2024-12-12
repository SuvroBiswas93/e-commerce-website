import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../store/useCart';
import { GroceryProduct as GroceryProductType } from '../../lib/types';

interface GroceryProductProps {
  product: GroceryProductType;
}

export function GroceryProduct({ product }: GroceryProductProps) {
  const addItem = useCart((state) => state.addItem);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    >
      <Link to={`/product/${product.id}`}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative aspect-square overflow-hidden"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {product.discount > 0 && (
            <div className="absolute top-2 right-2 bg-rose-500 text-white px-2 py-1 rounded-full text-sm font-medium">
              {product.discount}% OFF
            </div>
          )}
        </motion.div>
      </Link>

      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-2">
            {product.description}
          </p>
        </Link>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => addItem(product)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            <ShoppingCart size={18} />
            Add to cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}