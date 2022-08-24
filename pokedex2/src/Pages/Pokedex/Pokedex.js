import React, { useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { GlobalContext } from '../../Components/Global/GlobalContext'
import { ContainerCard, Id, BigContainer, Name, Type, TextType, Icon, TextDetails, Button, ContainerImg } from './PokedexStyled'
import { goToPokedexDetails } from '../../Router/Coordinator'
import DefineTypes from '../../Components/Types/Types'
import { ContainerHome } from '../Home/HomeStyled'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Pokedex = () => {
  const navigate = useNavigate()
  const { pokedex, setPokedex, pokemonListDetails, setPokemonListDetails } = useContext(GlobalContext)

  const removeFromPokedex = (newPokemon, id) => {
    setPokedex(pokedex.filter(pokemon => newPokemon.name !== pokemon.name))
    setPokemonListDetails([newPokemon, ...pokemonListDetails])
    toast('O pokémon foi excluído da pokedéx')
    localStorage.removeItem(`chave ${id}`)
  }

  // console.log(pokedex)
  // const id = localStorage.getItem(`chave 1`)
  // console.log(id)

  const listOfCards = pokedex?.map((pokemon) => {
    
      return (
        <ContainerCard key={pokemon.name} typePokemon={pokemon.types && pokemon.types[0].type && pokemon.types[0].type.name}>
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
            <img width='150rem' src={pokemon.sprites?.other?.["official-artwork"]["front_default"]} />
          </ContainerImg>
          <TextDetails >
            <h3 onClick={() =>  goToPokedexDetails(navigate, pokemon.name) }>Detalhes</h3>
          </TextDetails>
          <Button onClick={() =>  removeFromPokedex(pokemon, pokemon.id) }>Excluir</Button>
        </ContainerCard>
      )
    })

  



  return (
    <ContainerHome>
      <h1>Meus Pokémons</h1>
      <BigContainer>
      {listOfCards}
      </BigContainer>
    </ContainerHome>
  )
}

export default Pokedex