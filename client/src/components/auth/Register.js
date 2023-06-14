import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Form } from 'react-bootstrap';
import { Button, RegisterContainer } from '../../styles/registerStyles';

const Register = ({ handleRegister }) => {

  const [user, setUser] = useState({ email: '', password: '', passwordConfirmation: '', fname: '', lname: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
      if (user.password === user.passwordConfirmation) {
        handleRegister(user)
        setUser({ email: '', password: '', passwordConfirmation: '', fname: '', lname: '' })
      } else {
        alert('Passwords do not match')
      }
  }
  return (
    <>
      {/* <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
            <input
              type="text"
              name="fname"
              value={user.fname}
              onChange={(e) => setUser({...user, fname: e.target.value})}
              required
            />
          <label>Last Name</label>
            <input
              type="text"
              name="lname"
              value={user.lname}
              onChange={(e) => setUser({...user, lname: e.target.value})}
              required
            />
          <label>Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={(e) => setUser({...user, email: e.target.value})}
              required
              autoFocus
            />
          <label>Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={(e) => setUser({...user, password: e.target.value})}
              required
            />
          <label>Password Confirmation</label>
            <input
              type="password"
              name="passwordConfirmation"
              value={user.passwordConfirmation}
              onChange={(e) => setUser({...user, passwordConfirmation: e.target.value})}
              required
            />
          <button type='submit'>Register</button>
        </form> */}
          <RegisterContainer>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name: </Form.Label>
                <Form.Control
                type='text' 
                name='fname'
                value={user.fname}
                onChange={(e) => setUser({...user, fname: e.target.value })}
                required
                autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Last Name: </Form.Label>
                <Form.Control 
                type='text'
                name='lname'
                value={user.lname}
                onChange={(e) => setUser({...user, lname: e.target.value })}
                required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email: </Form.Label>
                <Form.Control 
                type='email'
                name='email'
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value })}
                required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password: </Form.Label>
                <Form.Control 
                type='password'
                name='password'
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value })}
                required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password Confirmation: </Form.Label>
                <Form.Control 
                type='password'
                name='passwordConfirmation'
                value={user.passwordConfirmation}
                onChange={(e) => setUser({...user, passwordConfirmation: e.target.value })}
                required
                />
              </Form.Group>
              <Button variant="outline-light" type="submit">
                Submit
              </Button>
            </Form>
          </RegisterContainer>
    </>
  )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { value => <Register {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedRegister;

// import { useState } from 'react';
// import { AuthConsumer } from '../../providers/AuthProvider';

// const Register = ({ handleRegister }) => {

//   const [user, setUser] = useState({ email: '', password: '', passwordConfirmation: '' })

//   const handleSubmit = (e) => {
//     e.preventDefault()
//       if (user.password === user.passwordConfirmation) {
//       handleRegister(user)
//       setUser({email: '', password: '', passwordConfirmation: '' })
//     } else {
//       alert('Passwords do not match')
//     }
//   }


//   return (
//     <>
//       <h1>Register</h1>
//       <form onSubmit={handleSubmit}>
//         <label>Email</label>
//         <input
//           type='email'
//           name='email'
//           value={user.email}  
//           onChange={(e) => setUser({...user, email: e.target.value })}
//           required
//           autoFocus
//         />
//         <label>Password</label>
//         <input
//           type='password'
//           name='password'
//           value={user.password}  
//           onChange={(e) => setUser({...user, password: e.target.value })}
//           required
//         />
//         <label>Password Confirmation</label>
//         <input
//           type='password'
//           name='passwordConfirmation'
//           value={user.passwordConfirmation}  
//           onChange={(e) => setUser({...user, passwordConfirmation: e.target.value })}
//           required
//         />
//         <button type='submit'>Submit</button>
//       </form>      
//     </>
//   )
// }

// const ConnectedRegister = (props) => (
//   <AuthConsumer>
//     { value => <Register {...props} {...value} />}
//   </AuthConsumer>
// )

// export default ConnectedRegister;