import React from 'react';

export default class AiBlackjack extends React.Component {
  constructor(props) {
    super(props);

  }

  render(){
    return(
      <div>
        <h1>Computer</h1>
        <h2>{this.props.store.deck.aiCards[1]}</h2>
      </div>
      );
  }
}
