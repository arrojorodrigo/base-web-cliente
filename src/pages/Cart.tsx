import { Link } from 'react-router-dom';
import { ShoppingBag, CreditCard, Film } from 'lucide-react';
import { CartItem } from '../components/CartItem';
import { useCartStore } from '../store/useCartStore';

export const Cart = () => {
    const { items, getCartTotal, clearCart } = useCartStore();
    const total = getCartTotal();

    const handleCheckout = () => {
        // Simulated checkout process
        alert('Procesando alquiler... ¡Gracias por preferir ArrojoWebs!');
        clearCart();
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-black text-blockbuster-blue uppercase tracking-tighter mb-8 flex items-center gap-3 border-b-4 border-blockbuster-yellow pb-4">
                    <ShoppingBag className="w-8 h-8 text-blockbuster-yellow" />
                    Tus Cintas Seleccionadas
                </h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items List */}
                    <div className="lg:w-2/3 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        {items.length === 0 ? (
                            <div className="text-center py-16 flex flex-col items-center bg-gray-50/50 rounded-lg border-2 border-dashed border-gray-200">
                                <div className="bg-gray-100 p-6 rounded-full mb-6 shadow-inner">
                                    <Film className="w-16 h-16 text-gray-400" />
                                </div>
                                <h2 className="text-2xl font-black text-gray-700 mb-2 uppercase tracking-wide">Tu carrito está vacío</h2>
                                <p className="text-gray-500 mb-8 max-w-sm font-medium">Aún no has seleccionado ninguna película para llevar a casa. ¡El fin de semana te espera!</p>
                                <Link to="/catalog" className="btn-primary text-lg px-8">Explorar Catálogo</Link>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="hidden sm:flex justify-between items-center bg-gray-50 p-3 rounded text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                                    <span className="w-3/4">Película seleccionada</span>
                                    <span className="w-1/4 text-right">Acciones</span>
                                </div>
                                {items.map((item) => (
                                    <CartItem key={item.id} item={item} />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Cart Summary */}
                    {items.length > 0 && (
                        <div className="lg:w-1/3">
                            <div className="bg-blockbuster-blue text-white rounded-xl shadow-lg p-6 sticky top-24">
                                <h2 className="text-xl font-bold text-blockbuster-yellow border-b border-white/20 pb-4 mb-4 uppercase tracking-widest leading-none">
                                    Resumen del Alquiler
                                </h2>

                                <div className="space-y-3 mb-6">
                                    {items.map(item => (
                                        <div key={item.id} className="flex justify-between text-sm">
                                            <span className="text-gray-300 w-3/4 truncate">{item.quantity}x {item.name}</span>
                                            <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    ))}

                                    <div className="pt-4 mt-6 border-t border-white/20 flex justify-between items-center">
                                        <span className="text-lg font-bold">Total a Pagar</span>
                                        <span className="text-3xl font-black text-blockbuster-yellow">${total.toFixed(2)}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={handleCheckout}
                                    className="btn-primary w-full py-4 flex items-center justify-center gap-2 mt-2"
                                >
                                    <CreditCard className="w-5 h-5 fill-current" />
                                    Alquilar Ahora
                                </button>

                                <p className="text-center text-xs text-blue-200 mt-6 mt-4">
                                    * Recuerda: Tienes 3 días para devolver las cintas antes del recargo.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
