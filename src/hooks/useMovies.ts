import { useState, useMemo } from 'react';
import { MOVIES_DB } from '../data/movies';
import type { Movie } from '../data/movies';

export const CATEGORIES = ['Todas', 'Acción', 'Ciencia Ficción', 'Infantil', 'Drama', 'Aventura', 'Animación', 'Fantasía'];

export const useMovies = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('Todas');

    const filteredMovies = useMemo(() => {
        return MOVIES_DB.filter((movie: Movie) => {
            const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                movie.genre.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesCategory = activeCategory === 'Todas' ? true : movie.genre.includes(activeCategory);

            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, activeCategory]);

    return {
        searchTerm,
        setSearchTerm,
        activeCategory,
        setActiveCategory,
        filteredMovies,
        allCategories: CATEGORIES
    };
};
