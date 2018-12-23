import React from "react"
import {connect} from "react-redux"
import {fetchAccountInfo, signUserOut} from './actions'
import NavBar from './components/navBar'

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
    fetchAccountInfo: () => {
      dispatch(fetchAccountInfo())
    },
    signUserOut: () => {
      dispatch(signUserOut());
    }
  }
};

const NavBarComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);



export default class HeaderContainer extends React.Component {
  render () {
    return(
        <header className="cortana-header sb-slide">
          <NavBarComponent/>
        </header>
    )
  }
}
