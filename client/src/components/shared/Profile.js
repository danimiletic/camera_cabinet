import { useEffect, useState } from 'react';
import { Button, Container, Row, Col, Image, Form } from 'react-bootstrap';
import { AuthConsumer } from '../../providers/AuthProvider';
import ProfileForm from './ProfileForm'
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Profile = ({ user, updateUser }) => {
  // const [editing, setEditing] = useState(false);
  const [formVals, setFormVals] = useState({ fname: '', email: ''})

  useEffect( () => {
    const { fname, email } = user
    setFormVals({ fname, email })
  })

  const profileView = () => {
    const defaultImage = '../../assets/usericon.jpeg';
    return (
      <>
        <Col md="8">
          <h1>{formVals.fname}</h1>
          <h1>{formVals.email}</h1>
        </Col>
      </>
    )
  }

  // const editView = () => {
  //   return (
  //           <Form onSubmit={handleSubmit}>
  //             <Col>
  //             <Form.Group className="mb-3" >
  //               <Form.Label>Name: </Form.Label>
  //               <Form.Control 
  //                 type="text"
  //                 name="name"
  //                 value={formVals.fname}
  //                 onChange={(e) => setFormVals({ ...user, fname: e.target.value })} 
  //               />
  //             </Form.Group>
  //             <Form.Group className="mb-3">
  //               <Form.Label>Email: </Form.Label>
  //               <Form.Control 
  //                 type="text"
  //                 name="description"
  //                 value={formVals.email}
  //                 onChange={(e) => setFormVals({ ...user, email: e.target.value })} 
  //               />
  //             </Form.Group>
  //             <Form.Group className="mb-3">
  //               <Form.Label>Image: </Form.Label>
  //               <Form.Control 
  //                 type="text"
  //                 name="image"
  //                 value={formVals.image}
  //                 onChange={(e) => setFormVals({ ...user, image: e.target.value })} 
  //               />
  //             </Form.Group>
  //             <Button type="submit">
  //               Submit
  //             </Button>
  //             </Col>
  //           </Form>
  //   )
  // }

  return (
    <>
      {/* <Container>
        <hr />
        <Row>
          { editing ? editView() : profileView() }
          <Col>
            <Button onClick={() => setEditing(!editing)}>
              { editing ? 'cancel' : 'edit' }
            </Button>
          </Col>
        </Row>
      </Container> */}
    </>
  )
}

// const Profile = ({ id, fname, lname, age, email, image, updateUser}) => {

//   const [user, setUser] = useState ({ fname: '', email: ''})
//   const [editing, setEdit] = useState(false)

//   useEffect( () => {
//     axios.get(`/api/auth/edit`)
//       .then( res => setUser(res.data))
//       .catch( err => console.log(err))
//   }, [])

//   return 
//   { editing ? 
//       <>
//         <ProfileForm
//           email={email}
//           updateUser={updateUser} 
//           setEdit={setEdit}
//           id={id}
//         />
//         <Button variant="warning" onClick={() => setEdit(false)}>Cancel</Button>
//         <br />
//       </>
//       :
//       <>
//          <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src={image} />
//           <Card.Body>
//             <Card.Title>User # {id} {fname} {lname}</Card.Title>
//             <Card.Text>
//               Age: {age}
//               <br />
//               Email: {email}
//             </Card.Text>
//             <Button 
//             variant="warning" 
//             onClick={() => setEdit(true)}
//             >Edit Profile</Button>
//           </Card.Body>
//         </Card> 
//     </>
//   )
// }


const ConnectedProfile = (props) => (
  <AuthConsumer>
    { value => <Profile {...props} {...value.user} />}
  </AuthConsumer>
)

export default ConnectedProfile;