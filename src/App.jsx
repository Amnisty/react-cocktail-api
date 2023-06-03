import { useEffect, useState } from 'react'
import './App.css'
import CardPokemon from './Components/CardPokemon/CardPokemon'
  const url = 'https://pokeapi.co/api/v2/pokemon/'

function App() {
  const [pokemon, setPokemon] = useState({}) 

  async function searchPokemon(pageUrl) {
  const pokeCenter = await(await fetch(pageUrl ?? url)).json()

  const pokePromises = pokeCenter.results.map(async item =>
    (await fetch(item.url)).json()
  )
  pokeCenter.results = await Promise.all(pokePromises)
  console.log(pokeCenter)
  setPokemon(pokeCenter)
}

  useEffect(() => {
    searchPokemon()
  }, [])
  
  return (
    <main className='container'>
      <div>
        <button className='me-5' hidden={!pokemon.previous} onClick={() => searchPokemon(pokemon.previous)}>Back</button>
        <button hidden={!pokemon.next} onClick={() => searchPokemon(pokemon.next)}>Next</button>
      </div>
      <div className='d-flex gap-3 flex-wrap'>{pokemon?.results?.map(poke => 
        <CardPokemon image={poke.sprites.front_default} title={poke.name} description={poke.base_experience} description2={poke.height}/>
      )}</div>    
    </main>
  )
}

export default App
