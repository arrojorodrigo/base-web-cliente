import { Film } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-blockbuster-blue text-white py-12 mt-12 border-t-8 border-blockbuster-yellow">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <div className="flex items-center gap-2 text-blockbuster-yellow font-bold text-xl mb-4">
                        <Film className="w-6 h-6" />
                        <span>ARROJO<span className="text-white font-normal ml-1">WEBS</span></span>
                    </div>
                    <p className="text-gray-300 text-sm">
                        Tus estrenos favoritos en VHS y DVD. Asegúrate de retroceder la cinta antes de devolverla.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-4">Secciones</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#" className="hover:text-blockbuster-yellow transition-colors">Nuevos Estrenos</a></li>
                        <li><a href="#" className="hover:text-blockbuster-yellow transition-colors">Catálogo Familiar</a></li>
                        <li><a href="#" className="hover:text-blockbuster-yellow transition-colors">Videojuegos (N64 & PS1)</a></li>
                        <li><a href="#" className="hover:text-blockbuster-yellow transition-colors">Membresías</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-4">Políticas del Local</h3>
                    <p className="text-gray-300 text-sm mb-2">📍 Av. Siempreviva 123, Springfield</p>
                    <p className="text-gray-300 text-sm mb-2">📞 555-0199</p>
                    <p className="text-gray-300 text-sm text-blockbuster-yellow mt-4 font-semibold">
                        ¡Evita el recargo de $1! Devuelve a tiempo.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-white/20 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} ArrojoWebs Client Demo. Todos los derechos reservados.
            </div>
        </footer>
    );
};
