
import { AuthConsumer } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Font, CamCabFont, Background } from '../../styles/navbarStyles';

const MainNavbar = ({ user, handleLogout }) => {

  const rightNavItems = () => {
    // links will display when user is logged in 
    if (user) {
      return (
        <>
            <Font>
              <Nav.Link>
                <Link to='/profile' 
                  id='profileBtn'
                  style={{ 
                  color: "#668DB1", 
                  textDecoration: 'none',
                  fontFamily: 'montserrat',
                  }}>
                    Profile
                </Link>
              </Nav.Link>
            </Font>
            <Font>
              <Nav.Link>
                <Link to='/kits'
                  id='kitsBtn'
                  style={{ 
                  color: "#668DB1", 
                  textDecoration: 'none',

                  fontFamily: 'montserrat',
                  }}>
                    Kits
                </Link>
              </Nav.Link>
            </Font>
            <Font>
              <Nav.Link>
                <Link to='/about' 
                  id='aboutBtn'
                  style={{ 
                  color: "#668DB1", 
                  textDecoration: 'none',
                  fontFamily: 'montserrat',
                  }}>
                    About Us
                </Link>
              </Nav.Link>
            </Font>
          {/* <Font>
            <Nav.Link>
              <Link to='/gears'
                style={{ 
                color: "#fe2712", 
                textDecoration: 'none'
                }}>
                  Gear
              </Link>
            </Nav.Link>
          </Font> */}
          <Font>
            <Nav.Link onClick={ () => handleLogout() }>
              <Link to="/logout" 
                id='logoutBtn'
                style={{ 
                color: "#668DB1", 
                textDecoration: 'none',
                fontFamily: 'montserrat',
                }}>
                Logout
              </Link>
            </Nav.Link>
          </Font>
        </>
      )
    } else {
      // links will display when user is not logged in
      return (
        <>
            <Font>
              <Nav.Link>
                <Link to='/login' 
                  id='loginBtn'
                  style={{ 
                  color: "#668DB1", 
                  textDecoration: 'none',
                  fontFamily: 'montserrat',
                  }}>
                    
                    Login
                </Link>
              </Nav.Link>
            </Font>
            <Font>
              <Nav.Link>
                <Link to='/register' 
                  id='registerBtn'
                  style={{ color: 
                  "#668DB1", 
                  textDecoration: 'none',
                  fontFamily: 'montserrat',
                  }}>
                    Register
                </Link>
              </Nav.Link>
            </Font>
        </>
      )
    }
  }

  return (
    <>
        <Background>
        <CamCabFont>
          <Navbar variant="light">
            <Container>
              <Navbar.Brand className="mr-auto">
                <Link to="/" 
                  id='camcabText'
                  style={{ 
                  color: "#668DB1", 
                  textDecoration: 'none'
                  }}>
                  CAMERA CABINET
                </Link>
              </Navbar.Brand>
              <Nav className="mr-auto">
                { rightNavItems() }
              </Nav>
            </Container>
          </Navbar>
        </CamCabFont>
        </Background>
    </>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { value => <MainNavbar {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedNavbar;