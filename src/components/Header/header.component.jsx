import React, { useState } from 'react';
import logo from '../../logo.png';
import ButtonCustom from '../ButtonCustom/ButtonCustom.component';
import '../Header/header.style.css';
import {Link} from 'react-router-dom';
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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    
      <Navbar color="light" light expand="md">
        <NavbarBrand href={`${process.env.PUBLIC_URL}/`}  ><img alt="logo" className="img-fluid" src={logo}/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/comparison/">Vehicles</NavLink>
            </NavItem>
            <NavItem >
            <NavLink href={`${process.env.PUBLIC_URL}/comparison`}>Comparison</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret href={`${process.env.PUBLIC_URL}/accessories`}>
                Auto Parts
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href={`${process.env.PUBLIC_URL}/accessories`}>
                 Sell Auto Parts
                </DropdownItem>
                <DropdownItem>
                 Buy Auto Parts
                </DropdownItem>
                <DropdownItem divider />
              
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink>Auction</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Modification</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={`${process.env.PUBLIC_URL}/inspection`}> Inspection</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={`${process.env.PUBLIC_URL}/postad`}><ButtonCustom>Post Ad</ButtonCustom></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

  );
}

export default Header;