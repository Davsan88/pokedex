import { first151Pokemon, getFullPokedexNumber } from "../utils"
import { useState } from "react"

const SideNav = ({ selectedPokemon, setSelectedPokemon }) => {
  const [searchValue, setSearchValue] = useState('')
 

  return (
    <nav>
      <div  className={'header'}>
        <h1 className="text-gradient">Pokédex</h1>
        <input 
          input={searchValue}
          onChange={(e) => {setSearchValue(e.target.value)}} 
        />
      </div>
      {first151Pokemon.map((pokemon, pokemonIndex) => {
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