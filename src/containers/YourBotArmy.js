import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  createBotArmyCard = () => {
    return this.props.clickedBotArray.map((bot) =>
      <BotCard key={bot.id} clickedBotArray={this.props.clickedBotArray} armyClickHandler={this.props.armyClickHandler} fillBotArray={this.props.fillBotArray} removeBotFromArmy={this.props.removeBotFromArmy} bot={bot} />
    )
  }


  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.createBotArmyCard()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
