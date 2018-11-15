import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

class BotsPage extends React.Component {
  //start here with your code for step one


  constructor(props) {
    super(props)
    this.state = {
      botsData: [],
      clickedBot: null,
      clickedBotArray: []
    }
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(bots => this.setState({ botsData: bots }))
  }


  collectionClickHandler = (clickedBotObj) => {
    this.setState({ clickedBot: clickedBotObj })
  }

  fillBotArray = (botObj) => {
    if(this.state.clickedBotArray.includes(botObj)) {
      alert("This bot has already been chosen")
    }
    else{
      this.setState({ clickedBotArray: [...this.state.clickedBotArray, botObj] })
    }
  }


  armyClickHandler = () => {
    alert("army click handler")
  }


  render() {
    return (
      <div>
        {this.state.clickedBot ?
        <YourBotArmy botsData={this.state.botsData} clickedBotObj={this.state.clickedBot}  armyClickHandler={this.armyClickHandler} clickedBotArray={this.state.clickedBotArray} fillBotArray={this.fillBotArray} removeBotFromArmy={this.removeBotFromArmy} />
        : console.log("no data")
        }



        <BotCollection botsData={this.state.botsData} collectionClickHandler={this.collectionClickHandler} fillBotArray={this.fillBotArray} />
      </div>
    );
  }

}

export default BotsPage;
