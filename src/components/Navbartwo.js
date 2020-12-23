import { AuthOptions } from './Divs'
import { AuthBtn } from './Buttons'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navbartwo = (props) => {
    return (
      <Navbar className="Navbar sticky-top" expand="lg" fixedTop>
        <Navbar.Brand href="/">
        <div className="brand">
          GeneralFit
          <i className="fab fa-typo3" />
        </div>
        </Navbar.Brand>
        <Navbar.Toggle className="" bg="white" aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse className="" id="basic-navbar-nav">
        <Nav className="ml-auto d-flex align-items-center">
          <Nav.Link  className="navLink text-white" href="/">Home</Nav.Link>
          <Nav.Link  className="navLink text-white" href="/about">About</Nav.Link>
          <Nav.Link  className="navLink text-white" href="/workouts">Workouts</Nav.Link>
          <Nav.Link  className="navLink text-white" href="/nutrition">Nutrition</Nav.Link>
          {
            props.isAuth 
            ? <AuthOptions>
                <Nav.Link href="/profile">
            <AuthBtn>
                Profile
            </AuthBtn>
                </Nav.Link>
                <div onClick={props.handleLogout}>
            <AuthBtn>
                Logout

            </AuthBtn>
                </div>
            </AuthOptions>
            : <AuthOptions>
            <Nav.Link href="/signup">
            <AuthBtn>
            Sign Up
            </AuthBtn>
            </Nav.Link>
            <Nav.Link href="/login">
            <AuthBtn>
            Login
            </AuthBtn>
            </Nav.Link>
            </AuthOptions>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
}
export default Navbartwo;

