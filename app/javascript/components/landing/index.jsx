import React from 'react';


export default class LandingContainer extends React.Component {
  render () {
    return(
      <document>
        <header>
          <h1>Lore Character Builder</h1>
        </header>
        <section>{this.props.message}</section>
      </document>

    )
  }
}