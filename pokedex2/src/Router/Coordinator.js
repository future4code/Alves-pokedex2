export const goToHome = (navigate) =>{
    navigate("/")
}
export const goToPokedex = (navigate)=>{
    navigate("/Pokedex")
}

export const goToDetailsPoke = (navigate,name) => {
    navigate(`/DetailsPoke/${name}`)
}

export const goBack = (navigate) =>{
    navigate(-1)
}

export const goToPokedexDetails = (navigate, name) => {
    navigate(`/Pokedex/DetailsPoke/${name}`)
}


export const goToHomeBack = (navigate, number) => {
    navigate(`/${number}`)
    if (+number < 0) {
      navigate(`/${0}`)
    } else if (window.location.pathname === "/NaN") {
      navigate(`/0`)
    }
  }

export const goToHomeNext = (navigate, number) => {
    navigate(`/${number}`)
    if(+number < 0) {
        navigate(`/${0}`)
    } else if (window.location.pathname === "/NaN") {
        navigate(`/30`)
      }
}
