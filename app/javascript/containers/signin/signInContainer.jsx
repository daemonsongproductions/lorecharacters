import React from "react"
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
