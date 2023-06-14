import { Row, Col, Card, Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button, Flex, Para1 } from '../../styles/gearStyles';
const GearList = ({ gears, kitId }) => {
    return(
        <>
            { gears.map( g =>
                <Link to={`/${kitId}/gears/${g.id}`} style={{ textDecoration: 'none'}}>
                    <Para1>{g.name}</Para1>
                </Link>
            )}
     </>
    )
}

export default GearList;