import { useState } from 'react';
import { useCart } from '../store/useCart';
import { CartItem } from '../components/CartItem';
import { PaymentModal } from '../components/PaymentModal';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { allProducts } from '../lib/data';
function getRandomItems<T>(array:T[], count:number) {
  // Create a shallow copy of the array to avoid modifying the original
  const copy = [...array];

  // Fisher-Yates shuffle algorithm
  for (let i = copy.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[randomIndex]] = [copy[randomIndex], copy[i]];
  }

  // Return the first 'count' items
  return copy.slice(0, count);
}

export function Cart() {
  const { items, clearCart } = useCart();
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const randomProducts = getRandomItems(allProducts, 6);
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="text-center py-12 max-w-[96rem]">
        <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
        <h2 className="mt-4 text-lg font-medium text-gray-900">Your cart is empty</h2>
        <p className="mt-2 text-gray-600">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link
          to="/products"
          className="mt-6 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className='max-w-[96rem]'>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Shopping Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white px-4 lg:px-12 py-4">
        <div className="lg:col-span-8">
          {items.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="lg:col-span-4  border border-dashed border-b-0 border-t-2 lg:border-t-0 border-r-0 border-l-0 lg:border-l-2 pl-3 py-4">
          <div className="">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t pt-4 mb-4">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={() => setIsPaymentModalOpen(true)}
              className="w-full bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold  text-[#DC143C] mb-8  pt-8 pb-2">You May Also Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6">
        {randomProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        total={total}
      />
    </div>
  );
}