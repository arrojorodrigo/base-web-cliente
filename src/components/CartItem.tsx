import { Trash2 } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import type { CartItem as CartItemType } from '../store/useCartStore';

interface CartItemProps {
    item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const { removeItem } = useCartStore(); // Removed 'addItem' as it's not used

    return (
        <div className="flex items-center gap-4 py-4 border-b border-gray-100 bg-white p-4 rounded-lg shadow-sm mb-3">
            {item.image ? (
                <img src={item.image} alt={item.name} className="w-20 h-28 object-cover rounded shadow-sm" />
            ) : (
                <div className="w-20 h-28 bg-gray-200 rounded flex items-center justify-center text-gray-400">
                    Sin Img
                </div>
            )}

            <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                <p className="text-gray-500 text-sm">Alquiler por 3 días</p>
                <div className="text-blockbuster-blue font-black mt-1">${item.price.toFixed(2)}</div>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center bg-gray-100 rounded-md">
                    <span className="px-4 font-bold text-gray-700 py-1">× {item.quantity}</span>
                </div>

                <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 p-2 bg-red-50 rounded-full transition-colors"
                    title="Eliminar del carrito"
                >
                    <Trash2 className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};
