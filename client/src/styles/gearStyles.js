import styled from 'styled-components';

export const GearContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 52px;
`;

export const Flex = styled.div`
  flex-direction: column;
  justify-content: center;
`;
// export const Flex = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: column;
//   justify-content: center;
//   padding: 10px;
//   margin: 15px;

//   background: green;
// `;

export const Button = styled.button`
  background: none;
  border-radius: 3px;
  border: 1px solid #fe2712;
  margin: 2px;
  color: #fe2712;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;

  :hover {
    background: #fe2712;
    color: white;
    transition: 0.5s ease;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 10px;
`;

export const Header1 = styled.div`
  color: White;
  font-size: 40px;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
`;

export const Para1 = styled.div`
  color: #606060;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  padding: 5px 0 20px 0;
`;