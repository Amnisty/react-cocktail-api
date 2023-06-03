import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
  const url = 'https://pokeapi.co/api/v2/pokemon/'

function App() {
  const [pokemon, setPokemon] = useState({})
  
  async function searchPokemon() {
  const chiringuito = await(await fetch(url)).json()
  console.log(chiringuito)
  setPokemon(chiringuito)
}

  useEffect(() => {
    searchPokemon()
  }, [])
  
  return (
    <div>{pokemon?.results?.map(cariñosas => <li>{cariñosas.name}</li>)}</div>    
  )
}

export default App
