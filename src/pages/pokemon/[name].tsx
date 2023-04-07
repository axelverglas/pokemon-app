import Image from 'next/image';
import { GetServerSideProps } from 'next';
import { Pokemon } from '@/lib/types';
import { fetchPokemon } from '@/lib/fetchPokemon';

interface PokemonPageProps {
    pokemon: Pokemon;
}

export default function PokemonPage({ pokemon }: PokemonPageProps) {
    return (
        <>
        <h1 className="text-4xl font-bold text-center capitalize">
          {pokemon.name}
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center mt-8">
          <Image
            src={pokemon.imageUrl}
            alt={pokemon.name}
            className="w-64 h-64"
            width={200}
            height={200}
          />
          <div className="mt-4 md:mt-0 md:ml-8">
            <h2 className="text-2xl font-bold">Information</h2>
            <p>ID: {pokemon.id}</p>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
          </div>
        </div>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { name } = context.query;
  const pokemon = await fetchPokemon(name as string);

  return {
    props: {
      pokemon,
    },
  };
};