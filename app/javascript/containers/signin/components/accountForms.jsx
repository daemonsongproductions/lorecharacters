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