import React from 'react';
import UserBlackjack from './user_blackjack'
import AiBlackjack from './ai_blackjack'

export default class App extends React.Component {
  constructor(props) {
    super(props);

  }

    hitMe(){

    }

  render(){
    // debugger
    return(
      <div>
        <userBlackjack store={this.props.store} />
        <aiBlackjack store={this.props.store} />
      </div>
      )
  }
}
