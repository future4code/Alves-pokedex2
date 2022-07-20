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