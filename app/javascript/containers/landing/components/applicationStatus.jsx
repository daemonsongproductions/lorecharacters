import React from 'react'
import moment from 'moment'

export default class ApplicationStatus extends React.Component {

  render() {
    return(
      <div>
        <p>The time is {moment(this.props.landingState.time).format('MMMM Do YYYY, h:mm:ss a')}.</p>
        <p>System status is {this.props.landingState.status}.</p>
      </div>
    )
  }

  componentDidMount() {
    this.props.fetchDate();
  }

}