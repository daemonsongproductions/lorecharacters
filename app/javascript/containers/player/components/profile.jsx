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

export default class Profile extends React.Component {


  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlayer();
  }

  render() {
    return(
        <div>
        </div>
    )
  }

}