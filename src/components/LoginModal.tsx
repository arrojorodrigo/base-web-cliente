import React from 'react';
import { Film, X } from 'lucide-react';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLogin: (username: string) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onLogin('ArrojoWebsFan99');
        onClose();
        alert('¡Éxito! Hola ArrojoWebsFan99');
    };

    return (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white text-gray-900 rounded-xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-200">
                {/* Modal Header */}
                <div className="bg-blockbuster-blue p-4 flex justify-between items-center text-white">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <Film className="w-5 h-5 text-blockbuster-yellow" />
                        Membresía
                    </h2>
                    <button onClick={onClose} className="hover:text-blockbuster-yellow transition-colors">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Modal Body */}
                <form onSubmit={handleSubmit} className="p-6">
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="w-full btn-primary mt-6 text-lg">
                            Ingresar a mi cuenta
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
