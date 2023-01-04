import { useEffect, useState } from 'react';
import { KitConsumer } from '../../providers/KitProvider';
import { Modal } from 'react-bootstrap';
import KitList from './KitList';
import KitForm from './KitForm';
import { Header1, Para1, Button, KitListContainer, ModalContainer, FormFont } from '../../styles/kitStyles.js';

const Kits = ({ kits, getAllKits, addKit }) => {
		
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

  useEffect( () => {
    getAllKits()
  }, [])

    return (
        <>
					<KitListContainer>
						<Header1>
							Your Kits
						</Header1>
						<Para1>
							The easy way to remember what you will take to your adventures.
						</Para1> 
						<Button variant="primary" onClick={handleShow}>
							Add Kit
						</Button>
						<Modal show={show} onHide={handleClose} animation={false}>
							<Modal.Header closeButton>
								<FormFont>
									<Modal.Title>Kit Information</Modal.Title>
								</FormFont>
							</Modal.Header>
							<KitForm addKit={addKit} />
						</Modal>
						{/* <Header1>
							Your Kits
						</Header1>
							<Para1>
									The easy way to remember what you will take to your adventures.
							</Para1> 
								{ adding ?
									<>
										<KitForm addKit={addKit} />
										<br />
										<Button onClick={() => setAdding(false)}>Cancel</Button>    
									</>
										:
									<Button onClick={() => setAdding(true)}>Add Kit</Button>
								} */}
								
						<KitList kits={kits} />
					</KitListContainer>
        </>
    )
}

const ConnectedKit = (props) => (
    <KitConsumer>
        { value => <Kits {...props} {...value} />}
    </KitConsumer>
)

export default ConnectedKit;