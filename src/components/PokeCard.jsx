import { useEffect, useState } from "react"
import { getFullPokedexNumber, getPokedexNumber } from "../utils"
import TypeCard from "./TypeCard"
import Modal from "./Modal"

const PokeCard = ({ selectedPokemon }) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [skill, setSkill] = useState(null)
    const [loadingSkill, setLoadingSkill] = useState(false)

    const { name, height, abilities, stats, types, moves, sprites } = data || {}

    const imgList = Object.keys(sprites || {}).filter(value => {
        if (!sprites[value]) { return false }
        if (['versions', 'other'].includes(value)) { return false }
        return true
    })

    async function fetchMoveData(move, moveUrl) {
        if (loadingSkill || !localStorage || !moveUrl ) { return }

        // check cache for move
        let skillCache = {}
        if (localStorage.getItem('pokemon-moves')) {
            skillCache = JSON.parse(localStorage.getItem('pokemon-moves'))
        }

        if (move in skillCache) {
            setSkill(skillCache[move])
            console.log('Found move in cache')
            return
        }

        try {
            setLoadingSkill(true)
            const res = fetch(moveUrl)
            const moveData = res.json()
            console.log('Fetched move from API')
            const description = moveData?.flavor_text_entries.filter(
                val => {
                    return val.version_group.name = 'fiered-leafgreen'
                })[0]?.flavor_text
            
           
            
        } catch (err) {
            console.log(err)
        } finally {
            setLoadingSkill(false)
        }        
    }


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
            console.log('Found pokemon in cache')
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
                console.log('Fetched pokemon data')
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
            {skill && (
                <Modal handleCloseModal={() => { setSkill(null) }}>
                    <div>
                        <h6>Name</h6>
                        <h2></h2>
                    </div>
                    <div>
                        <h6>Description</h6>
                        <p>Hello there</p>
                    </div>
                </Modal>)}
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
                    return (
                        <img
                            key={spriteIndex}
                            src={imgUrl}
                            alt={`${name}-img-${spriteUrl}`}
                        />
                    )
                })}
            </div>
            <h3>Stats</h3>
            <div className="stats-card">
                {stats.map((statObj, statIndex) => {
                    const { stat, base_stat } = statObj
                    return (
                        <div key={statIndex} className='stat-item'>
                            <p>{stat?.name.replaceAll('-', ' ')}</p>
                            <h4>{base_stat}</h4>
                        </div>
                    )
                })}
            </div>
            <h3>Moves</h3>
            <div className='pokemon-move-grid'>
                {moves.map((moveObj, moveIndex) => {
                    return (
                        <button className='button-card pokemon-move' key={moveIndex} onClick={() => { }}>
                            <p>{moveObj?.move?.name.replaceAll('-', ' ')}</p>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}


export default PokeCard