import { Row } from 'react-bootstrap';
import styled from 'styled-components';

// export const Background = styled.div`
//   background: #292929;
//   height: 100vh;
//   width: 100%;
//   overflow: hidden;
//   position: absolute;
//   left: 0%;
// `

export const Header1 = styled.header`
  font-size: 60px;
  position: absolute;
  color: white;
  font-family: 'Montserrat', sans-serif;
  left: 180px;
  top: 90px;
`

export const Para = styled.p`
  color: white;
  font-family: 'Montserrat', sans-serif;
  position: absolute;
  top: 200px;
  left: 190px;
  font-size: 15px;
  color: #828282;
`
export const Flex = styled.div`
  display: flex;
  padding-top: 100px;
  flex-direction: row;
  background: white;
  justify-content: space-evenly;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: blue;
`
export const Hflex = styled.div`
  display: flex;
`

export const Pflex = styled.div`
  display: flex;
`

export const CamFlex = styled.div`
  display: flex;
  padding-left: 50px;
`
export const LogoFlex = styled.div`
 display: flex;
`

// export const ImgContainer = styled.div`
// `


// MESSING WITH GRID 

// export const Grid = styled.div`
//   border: red solid 2px;
// `;

// export const Row = styled.div`
//   display: flex;
// `;

// export const Col = styled.div`
//   flex: ${(props) => props.size};
//   ${(props) => props.collapse && media[props.collapse](`
//     display: none;
//   `)}
//   border: green solid 2px;
//   padding: 5px;
// `;

// const media = {
//   xs: (styles) => `
//     @media only screen and (max-width: 600px) {
//       ${styles}
//     }
//   `,
// }