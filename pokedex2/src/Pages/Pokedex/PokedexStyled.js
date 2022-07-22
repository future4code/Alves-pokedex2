import styled from "styled-components";
import PokeBola from '../../Assets/pokebola.svg'

export const BigContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 3rem;
margin-left: 40px;
h1{
color: white;
margin-top: 3.75rem;
margin-left: 2.5rem;
font-size: 48px;
line-height: 72px;
font-weight: 700;
margin-bottom: 53px;
font-family: 'Poppins';
font-style: normal;
}
`

export const ContainerCard = styled.div`
width: 25rem;
height: 13.125rem;
background: ${props => props.typePokemon === "grass" && "#729F92;"};
background: ${props => props.typePokemon === "fire" && "#EAAB7D;"};
background: ${props => props.typePokemon === "water" && "#71C3FF;"};
background: ${props => props.typePokemon === "bug" && "#76A866"};
background: ${props => props.typePokemon === "normal" && "#BF9762;"};
background: ${props => props.typePokemon === "poison" && "#D1A3D0"};
background: ${props => props.typePokemon === "electric" && "#FFC95E"};
background: ${props => props.typePokemon === "ground" && "#B6866F"};
background: ${props => props.typePokemon === "fairy" && "#BD7886"};
background: ${props => props.typePokemon === "fighting" && "#B0385A"};
background: ${props => props.typePokemon === "psychic" && "#E05E65"};
background: ${props => props.typePokemon === "rock" && "#9E8F65"};
background: ${props => props.typePokemon === "ghost" && "#7084CA"};
background: ${props => props.typePokemon === "ice" && "#48A497"};
background: ${props => props.typePokemon === "dragon" && "#004170;"};
background: ${props => props.typePokemon === "steel" && "#B7B9D0"};
background: ${props => props.typePokemon === "dark" && "#55433C"};
background: ${props => props.typePokemon === "flying" && "#A891EC"};
border-radius:0.75rem;
display: flex;
background-image: url(${PokeBola});
background-repeat: no-repeat;
background-size: 13rem;
background-position: right;
`
export const Id = styled.div`
position: absolute;
width: 1.875rem;
height: 1.188rem;
padding-left:1.438rem;
padding-top: 1.563rem;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 1rem;
line-height: 1.188rem;
color: #FFFFFF;
`

export const Name = styled.div`
position: absolute;
width: 9.938rem;
height: 2.438rem;
padding-left: 1.438rem;
padding-top: 2.5rem;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 2rem;
line-height: 2.438rem;
color: #FFFFFF;
`

export const Type = styled.div`
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
`

export const TextType = styled.div`
width: 2.875rem;
height: 1.313rem;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size:0.875rem;
line-height: 1.313rem;
padding-top: 0.313rem;
padding-bottom: 0.375rem;
padding-right: 0.5rem;
color: #FFFFFF;
flex: none;
order: 1;
flex-grow: 0;
`

export const Icon = styled.img`
padding-top: 0.1rem;
padding-left:0.5rem;
padding-bottom: 0.375rem;
width: 5rem;
`

export const TextDetails = styled.div`
position: absolute;
width: 4.625rem;
height: 1.5rem;
padding-top:9rem ;
padding-left:1.438rem;
padding-bottom: 10rem;
padding-right: 21.438rem;
h3{
cursor: pointer;
font-weight: bold;
text-decoration-line: underline;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 1rem;
line-height:1.5rem;
color: #FFFFFF;
}
`

export const Button = styled.button`
position: absolute;
width: 9.125rem;
cursor: pointer;
height: 2.375rem;
background: #FF6262;
border-radius: 0.5rem;
border: none;
color: white;
margin-top: 9.938rem ;
margin-left: 15rem ;
margin-bottom: 0.813rem ;
margin-right: 1.375rem;
`

export const ContainerImg = styled.div`
margin-left: 15rem ;
img{
  position: relative;
  max-width: 12rem;
  right: 1.7rem;
  bottom: 52px;
}
`


    
