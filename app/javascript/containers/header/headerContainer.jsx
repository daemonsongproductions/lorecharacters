import React from "react"
import NavBar from './components/navBar'

export default class HeaderContainer extends React.Component {
  render () {
    return(
        <header className="cortana-header sb-slide">
          <NavBar/>
        </header>
    )
  }
}
