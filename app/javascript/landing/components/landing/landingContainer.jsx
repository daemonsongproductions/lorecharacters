import React from "react"
import {connect} from "react-redux"
import {fetchDate} from '../../actions/landing'
import ApplicationStatus from './applicationStatus'

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

const ApplicationStatusComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(ApplicationStatus)



export default class LandingContainer extends React.Component {
  render () {
    return(
      <article>
        <header>
          <h1>Lore Character Builder</h1>
        </header>
        <section>{this.props.message}</section>
        <ApplicationStatusComponent/>
      </article>
    )
  }
}
