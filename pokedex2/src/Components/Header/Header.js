import React, { useState, useContext, useEffect } from 'react'
import Logo from '../../Assets/logo.png'
import { GlobalContext } from '../Global/GlobalContext'
import { useNavigate, useParams } from "react-router-dom"
import { goToPokedex, goToHome } from '../../Router/Coordinator'
import { ContainerHeader, ButtonPokedex, ButtonHome, DivImg , ButtonRemove} from './HeaderStyled'
import { MdArrowBackIosNew } from 'react-icons/md'

const Header = () => {
  const navigate = useNavigate()

  const buttonHeader = () => {
    if ((window.location.pathname === "/") || (window.location.pathname.includes("/1")) || (window.location.pathname.includes("/3")) || (window.location.pathname.includes("/6")) || (window.location.pathname.includes("/9")) || (window.location.pathname.includes("/0"))|| (window.location.pathname.includes("/2"))) {
      return (<ButtonPokedex onClick={() => goToPokedex(navigate)}>Pokedéx</ButtonPokedex>)
    } else if (window.location.pathname === `/Pokedex`) {
      return (<ButtonHome onClick={() => goToHome(navigate)}>  <MdArrowBackIosNew />Todos Pokémons</ButtonHome>)
    } else if
      (window.location.pathname.includes("/Pokedex/DetailsPoke")) {
      return (
        <>
          <ButtonHome onClick={() => goToHome(navigate)}> <MdArrowBackIosNew />Todos Pokémons</ButtonHome>
          <ButtonRemove>Excluir</ButtonRemove>
        </>
      )
    } else {
      return (
        <>
          <ButtonHome onClick={() => goToHome(navigate)}> <MdArrowBackIosNew />Todos Pokémons</ButtonHome>
          <ButtonPokedex>Capturar</ButtonPokedex>
        </>
      )
    }
  }

  return (
    <ContainerHeader>
      <DivImg>
        <img src={Logo} alt="Logo Pokedex" />
      </DivImg>
      {buttonHeader()}
    </ContainerHeader>
  )
}

export default Header