import axios from "axios";
import React, { useState, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";


export default function GlobalState(props) {
    const [pokedex, setPokedex] = useState([])
    const [pokemonListName, setPokemonListName] = useState([])
    const [pokemonListDetails, setPokemonListDetails] = useState([])

    const getPokemonByQuantity = () =>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
        .then((res)=>{
            setPokemonListName(res.data.results)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const getPokemonDetail = () =>{
        const list = []
        pokemonListName.forEach((pokemon)=>{
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            .then((res)=>{
                list.push(res.data)
                if (list.length===20) {
                    setPokemonListDetails(list)
                }
            })
            .catch((err)=>{
                console.log(err)
            })

        })
    }

     useEffect(()=>{
         const testeNovo = localStorage.getItem("pokedex")
         const novaPoke = JSON.parse(testeNovo)
         novaPoke && setPokedex(novaPoke)
  },[])
    
  
    const Provider = GlobalContext.Provider

    const values = {
        pokedex,
        pokemonListName,
        pokemonListDetails,
        setPokedex,
        setPokemonListName,
        setPokemonListDetails,
        getPokemonByQuantity,
        getPokemonDetail,
    }

    return (
        <Provider value={values}>
            {props.children}
        </Provider>
    )
}
