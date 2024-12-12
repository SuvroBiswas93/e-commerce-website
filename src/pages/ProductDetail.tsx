import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { useCart } from '../store/useCart';
import { allProducts } from '../lib/data';


export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const addItem = useCart((state) => state.addItem);


  const product = allProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-blue-600 hover:text-blue-700"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft size={20} />
        Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
          {'discount' in product && product.discount > 0 && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold">
              {product.discount}% OFF
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-gray-600 mt-2">{product.description}</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-gray-900">
              ${product.price}
            </span>
            {'originalPrice' in product && (
              <span className="text-xl text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Details</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Category: {product.category}</li>
              {'unit' in product && <li>Unit: {product.unit}</li>}
              {'discount' in product && <li>Discount: {product.discount}% off</li>}
            </ul>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => addItem(product)}
            className="w-full md:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            <ShoppingCart size={20} />
            Add to Cart
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}