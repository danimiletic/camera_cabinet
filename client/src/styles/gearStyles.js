import styled from 'styled-components';

export const GearContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px 60px 10px;;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #606060;
  border-radius: 5px;
  max-width: 600px;
  margin: 40px 0 40px; 0;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;


export const Button = styled.button`
  background: none;
  border-radius: 3px;
  border: 1px solid #668DB1;
  margin: 2px;
  color: #668DB1;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;

  :hover {
    background: #668DB1;
    color: white;
    transition: 0.5s ease;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 5px 0 10px 0;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px 20px 20px;
  margin: 30px 0 0 0;;
`;

export const Header1 = styled.div`
  color: White;
  font-size: 40px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  padding-bottom: 10px;
`;

export const Header2 = styled.div`
  color: white;
  font-family: 'Roboto', sans-serif;
  padding: 15px 0 20px 0;
  max-width: 400px;
`;

export const TextContainer = styled.div`
  font-family: 'Roboto', sans-serif;
`

export const Para1 = styled.div`
  color: #606060;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  padding: 5px 0 20px 0;
`;

export const FormFont = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: #606060;
`;

export const FormContainer = styled.div`
  max-width: 500px;
  padding: 30px 30px 30px 30px;
`;