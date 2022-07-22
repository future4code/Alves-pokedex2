import styled from 'styled-components'

export const ContainerHome = styled.div`
background-color: #5E5E5E;
width: 100vw;
display: flex;
flex-direction: column;
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
@media(max-width: 800px) {
    h1{
margin-top: 3rem;
margin-left: 0.7rem;
font-size: 30px;

}
}
`