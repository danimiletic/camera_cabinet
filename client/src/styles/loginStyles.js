import styled from 'styled-components';

// export const FormFont = styled.div`
//   font-family: 'Montserrat', sans-serif;
//   color: white;
// `;

export const Font = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: white;
  font-size: 30px;
  text-align: center
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 200px;
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
  color: white;
`;

export const LoginContainer = styled.div`
  padding: 50px;
  border-radius: 5px;
  border: 1px solid white;
`;

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
