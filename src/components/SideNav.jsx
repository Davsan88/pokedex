import { first151Pokemon, getFullPokedexNumber } from "../utils"
import { useState } from "react"

const SideNav = ({ selectedPokemon, setSelectedPokemon, handleToggleMenu, showSideMenu }) => {
  const [searchValue, setSearchValue] = useState('')

  const filteredPokemon = first151Pokemon.filter((element, elementIndex) => {
    // if full pokedex number includes the current search value, return true
    if ((getFullPokedexNumber(elementIndex)).includes(searchValue)) { return true }

    // if full pokedex name includes the current search value, return true
    if (element.toLowerCase().includes(searchValue.toLowerCase())) { return true }

    // otherwise, exclude value from array
    return false
  })

  return (
    <nav className={`${!showSideMenu ? "open" : ""}`}>
      <div className={`header ${!showSideMenu ? "open" : ""}`}>
        <button onClick={handleToggleMenu} className="open-nav-button">
          <i className="fa-solid fa-arrow-left-long"></i>
        </button>
        <h1 className="text-gradient">Pokédex</h1>
      </div>
      <input
        placeholder="E.g. 001 or Bulba..."
        input={searchValue}
        onChange={(e) => { setSearchValue(e.target.value) }}
      />
      {filteredPokemon.map((pokemon, pokemonIndex) => {
        const truePokedexNumber = first151Pokemon.indexOf(pokemon)
        return (
          <button
            onClick={() => { setSelectedPokemon(truePokedexNumber) }}
            key={pokemonIndex}
            className={'nav-card' + (truePokedexNumber === selectedPokemon ? 'nav-card-selected' : ' ')}
          >
            <p>{getFullPokedexNumber(truePokedexNumber)}</p>
            <p>{pokemon}</p>
          </button>
        )
      })}
    </nav>
  )
}


export default SideNav