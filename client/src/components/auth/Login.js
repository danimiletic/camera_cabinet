import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Form } from 'react-bootstrap';
import { LoginContainer, Font, Button } from '../../styles/loginStyles';

const Login = ({ handleLogin }) => {

  const [user, setUser] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(user)
    setUser({ email: '', password: '' })
  }

  return (
    <>
        <LoginContainer>
          <Font>Login</Font>
          <br />
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email: </Form.Label>
                <Form.Control
                type='email' 
                name='email'
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value })}
                required
                autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password: </Form.Label>
                <Form.Control 
                type='password'
                name='Password'
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value })}
                required
                />
              </Form.Group>
              <Button variant="outline-light" type="submit">
                Submit
              </Button>
            </Form>
        </LoginContainer>
    </>
  )
}

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { value => <Login {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedLogin;