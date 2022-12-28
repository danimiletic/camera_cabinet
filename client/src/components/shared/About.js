import {Image,  Container, Row, Col } from 'react-bootstrap';
import { Header1, Header2 , Grid2,  Bgcolor,Image1, Middle,Text, TopMargin} from '../../styles/aboutStyles.js';
import React from 'react';


const About = ({}) => (
  <>
  
  <TopMargin>
    <Row>
      <Col>
        <Container class="container">
          <Image1>
            <Image className='img-fluid rounded-pill' src='/aboutimages/Danim.jpg'
            alt='landscape' width="500px" />
            <Header1>Dani Miletic</Header1>
            <Header2 class='text-left'>I'm very passionate about design and problem solving, so diving into this project alongside a great team has been a real joy!</Header2>
          </Image1>
        </Container>
      </Col>    
      <Col>
        <Container class="container">
          <Image1>
            <Image className='img-fluid rounded-pill' src='/aboutimages/Dannyp.png' alt='landscape' width="500px" height="200px" />
            <Header1>Danny Putnam</Header1>
            <Header2 class='text-left'>This was my first collab project! It was a fun project with really great people!</Header2>
          </Image1>
        </Container>
      </Col>
    </Row>
  </TopMargin>

    <Row>
      <Col>
        <Container class="container">
          <Image1>
            <Image  className='img-fluid rounded-pill' src='/aboutimages/DanielWilliams.jpg' alt='landscape' width="500px" height="200px"/>
            <Header1>Daniel Williams</Header1>
            <Header2 class='text-left'>I loved working on this project, and I look forward to more coding.</Header2>
          </Image1>
        </Container>
      </Col>
    

      <Col>
        <Container class="container">
          <Image1>
            <Image className='img-fluid rounded-pill' src='/aboutimages/hailey.jpeg' alt='landscape' width="500px" />
            <Header1>Hailey Thompson</Header1>
            <Header2 class='text-left'>Hailey enjoys the outdoors. When she is not coding or working as a Product Manager, she likes to go fishing, camping, and hiking.  
            Some of her favorite places are Redfish lake in Idaho and Starvation State Park in Duchesne, Ut</Header2>
          </Image1>
        </Container>
      </Col>
    </Row>
  
  <Grid2>
    <Row className="justify-content-md-center">
      <Col >
        <Container class="container">
          <Image1>
            <Image className='img-fluid rounded-pill' src='/aboutimages/img_7748.jpg' alt='landscape' width="500px" height="200px" />
            <Header1>Madeleine Whitley</Header1>
            <Header2 class='text-left'>I was born and raised in Columbus, OH and recently moved to Salt Lake City, UT in August of 2020.
            My professional background is in special education, particularly working with students at-risk. Recently I have switched gears and am now working in the outdoor industry, as well as studying coding!
            I am a registered yoga teacher (200 hour vinyasa and 100 hour trauma sensitive) and have taught both studio classes and yoga therapy throughout the years. I have done a lot of traveling and have been fortunate enough to participate in many volunteer opportunities both overseas and within the United States.
            I really enjoy learning new things, giving back to others, and challenging myself!</Header2>
          </Image1>
        </Container>
          </Col>
    </Row>
  </Grid2>
    
     
    

  </>
)

export default About;