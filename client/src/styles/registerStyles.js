import styled from 'styled-components';

export const FormFont = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: white;
`;

export const WhiteFont = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: white;
  font-size: 30px;
  text-align: center;
`;

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 50px;
  // top: 200px;
  font-family: 'Montserrat', sans-serif;
  color: white;
`; 

export const FormContainer = styled.div`
  padding: 50px;
  border-radius: 5px;
  border: solid 1px white;
`

export const RedBackground = styled.div`
  background: #3d3d3d;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: absolute;
  left: 0%;
`

export const Button = styled.button`
  background: none;
  border-radius: 5px;
  border: 2px solid #fe2712;
  width: 5rem;
  margin: 2px;
  color: #fe2712;
  font-family: 'Robotot', sans-serif;
  font-size: 18px;

  :hover {
    background: #fe2712;
    color: white;
    transition: 0.5s ease;
  }
`;
