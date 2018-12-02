import React from 'react'
import {Provider} from 'react-redux'
import moment from 'moment'

export default class ApplicationStatus extends React.Component {



  render() {
    return(
      <div>
        <p>The time is {moment(this.props.time).format('MMMM Do YYYY, h:mm:ss a')}.</p>
        <p>System status is {this.props.status}.</p>
      </div>
    )
  }

}