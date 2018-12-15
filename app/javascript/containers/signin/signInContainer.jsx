import React from "react"
import {connect} from "react-redux"
import {signIn} from './actions'
import {Container} from 'reactstrap';
import SignInForm from './components/signInForm'

const mapStateToProps = (
    state
) => {
  return {
    ...state
  }
};

const mapDispatchToProps = (
    dispatch
) => {
  return {
    signIn: () => {
      dispatch(signIn())
    }
  }
};

const SignInFormComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInForm);



export default class SignInContainer extends React.Component {
  render () {
    return(
        <Container>
          <SignInFormComponent/>
        </Container>
    )
  }
}
