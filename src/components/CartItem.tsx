import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../lib/types';
import { useCart } from '../store/useCart';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-gray-600 text-sm">${item.price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
          className="p-1 rounded hover:bg-gray-100"
        >
          <Minus size={16} />
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="p-1 rounded hover:bg-gray-100"
        >
          <Plus size={16} />
        </button>
        <button
          onClick={() => removeItem(item.id)}
          className="p-1 rounded hover:bg-gray-100 text-red-600 ml-2"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}