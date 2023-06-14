import { CamFlex, LogoFlex, Flex, Hflex, Pflex, TextContainer, Img } from '../../styles/homePageStyles';

const Home = ({}) => (
  <>
    <Flex>
      <TextContainer>
        <Hflex> Camera Cabinet </Hflex>
        <Pflex> Make sure you know what gear you have so <br /> you don't forget the essentials at your next <br />shoot. Sign up today, it's free! </Pflex>
      </TextContainer>
      <CamFlex>
        <Img src='/assets/images/camcab.jpeg' alt="logo" style={{width:'350px', height:'350px', borderRadius:'5px'}}/>
      </CamFlex>
    </Flex>

    <LogoFlex>
      <img src='/assets/images/1.png' alt="logo" width='150px'/>
    </LogoFlex>
  </>
)

export default Home;