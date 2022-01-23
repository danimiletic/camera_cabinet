
import { AuthConsumer } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Navbar = ({ user, handleLogout }) => {

  const rightNavItems = () => {
    // links will display when user is logged in 
    if (user) {
      return (
        <>
          <Link to='/dash'>
            <li>
              Dashboard
            </li>
          </Link>
          <Link to='/kits'>
            <li>
              Kits
            </li>
          </Link>
          <Link to='/gears'>
            <li>
              Gears
            </li>
          </Link>
          <Link to='/logout'>
          <li onClick={ () => handleLogout() }>
            Logout
          </li>
          </Link>


        </>
      )
    } else {
      // links will display when user is not logged in
      return (
        <>
          <Link to='/login'>
            <li>
              Login
            </li>
          </Link>
          <Link to='/register'>
            <li>
              Register
            </li>
          </Link>
        </>
      )
    }
  }

  return (
    <>
      <nav>
        <ul>
          <Link to="/">
            <li>
              Home
            </li>
          </Link>
          { rightNavItems() }
        </ul>
      </nav>
    </>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { value => <Navbar {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedNavbar;