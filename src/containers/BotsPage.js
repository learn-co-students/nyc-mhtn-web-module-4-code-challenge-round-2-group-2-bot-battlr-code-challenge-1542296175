import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    selectedBots: []
  }

  handleClickBot = (bot) => {
    if (!this.state.selectedBots.includes(bot)) {
      this.setState({selectedBots: [...this.state.selectedBots, bot]})
    }
  }

  handleClickRemoveBot = (bot) => {

    //slice method of selectedBots of after the the first
    // let index = this.state.selectedBots.indexOf(bot)
    // console.log(index);
    // this.state.selectedBots.slice(index, 1)

    //filter method: filter through the robots and select the robot of robot to remove then setState to selectedBots with new array


  }


  render() {
    // console.log(this.props);
    return (
      <div>
        <YourBotArmy selectedBots={this.state.selectedBots} handleClickBot={this.handleClickRemoveBot}/>
        <BotCollection bots={this.props.bots} handleClickBot={this.handleClickBot}/>
      </div>
    );
  }

}

export default BotsPage;
