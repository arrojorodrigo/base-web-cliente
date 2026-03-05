import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { MovieCard } from '../components/MovieCard';
import { MOVIES_DB } from '../data/movies';

export const Catalog = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Basic filter
    const filteredMovies = MOVIES_DB.filter(m =>
        m.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <header className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-4xl font-black text-blockbuster-blue uppercase tracking-tighter mb-2">
                            Búsqueda de Películas
                        </h1>
                        <p className="text-gray-600 font-medium">Navega por nuestro inmenso archivo de cintas</p>
                    </div>

                    <div className="w-full md:w-1/3 relative flex items-center">
                        <Search className="w-5 h-5 absolute left-3 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Buscar título o género..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded border-2 border-gray-300 focus:border-blockbuster-blue focus:ring-0 outline-none transition-colors"
                        />
                    </div>
                </header>

                {/* Filter Bar */}
                <div className="bg-white p-4 rounded shadow-sm border border-gray-100 flex items-center gap-4 mb-8 overflow-x-auto">
                    <div className="flex items-center gap-2 text-gray-600 font-bold border-r pr-4">
                        <SlidersHorizontal className="w-5 h-5 text-blockbuster-blue" />
                        <span className="uppercase text-sm">Categorías</span>
                    </div>
                    <button className="px-4 py-1.5 rounded-full bg-blockbuster-blue text-white text-sm font-bold whitespace-nowrap">Todas</button>
                    <button className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-bold whitespace-nowrap transition-colors">Acción</button>
                    <button className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-bold whitespace-nowrap transition-colors">Ciencia Ficción</button>
                    <button className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-bold whitespace-nowrap transition-colors">Infantil</button>
                    <button className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-bold whitespace-nowrap transition-colors">Drama</button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredMovies.length > 0 ? (
                        filteredMovies.map(movie => (
                            <MovieCard key={movie.id} {...movie} />
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center">
                            <h3 className="text-2xl font-bold text-gray-400 mb-2">No se encontraron cintas...</h3>
                            <p className="text-gray-500">Intenta con otro término o revisa debajo del mostrador.</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};
