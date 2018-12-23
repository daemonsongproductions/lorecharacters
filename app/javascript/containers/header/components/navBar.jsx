import React from 'react'
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
    if(this.userSignedIn()) {
      return this.props.headerState.email
    } else {
      return "Account"
    }
  }

  accoundDropdownOptions() {
    if(this.userSignedIn()) {
      return(
        <DropdownMenu right>
          <DropdownItem>
            <NavLink onClick={this.props.signUserOut}>Sign out</NavLink>
          </DropdownItem>
        </DropdownMenu>
      )

    } else {
     return(
       <DropdownMenu right>
         <DropdownItem>
           <NavLink href="/sign_in/">Sign In</NavLink>
         </DropdownItem>
       </DropdownMenu>
     )
    }
  }

  userSignedIn() {
    return this.props.headerState.signedIn
  }

  componentDidMount() {
    this.props.fetchAccountInfo();
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
                  {this.accoundDropdownOptions()}
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
    )
  }

}