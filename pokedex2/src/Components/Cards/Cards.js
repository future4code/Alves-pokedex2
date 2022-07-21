import React,{useContext, useEffect} from 'react'
import { useNavigate } from 'react-router'
import { goToDetailsPoke } from '../../Router/Coordinator'
import { ContainerCard, Id, Name, Type, TextType, Icon, TextDetails, Button , ContainerImg} from './CardsStyled'
import poisonIcon from "../../Assets/poison-icon.png"
import { GlobalContext } from '../Global/GlobalContext'
import DefineTypes from '../Types/Types'

const Cards = () => {
const navigate = useNavigate()
const {pokedex,setPokedex, pokemonListDetails, setPokemonListDetails} = useContext(GlobalContext)

/*  const addToPokedex = (newPokemon) => {
 const novoArray = [...pokemonListDetails]
  const indicePokemon = novoArray.findIndex((pokemon) => pokemon.id===newPokemon.id)
  novoArray.splice(indicePokemon, 1)
  setPokemonListDetails(novoArray)
  setPokedex([...pokedex, newPokemon])

 } */

const addToPokedex = (newPokemon) => {
  setPokemonListDetails(pokemonListDetails.filter(pokemon => pokemon.name !== newPokemon.name))
  setPokedex([...pokedex,newPokemon])
/*   localStorage.setItem('id', id)
  console.log(id) */
}

/* let localPokedex = JSON.parse(localStorage.getItem('pokedex'))

useEffect(() => {
  if(pokedex) {

      const newPokes = pokemonListDetails.filter( x => { 
          return JSON.stringify(pokedex).indexOf(JSON.stringify(x)) < 0
      })
      setPokemonListDetails(newPokes)
  }
}, [pokemonListDetails]) */

/* useEffect(() => {
  const teste = JSON.parse(localStorage.getItem('pokemonListDetails'));
  if (teste) {
    setPokemonListDetails(teste);   
  }     
}, []);

useEffect(() => {
  localStorage.setItem('pokemonListDetails', JSON.stringify(pokemonListDetails));
}, [pokemonListDetails]); */


/* .filter((pokemon)=>{
  const id = localStorage.getItem("id")
  console.log(`----`)

  console.log(id)
  console.log(pokemon.id)
  console.log(`----`)
  if (id === `${pokemon.id}`) {
   return false
  } else {
    return true
   }
 }) */

// .filter((pokemon)=>{
      
// }) Filtrar antes do map

//console.log(pokemon.id)
/*   */
// console.log(localStorage)
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
            {pokemon.types && pokemon.types.map((type) => {
              let pokemonType = type.type.name
              return (
                <DefineTypes pokemonType = {pokemonType} />
              )
            })}
           {/*  <Icon src={poisonIcon} width={20} height={20} />
            <TextType >{pokemon.types[0].type.name}</TextType> */}
          </Type>
          <ContainerImg>
            <img width='150rem' src={pokemon["sprites"]["other"]["official-artwork"]["front_default"]}/>
          </ContainerImg>
          <TextDetails>
            <button onClick={()=>{goToDetailsPoke(navigate,pokemon.name)}}>Detalhes</button>
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


