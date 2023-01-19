import { useRouter } from "next/router";
import useSWR from 'swr';
import { Pokemon } from "../types/pokemon";
import { fetcher } from "../utils/fetcher";

export default function PokemonDetails() {
    const router = useRouter()
    const {name} = router.query;
    console.log(name);

    const { data, error } = useSWR<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`, fetcher);

    if(error) {
        return (<pre>{JSON.stringify(error, null, 2)}</pre>)
      }
      
    if(!data) {
        return (<span>Loading...</span>)
    }

    return (
        <>
           <h2>{data.name}</h2>

           <p>Height: {data.height}</p>
           <p>Weight: {data.weight}</p>

           <section>
            <h3>Abilities</h3>
            <ul>
                {
                    data.abilities.map((ability) => <li key={ability.ability.name}>{ability.ability.name}</li>)
                }
            </ul>
           </section>
           <section>
            <h3>Moves</h3>
            <ul>
                {
                    data.moves.map((move) => <li key={move.move.name}>{move.move.name}</li>)
                }
            </ul>
           </section>
        </>
    )

}