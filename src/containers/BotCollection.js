import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  createBotCard = () => {
    return this.props.botsData.map((bot) =>
      <BotCard key={bot.id} bot={bot} collectionClickHandler={this.props.collectionClickHandler} fillBotArray={this.props.fillBotArray} />
    )
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
          {this.createBotCard()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
