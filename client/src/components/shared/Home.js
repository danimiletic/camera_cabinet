import { Header1, CamItem, LogoItem, CamFlex, LogoFlex, Flex, Para, Hflex, Pflex, TextContainer } from '../../styles/homePageStyles';

const Home = ({}) => (
  <>
    {/* <Background> */}
    <Flex>
      <TextContainer>
        <Hflex> Camera Cabinet </Hflex>
        <Pflex> Make sure you know what gear you have so <br /> you don't forget the essentials at your next <br />shoot. Sign up today, it's free! </Pflex>
      </TextContainer>
      {/* <Header1> Camera Cabinet </Header1>
      <Para>Make sure you know what gear you have so <br /> you don't forget the essentials at your next <br />shoot. Sign up today, it's free!</Para> */}
      {/* <ContentContainer> */}
      <CamFlex>
        <img src='/assets/images/camcab.jpeg' alt="logo" width='350px' height='350px'/>
      </CamFlex>
      {/* </ContentContainer> */}
      {/* <ContentContainer2> */}
      {/* </ContentContainer2> */}
    {/* </Background> */}
    </Flex>

    <LogoFlex>
      <img src='/assets/images/1.png' alt="logo" width='150px'/>
    </LogoFlex>

    {/* MESSING WITH GRID  */}

    {/* <h1>Responsive grid</h1>
  <Grid>
    <Row>
      <Col size={1}>
        Loooooooooong column
      </Col>
    </Row>
    <Row>
      <Col size={2}>
        I will expand to fill
      </Col>
      <Col size={1} collapse="xs">
        I will disappear
      </Col>
      <Col size={1}>
        I will expand to fill
      </Col>
    </Row>
  </Grid> */}
  </>
)

export default Home;