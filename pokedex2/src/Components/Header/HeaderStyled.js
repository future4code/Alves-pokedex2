import styled from 'styled-components'

export const ContainerHeader = styled.div`
display: flex;
width: 100vw;
height: 10rem;
align-items: center;
justify-content: center;
background: #FFFFFF;
flex-direction: column;
@media(max-width: 500px) {

  height: 11rem;
  }
`

export const ButtonPokedex = styled.button`
font-family: 'Poppins', sans-serif;
background-color: #33A4F5;
font-style: normal;
font-weight: 700;
color: #FFFFFF;
font-size: 24px;
line-height: 36px;
border-radius: 8px;
border: none;
width: 17.938rem;
height: 4.625rem;
cursor: pointer;
margin-left: 75%;
@media(max-width: 500px) {
  width: 7.6rem;
height: 2.5rem;
margin-top: 5rem;
margin-left: 50%;
  }

`
export const ButtonRemove = styled.button`
font-family: 'Poppins', sans-serif;
background-color: #FF6262;
font-style: normal;
font-weight: 700;
color: #FFFFFF;
font-size: 24px;
line-height: 36px;
border-radius: 8px;
border: none;
width: 17.938rem;
height: 4.625rem;
cursor: pointer;
margin-left: 75%;
@media(max-width: 500px) {
  width: 7.6rem;
height: 2.5rem;
margin-top: 5rem;
margin-left: 50%;
  }

`

export const ButtonHome = styled.button `
color: #1A1A1A;
cursor: pointer;
border: none;
height: 36px;
position: absolute;
height: 36px;
left: 2%;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
text-decoration-line: underline;
color: #1A1A1A;
@media(max-width: 500px) {
  width: 7rem;
height: 2.5rem;
margin-top: 1.4rem;
margin-left: 5%;
font-size: 20px;
  }
`


export const DivImg = styled.div`
display: flex;
position: absolute;
justify-content: center;
width: 307px;
height: 113px;
img {
width: 19.188rem;
height: 7.06rem;
}
@media(max-width: 500px) {
display: flex;
justify-content: center;
top: 1.3rem;
width: 11rem;
    img {
 width: 16rem;
height: 4rem;
}
}
`