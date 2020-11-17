import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { Route, Switch,Link } from 'react-router-dom'

import routes from '../routes';

const CustomNavbarwithloginandSignup = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
      <Link className="navbar-brand" to={routes.home}>URL_Shortner</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
             
            </NavItem>
            <NavItem>
              
            </NavItem>
          </Nav>
          <Link className="nav-link" to={routes.login}>Login</Link>
          <Link className="nav-link" to={routes.signup}>Signup</Link>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbarwithloginandSignup;