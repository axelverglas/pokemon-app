import React from 'react';
import Head from 'next/head';
import PokemonList from '@/components/PokemonList';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Pokedex</title>
      </Head>
      <div className="container mx-auto">
      <h1 className="text-4xl font-bold">Liste des Pokémon</h1>
      <PokemonList />
    </div>
    </div>
  );
}

