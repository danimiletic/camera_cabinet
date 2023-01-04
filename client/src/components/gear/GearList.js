import { Row, Col, Card, Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button, Flex, Para1 } from '../../styles/gearStyles';
const GearList = ({ gears, kitId }) => {
    return(
        <>
        {/* <Flex> */}
            { gears.map( g =>
                <Link to={`/${kitId}/gears/${g.id}`} style={{ textDecoration: 'none'}}>
                    <Para1>{g.name}</Para1>
                </Link>
            )}
        {/* </Flex> */}
          {/* <Container>
            <Row xs={1} md={3}>
              { gears.map( g => 
                  <Col>
                    <Card style={{ width: '10rem', height: '14rem' }}>
                      <Card.Img variant="top" src={g.image} />
                      <Card.Body>
                        <Card.Title>
                          {g.name}
                        </Card.Title>
                        <Card.Text>
                          Description: {g.desc}
                        </Card.Text>
                          <Link to={`/${kitId}/gears/${g.id}`}>
                            <Button type="submit" variant="primary">Show</Button>
                          </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              }
            </Row>
          </Container> */}
     </>
    )
}

export default GearList;