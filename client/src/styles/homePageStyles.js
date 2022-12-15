import styled from 'styled-components';

export const Background = styled.div`
  background: #292929;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: absolute;
  left: 0%;
`

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

export const ContentContainer = styled.div`
  position: absolute;
  left: 810px;
  top: 100px;
`
export const ContentContainer2 = styled.div`
  position: absolute;
  left: 650px;
  top: 560px;
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