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
  flex-direction: column;
  top: 200px;
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
  color: white;
`;

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
  border-radius: 3px;
  border: 1px solid #fe2712;
  margin: 2px;
  color: #fe2712;
  font-family: 'Robotot', sans-serif;
  font-size: 15px;

  :hover {
    background: #fe2712;
    color: white;
    transition: 0.5s ease;
  }
`;
