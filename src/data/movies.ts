export interface Movie {
    id: string;
    title: string;
    year: number;
    genre: string;
    price: number;
    image: string;
}

export const MOVIES_DB: Movie[] = [
    {
        id: 'm1',
        title: 'Matrix',
        year: 1999,
        genre: 'Ciencia Ficción / Acción',
        price: 3.50,
        image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&q=80',
    },
    {
        id: 'm2',
        title: 'Pulp Fiction',
        year: 1994,
        genre: 'Crimen / Drama',
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=500&q=80',
    },
    {
        id: 'm3',
        title: 'Jurassic Park',
        year: 1993,
        genre: 'Aventura / Ciencia Ficción',
        price: 2.50,
        image: 'https://images.unsplash.com/photo-1605333396825-1e35d213897b?w=500&q=80',
    },
    {
        id: 'm4',
        title: 'Terminator 2',
        year: 1991,
        genre: 'Acción / Ciencia Ficción',
        price: 3.00,
        image: 'https://images.unsplash.com/photo-1533613220915-609f661a6fe1?w=500&q=80',
    },
    {
        id: 'm5',
        title: 'Toy Story',
        year: 1995,
        genre: 'Infantil / Animación',
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1551636898-47668aa61de2?w=500&q=80',
    },
    {
        id: 'm6',
        title: 'Titanic',
        year: 1997,
        genre: 'Romance / Drama',
        price: 3.50,
        image: 'https://images.unsplash.com/photo-1498354178607-a79df2916198?w=500&q=80',
    }
];
