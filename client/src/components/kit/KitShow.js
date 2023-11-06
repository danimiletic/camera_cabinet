import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import KitForm from './KitForm';
import { KitConsumer } from '../../providers/KitProvider';
import Gears from '../gear/Gears';
import { Header1, Header2, ImageContainer, ButtonContainer, Button, Img, MainContainer, ContentContainer, FormFont } from '../../styles/kitStyles';
import { GearContainer } from '../../styles/gearStyles';
import { Modal } from 'react-bootstrap';

const KitShow = ({ updateKit, deleteKit }) => {

  const params = useParams()

  const [kit, setKit] = useState ({ name: '', description: '', image: '', item: ''})
  // const [editing, setEdit] = useState(false) might revisit if errors occur 

  const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
  
  useEffect( () => {
    axios.get(`/api/kits/${params.kitId}`)
      .then( res => setKit(res.data))
      .catch( err => console.log(err))
  }, [])


const { name, description, image, id } = kit 
return (

  <>
    <MainContainer>
      <ContentContainer>
        <ImageContainer>
          <Header1>{name}</Header1>
          <Img src={image} style={{ width: "400px", borderRadius: '5px'}}/>
          <Header2>{description}</Header2>
        </ImageContainer>   
        <ButtonContainer>
          <Button 
             onClick={() => handleShow(true)}
             id="editBtn"
             >
             Edit
           </Button>
           &nbsp;
           <Button 
             onClick={() => deleteKit(id)}
             id="deleteBtn"
             >
             Delete
          </Button>
        </ButtonContainer>
        <Modal show={show} onHide={handleClose} animation={false}>
					<Modal.Header closeButton>
						<FormFont>
							<Modal.Title>Kit Information</Modal.Title>
					  </FormFont>
					</Modal.Header>
					<KitForm 
            {...kit}
            updateKit={updateKit}
          />
				</Modal>
        <GearContainer>
          <Gears kitId={id} />
        </GearContainer> 
      </ContentContainer>
    </MainContainer> 
  </>
  )
}

const ConnectedKitShow = (props) => (
  <KitConsumer>
    { value => <KitShow {...props} {...value} /> }
  </KitConsumer>
)

export default ConnectedKitShow;

// { editing ? 
//   <>
//     <KitForm 
//       {...kit}
//       updateKit={updateKit} 
//     />
//     <Button 
//       onClick={() => 
//       setEdit(false)}>
//       Cancel
//     </Button>
//     <br />
//   </>
//   :
//   <>  
//     <MainContainer>
//       <ContentContainer>
//         <ImageContainer>
//           <Header1>{name}</Header1>
//           <Img src={image} style={{ width: "400px", borderRadius: '5px'}}/>
//           <Header2>{description}</Header2>
//         </ImageContainer> 
//         <ButtonContainer>
//           <Button 
//             onClick={() => setEdit(true)}>
//             Edit
//           </Button>
//           &nbsp;
//           <Button 
//             onClick={() => deleteKit(id)}>
//             Delete
//           </Button>
//         </ButtonContainer>
//         <GearContainer>
//           <Gears kitId={id} />
//         </GearContainer> 
//       </ContentContainer>
//     </MainContainer> 
//   </>
//   }



