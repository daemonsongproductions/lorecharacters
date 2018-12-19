import React from 'react'
import {Button, Form, FormGroup, Label, Input,
  FormText, Nav, TabContent, NavItem, NavLink,
  TabPane, Row, Col, Card, CardTitle, CardText } from 'reactstrap';
import classnames from 'classnames';
import RegistrationForm from './registrationForm';
import SignInForm from './signInForm';

const AccountForms = props => (
    <div>
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
          <SignInForm/>
        </TabPane>
        <TabPane tabId="2">
          <RegistrationForm signInState={props.signInState} submit={props.submitRegistration} handleFormChange={props.handleFormChange}/>
        </TabPane>
      </TabContent>
    </div>
);

export default AccountForms;