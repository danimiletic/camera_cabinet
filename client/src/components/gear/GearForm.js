import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Button, FormFont, FormContainer } from '../../styles/gearStyles';

const GearForm = ({kitId, id, setAdd, name, desc, price,/*model, condition, */make, image, /*serial,*/ setEdit, updateGear, addGear, bought /*category*/ }) => {
  
  const navigate = useNavigate();

  const [gear, setGear] = useState({ name: '', desc: '', price: 0, /*model: '',
condition: '',*/ make: '', image: '', /*serial: '',*/ bought: '', /*category: ''*/})


  useEffect( () => {
    if (id) {
    setGear({ name, desc, price, /*model, condition, */make, image, /*serial,*/ bought /*category*/})
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
    setGear({ name: '', desc: '', price: 0, /*model: '',
condition: '',*/ make: '', image: '', /*serial: '', */bought: '' /*category: ''*/})
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
              {/* <Form.Group className="mb-3" >
                <Form.Label>Model: </Form.Label>
                <Form.Control 
                  type="text"
                  name="model"
                  value={gear.model}
                  onChange={(e) => setGear({ ...gear, model: e.target.value })} 
                />
              </Form.Group> */}
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
              {/* <Form.Group className="mb-3">
                <Form.Label>Condition: </Form.Label>
                <Form.Control 
                  type="text"
                  name="condition"
                  value={gear.condition}
                  onChange={(e) => setGear({ ...gear, condition: e.target.value })} 
                />
              </Form.Group> */}
              {/* <Form.Group className="mb-3">
                <Form.Label>Serial: </Form.Label>
                <Form.Control 
                  type="text"
                  name="serial"
                  value={gear.serial}
                  onChange={(e) => setGear({ ...gear, serial: e.target.value })} 
                />
              </Form.Group> */}
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
      {/* <form onSubmit={handleSubmit}>
      <label>Image of Gear:</label>
        <input 
          type="text"
          name='image' 
          value={gear.image}
          onChange={(e) => setGear({...gear, image: e.target.value})}
          required
          placeholder="Image"
          />
        <label>Manufacturer:</label>
        <input 
          type="text"
          name='make' 
          value={gear.make}
          onChange={(e) => setGear({...gear, make: e.target.value})}
          required
          placeholder="Make"
        />
       <label>Model No.:</label>
        <input 
          type="text"
          name='Model' 
          value={gear.model}
          onChange={(e) => setGear({...gear, model: e.target.value})}
          required
          placeholder="Model"
        />
        <label>Nickname:</label>
        <input 
          type="text"
          name='name' 
          value={gear.name}
          onChange={(e) => setGear({...gear, name: e.target.value})}
          placeholder="Name"
        />
        <h1>Purchase Information</h1>
        <label>Price Paid:</label>
        <input 
        type="text"
          name='price'
          value={gear.price}
          onChange={(e) => setGear({...gear, price: e.target.value})}
          placeholder="Price"
        />
        <label>Used:</label>
        <input 
        type="text"
          name='condition' 
          value={gear.condition}
          onChange={(e) => setGear({...gear, condition: e.target.value})}
          placeholder="Condition"
        />
       <label>Date of Purchase:</label>
        <input 
          type="date"
          name='bought' 
          value={gear.bought}
          onChange={(e) => setGear({...gear, bought: e.target.value})}
          placeholder="Bought"
        />
       <label>Serial Number:</label>
        <input 
          type="text"
          name='serial' 
          value={gear.serial}
          onChange={(e) => setGear({...gear, serial: e.target.value})}
          placeholder="Serial"
        />
        <label>Notes:</label>
        <input 
          type="text"
          name='desc'
          value={gear.desc}
          onChange={(e) => setGear({...gear, desc: e.target.value})}
          placeholder="Description"
        /> */}
        {/* <Button type='submit'>Submit</Button>
      </form> */}
    </>
  )
}

export default GearForm;