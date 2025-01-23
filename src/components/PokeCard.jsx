import { useEffect, useState } from "react"
import { getFullPokedexNumber, getPokedexNumber } from "../utils"
import TypeCard from "./TypeCard"

const PokeCard = ({ selectedPokemon }) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    const { name, height, abilities, stats, types, moves, sprites } = data || {}

    const imgList = Object.keys(sprites || {}).filter(value => {
        if (!sprites[value]) { return false }
        if (['versions', 'other'].includes(value)) { return false }
        return true
    })


    useEffect(() => {
        // If loading, exit logic
        if (loading || !localStorage) { return }

        // Chech if the selected pokemon information is available in the cache
        // 1. Define the cache

        let cache = {}
        if (localStorage.getItem('pokedex')) {
            cache = JSON.parse(localStorage.getItem('pokedex'))
        }

        // 2. Check if the selected pokemon is in the cache, otherwhise fetch from the API

        if (selectedPokemon in cache) {
            // read from cache
            setData(cache[selectedPokemon])
            return
        }

        // we passed all the cache stuff to no avail and now need to fetch the data from API

        async function fetchPokemonData() {
            setLoading(true)
            try {
                const baseURL = 'https://pokeapi.co/api/v2/'
                const suffix = 'pokemon/' + getPokedexNumber(selectedPokemon)
                const finalURL = baseURL + suffix
                const res = await fetch(finalURL)
                const pokemonData = await res.json()
                setData(pokemonData)
                console.log(pokemonData)
                cache[selectedPokemon] = pokemonData
                localStorage.setItem('pokedex', JSON.stringify(cache))
            } catch (err) {
                console.log(err.message)
            } finally {
                setLoading(false)
            }
        }


        fetchPokemonData()


        // If fetching from the API, make sure to save the info to the cache for next time
    }, [selectedPokemon])

    if (loading || !data) {
        return (
            <div>
                <h4>Loading...</h4>
            </div>
        )
    }

    return (
        <div className='poke-card'>
            <div>
                <h4>#{getFullPokedexNumber(selectedPokemon)}</h4>
                <h2>{name}</h2>
            </div>
            <div className='type-container'>
                {types.map((typeObj, typeIndex) => {
                    return (
                        <TypeCard 
                            key={typeIndex} 
                            type={typeObj?.type?.name}
                        />
                    )
                })}
            </div>
            <img 
                className='default-img' 
                src={'/pokemon/' + getFullPokedexNumber(selectedPokemon) + '.png'} alt={`${name}-large-img`} 
            />
            <div className='img-container'>
                {imgList.map((spriteUrl, spriteIndex) => {
                    const imgUrl = sprites[spriteUrl]
                    return(
                        <img 
                            key={spriteIndex} 
                            src={imgUrl} 
                            alt={`${name}-img-${spriteUrl}`} 
                        />
                    )
                })}
            </div>
        </div>
    )
}


export default PokeCard