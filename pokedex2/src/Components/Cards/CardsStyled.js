import styled from "styled-components";

export const ContainerCard = styled.div`
width: 440px;
height: 210px;
left: 0px;
top: 0px;
background: #729F92;
border-radius: 12px;

`

export const Id = styled.div`
position: absolute;
width: 30px;
height: 19px;
padding-left: 23px;
padding-top: 25px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;

color: #FFFFFF;
border: 1px solid black;
`

export const Name = styled.div`
position: absolute;
width: 159px;
height: 39px;
padding-left: 23px;
padding-top: 40px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;

color: #FFFFFF;
border: 1px solid black;
`

export const Type = styled.div`
position: absolute;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
gap: 17px;

position: absolute;
width: 99px;
height: 31px;
left: 23px;
top: 89px;

background: #AD61AE;
border: 1px dashed rgba(255, 255, 255, 0.47);
border-radius: 8px;

`

export const TextType = styled.div`
width: 46px;
height: 21px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
/* identical to box height */


color: #FFFFFF;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;

`