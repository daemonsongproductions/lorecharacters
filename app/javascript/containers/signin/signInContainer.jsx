import React from "react"
import {connect} from "react-redux"
import {signIn, switchForms} from './actions'
import {Container} from 'reactstrap';
import AccountForms from './components/accountForms'

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
    },
    switchForms: (formId) => {
      dispatch(switchForms(formId))
    }
  }
};

const AccountFormsComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountForms);



export default class SignInContainer extends React.Component {
  render () {
    return(
        <Container>
          <AccountFormsComponent/>
        </Container>
    )
  }
}
