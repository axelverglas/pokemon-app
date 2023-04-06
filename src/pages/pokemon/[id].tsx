import Image from 'next/image';
import { QueryClient, dehydrate } from 'react-query';
import { GetServerSideProps } from 'next';
import { useQuery } from 'react-query';
import { Pokemon } from '@/lib/types';

interface PokemonPageProps {
  id: string;
}

async function fetchPokemon(id: string): Promise<Pokemon> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`;
  
    const pokemon: Pokemon = {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      imageUrl: imageUrl,
    };
  
    return pokemon;
  }

export default function PokemonPage({ id }: PokemonPageProps) {
  const { isLoading, error, data: pokemon } = useQuery<Pokemon, Error>(
    ['pokemon', id],
    () => fetchPokemon(id),
    { enabled: !!id }
  );

  if (isLoading || !pokemon) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold">
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </h1>
      <div className="w-48 h-48 relative">
        <Image
          src={pokemon.imageUrl}
          alt={pokemon.name}
          width={200}
          height={200}
        />
      </div>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['pokemon', id], () => fetchPokemon(id as string));

  return {
    props: {
      id,
      dehydratedState: dehydrate(queryClient),
    },
  };
};
