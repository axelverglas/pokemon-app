import { useQuery } from 'react-query';
import PokemonListItem from './PokemonListItem';
import { Pokemon } from '@/lib/types';

const fetchPokemon = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await res.json();

    const pokemonsWithImages = data.results.map((pokemon: Pokemon) => {
        if(!pokemon.url) return pokemon;
        const id = parseInt(pokemon.url.split('/')[6]);
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        return { ...pokemon, imageUrl };
    });

    return { ...data, results: pokemonsWithImages };
};


export default function PokemonList() {
    const { isLoading, error, data } = useQuery('pokemon', fetchPokemon);

    if (isLoading) return <h2>Loading...</h2>;

    if (error) return <h2>Error...</h2>;

    if (!data) return <h2>No data</h2>;
    return (
        <ul>
            {data.results.map((pokemon: Pokemon) => (
                <PokemonListItem key={pokemon.name} pokemon={pokemon} />
            ))}
        </ul>
    )
};