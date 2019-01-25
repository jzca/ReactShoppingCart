import React, { Component } from 'react';

class Item extends Component {

  render() {
    const item = this.props.item;

    return(
      <div>
        <div>{item.name}</div>
        <div>{item.price}</div>
        <div>{item.description}</div>
        <button onClick={() => this.props.addToCart(item)}>Add to Cart</button>
      </div>
    )
  }
}

export default Item;