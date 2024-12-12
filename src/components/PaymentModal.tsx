import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../store/useCart';
import { PaymentForm } from './PaymentForm';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
}

export function PaymentModal({ isOpen, onClose, total }: PaymentModalProps) {
  const [processing, setProcessing] = useState(false);
  const clearCart = useCart((state) => state.clearCart);

  const handlePayment = async (paymentData: any) => {
    setProcessing(true);
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      clearCart();
      onClose();
      alert('Payment successful! Thank you for your purchase.');
    } catch (error) {
      alert('Payment failed. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md z-50"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X size={24} />
            </button>
            
            <div className="flex items-center mb-6">
              <CreditCard className="w-6 h-6 mr-2 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Payment Details
              </h2>
            </div>

            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-300">
                Total Amount: <span className="font-semibold">${total.toFixed(2)}</span>
              </p>
            </div>

            <PaymentForm onSubmit={handlePayment} processing={processing} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}