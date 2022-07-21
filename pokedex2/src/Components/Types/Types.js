import React from 'react'
import Bug from '../../Assets/bug.png'
import Dark from '../../Assets/dark.png'
import Dragon from '../../Assets/dragon.png'
import Eletric from '../../Assets/eletric.png'
import Fairy from '../../Assets/fairy.png'
import Fighting from '../../Assets/fighting.png'
import Fire from '../../Assets/fire.png'
import Flying from '../../Assets/flying.png'
import Ghost from '../../Assets/ghost.png'
import Grass from '../../Assets/grass.png'
import Ground from '../../Assets/ground.png'
import Ice from '../../Assets/ice.png'
import Normal from '../../Assets/normal.png'
import Psychic from '../../Assets/psychic.png'
import Poison from '../../Assets/poison.png'
import Rock from '../../Assets/rock.png'
import Steel from '../../Assets/steel.png'
import Water from '../../Assets/water.png'

import { Icon } from '../Cards/CardsStyled'
const DefineTypes = ({pokemonType}) => {

    if(pokemonType === "poison") {
        return(
            <>
                <Icon src={Poison} />
            </>
        )
    }if(pokemonType === "bug") {
        return(
            <>
                <Icon src={Bug} />
            </>
        )
    }if(pokemonType === "dark") {
        return(
            <>
                <Icon src={Dark} />
            </>
        )
    }if(pokemonType === "dragon") {
        return(
            <>
                <Icon src={Dragon} />
            </>
        )
    }if(pokemonType === "eletric") {
        return(
            <>
                <Icon src={Eletric} />
            </>
        )
    }if(pokemonType === "fairy") {
        return(
            <>
                <Icon src={Fairy} />
            </>
        )
    }if(pokemonType === "fighting") {
        return(
            <>
                <Icon src={Fighting} />
            </>
        )
    }if(pokemonType === "fire") {
        return(
            <>
                <Icon src={Fire} />
            </>
        )
    }if(pokemonType === "flying") {
            return(
                <>
                    <Icon src={Flying} />
                </>
        )
    }if(pokemonType === "ghost") {
        return(
            <>
                <Icon src={Ghost} />
            </>
        )
    }if(pokemonType === "grass") {
        return(
            <>
                <Icon src={Grass} />
            </>
        )
    }if(pokemonType === "ground") {
        return(
            <>
                <Icon src={Ground} />
            </>
        )
    }if(pokemonType === "ice") {
        return(
            <>
                <Icon src={Ice} />
            </>
        )
    }if(pokemonType === "normal") {
        return(
            <>
                <Icon src={Normal} />
            </>
        )
    }if(pokemonType === "psychic") {
        return(
            <>
                <Icon src={Psychic} />
            </>
        )
    }if(pokemonType === "rock") {
        return(
            <>
                <Icon src={Rock} />
            </>
        )
    }if(pokemonType === "steel") {
        return(
            <>
                <Icon src={Steel} />
            </>
        )
    }if(pokemonType === "water") {
        return(
            <>
                <Icon src={Water} />
            </>
        )
    }
  return (
    <>{DefineTypes}</>
  )
}

export default DefineTypes