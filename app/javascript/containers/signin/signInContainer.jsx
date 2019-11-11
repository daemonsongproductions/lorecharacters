import React from "react"
import {connect} from "react-redux"
import {handleFormChange, signIn, switchForms, submitRegistration} from './actions'
import {Container} from 'reactstrap';
import AccountForms from './components/accountForms'

export default class SignInContainer extends React.Component {
  render () {
    return(
        <Container>
          <AccountForms/>
        </Container>
    )
  }
}
