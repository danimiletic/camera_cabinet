import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import KitForm from './KitForm';
import { KitConsumer } from '../../providers/KitProvider';
import Gears from '../gear/Gears';
import { Header1, Header2, KitViewContainer, DeleteButton, ButtonContainer, EditButton, CancelButton, Button, Img } from '../../styles/kitStyles';



const KitShow = ({ updateKit, deleteKit }) => {


  const params = useParams()
  const [kit, setKit] = useState ({ name: '', description: '', image: '', item: ''})
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/kits/${params.kitId}`)
      .then( res => setKit(res.data))
      .catch( err => console.log(err))
  }, [])


const { name, description, image, item, id } = kit 
return (

  <>
    { editing ? 
      <>
        <KitForm 
          {...kit}
          updateKit={updateKit} 
        />
        <Button 
          variant="link" 
          onClick={() => 
          setEdit(false)}>
        Cancel
        </Button>
        <br />
      </>
      :
      <>
        {/* <KitFlex>
          <KitOutline> */}
          <KitViewContainer>
            <Img src={image} style={{ width: "400px", borderRadius: '5px'}}/>
            <Header1>{name}</Header1>
            <Header2>{description}</Header2>
          </KitViewContainer>
          <ButtonContainer>
            <Button 
              variant="warning" 
              onClick={() => setEdit(true)}>
              Edit
            </Button>
            &nbsp;
            <Button 
              variant="danger"
              onClick={() => deleteKit(id)}>
              Delete
            </Button>
          </ButtonContainer>
          {/* </KitOutline>
        </KitFlex> */}
        {/* <ShowPara>
          <Image src={image} style={{ width: "400px"}}/>
          <Header1>{name}</Header1>
          <Header3>Description: {description}</Header3>
          <Header3>Item: {item} </Header3> 
        </ShowPara> */}
      </>
      }
      <Gears kitId={id} />
    </>
  )
}

const ConnectedKitShow = (props) => (
  <KitConsumer>
    { value => <KitShow {...props} {...value} /> }
  </KitConsumer>
)

export default ConnectedKitShow;