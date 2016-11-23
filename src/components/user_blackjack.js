import React from 'react';

export default class UserBlackjack extends React.Component {
  constructor(props) {
    super(props);

  }

  render(){
    return(
      <div>
        <h1>Player1</h1>
        <h2>{this.props.store.deck.userCards[1]}</h2>
      </div>
      );
  }
}
