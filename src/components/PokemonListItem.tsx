import Link from 'next/link';
import Image from 'next/image';
import { Pokemon } from '@/lib/types';

interface PokemonListItemProps {
    pokemon: Pokemon;
}

export default function PokemonListItem({ pokemon }: PokemonListItemProps) {
    return (
        <div className="bg-white shadow-md rounded p-4 mx-2 my-4 w-64 text-center">
            <Link href={`/pokemon/${pokemon.name}`}>
                <Image
                    src={pokemon.imageUrl}
                    alt={pokemon.name}
                    width={80}
                    height={80}
                    className='mx-auto mb-2' 
                />
                <h2 className="text-xl font-semibold capitalize">{pokemon.name}</h2>
            </Link>
        </div>
    );
}