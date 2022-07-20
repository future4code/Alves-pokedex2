import React, {useContext, useEffect} from 'react'

import Cards from '../../Components/Cards/Cards'
import { GlobalContext } from '../../Components/Global/GlobalContext'

const Home = () => {

  const {getPokemonByQuantity, getPokemonDetail,pokemonListName} = useContext(GlobalContext)

  useEffect(()=>{
    getPokemonByQuantity()
  },[])

  useEffect(()=>{
    getPokemonDetail()
  },[pokemonListName])
  
  
  return (
    <div>
      <h1>Home</h1>
      <Cards/>
    </div>
  )
}

export default Home