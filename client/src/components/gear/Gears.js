import { useEffect, useState } from 'react';
import { GearConsumer } from '../../providers/GearProvider';
import GearList from './GearList';
import GearForm from './GearForm';
import { useParams } from 'react-router-dom';
import { Button, ButtonContainer, Header1, Para1, Flex } from '../../styles/gearStyles';

const Gears = ({ gears, getAllGears, addGear, kitId }) => {
    const [adding, setAdd] = useState(false)

  const params = useParams()

  useEffect( () => {
    getAllGears(params.kitId)
  }, [])

  return (
    <>
			{/* <Flex> */}
				<Header1 style={{ 
					color: "white",
					}}>
					Camera Parts
				</Header1>

				<GearList gears={gears} kitId={params.kitId} />
				{ adding ?
						<>
							<GearForm 
								addGear={addGear} 
								kitId={params.kitId} 
								setAdd={setAdd}
							/>
							<Button onClick={() => setAdd(false)}>Cancel</Button>    
						</>
							:
						<ButtonContainer>
							<Button onClick={() => setAdd(true)}>Add Gear</Button>
						</ButtonContainer>
				}
			{/* </Flex> */}
    </>
    )
}

const ConnectedGears = (props) => (
  <GearConsumer>
    { value => <Gears {...props} {...value} />}
  </GearConsumer>
)

export default ConnectedGears;