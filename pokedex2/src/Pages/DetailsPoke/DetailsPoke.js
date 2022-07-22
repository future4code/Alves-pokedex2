import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom'
import { BigContainer, DetailsContainer, Titulo, CardUm, CardDois, CardTres, CardQuatro } from './DetailsStyled'

const DetailsPoke = () => {
  const navigate = useNavigate()
  const params = useParams()

  const [details, setDetails] = useState({})

  const types = details.types

  const getPokemonDetail = () => {

    axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
      .then((res) => {
        // console.log(res.data)
        setDetails(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getPokemonDetail()
  }, [])

  console.log(details)
  return (
    <BigContainer >
      <Titulo>
        <h1>Detalhes</h1>
      </Titulo>
      <DetailsContainer typePokemon={types && types[0].type && types[0].type.name} >
        <CardUm>
          <img src={details?.sprites?.front_default} />
        </CardUm>
        <CardDois>
          <img src={details?.sprites?.back_default} />
        </CardDois>
        <CardTres>
          <h2>Base Stats</h2>
          {details.stats && details.stats.map((stat, index) => {
            return (<div>
              <p key={index}> {stat.stat.name}: {stat.base_stat}  </p>
            </div>
            )
          })}
        </CardTres>
        <CardQuatro>
          <h2>Moves</h2>
          {details.moves && details.moves.map((move, index) => {
            return (<p key={index}> {move.move.name} </p>
            )
          })}
        </CardQuatro>
      </DetailsContainer>
    </BigContainer>
  )
}

export default DetailsPoke