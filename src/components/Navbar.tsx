import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Film, LogIn, LogOut, Menu } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { useUserStore } from '../store/useUserStore';
import { LoginModal } from './LoginModal';

export const Navbar = () => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const cartCount = useCartStore((state) => state.getCartCount());
    const { user, login, logout } = useUserStore();

    const handleLogin = (username: string) => {
        login(username);
    };

    return (
        <>
            <nav className="glass-header sticky top-0 z-50 text-white flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 text-blockbuster-yellow font-extrabold text-2xl tracking-tighter">
                    <Film className="w-8 h-8" />
                    <span>ARROJO<span className="text-white text-lg font-normal ml-1 tracking-normal">WEBS</span></span>
                </Link>

                {/* Links Desktop */}
                <div className="hidden md:flex gap-6 font-semibold">
                    <Link to="/" className="hover:text-blockbuster-yellow transition-colors relative group">
                        Inicio
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blockbuster-yellow transition-all group-hover:w-full"></span>
                    </Link>
                    <Link to="/catalog" className="hover:text-blockbuster-yellow transition-colors relative group">
                        Catálogo
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blockbuster-yellow transition-all group-hover:w-full"></span>
                    </Link>
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
                            <span className="text-sm font-medium hidden sm:inline">Hola, {user}</span>
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
                            className="flex items-center gap-2 hover:text-blockbuster-yellow transition-colors font-medium border border-transparent hover:border-blockbuster-yellow px-3 py-1.5 rounded-full"
                        >
                            <LogIn className="w-5 h-5" />
                            <span className="hidden sm:inline">Ingresar</span>
                        </button>
                    )}

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white hover:text-blockbuster-yellow transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-blockbuster-blue border-t border-white/10 px-4 py-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-blockbuster-yellow font-bold text-lg">Inicio</Link>
                    <Link to="/catalog" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-blockbuster-yellow font-bold text-lg">Catálogo</Link>
                </div>
            )}

            {/* Externalized Login Modal */}
            <LoginModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
                onLogin={handleLogin}
            />
        </>
    );
};
