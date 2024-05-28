import React, { useEffect, useRef, useState } from 'react'
import { styler } from './utils/styler.js'


const PokemonCard = ({pokemon}) => {

  const [pokemonID, setPokemonID] = useState(null)
  const [pokemonHP, setPokemonHP] = useState(null)
  const [pokemonAT, setPokemonAT] = useState(null)
  const [pokemonDE, setPokemonDE] = useState(null)
  const [pokemonSP, setPokemonSP] = useState(null)
  const [pokemonTYPE, setPokemonTYPE] = useState(null)


  const style = useRef("")

  function fetchData(url) {
    fetch(url)
      .then(response => response.json())
      .then((json) => {
        setPokemonID(json);
        setPokemonHP(json.stats[0].base_stat);
        setPokemonAT(json.stats[1].base_stat);
        setPokemonDE(json.stats[2].base_stat);
        setPokemonSP(json.stats[3].base_stat);
        setPokemonTYPE(json.types[0].type.name);
      })
}

styler(pokemonTYPE, style)

  useEffect(() => {
    const url = pokemon.url
    fetchData(url);
  },[pokemon])



  return (
    <div className={style.current}>
      <div className=' drop-shadow-xl grid grid-cols-1 grid-rows-5 text-start align-middle text-white'>
        <h2 className='justify-start font-bold text-xl' key={pokemon?.name}>{pokemon?.name.toUpperCase()}</h2>
        <span className='flex flex-row justify-start gap-1 font-semibold text-xl'>hp: <p>{pokemonHP}</p> </span>
        <span className='flex flex-row justify-start gap-1 font-semibold text-xl'>attack: <p>{pokemonAT}</p> </span>
        <span className='flex flex-row justify-start gap-1 font-semibold text-xl'>defence:<p>{pokemonDE}</p> </span>
        <span className='flex flex-row justify-start gap-1 font-semibold text-xl'>speed: <p>{pokemonSP}</p> </span>
      </div>
      <div className='grid text-white'>
      <img className='grid-col-1 grid-row-2 justify-center drop-shadow-xl' src={pokemonID?.sprites.other["official-artwork"].front_default} alt="" />
      <span className='flex flex-row justify-center gap-1 font-semibold text-black bg-white rounded-full'><p>{pokemonTYPE}</p> </span>
      </div>
    </div>
  )
}

export default PokemonCard
