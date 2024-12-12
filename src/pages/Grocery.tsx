import { motion } from 'framer-motion';
import { GroceryCategory } from '../components/grocery/GroceryCategory';
import { groceryCategories } from '../lib/groceryData';

export function Grocery() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Fresh Groceries
        </h1>
        <p className="text-gray-600">
          Shop from our wide selection of fresh, high-quality groceries
        </p>
      </div>
      
      <div className="grid gap-8">
        {groceryCategories.map((category, index) => (
          <GroceryCategory
            key={category.id}
            category={category}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}