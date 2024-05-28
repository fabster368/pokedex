import React from 'react'
import { SiPokemon } from "react-icons/si";
import Searchbar from './Searchbar.jsx';


const Nav = ({cache}) => {
  return (
    <div className='m-auto p-1 bg-whitesmoke'>
      <div className='flex flex-row justify-center align-center'>
      <SiPokemon size={200}/>
      </div>
      <div className='flex flex-row justify-center align-center'>
      <Searchbar />
      </div>
    </div>
  )
}

export default Nav
