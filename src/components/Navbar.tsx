import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Film, LogIn, LogOut, X } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { useUserStore } from '../store/useUserStore';

export const Navbar = () => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const cartCount = useCartStore((state) => state.getCartCount());
    const { user, login, logout } = useUserStore();

    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login('ArrojoWebsFan99'); // Dummy login value as requested
        setIsLoginModalOpen(false);
        // Here we could add a toast if we build a Toast Context, but sticking to simplicity
        alert('¡Éxito! Hola ArrojoWebsFan99');
    };

    return (
        <>
            <nav className="glass-header sticky top-0 z-50 text-white flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 text-blockbuster-yellow font-extrabold text-2xl tracking-tighter">
                    <Film className="w-8 h-8" />
                    <span>ARROJO<span className="text-white text-lg font-normal ml-1 tracking-normal">WEBS</span></span>
                </Link>

                {/* Links */}
                <div className="hidden md:flex gap-6 font-semibold">
                    <Link to="/" className="hover:text-blockbuster-yellow transition-colors">Inicio</Link>
                    <Link to="/catalog" className="hover:text-blockbuster-yellow transition-colors">Catálogo</Link>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-6">
                    <Link to="/cart" className="relative group">
                        <ShoppingCart className="w-6 h-6 group-hover:text-blockbuster-yellow transition-colors" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    {user ? (
                        <div className="flex items-center gap-3 bg-white/10 px-3 py-1.5 rounded-full">
                            <span className="text-sm font-medium">Hola, {user}</span>
                            <button
                                onClick={() => logout()}
                                className="text-red-400 hover:text-red-300 transition-colors"
                                title="Cerrar sesion"
                            >
                                <LogOut className="w-5 h-5" />
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => setIsLoginModalOpen(true)}
                            className="flex items-center gap-2 hover:text-blockbuster-yellow transition-colors font-medium"
                        >
                            <LogIn className="w-5 h-5" />
                            <span className="hidden sm:inline">Ingresar</span>
                        </button>
                    )}
                </div>
            </nav>

            {/* Login Modal */}
            {isLoginModalOpen && (
                <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white text-gray-900 rounded-xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-200">
                        {/* Modal Header */}
                        <div className="bg-blockbuster-blue p-4 flex justify-between items-center text-white">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <Film className="w-5 h-5 text-blockbuster-yellow" />
                                Membresía
                            </h2>
                            <button onClick={() => setIsLoginModalOpen(false)} className="hover:text-blockbuster-yellow transition-colors">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <form onSubmit={handleLoginSubmit} className="p-6">
                            <p className="text-sm text-gray-500 mb-6 font-medium">Ingresa para alquilar tus estrenos favoritos sin recargo por demora.</p>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="email">Correo Electrónico</label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blockbuster-blue focus:border-blockbuster-blue outline-none transition-shadow"
                                        placeholder="tu@email.com"
                                        value={loginEmail}
                                        onChange={(e) => setLoginEmail(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="password">Contraseña (PIN)</label>
                                    <input
                                        id="password"
                                        type="password"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blockbuster-blue focus:border-blockbuster-blue outline-none transition-shadow"
                                        placeholder="••••••••"
                                        value={loginPassword}
                                        onChange={(e) => setLoginPassword(e.target.value)}
                                    />
                                </div>

                                <button type="submit" className="w-full btn-primary mt-6 text-lg">
                                    Ingresar a mi cuenta
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};
