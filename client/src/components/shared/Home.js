import { CamImg, LogoFlex, Flex, Hflex, Pflex, TextContainer, Img } from '../../styles/homePageStyles';

const Home = ({}) => (
  <>
    <Flex>
      <TextContainer>
        <h2> Camera Cabinet </h2>
        <p> Make sure you know what gear you have so <br /> you don't forget the essentials at your next <br />shoot. Sign up today, it's free! </p>
      </TextContainer>
      <CamImg>
        <img src='/assets/images/camcab.jpeg' alt="logo"/>
      </CamImg>
    </Flex>

    <LogoFlex>
      <img src='/assets/images/1.png' alt="logo" width='150px'/>
    </LogoFlex>
  </>
)

export default Home;