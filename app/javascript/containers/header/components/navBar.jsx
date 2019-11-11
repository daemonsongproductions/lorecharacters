import React, {useState, useEffect} from 'react'
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
  import ax from '../../../packs/axios';

export default function NavBar() {
  const [fetchingAccount, setfetchingAccount] = useState(false);
  const [accountInfo, setAccountInfo] = useState({signedIn: false});
  const [isOpen, setIsOpen] = useState(false);

  async function fetchAccountInfo() {

    setfetchingAccount(true);

    try {
      const response = await ax.get(`/users.json`);
      setAccountInfo({email: response.data.email, signedIn: response.data.signed_in});
      setfetchingAccount(false);
    } catch (error) {
      console.log(error);
      setfetchingAccount(false);
    }
  }

  async function signUserOut() {
    await ax.delete('/users/sign_out.json')
    window.location.href="/"

  }

  function toggleDropdown() {
    //setIsOpen(!isOpen);
  }

  function accountDropdownText() {
    if(userSignedIn()) {
      return accountInfo.email
    } else {
      return "Account"
    }
  }

  function accoundDropdownOptions() {
    if(userSignedIn()) {
      return(
          <DropdownMenu right>
            <DropdownItem>
              <NavLink onClick={signUserOut}>Sign out</NavLink>
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

  function userSignedIn() {
    return accountInfo.signedIn
  }

  useEffect(() => {
    fetchAccountInfo();
  }, []);


  return(
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Lore Character Builder</NavbarBrand>
          <NavbarToggler />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="http://lorelarp.net">Lore Larp</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {accountDropdownText()}
                </DropdownToggle>
                {accoundDropdownOptions()}
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
  )

}