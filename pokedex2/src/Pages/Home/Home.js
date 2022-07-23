import React, { useContext, useEffect } from 'react'
import { ContainerHome, Pagination} from './HomeStyled'
import Cards from '../../Components/Cards/Cards'
import { GlobalContext } from '../../Components/Global/GlobalContext'
import { useNavigate, useParams } from 'react-router-dom'
import { goToHomeNext, goToHomeBack } from '../../Router/Coordinator'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'

const Home = () => {

  const { getPokemonByQuantity, getPokemonDetail, pokemonListName } = useContext(GlobalContext)
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    getPokemonByQuantity(params.number)
  }, [navigate])

  useEffect(() => {
    getPokemonDetail()
  }, [pokemonListName])


  return (
    <ContainerHome>
      <h1>Todos Pokémons</h1>
      <Pagination>
        <p onClick={()=>goToHomeBack(navigate, +params.number - +30 )}><MdArrowBackIosNew/></p>
        <p onClick={()=>goToHomeNext(navigate, 0 )}>1</p>
        <p onClick={()=>goToHomeNext(navigate, 30 )}>2</p>
        <p onClick={()=>goToHomeNext(navigate, 60 )}>3</p>
        <p onClick={()=>goToHomeNext(navigate, 90 )}>4</p>
        <p onClick={()=>goToHomeNext(navigate, 120 )}>5</p>
        <p onClick={()=>goToHomeNext(navigate, 150 )}>6</p>
        <p onClick={()=>goToHomeNext(navigate, 180 )}>7</p>
        <p onClick={()=>goToHomeNext(navigate, +params.number + +30 )}><MdArrowForwardIos/></p>
      </Pagination>
      <>
        <Cards />
      </>
    </ContainerHome>
  )
}

export default Home



