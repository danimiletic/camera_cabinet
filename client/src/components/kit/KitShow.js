import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import KitForm from './KitForm';
import { KitConsumer } from '../../providers/KitProvider';
import Gears from '../gear/Gears';
import { Header1, Header2, ImageContainer, ButtonContainer, Button, Img, MainContainer, ContentContainer } from '../../styles/kitStyles';
import { GearContainer } from '../../styles/gearStyles';
import { Carousel } from 'react-bootstrap';

const KitShow = ({ updateKit, deleteKit }) => {

  const params = useParams()

  const [kit, setKit] = useState ({ name: '', description: '', image: '', item: ''})
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/kits/${params.kitId}`)
      .then( res => setKit(res.data))
      .catch( err => console.log(err))
  }, [])


const { name, description, image, id } = kit 
return (

  <>
    { editing ? 
      <>
        <KitForm 
          {...kit}
          updateKit={updateKit} 
        />
        <Button 
          onClick={() => 
          setEdit(false)}>
          Cancel
        </Button>
        <br />
      </>
      :
      <>  

          <ContentContainer>
            <Carousel>
              <Carousel.Item>
                <ImageContainer>
                  <Header1>{name}</Header1>
                  <Img src={image} style={{ width: "350px", borderRadius: '5px'}}/>
                  <Header2>{description}</Header2>
                <ButtonContainer>
                  <Button onClick={() => setEdit(true)}>
                    Edit
                  </Button>
                    &nbsp;
                  <Button onClick={() => deleteKit(id)}>
                    Delete
                  </Button>
                </ButtonContainer>
                </ImageContainer>
              </Carousel.Item>
              <Carousel.Item>
                <GearContainer>
                  <Gears kitId={id} />
                </GearContainer> 
              </Carousel.Item>
            </Carousel>
          </ContentContainer>

        {/* <MainContainer>
          <ContentContainer>
            <KitViewContainer>
              <Header1>{name}</Header1>
              <Img src={image} style={{ width: "400px", borderRadius: '5px'}}/>
              <Header2>{description}</Header2>
            </KitViewContainer> 
            <ButtonContainer>
              <Button 
                onClick={() => setEdit(true)}>
                Edit
              </Button>
              &nbsp;
              <Button 
                onClick={() => deleteKit(id)}>
                Delete
              </Button>
            </ButtonContainer>
            <GearContainer>
              <Gears kitId={id} />
            </GearContainer> 
          </ContentContainer>
        </MainContainer>  */}
      </>
      }
    </>
  )
}

const ConnectedKitShow = (props) => (
  <KitConsumer>
    { value => <KitShow {...props} {...value} /> }
  </KitConsumer>
)

export default ConnectedKitShow;



