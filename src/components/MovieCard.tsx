import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

interface MovieCardProps {
    id: string;
    title: string;
    year: number;
    genre: string;
    price: number;
    image: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({ id, title, year, genre, price, image }) => {
    const addItem = useCartStore((state) => state.addItem);

    const handleAddToCart = () => {
        addItem({ id, name: title, price, image });
        // In a real app we might use a toast library here
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col border border-gray-100">
            <div className="relative overflow-hidden aspect-[2/3] bg-gray-200">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                />
                {/* Blockbuster stylistic banner */}
                <div className="absolute top-2 left-0 bg-blockbuster-yellow text-blockbuster-blue text-xs font-bold px-3 py-1 uppercase tracking-wider shadow-sm">
                    Estreno
                </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-blockbuster-blue transition-colors">
                        {title}
                    </h3>
                    <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded">
                        {year}
                    </span>
                </div>

                <p className="text-sm text-gray-500 mb-4">{genre}</p>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500 uppercase tracking-wide">Alquiler</span>
                        <span className="text-xl font-black text-blockbuster-blue">${price.toFixed(2)}</span>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className="bg-blockbuster-blue hover:bg-blue-900 text-white p-3 rounded-full shadow-md transition-colors transform active:scale-95"
                        aria-label="Alquilar película"
                    >
                        <ShoppingCart className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};
