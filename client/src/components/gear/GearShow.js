import { GearConsumer } from '../../providers/GearProvider';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Image, Modal } from 'react-bootstrap';
import GearForm from './GearForm';
import { Header1, Header2 } from '../../styles/kitStyles';
import { Button, ButtonContainer, MainContainer, ContentContainer, ImageContainer } from '../../styles/gearStyles';
import Documents from '../document/Documents';

const GearShow = ({ updateGear, deleteGear }) => {
    const params = useParams()
    const [gear, setGear] = useState({ name: '', desc:'', price: 0,/* model:'', condition:'', */make:'', image: '',/* serial:'', category: '',*/ bought: '', /*quantity: ''*/})
    const [editing, setEdit] = useState(false)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() =>{
        axios.get(`/api/kits/${params.kitId}/gears/${params.gearId}`)
    .then( res => setGear(res.data))
    .catch( err => console.log(err))
    }, [])

    const { name, desc, price, /*model, condition, */make, image, /*serial, category,*/ bought,/* quantity,*/ id} = gear
    return (

      <>
        <MainContainer>
          <ContentContainer>
            <Header1>{name}</Header1>
            <ImageContainer>
              <Image src={image} style={{ width: '400px', borderRadius: '5px'}} />
            </ImageContainer>
            <Header2>Desc: {desc}</Header2>
            <Header2>price: {price}</Header2>
            <Header2>make: {make}</Header2>
            <Header2>bought: {bought}</Header2>
            <ButtonContainer>
              <Button onClick={() => handleShow(true)}>
                Edit
              </Button>
              &nbsp;
              <Button onClick={() => deleteGear(params.kitId, params.gearId)}>
                Delete
              </Button>
            </ButtonContainer>
            
            {/* <Documents gearId={params.gearId} /> */}
          </ContentContainer>
        </MainContainer>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Gear Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <GearForm
              {...gear}
              kitId={params.kitId}
              id={params.gearId}
              updateGear={updateGear}
              setEdit={setEdit}
            />
          </Modal.Body>
        </Modal>
      </>
    )
	}


const ConnectedGearShow = (props) => (
    <GearConsumer>
        { value => <GearShow {...props} {...value} />}
    </GearConsumer>
)

export default ConnectedGearShow;