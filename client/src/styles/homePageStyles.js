import { Row } from 'react-bootstrap';
import styled from 'styled-components';

// export const Header1 = styled.header`
//   font-size: 60px;
//   position: absolute;
//   color: white;
//   font-family: 'Montserrat', sans-serif;
//   left: 180px;
//   top: 90px;
// `

// export const Para = styled.p`
//   color: white;
//   font-family: 'Montserrat', sans-serif;
//   position: absolute;
//   top: 200px;
//   left: 190px;
//   font-size: 15px;
//   color: #828282;
// `
export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 70px 40px 70px 40px;
  margin: 0 50px 0 50px;
  flex-direction: row;
  justify-content: space-between;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Hflex = styled.div`
  display: flex;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
`

export const Pflex = styled.div`
  display: flex;
  color: #828282;
  font-family: 'Montserrat', sans-serif;
  padding-left: 30px;
`

export const CamFlex = styled.div`
  display: flex;
`
export const LogoFlex = styled.div`
 display: flex;
 justify-content: center;
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