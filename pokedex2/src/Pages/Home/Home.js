import React, {useContext, useEffect} from 'react'
import {ContainerHome} from './HomeStyled'
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
    <ContainerHome>
      <h1>Todos Pokémons</h1>
      <Cards/>
    </ContainerHome>
  )
}

export default Home