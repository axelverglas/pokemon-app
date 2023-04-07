// pages/index.tsx
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Pokemon } from '@/lib/types';
import { fetchPokemon } from '@/lib/fetchPokemon';
import PokemonList from '@/components/PokemonList';

type Props = {
  pokemons: Pokemon[];
};

export default function Home({ pokemons }: Props) {
  return (
  <>
     <Head>
        <title>Pokedex</title>
     </Head>
      <PokemonList pokemons={pokemons} />
  </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await res.json();
  
  const pokemons = data.results.map((pokemon: Pokemon) => {
    if(!pokemon.url) return pokemon;
    const id = parseInt(pokemon.url.split('/')[6]);
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    return { ...pokemon, imageUrl };
  });

  return {
    props: {
      pokemons,
    },
  };
};
