// components/PokemonList.tsx
import { Pokemon } from '@/lib/types';
import PokemonListItem from './PokemonListItem';

type Props = {
  pokemons: Pokemon[];
};

export default function PokemonList({ pokemons }: Props) {
  return (
<div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
      {pokemons.map((pokemon) => (
        <PokemonListItem key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  </div>
  );
}