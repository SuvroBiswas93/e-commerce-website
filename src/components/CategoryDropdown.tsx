import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from '../lib/data';

export function CategoryDropdown() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="bg-white dark:bg-gray-900 border-b dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center space-x-8 h-12 text-sm">
          {categories.map((category) => (
            <>
            <li
              key={category.id}
              className="relative"
              onMouseEnter={() => setActiveCategory(category.id)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <span>{category.name}</span>
                <ChevronDown className="h-4 w-4" />
              </motion.button>

              <AnimatePresence>
                {activeCategory === category.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-50"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {category.subcategories.map((sub) => (
                        <motion.div
                          key={sub.id}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Link
                            to={`/category/${category.id}/${sub.id}`}
                            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                          >
                            <img
                              src={sub.image}
                              alt={sub.name}
                              className="w-8 h-8 object-cover rounded"
                            />
                            <span>{sub.name}</span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            <li
              key={category.id}
              className="relative"
              onMouseEnter={() => setActiveCategory(category.id)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <span>{category.name}</span>
                <ChevronDown className="h-4 w-4" />
              </motion.button>

              <AnimatePresence>
                {activeCategory === category.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-50"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {category.subcategories.map((sub) => (
                        <motion.div
                          key={sub.id}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Link
                            to={`/category/${category.id}/${sub.id}`}
                            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                          >
                            <img
                              src={sub.image}
                              alt={sub.name}
                              className="w-8 h-8 object-cover rounded"
                            />
                            <span>{sub.name}</span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}