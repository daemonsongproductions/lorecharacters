import React from "react"
import {connect} from "react-redux"
import {fetchDate} from '../actions/header'
import NavBar from './navBar'

const mapStateToProps = (
    state
) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (
    dispatch
) => {
  return {
    fetchDate: () => {
      dispatch(fetchDate())
    }
  }
}

const NavBarComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar)



export default class HeaderContainer extends React.Component {
  render () {
    return(
        <header className="cortana-header sb-slide">
          <NavBarComponent/>
        </header>
    )
  }
}
