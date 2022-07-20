import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom'
import { BigContainer, DetailsContainer, Titulo, CardUm, CardDois, CardTres, CardQuatro } from './DetailsStyled'

const DetailsPoke = () => {
  const navigate = useNavigate()
  const params = useParams()

  const [details,setDetails] = useState({})

  const getPokemonDetail = () =>{
    
        axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
        .then((res)=>{
          // console.log(res.data)
            setDetails(res.data)
        })
        .catch((err)=>{
            console.log(err)
        }) 
}

useEffect(()=>{
  getPokemonDetail()
},[])


  return (
    <BigContainer>
      <Titulo>
        <h1>DetailsPoke</h1>
      </Titulo>
      <DetailsContainer>
        <CardUm>
        <h3>{details?.name}</h3>

        </CardUm>
        <CardDois>

        </CardDois>
        <CardTres>

        </CardTres>
        <CardQuatro>

        </CardQuatro>
      </DetailsContainer>
    </BigContainer>
  )
}

export default DetailsPoke