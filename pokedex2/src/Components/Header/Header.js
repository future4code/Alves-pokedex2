import React, { useState } from 'react'
import Logo from '../../Assets/logo.png'
import { useNavigate } from "react-router-dom"
import { goToPokedex, goToHome } from '../../Router/Coordinator'

const Header = () => {
  const navigate = useNavigate()
  const [screen, setScreen] = useState("/")

  const teste = window.location.href
  console.log("aqui", teste)
 
 const buttonHeader =() =>{
  if(window.location.pathname === `/`) {
    return (<button onClick={() => goToPokedex(navigate)}>Pokedex</button>)
  } else if (window.location.pathname === `/Pokedex`) {
    return(<button onClick={() => goToHome(navigate)}>Home</button>)
  } else {
    return (
      <div>
      <button onClick={() => goToHome(navigate)}>Home</button>
      <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
      <button>Excluir Pokemon</button>
    </div>
  )
 }
 }
  return (
    <div>
      <img src={Logo} alt="Logo Pokedex" />
      {buttonHeader()}
    </div>
  )
}

export default Header