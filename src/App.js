import React, { Component } from 'react'
import Header from './components/Header'
import Main from "./components/Main"
import "./css/App.css"





class App extends Component {
  render() {
    return (
      <div className="container">
          <Header/>
          <Main/>
      </div>
    )
  }
}

export default App