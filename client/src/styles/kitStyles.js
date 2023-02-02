import styled from 'styled-components';

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 20px 20px;
  margin: 30px 0 0 0;;
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
  justify-content: center;;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px 0 0 0;;
`;

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

export const KitListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
`;

export const Font = styled.div`
  font-family: 'Roboto', sans-serif;
  text-align: center;
`;
export const RedFont = styled.div`
  color: #fe2712;
  
`;

export const FormFont = styled.div`
  font-family: 'Roboto', sans-serif;
  color: #606060;
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 10px;
  margin: 15px;
  overflow: auto
`;

export const Img = styled.img`
  border: 1px solid #606060;
  :hover {
    opacity: 70%;
    transition: 0.5s ease;
  }
`

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
  text-align: center;
`;

export const Header4 = styled.div`
  color: white;
`;

export const Para1 = styled.div`
  color: #606060;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  padding: 5px 0 20px 0;
`;

export const KitContainer = styled.div`
  display: grid;
  justify-content: center;
  align-content: center; 
  border: solid white;
  background: blue;
`;

export const FormContainer = styled.div`
  max-width: 500px;
  padding: 30px 30px 30px 30px;
`;

export const ModalContainer = styled.div`
  display: flex;
`