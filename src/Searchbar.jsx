import React, { useEffect, useRef, useState } from 'react'
import { styler } from './utils/styler.js';
import { IoMdArrowBack } from "react-icons/io";
import { IoSearchCircleOutline } from "react-icons/io5";



const Searchbar = () => {
    const [bar, setBar] = useState(true);
    const [pokemon, setPokemon] = useState(null)
    const [pokemonHP, setPokemonHP] = useState(null)
    const [pokemonAT, setPokemonAT] = useState(null)
    const [pokemonDE, setPokemonDE] = useState(null)
    const [pokemonSP, setPokemonSP] = useState(null)
    const [pokemonTYPE, setPokemonTYPE] = useState(null)
    const [pokemonIMG, setPokemonIMG] = useState(null)
    const input = useRef('')
    const style = useRef('')
    const [url, setURL] = useState('')

    function fetchPokemon(url) {
        fetch(url)
        .then(response => response.json())
        .then(json => {
            setPokemon(json.name)
            setPokemonHP(json.stats[0].base_stat);
            setPokemonAT(json.stats[1].base_stat);
            setPokemonDE(json.stats[2].base_stat);
            setPokemonSP(json.stats[3].base_stat);
            setPokemonTYPE(json.types[0].type.name);
            setPokemonIMG(json.sprites.other["official-artwork"].front_default)})
       
    }

    function handleInput(e) {
      input.current = e.target.value;
    }

    function handleSearch() {
        setBar(!bar)
        setURL(`https://pokeapi.co/api/v2/pokemon/${input.current}`)
    };

    function handleBack(){
        setBar(!bar)
    }

    styler(pokemonTYPE, style)

    useEffect(() => {
        fetchPokemon(url)
    }, [url])

if (bar === true) {
    return (
   
    <>
      <input placeholder='search'className='p-2 m-4 rounded-full shadow-md'onChange={handleInput}></input>
      <button className='p-2 m-4 text-black bg-slate-200 rounded-full shadow-lg hover:scale-110 ease-in duration-150' onClick={handleSearch}>
        <IoSearchCircleOutline size={20} />
      </button>
    </>
    )
}
  return (
    <div>
    <button className='p-2 m-4 text-black bg-slate-200 rounded-full shadow-lg hover:scale-110 ease-in duration-150' onClick={handleBack}>
      <IoMdArrowBack />
    </button>
    <div className={style.current}>
      <container className=' drop-shadow-xl grid grid-cols-1 grid-rows-5 align-middle text-white'>
        <h2 className='uppercase flex flex-row justify-center font-bold text-xl lg:text-4xl' key={pokemon}>{pokemon}</h2>
        <span className='flex flex-row justify-center gap-1 font-semibold text-xl lg:text-4xl'>hp: <p>{pokemonHP}</p> </span>
        <span className='flex flex-row justify-center gap-1 font-semibold text-xl lg:text-4xl'>attack: <p>{pokemonAT}</p> </span>
        <span className='flex flex-row justify-center gap-1 font-semibold text-xl lg:text-4xl'>defence: <p>{pokemonDE}</p> </span>
        <span className='flex flex-row justify-center gap-1 font-semibold text-xl lg:text-4xl'>speed: <p>{pokemonSP}</p> </span>
      </container>
      <container className='grid text-white drop-shadow-xl'>
      <img className='grid-col-1 grid-row-2 justify-center drop-shadow-xl' src={pokemonIMG} alt="" />
      <span className='flex flex-row justify-center gap-1 font-semibold text-black bg-white rounded-full'><p>{pokemonTYPE}</p> </span>
      </container>
    </div>
    </div>
  )
}

export default Searchbar


