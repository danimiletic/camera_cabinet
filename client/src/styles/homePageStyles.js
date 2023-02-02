import { Row } from 'react-bootstrap';
import styled from 'styled-components';

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
export const Img = styled.img`
  border: 1px solid #606060;
  :hover {
    opacity: 70%;
    transition: 0.5s ease;
  }
`