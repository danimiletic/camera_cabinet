import { Background, Header1, ContentContainer, ContentContainer2, Para, Grid, Row, Col } from '../../styles/homePageStyles';

const Home = ({}) => (
  <>
    <Background>
      <Header1> Camera Cabinet </Header1>
      <Para>Make sure you know what gear you have so <br /> you don't forget the essentials at your next <br />shoot. Sign up today, it's free!</Para>
      <ContentContainer>
        <img src='/assets/images/camcab.jpeg' alt="logo" width='450px' height='450px'/>
      </ContentContainer>
      <ContentContainer2>
        <img src='/assets/images/1.png' alt="logo" width='150px'/>
      </ContentContainer2>
    </Background>

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