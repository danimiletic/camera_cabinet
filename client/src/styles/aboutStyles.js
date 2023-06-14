import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 10px;
  margin: 40px 80px 40px 80px;
  overflow: auto;
`;
export const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  min-height: 0;
`;
export const Img = styled.img`
  border-radius: 5px;
  border: solid 1px #606060;
  width: 280px;
  height: 300px;
`;
export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 5px 10px 5px;
`;
export const Container = styled.div`
  display: flex;
  // margin: 20px 90px 20px 110px;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Header1 = styled.div`
  color: white;
  font-size: 40px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 40px;
  text-align: center;
`;
export const Header2 = styled.div`
  color: white;
  font-size: 40px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;
