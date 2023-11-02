import { useEffect, useState } from 'react';
import { KitConsumer } from '../../providers/KitProvider';
import { Modal } from 'react-bootstrap';
import KitList from './KitList';
import KitForm from './KitForm';
import { HeaderContainer, Para1, Button, KitListContainer, ModalContainer, FormFont } from '../../styles/kitStyles.js';

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
						<HeaderContainer>
							<h1>
								YOUR KITS
							</h1>
							<p>
								The easy way to remember what you will take to your adventures.
							</p> 
							<Button onClick={handleShow}>
								Add Kit
							</Button>
						</HeaderContainer>

						<Modal show={show} onHide={handleClose} animation={false}>
							<Modal.Header closeButton>
								<FormFont>
									<Modal.Title>Kit Information</Modal.Title>
								</FormFont>
							</Modal.Header>
							<KitForm addKit={addKit} />
						</Modal>								
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