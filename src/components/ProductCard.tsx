import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Product } from '../lib/types';
import { useCart } from '../store/useCart';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const addItem = useCart((state) => state.addItem);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
    >
      <Link to={`/product/${product.id}`}>
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600">
            {product.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-1">{product.description}</p>
        </Link>
        <div className="mt-4 flex items-center justify-between">
          <motion.span 
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            ${product.price}
          </motion.span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => addItem(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors"
          >
            <ShoppingCart size={20} />
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}