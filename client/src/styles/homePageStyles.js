import styled from 'styled-components';

export const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
  desktopL: `(min-width: ${sizes.desktop})`
}

export const Flex = styled.div`
  display: flex;
  // background: blue;
  padding: 70px 80px 70px 80px;
  margin: 0 50px 0 50px;
  justify-content: space-between;
  @media (max-width: 1199px) {
    flex-direction: column;
    align-items: center;
    padding: 30px 20px 30px 20px;
  }

  `;
  
  export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 60px;
    font-family: 'Montserrat', sans-serif;
    color: #668DB1;
    padding-bottom: 5px;
    @media (max-width: 1399px) {
      font-size: 55px;
    }
    @media (max-width: 1199px) {
      margin-top: 20px;
      font-size: 45px;
    }
    @media (max-width: 767px) {
      margin-top: 30px;
      font-size: 40px;
    }
    @media (max-width: 530px) {
      font-size: 35px;
    }
  }
  p {
    color: #828282;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    @media (max-width: 767px) {
      font-size: 15px;
    }
    @media (max-width: 530px) {
      font-size: 12px;
    }
  }
  @media (max-width: 1199px) {
  padding-bottom: 18px;
  }
`;

export const CamImg = styled.div`
  display: flex;
  // background: red;
  width: 350px;
  height: 350px;
  @media (max-width: 530px) {
    justify-content: center;
    align-items: center;
  }
  img {
    width: 350px;
    height: 350px;
    border-radius: 5px;
    border: 1px solid #606060;
    @media (max-width: 530px) {
      width: 310px;
      height: 310px;
    }
  } :hover {
  opacity: 80%;
  transition: 0.5s ease;
  }
`;
export const LogoFlex = styled.div`
 display: flex;
//  background: blue;
 justify-content: center;
//  background: orange;
 margin: 0 50px 0 50px;
`;
