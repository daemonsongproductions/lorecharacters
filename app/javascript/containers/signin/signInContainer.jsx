import React from "react"
import {connect} from "react-redux"
import {handleFormChange, signIn, switchForms, submitRegistration} from './actions'
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
    handleFormChange: (fieldName, fieldValue) => {
      dispatch(handleFormChange(fieldName, fieldValue))
    },
    signIn: () => {
      dispatch(signIn())
    },
    submitRegistration: (email, password, password_confirmation) => {
      dispatch(submitRegistration(email, password, password_confirmation))
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
