import Link from 'next/link'

export default function PokemonLink({pokemonName}) {
    return (
        <li>
            <Link href={`/${pokemonName}`}>{pokemonName}</Link>
        </li>
    )
}