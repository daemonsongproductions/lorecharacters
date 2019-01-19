import React from "react"
import {connect} from "react-redux"
import {fetchAccountInfo} from '../../shared/actions'
import Profile from './components/profile'

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
    fetchPlayer: () => {
      dispatch(fetchAccountInfo())
    }
  }
};

const ProfileComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);



export default class PlayerContainer extends React.Component {
  render () {
    return(
        <ProfileComponent/>
    )
  }
}
