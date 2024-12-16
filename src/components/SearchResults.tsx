import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useSearch } from "../store/useSearch";
import { useCart } from "../store/useCart";
import { ShoppingCart } from "lucide-react";

export function SearchResults() {
  const { searchResults, isSearching, setSearchTerm } = useSearch();
  const addItem = useCart((state) => state.addItem);
  const navigate = useNavigate();

  if (!isSearching) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl max-h-96 overflow-y-auto z-50"
      >
        {searchResults.length === 0 ? (
          <div className="p-4 text-center text-gray-500">No products found</div>
        ) : (
          <div className="divide-y divide-gray-100">
            {searchResults.map((product) => {
              console.log(product);
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 hover:bg-gray-50 flex items-center gap-4"
                >
                  <Link className="block w-full" to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded float-left mr-2"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {product.description}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Category: {product.category}
                      </p>
                    </div>
                  </Link>
                  <div className="flex flex-col items-end gap-2">
                    <span className="font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        addItem(product);
                        setSearchTerm("");
                      }}
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 lg:px-3 py-2 lg:py-1 rounded-full text-sm hover:bg-blue-700  text-ellipsis"
                    >
                      <ShoppingCart size={14} />
                      <span className="hidden lg:inline"> Add to Cart</span>
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
