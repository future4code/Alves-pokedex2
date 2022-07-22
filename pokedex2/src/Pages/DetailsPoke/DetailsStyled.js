import styled from 'styled-components'

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
${props => console.log('props', props)}
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
margin-left: 1.6rem;
margin-right: 1.6rem;
position: absolute;
width: 87rem;
height: 42rem;
border-radius: 2.368rem;

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
`
export const CardTres = styled.div`
position: absolute;
width: 343px;
height: 613px;
left: 360px;
top: 24px;
background: #FFFFFF;
border-radius: 12px;
`
export const CardQuatro = styled.div`
position: absolute;
width: 292px;
height: 453px;
left: 771px;
top: 184px;
background: #FFFFFF;
border-radius: 8px;
overflow-y: auto
`
