import React, { Component } from 'react';

class Item extends Component {

render (){
  var hasItem=this.props.item;
  return (
<div>
  <p>{hasItem.name}</p>
  <p>{hasItem.price}</p>
  <p>{hasItem.description}</p>
  { this.props.add && <button onClick={() =>{
this.props.addToCart(hasItem)
  }}>Add</button>}
    { !this.props.add && <button onClick={() =>{
this.props.removeFromCart(hasItem)
  }}>Remove</button>}
      { this.props.removeIt && <button onClick={() =>{
this.props.removeFromItem(hasItem)
  }}>Remove</button>}
</div>
)}
}

export default Item;