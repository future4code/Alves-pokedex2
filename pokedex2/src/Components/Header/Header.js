import React from 'react'
import Logo from '../../Assets/logo.png'
import { useNavigate } from "react-router-dom"
import { goToPokedex, goToHome } from '../../Router/Coordinator'

const Header = () => {
 const navigate = useNavigate()

  return (
    <div>
     <button onClick={() => goToHome(navigate)}>Voltar</button> 
        <img src={Logo} alt="Logo Pokedex" />
      <button onClick={() => goToPokedex(navigate)}>Pokedex</button> 
    </div>
  )
}

export default Header