import styled from 'styled-components'
import PokeBola from "../../Assets/pokebola.svg"

export const BigContainer = styled.section`
background-color: #5e5e5e;
position: relative;
width: 100%;
height: 74rem;

`
export const Titulo = styled.div`
h1{
width: 13.75rem;
height: 4.5rem;
padding-left: 2.5rem;
padding-top: 3.75rem;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 3rem;
line-height: 4.5rem;
color: #FFFFFF;
}
`

export const DetailsContainer = styled.div`
background-color: ${props => props.typePokemon === "grass" && "#729F92;"};
background-color: ${props => props.typePokemon === "fire" && "#EAAB7D;"};
background-color: ${props => props.typePokemon === "water" && "#71C3FF;"};
background-color: ${props => props.typePokemon === "bug" && "#76A866"};
background-color: ${props => props.typePokemon === "normal" && "#BF9762;"};
background-color: ${props => props.typePokemon === "poison" && "#D1A3D0"};
background-color: ${props => props.typePokemon === "electric" && "#FFC95E"};
background-color: ${props => props.typePokemon === "ground" && "#B6866F"};
background-color: ${props => props.typePokemon === "fairy" && "#BD7886"};
background-color: ${props => props.typePokemon === "fighting" && "#B0385A"};
background-color: ${props => props.typePokemon === "psychic" && "#E05E65"};
background-color: ${props => props.typePokemon === "rock" && "#9E8F65"};
background-color: ${props => props.typePokemon === "ghost" && "#7084CA"};
background-color: ${props => props.typePokemon === "ice" && "#48A497"};
background-color: ${props => props.typePokemon === "dragon" && "#004170;"};
background-color: ${props => props.typePokemon === "steel" && "#B7B9D0"};
background-color: ${props => props.typePokemon === "dark" && "#55433C"};
background-color: ${props => props.typePokemon === "flying" && "#A891EC"};
background-image: url(${PokeBola});
background-repeat: no-repeat;
background-size: 50rem;
background-position: right;
margin-left: 1.6rem;
margin-right: 1.6rem;
position: absolute;
width: 79rem;
height: 42rem;
border-radius: 2.368rem;
@media (max-width: 500px) {
        height: 100%;
        width: 22rem;
        margin-left: 0;
        flex-wrap: wrap;
    }
`

export const CardUm = styled.div`
position: absolute;
width: 282px;
height: 282px;
left: 44px;
top: 26px;
background: url(image.png), #FFFFFF;
border: 2px solid #FFFFFF;
border-radius: 8px;
img{
    width: 17rem;
}
@media(max-width: 500px) {
        display: none;
  }
`

export const CardDois = styled.div`
position: absolute;
width: 282px;
height: 282px;
left: 44px;
top: 355px;
background: #FFFFFF;
border: 2px solid #FFFFFF;
border-radius: 8px;
img{
    width: 17rem;
}
@media(max-width: 500px) {
        display: none;
  }
`
export const CardTres = styled.div`
position: absolute;
width: 343px;
height: 613px;
left: 360px;
top: 24px;
background: #FFFFFF;
border-radius: 12px;
h2{
    font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 29px;
margin-left: 18px;
}
p{
    font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
margin-left: 18px;
padding-bottom: 10px;}
@media(max-width: 500px) {
    height: 370px;
    left: 0px;
top: 270px;

}
`
export const CardQuatro = styled.div`
position: absolute;
width: 292px;
height: 453px;
left: 771px;
top: 184px;
background: #FFFFFF;
border-radius: 8px;
overflow-y: auto;
h2{
    font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 29px;
margin-left: 18px;
}
p{
    font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
margin-left: 18px;
padding-bottom: 10px;
}
@media(max-width: 500px) {
    height: 370px;
    left: 0px;
top: 700px;

}
`

export const CardPokemon = styled.div`
    margin-left: 60%;
    @media(max-width: 500px) {
        margin-left: 0;

}
`

export const ContainerImg = styled.div`
margin-left: 18rem ;
img{
  position: relative;
  max-width: 16.87rem;
  right: 1.7rem;
  bottom: 7rem;
  
}
@media(max-width: 500px) {

    img{
        margin-top: 13rem;
  max-width: 7rem;
  right: 2.5rem;
  
}
}

`

export const Name = styled.div`
margin-top: 0.8rem;
position: absolute;
width: 9.938rem;
height: 5rem;
padding-left: 1.438rem;
padding-top: 2.5rem;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 3rem;
line-height: 2.438rem;
color: #FFFFFF;
@media(max-width: 500px) {

display: flex;
flex-direction: column;
}
`
export const Type = styled.div`
padding-top: 1rem;
position: absolute;
display: flex;
flex-direction: row;
align-items: flex-start;
gap: 1.063rem;
width: 6.188rem;
height: 1.938rem;
margin-left: 1.438rem;
margin-top: 5.563rem;
border-radius: 0.5rem;
@media(max-width: 500px) {

display: flex;
flex-direction: column;
}
`