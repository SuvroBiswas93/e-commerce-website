import { motion } from 'framer-motion';
import { GroceryProduct } from './GroceryProduct';
import { GroceryCategory as GroceryCategoryType } from '../../lib/types';

interface GroceryCategoryProps {
  category: GroceryCategoryType;
  index: number;
}

export function GroceryCategory({ category, index }: GroceryCategoryProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-sm p-6"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        {category.name}
      </h2>
      <p className="text-gray-600 mb-6">
        {category.description}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {category.products.map((product) => (
          <GroceryProduct key={product.id} product={product} />
        ))}
      </div>
    </motion.section>
  );
}