import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

export function SideNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    {
      id: 'men',
      name: "Men's Fashion",
      path: '/fashion/men',
      subcategories: [
        { name: 'T-Shirts', path: '/fashion/men/t-shirts' },
        { name: 'Shirts', path: '/fashion/men/shirts' },
        { name: 'Pants', path: '/fashion/men/pants' },
        { name: 'Suits', path: '/fashion/men/suits' },
      ],
    },
    {
      id: 'women',
      name: "Women's Fashion",
      path: '/fashion/women',
      subcategories: [
        { name: 'Dresses', path: '/fashion/women/dresses' },
        { name: 'Tops', path: '/fashion/women/tops' },
        { name: 'Skirts', path: '/fashion/women/skirts' },
      ],
    },
    {
      id: 'kids',
      name: "Kids' Fashion",
      path: '/fashion/kids',
      subcategories: [
        { name: 'Boys', path: '/fashion/kids/boys' },
        { name: 'Girls', path: '/fashion/kids/girls' },
        { name: 'Infants', path: '/fashion/kids/infants' },
        { name: 'Shoes', path: '/fashion/kids/shoes' },
        { name: 'Accessories', path: '/fashion/kids/accessories' },
      ],
    },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-r-lg shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50"
            >
              <div className="p-3 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Fashion Categories</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-gray-100 rounded-full"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              <div className="overflow-y-auto max-h-[calc(100vh-64px)]">
                {categories.map((category) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-2"
                  >
                    <Link
                      to={category.path}
                      className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 group"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-gray-700 group-hover:text-blue-600">
                        {category.name}
                      </span>
                      <ChevronRight
                        size={16}
                        className="text-gray-400 group-hover:text-blue-600"
                      />
                    </Link>
                    <div className="pl-6 pr-4 pb-1">
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block py-1 text-sm text-gray-500 hover:text-blue-600"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}