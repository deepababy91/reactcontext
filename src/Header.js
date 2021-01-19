import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Header= () => {
    return (
        <Navbar className="color-nav"  expand="lg">
            <LinkContainer to="/">
  <Navbar.Brand>My Todoapp</Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  {/*ml-auto will pull your navbar-nav to the right*/}
    <Nav className="ml-auto">
        <LinkContainer to="/account">
      <Nav.Link>Account</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/help">
      <Nav.Link>Help</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}
export default Header