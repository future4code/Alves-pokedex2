import React from 'react'
import { useNavigate } from 'react-router'
import { goToDetailsPoke } from '../../Router/Coordinator'
import { ContainerCard, Id, Name, Type, TextType, Icon, TextDetails, Button } from './CardsStyled'
import poisonIcon from "../../Assets/poison-icon.png"

const Cards = () => {


  const Card = () => {
    return (
      <ContainerCard>
        <Id>
          #01
        </Id>
        <Name>
          Bulbasaour
        </Name>
        <Type>
          <Icon src={poisonIcon} width={20} height={20} />
          <TextType>Poison</TextType>
        </Type>
        <TextDetails>
          Detalhes
        </TextDetails>
        <Button>Capturar!</Button>
      </ContainerCard>
    )
  }


  return (
    <div>
      {Card()}
    </div>
  )
}

export default Cards


