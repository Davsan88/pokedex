import { useEffect } from "react"

export const PokeCard = ({ selectedPokemon }) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

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

        


        // If fetching from the API, make sure to save the info to the cache for next time
    })

    return (
        <div></div>
    )
}
