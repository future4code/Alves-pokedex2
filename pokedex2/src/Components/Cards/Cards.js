import React from 'react'
import { useNavigate } from 'react-router'
import { goToDetailsPoke } from '../../Router/Coordinator'
import { ContainerCard, Id , Name, Type, TextType} from './CardsStyled'
import poisonIcon from "../../Assets/poison-icon.png"

const Cards = () => {
  return (
    <ContainerCard>
      <Id>
        #01
      </Id>
      <Name>
        Bulbasaour
      </Name>
      {/* <Type>
        <img src={poisonIcon}/>
        <TextType>Poison</TextType>
      </Type> */}
    </ContainerCard>
  )
}

export default Cards


