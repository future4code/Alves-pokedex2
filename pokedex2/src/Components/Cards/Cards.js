import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { goToDetailsPoke } from '../../Router/Coordinator'
import { ContainerCard, BigContainer, Id, Name, Type, TextType, Icon, TextDetails, Button, ContainerImg } from './CardsStyled'
import { GlobalContext } from '../Global/GlobalContext'
import DefineTypes from '../Types/Types'

const Cards = () => {
  const navigate = useNavigate()
  const { pokedex, setPokedex, pokemonListDetails, setPokemonListDetails } = useContext(GlobalContext)

  const addToPokedex = (newPokemon, id) => {
    setPokemonListDetails(pokemonListDetails.filter(pokemon => pokemon.name !== newPokemon.name))
    const newPokedex = [...pokedex, newPokemon]
    setPokedex(newPokedex)
   localStorage.setItem(`chave ${id}`, id)
   localStorage.setItem("pokedex", JSON.stringify(newPokedex))
  }  

  const listOfCards = pokemonListDetails?.sort(function (a, b) {
    if (a.id > b.id) {
        return 1;
    }
    if (a.id < b.id) {
        return -1;
    }
    return 0;
}).filter((pokemon) => {
    const id = localStorage.getItem(`chave ${pokemon.id}`)
    if (id === `${pokemon.id}`) {
      return false
    } else {
      return true
    }
  }).map((pokemon) => {
    return (
      <ContainerCard key={pokemon.name} typePokemon={pokemon.types[0].type.name}>
        <Id>
          #{pokemon.id}
        </Id>
        <Name>
          {pokemon.name}
        </Name>
        <Type>
          {pokemon.types && pokemon.types.map((type,index) => {
            let pokemonType = type.type.name
            return (
              <DefineTypes key={index} pokemonType={pokemonType} />
            )
          })}
        </Type>
        <ContainerImg>
          <img src={pokemon["sprites"]["other"]["official-artwork"]["front_default"]} />
        </ContainerImg>
        <TextDetails>
          <h3 onClick={() => { goToDetailsPoke(navigate, pokemon.name) }}>Detalhes</h3>
        </TextDetails>
        <Button onClick={() => { addToPokedex(pokemon, pokemon.id) }}>Capturar!</Button>
      </ContainerCard>
    )
  })
  return (
    <BigContainer>
      {listOfCards}
    </BigContainer>
  )
}

export default Cards


