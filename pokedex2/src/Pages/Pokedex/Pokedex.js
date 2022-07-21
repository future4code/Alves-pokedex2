import React, { useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { GlobalContext } from '../../Components/Global/GlobalContext'
import { ContainerCard, Id, Name, Type, TextType, Icon, TextDetails, Button, ContainerImg } from './PokedexStyled'
import { goToDetailsPoke } from '../../Router/Coordinator'
import DefineTypes from '../../Components/Types/Types'
const Pokedex = () => {
  const navigate = useNavigate()
  const { pokedex, setPokedex, pokemonListDetails, setPokemonListDetails } = useContext(GlobalContext)

  const removeFromPokedex = (newPokemon, id) => {

    setPokedex(pokedex.filter(pokemon => newPokemon.name !== pokemon.name))
    setPokemonListDetails([newPokemon, ...pokemonListDetails])
    localStorage.removeItem(`chave ${id}`)

  }


  console.log(pokedex)
  const id = localStorage.getItem(`chave 1`)
  console.log(id)
  const listOfCards = pokedex?.map((pokemon) => {
    if (localStorage.getItem(`chave ${pokemon.id}`)) {
      return (
        <ContainerCard key={pokemon.name} typePokemon={pokemon.types[0].type.name}>
          <Id>
            #{pokemon.id}
          </Id>
          <Name>
            {pokemon.name}
          </Name>
          <Type>
            {pokemon.types && pokemon.types.map((type, index) => {
              let pokemonType = type.type.name
              return (
                <DefineTypes key={index} pokemonType={pokemonType} />
              )
            })}
          </Type>
          <ContainerImg>
            <img width='150rem' src={pokemon["sprites"]["other"]["official-artwork"]["front_default"]} />
          </ContainerImg>
          <TextDetails >
            <h3 onClick={() => { goToDetailsPoke(navigate, pokemon.name) }}>Detalhes</h3>
          </TextDetails>
          <Button onClick={() => { removeFromPokedex(pokemon, pokemon.id) }}>Excluir</Button>
        </ContainerCard>
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