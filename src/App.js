import React, { Component } from "react"

import "./App.css"
import Card from "./Card/Card"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, hourly: [] }
  }

  componentDidMount = () => {
    this.setState({ loading: true })
    fetch("/.netlify/functions/reading")
      .then(response => response.json())
      .then(json => this.setState({ loading: false, hourly: json.current.weather[0] }))
  }

  render() {
    const {  hourly } = this.state

    return (
      <p>
        
        <Card title={hourly.main} />
        <span>{hourly.main}</span>
        <span>{hourly.description}</span>
      </p>
    )
  }
}



export default App
