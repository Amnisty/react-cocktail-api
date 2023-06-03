import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardPokemon from './Components/CardPokemon/CardPokemon'
  const url = 'https://pokeapi.co/api/v2/pokemon/'

function App() {
  const [pokemon, setPokemon] = useState({}) 
  async function searchPokemon() {
  const pokeCenter = await(await fetch(url)).json()

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
    <div>{pokemon?.results?.map(poke => 
      <CardPokemon image={poke.front_default} title={poke.name}/>
    )}</div>    
  )
}

export default App
