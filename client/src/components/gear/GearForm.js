import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Button, FormFont, FormContainer } from '../../styles/gearStyles';

const GearForm = ({kitId, id, setAdd, name, desc, price, make, image, setEdit, updateGear, addGear, bought }) => {
  
  const navigate = useNavigate();

  const [gear, setGear] = useState({ name: '', desc: '', price: 0, make: '', image: '', bought: '' })


  useEffect( () => {
    if (id) {
    setGear({ name, desc, price, make, image, bought })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
    updateGear(kitId, id, gear)
    setEdit(false)
  } else {
    addGear(kitId, gear)
    setAdd(false)
  }
    setGear({ name: '', desc: '', price: 0, make: '', image: '', bought: '' })
  }

 
  return (
    <>
          <FormContainer>
          <FormFont>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" >
                <Form.Label>Name: </Form.Label>
                <Form.Control 
                  type="text"
                  name="name"
                  value={gear.name}
                  onChange={(e) => setGear({ ...gear, name: e.target.value })} 
                />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Make: </Form.Label>
                <Form.Control 
                  type="text"
                  name="make"
                  value={gear.make}
                  onChange={(e) => setGear({ ...gear, make: e.target.value })} 
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description: </Form.Label>
                <Form.Control 
                  type="text"
                  name="desc"
                  value={gear.desc}
                  onChange={(e) => setGear({ ...gear, desc: e.target.value })} 
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Image: </Form.Label>
                <Form.Control 
                  type="text"
                  name="image"
                  value={gear.image}
                  onChange={(e) => setGear({ ...gear, image: e.target.value })} 
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price: </Form.Label>
                <Form.Control 
                  type="number"
                  name="price"
                  value={gear.price}
                  onChange={(e) => setGear({ ...gear, price: e.target.value })} 
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Bought: </Form.Label>
                <Form.Control 
                  type="date"
                  name="bought"
                  value={gear.bought}
                  onChange={(e) => setGear({ ...gear, bought: e.target.value })} 
                />
              </Form.Group>
              <Button type="submit">
                Submit
              </Button>
            </Form>
          </FormFont>
      </FormContainer>
    </>
  )
}

export default GearForm;