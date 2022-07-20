import React,{useContext} from 'react'
import { useNavigate } from 'react-router'
import { goToDetailsPoke } from '../../Router/Coordinator'
import { ContainerCard, Id, Name, Type, TextType, Icon, TextDetails, Button , ContainerImg} from './CardsStyled'
import poisonIcon from "../../Assets/poison-icon.png"
import { GlobalContext } from '../Global/GlobalContext'

const Cards = () => {
const navigate = useNavigate()
const {pokedex,setPokedex, pokemonListDetails, setPokemonListDetails} = useContext(GlobalContext)

// const addToPokedex = (newPokemon) => {
//   const novoArray = [pokemonListDetails]
//   const indicePokemon = novoArray.findIndex((pokemon) => pokemon.id===newPokemon.id)
//   novoArray.splice(indicePokemon, 1)
//   setPokemonListDetails(novoArray)
//   setPokedex([...pokedex, newPokemon])

// }

const addToPokedex = (newPokemon, id) => {
  setPokemonListDetails(pokemonListDetails.filter(pokemon => pokemon.name !== newPokemon.name))
  setPokedex([...pokedex,newPokemon])
  localStorage.setItem('id', id)
}

// .filter((pokemon)=>{
      
// }) Filtrar antes do map


// filter((pokemon)=>{
//   const id = localStorage.getItem("id")
//   if (id === pokemon.id) {
//     return false
//   } else {
//     return true
//   }
// }).

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
          <Button onClick={()=>{addToPokedex(pokemon,pokemon.id)}}>Capturar!</Button>
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


