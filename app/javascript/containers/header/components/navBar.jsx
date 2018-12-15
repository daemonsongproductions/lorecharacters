import React from 'react'
import SignInForm from '../../signin/components/signInForm'
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
  DropdownItem } from 'reactstrap';

export default class NavBar extends React.Component {


  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  accountDropdownText() {
    if(!this.state.email || /^\s*$/.test(!this.state.email)) {
      return "Account"
    } else {
      return this.state.email
    }
  }

  render() {
    return(
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Lore Character Builder</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="http://lorelarp.net">Lore Larp</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    {this.accountDropdownText()}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <NavLink href="sign_in/">Sign In</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="users/new">Register</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
    )
  }

}