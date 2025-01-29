import { first151Pokemon, getFullPokedexNumber } from "../utils"
import { useState } from "react"

const SideNav = ({ selectedPokemon, setSelectedPokemon }) => {
  const [searchValue, setSearchValue] = useState('')
 
  const filteredPokemon = first151Pokemon.filter((element, elementIndex) => {
    // if full pokedex number includes the current search value, return true
    if (toString(getFullPokedexNumber(elementIndex)).includes(searchValue)) { return true }
    
    // if full pokedex name includes the current search value, return true
    if (element.toLowerCase().includes(searchValue.toLowerCase())) { return true }

    // otherwise, exclude value from array
    return false
  })

  return (
    <nav>
      <div  className={'header'}>
        <h1 className="text-gradient">Pokédex</h1>
        <input 
          input={searchValue}
          onChange={(e) => {setSearchValue(e.target.value)}} 
        />
      </div>
      {filteredPokemon.map((pokemon, pokemonIndex) => {
        return(
          <button 
            onClick={() => {setSelectedPokemon(pokemonIndex)}}
            key={pokemonIndex} 
            className={'nav-card' + (pokemonIndex === selectedPokemon ? 'nav-card-selected' : ' ')}
          >
            <p>{getFullPokedexNumber(pokemonIndex)}</p>
            <p>{pokemon}</p>
          </button>
        )
      })}
    </nav>
  )
}


export default SideNav