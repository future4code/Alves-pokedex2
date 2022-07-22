import React, { useContext, useEffect } from 'react'
import { ContainerHome } from './HomeStyled'
import Cards from '../../Components/Cards/Cards'
import { GlobalContext } from '../../Components/Global/GlobalContext'
import { useNavigate, useParams } from 'react-router-dom'

const Home = () => {

  const { getPokemonByQuantity, getPokemonDetail, pokemonListName } = useContext(GlobalContext)
  const navigate = useNavigate()
  const params = useParams()
  useEffect(() => {
    getPokemonByQuantity()
  }, [])

  useEffect(() => {
    getPokemonDetail()
  }, [pokemonListName])


  return (
    <ContainerHome>
      <h1>Todos Pokémons</h1>
      <>
        <Cards />
      </>
      <div>
        <button></button>
      </div>
    </ContainerHome>
  )
}

export default Home