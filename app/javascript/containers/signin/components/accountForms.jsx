import React from 'react'
import {Nav, TabContent, NavItem, NavLink,
  TabPane, Alert } from 'reactstrap';
import classnames from 'classnames';
import RegistrationForm from './registrationForm';
import SignInForm from './signInForm';


function errorMessage(message) {
  if(message) {
    return(
        <Alert color="danger">
          {message}
        </Alert>
    )
  }
}

const AccountForms = props => (
    <div>
      {errorMessage(props.signInState.errorMessage)}
      <Nav tabs>
        <NavItem>
          <NavLink
              className={classnames({ active: props.signInState.activeFormId === '1' })}
              onClick={() => { props.switchForms('1'); }}
          >
            Sign In
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
              className={classnames({ active: props.signInState.activeFormId === '2' })}
              onClick={() => { props.switchForms('2'); }}
          >
            Reigster
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={props.signInState.activeFormId}>
        <TabPane tabId="1">
          <SignInForm signInState={props.signInState} submit={props.signIn} handleFormChange={props.handleFormChange} />
        </TabPane>
        <TabPane tabId="2">
          <RegistrationForm signInState={props.signInState} submit={props.submitRegistration} handleFormChange={props.handleFormChange}/>
        </TabPane>
      </TabContent>
    </div>
);

export default AccountForms;