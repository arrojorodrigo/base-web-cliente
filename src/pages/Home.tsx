import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { MovieCard } from '../components/MovieCard';
import { MOVIES_DB } from '../data/movies';

export const Home = () => {
    // Grab top 4 for featured
    const featuredMovies = MOVIES_DB.slice(0, 4);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-blockbuster-blue py-20 overflow-hidden">
                {/* VHS Texture overlay */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent mix-blend-overlay"></div>
                <div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-12 -translate-y-12">
                    {/* Decorative geometric shapes typical of 90s */}
                    <div className="w-64 h-64 border-8 border-blockbuster-yellow rounded-full"></div>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-start md:w-2/3">
                    <div className="inline-block bg-blockbuster-yellow text-blockbuster-blue font-black px-4 py-1 mb-6 transform -skew-x-12 uppercase text-sm tracking-widest shadow-[4px_4px_0px_white]">
                        Nuevos Ingresos
                    </div>
                    <h1 className="text-shadow-retro text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-6">
                        LA MAGIA DEL <br /> <span className="text-blockbuster-yellow">CINE EN TU CASA</span>
                    </h1>
                    <p className="text-xl text-blue-100 mb-8 max-w-xl font-medium leading-relaxed">
                        Alquila los mejores títulos en VHS y DVD. Desde estrenos exclusivos hasta clásicos que debes ver de nuevo, sin recargos sorpresa.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link to="/catalog" className="btn-primary bg-white text-blockbuster-blue hover:text-white hover:bg-blockbuster-blue w-full sm:w-auto text-center flex items-center justify-center gap-2">
                            <Play className="w-5 h-5 fill-current" />
                            Ver Catálogo
                        </Link>
                        <button onClick={() => alert('¡Próximamente Membresía VIP!')} className="btn-primary w-full sm:w-auto text-center">
                            Únete al Club
                        </button>
                    </div>
                </div>
            </section>

            {/* Featured Section */}
            <section className="py-16 bg-gray-50 flex-grow">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-8 border-b-2 border-blockbuster-blue pb-4">
                        <h2 className="text-3xl font-black text-blockbuster-blue uppercase tracking-tight">Top Alquileres de la Semana</h2>
                        <Link to="/catalog" className="text-sm font-bold text-blockbuster-blue hover:text-blockbuster-yellow transition-colors flex items-center gap-1">
                            Ver todos &rarr;
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredMovies.map((movie) => (
                            <MovieCard key={movie.id} {...movie} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Banner promocional */}
            <section className="bg-blockbuster-yellow py-12 border-y-4 border-blockbuster-blue">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-4xl font-black text-blockbuster-blue uppercase tracking-tighter mb-4">
                        ¡Promo Fin de Semana!
                    </h2>
                    <p className="text-lg md:text-xl text-blockbuster-blue font-bold mb-6">
                        Alquila 3 películas y la 4ta va por cuenta de la casa. Solo válido devolviendo las cintas rebobinadas.
                    </p>
                    <Link to="/catalog" className="btn-primary inline-block text-lg">
                        Aprovechar Promo
                    </Link>
                </div>
            </section>
        </div>
    );
};
