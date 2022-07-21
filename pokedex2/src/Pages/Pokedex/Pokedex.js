import React, {useContext} from 'react'
import {useNavigate} from "react-router-dom"
import { GlobalContext } from '../../Components/Global/GlobalContext'
import { ContainerCard, Id, Name, Type, TextType, Icon, TextDetails, Button , ContainerImg} from './PokedexStyled'
import poisonIcon from "../../Assets/poison-icon.png"
import { goToDetailsPoke } from '../../Router/Coordinator'

const Pokedex = () => {
  const navigate = useNavigate()
  const {pokedex,setPokedex, pokemonListDetails, setPokemonListDetails} = useContext(GlobalContext)
  
  const removeFromPokedex = (newPokemon) => {
  
    setPokedex(pokedex.filter(pokemon => newPokemon.name !== pokemon.name))
    setPokemonListDetails([newPokemon,...pokemonListDetails])
  
  }
/*  .filter((pokemon)=>{
        const id = localStorage.getItem(`chave ${pokemon.id}`)
        console.log(id)
        console.log(pokemon.id)
        if (id === `${pokemon.id}`) {
         return false
        } else {
          return true
         }
       }) */
  
  console.log(pokedex)
  const id = localStorage.getItem(`chave 1`)
  console.log(id)
      const listOfCards = pokedex?.map((pokemon)=>{
        if (localStorage.getItem(`chave ${pokemon.id}`)) {
          return (
            <div>
              <h1>Pokedex</h1>
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
                <img width='150rem' src={pokemon["sprites"]["other"]["official-artwork"]["front_default"]}/>
              </ContainerImg>
              <TextDetails onClick={()=>{goToDetailsPoke(navigate,pokemon.name)}}>
                Detalhes
              </TextDetails>
              <Button onClick={()=>{removeFromPokedex(pokemon)}}>Excluir</Button>
            </ContainerCard>
            </div>
          )
        } else {
          return (
            <p>Não há pokemons</p>
          )
        }
       
      })
      


  return (
      <div>
        {listOfCards}
      </div>
  )
}

export default Pokedex