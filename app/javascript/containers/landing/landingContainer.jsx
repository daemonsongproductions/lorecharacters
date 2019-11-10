import React from "react"
import {Container} from 'reactstrap';
import ApplicationStatus from './components/applicationStatus'


export default class LandingContainer extends React.Component {
  render () {
    return(
      <Container>
        <article>
          <header>
            <h1>Lore Character Builder</h1>
          </header>
          <section>{this.props.message}</section>
          <ApplicationStatus/>
        </article>
      </Container>
    )
  }
}
