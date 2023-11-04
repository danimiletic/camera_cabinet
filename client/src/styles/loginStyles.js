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
  border: 1px solid #606060;
`;

export const Button = styled.button`
  background: none;
  border-radius: 5px;
  border: 2px solid #668DB1;
  width: 5rem;
  margin: 2px;
  color: #668DB1;
  font-family: 'Robotot', sans-serif;
  font-size: 18px;

  :hover {
    background: #668DB1;
    color: white;
    transition: 0.5s ease;
  }
`;
