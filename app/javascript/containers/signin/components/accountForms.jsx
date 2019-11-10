import React, {useState, useEffect} from 'react'
import {Nav, TabContent, NavItem, NavLink,
  TabPane, Alert } from 'reactstrap';
import classnames from 'classnames';
import RegistrationForm from './registrationForm';
import SignInForm from './signInForm';




export default function AccountForms() {

  const [activeFormId, setActiveFormId] = useState(1);
  const [errorMessage, setErrorMessage] = useState(null);


  function displayErrorMessage(message) {
    if(message) {
      return(
          <Alert color="danger">
            {message}
          </Alert>
      )
    }
  }

  function switchForms(formId) {
    setActiveFormId(formId);
  }



  return(
      <div>
        {displayErrorMessage(errorMessage)}
        <Nav tabs>
          <NavItem>
            <NavLink
                className={classnames({ active: activeFormId === '1' })}
                onClick={() => { switchForms('1'); }}
            >
              Sign In
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
                className={classnames({ active: activeFormId === '2' })}
                onClick={() => { switchForms('2'); }}
            >
              Reigster
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeFormId}>
          <TabPane tabId="1">
            <SignInForm setErrorMessage={setErrorMessage} />
          </TabPane>
          <TabPane tabId="2">
            <RegistrationForm setErrorMessage={setErrorMessage} />
          </TabPane>
        </TabContent>
      </div>

  )

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