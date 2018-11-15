import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {
  state = {
    bots: []
  }

  componentDidMount() {
    this.fetchGetRobots()
  }

  fetchGetRobots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(data => {
      // console.log(data)
      this.setState({bots: data})
    })
  }

  render() {
    return (
      <div className="App">
        <BotsPage bots={this.state.bots}/>
      </div>
    );
  }
}

export default App;
