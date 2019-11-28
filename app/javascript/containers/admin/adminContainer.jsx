import React from "react"
import Dashboard from "./components/dashboard"

export default class AdminContainer extends React.Component {
  render () {
    return(
        <header className="cortana-header sb-slide">
          <Dashboard/>
        </header>
    )
  }
}
