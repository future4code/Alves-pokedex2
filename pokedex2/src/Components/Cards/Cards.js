import React,{useContext} from 'react'
import { useNavigate } from 'react-router'
import { goToDetailsPoke } from '../../Router/Coordinator'
import { ContainerCard, Id, Name, Type, TextType, Icon, TextDetails, Button , ContainerImg} from './CardsStyled'
import poisonIcon from "../../Assets/poison-icon.png"
import { GlobalContext } from '../Global/GlobalContext'

const Cards = () => {
const navigate = useNavigate()
const {pokedex,setPokedex, pokemonListDetails, setPokemonListDetails} = useContext(GlobalContext)

const addToPokedex = (newPokemon) => {

  setPokemonListDetails(pokemonListDetails.filter(pokemon => pokemon.name !== newPokemon.name))
  setPokedex([...pokedex,newPokemon])

}

// .filter((pokemon)=>{
      
// }) Filtrar antes do map

    const listOfCards = pokemonListDetails?.map((pokemon)=>{
      return (
        <ContainerCard key={pokemon.name}>
          <Id>
            #{pokemon.id}
          </Id>
          <Name>
            {pokemon.name}
          </Name>
          <Type>
            <Icon src={poisonIcon} width={20} height={20} />
            <TextType >{pokemon.types[0].type.name}</TextType>
          </Type>
          <ContainerImg>
            <img src={pokemon.sprites.front_default}/>
          </ContainerImg>
          <TextDetails onClick={()=>{goToDetailsPoke(navigate,pokemon.name)}}>
            Detalhes
          </TextDetails>
          <Button onClick={()=>{addToPokedex(pokemon)}}>Capturar!</Button>
        </ContainerCard>
      )
    })
    
  return (
    <div>
      {listOfCards}
    </div>
  )
}

export default Cards


