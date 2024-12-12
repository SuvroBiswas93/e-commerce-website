import { motion } from 'framer-motion';
import { ProductCard } from '../../../components/ProductCard';
import { tops } from '../../../lib/data';

export function Tops() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Tops</h1>
        <p className="text-gray-600">Stylish tops for any occasion</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tops.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </motion.div>
  );
}