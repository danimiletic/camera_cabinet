import { useEffect, useState } from 'react';
import { KitConsumer } from '../../providers/KitProvider';
import KitList from './KitList';
import { Container } from 'react-bootstrap';
import KitForm from './KitForm';
import { Header1, Para1, CancelButton, AddButton, Button, KitViewContainer } from '../../styles/kitStyles.js';

const Kits = ({ kits, getAllKits, addKit }) => {
    const [adding, setAdding] = useState(false)

    useEffect( () => {
        getAllKits()
    }, [])

    return (
        <>
					<KitViewContainer>
						<Header1>
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
								}
						<KitList kits={kits} />
					</KitViewContainer>
        </>
    )
}

const ConnectedKit = (props) => (
    <KitConsumer>
        { value => <Kits {...props} {...value} />}
    </KitConsumer>
)

export default ConnectedKit;