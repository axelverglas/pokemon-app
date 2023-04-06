import Link from 'next/link';
import Image from 'next/image';
import { Pokemon } from '@/lib/types';

interface PokemonListItemProps {
    pokemon: Pokemon;
}

export default function PokemonListItem({ pokemon }: PokemonListItemProps) {
    return (
        <li className='flex items-center'>
            <Image src={pokemon.imageUrl} alt={pokemon.name} width={20} height={20}/>
            <Link href={`/pokemon/${pokemon.name}`}>
                {pokemon.name}
            </Link>
        </li>
    );
}