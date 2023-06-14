import {Image, Row, Col } from 'react-bootstrap';
import { Header1, Header2 , Grid2,  Bgcolor, Image1, Middle, Text, TopMargin, Flex, Img, MainContainer, ImgContainer, Container } from '../../styles/aboutStyles.js';
import React from 'react';


const About = ({}) => (
  <>
      <Flex>
        <Header1>THE TEAM</Header1>
        <Container>
          <ImgContainer>
            {/* <Link to=""> */}
              <Img src='/aboutimages/Danim.jpg'></Img>
                <Header2>Dani Miletic</Header2>
            {/* <Header2 class='text-left'>I'm very passionate about design and problem solving, so diving into this project alongside a great team has been a real joy!</Header2> */}
            {/* </Link> */}
          </ImgContainer>

          <ImgContainer>
          <Img src='/aboutimages/Dannyp.png'></Img>
            <Header2>Danny Putnam</Header2>
            {/* <Header2 class='text-left'>This was my first collab project! It was a fun project with really great people!</Header2> */}
          </ImgContainer>

          <ImgContainer>
            <Img src='/aboutimages/DanielWilliams.jpg' ></Img>
              <Header2>Daniel Williams</Header2>
              {/* <Header2 class='text-left'>I loved working on this project, and I look forward to more coding.</Header2> */}
          </ImgContainer>

          <ImgContainer>
            <Img src='/aboutimages/hailey.jpeg'></Img>
              <Header2>Hailey Thompson</Header2>
              {/* <Header2 class='text-left'>Hailey enjoys the outdoors. When she is not coding or working as a Product Manager, she likes to go fishing, camping, and hiking.  
                Some of her favorite places are Redfish lake in Idaho and Starvation State Park in Duchesne, Ut</Header2> */}
          </ImgContainer>

          <ImgContainer>
            <Img src='/aboutimages/img_7748.jpg'></Img>
              <Header2>Madeleine Whitley</Header2>
              {/* <Header2 class='text-left'>I was born and raised in Columbus, OH and recently moved to Salt Lake City, UT in August of 2020.
                My professional background is in special education, particularly working with students at-risk. Recently I have switched gears and am now working in the outdoor industry, as well as studying coding!
                I am a registered yoga teacher (200 hour vinyasa and 100 hour trauma sensitive) and have taught both studio classes and yoga therapy throughout the years. I have done a lot of traveling and have been fortunate enough to participate in many volunteer opportunities both overseas and within the United States.
                I really enjoy learning new things, giving back to others, and challenging myself!</Header2> */}
          </ImgContainer>
        </Container>
      </Flex>
  </>
)

export default About;