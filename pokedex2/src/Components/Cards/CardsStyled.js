import styled from "styled-components";

export const ContainerCard = styled.div`
width: 25rem;
height: 13.125rem;
background: #729F92;
border-radius:0.75rem;
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
background: #AD61AE;
border: 1px dashed rgba(255, 255, 255, 0.47);
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
padding-top: 0.313rem;
padding-left:0.5rem;
padding-bottom: 0.375rem;
`

export const TextDetails = styled.div`
position: absolute;
width: 4.625rem;
height: 1.5rem;
padding-top:10.375rem ;
padding-left:1.438rem;
padding-bottom: 1.25rem ;
padding-right: 21.438rem;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 1rem;
line-height:1.5rem;
text-decoration-line: underline;
color: #FFFFFF;
flex: none;
order: 0;
flex-grow: 0;
`

export const Button = styled.button`
position: absolute;
width: 9.125rem;
height: 2.375rem;
background: #FFFFFF;
border-radius: 0.5rem;
border: none;
margin-top: 9.938rem ;
margin-left: 15rem ;
margin-bottom: 0.813rem ;
margin-right: 1.375rem;
`

export const ContainerImg = styled.div`
position: absolute;
width: 100px;
height: 100px;
border: black 1px solid;
margin-bottom: 70x;
margin-left: 15rem ;
`