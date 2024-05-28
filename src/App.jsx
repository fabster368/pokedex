import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import PokemonCard from './PokemonCard.jsx'
import Nav from './Nav.jsx'

function App() {
  const [pokemonPage, setPokemonPage] = useState(null)

  function fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(json => setPokemonPage(json))
  }

  useEffect(() => {
      const url = `https://pokeapi.co/api/v2/pokemon/?limit=9&offset=0`
      fetchData(url);
  }, []);


  function next(){
      fetchData(pokemonPage.next)
  }

  
  function previous(){
      fetchData(pokemonPage.previous)
  }


  return (
      <>
      <Nav />
        <div className='h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 bg-slate-200 m-2 p-2 rounded-lg'>
          {pokemonPage?.results.map((pokemon) => <PokemonCard pokemon={pokemon}/>)}
        </div>
        <div className='flex justify-center bg-whitesmoke'>
        {pokemonPage?.next && <button className='p-2 m-4 text-black bg-slate-200 rounded-full shadow-lg hover:scale-110 ease-in duration-150' onClick={next}>Next</button>}
        {pokemonPage?.previous && <button className='p-2 m-4 text-black bg-slate-200 rounded-full shadow-lg hover:scale-110 ease-in duration-150' onClick={previous}>Previous</button> }
        </div>
       
      </>
  )

};


export default App;

