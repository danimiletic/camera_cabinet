import { useEffect, useState } from 'react';
import { GearConsumer } from '../../providers/GearProvider';
import GearList from './GearList';
import GearForm from './GearForm';
import { useParams } from 'react-router-dom';
import { Button, Header1, ButtonContainer, FormFont } from '../../styles/gearStyles';
import { Modal } from 'react-bootstrap';

const Gears = ({ gears, getAllGears, addGear, kitId }) => {
  const [adding, setAdd] = useState(false)

  const params = useParams()

	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

  useEffect( () => {
    getAllGears(params.kitId)
  }, [])

  return (
    <>
			<Header1 style={{ 
				color: "white",
				}}>
				Camera Parts
			</Header1>

			<Modal show={show} onHide={handleClose} animation={false}>
				<Modal.Header closeButton>
					<FormFont>
						<Modal.Title>Gear Information</Modal.Title>
					</FormFont>
					</Modal.Header>
					<GearForm 
						addGear={addGear}
						kitId={params.kitId}
						setAdd={setAdd}
					 />
			</Modal>

			<GearList gears={gears} kitId={params.kitId} />

			<ButtonContainer>
				<Button onClick={(handleShow)}>Add Gear</Button>
			</ButtonContainer>
			{/* { adding ?
					<>
						<GearForm 
							addGear={addGear} 
							kitId={params.kitId} 
							setAdd={setAdd}
						/>
						<ButtonContainer>
							<Button onClick={() => setAdd(false)}>Cancel</Button>  
						</ButtonContainer>  
					</>
						:
						<ButtonContainer>
							<Button onClick={() => setAdd(true)}>Add Gear</Button>
						</ButtonContainer>
			} */}

      </>
    )
}

const ConnectedGears = (props) => (
  <GearConsumer>
    { value => <Gears {...props} {...value} />}
  </GearConsumer>
)

export default ConnectedGears;