import React, { useState, useContext, useEffect } from 'react'
import Logo from '../../Assets/logo.png'
import { GlobalContext } from '../Global/GlobalContext'
import { useNavigate, useParams } from "react-router-dom"
import { goToPokedex, goToHome } from '../../Router/Coordinator'
import { ContainerHeader, ButtonPokedex, ButtonHome, DivImg } from './HeaderStyled'
import { MdArrowBackIosNew } from 'react-icons/md'

const Header = () => {
  const navigate = useNavigate()

  const buttonHeader = () => {
    if (window.location.pathname === `/`) {
      return (<ButtonPokedex onClick={() => goToPokedex(navigate)}>Pokedéx</ButtonPokedex>)
    } else if (window.location.pathname === `/Pokedex`) {
      return (<ButtonHome onClick={() => goToHome(navigate)}>  <MdArrowBackIosNew />Todos Pokémons</ButtonHome>)
    } else if
      (window.location.pathname.includes("/Pokedex/DetailsPoke")) {
      return (
        <>
          <ButtonHome onClick={() => goToHome(navigate)}> <MdArrowBackIosNew />Todos Pokémons</ButtonHome>
          <ButtonPokedex>Excluir</ButtonPokedex>
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