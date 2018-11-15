import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  mapThroughBots = () => {
    return this.props.bots.map((bot) => {
      return <BotCard bot={bot} key={bot.id} handleClickBot={this.props.handleClickBot}/>
    })
  }

  render(){
    // console.log(this.props)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.mapThroughBots()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
