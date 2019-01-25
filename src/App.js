import React, { Component } from 'react';
import './App.css';
import Item from './Item'
import { Route, Link } from "react-router-dom"

const items = [
  {
    name: "Phone Charger",
    price: 12.99,
    description: "Will charge any phone that exists"
  },
  {
    name: "Macbook Pro 2019",
    price: 2599.00,
    description: "Everyone wants one, no one can afford one."
  },
  {
    name: "Dell COmputer",
    price: 599.00,
    description: "Everyone has one, nobody likes them."
  },
  {
    name: "iPhone",
    price: 1599.00,
    description: "The one that started it all"
  },
]

class App extends Component {

  state = {
    cart: []
  }

  addToCart = (item) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, item]
    }))   
  }

  removeItemFromCart = (cartItem) => {
    this.setState((prevState) => {
      let itemIndex = prevState.cart.indexOf(cartItem);

      return ({
        cart: prevState.cart.filter((c, index) => (
          index !== itemIndex
        ))
      })
    })   
  }
  
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => 
          <div>     
            <div>
              <Link to="/cart">
                Cart: 
                <span>{this.state.cart.length} items</span>
              </Link>
            </div>
            {
              items.map((item) => (
                <Item 
                  item={item} 
                  addToCart={this.addToCart}
                />
              ))
            }
          </div>
        } />

        <Route path="/cart" render={() => 
          <div>
            <Link to="/">
              Back to Items
            </Link>
            <h2>My Cart</h2>
            {
              this.state.cart.map((cartItem) => (
                <div>
                  <div>{cartItem.name}</div>
                  <div>{cartItem.price}</div>
                  <button onClick={() => this.removeItemFromCart(cartItem)}>Remove From Cart</button>
                </div>
              ))
            }
            <div>
              Total: 
              <span>
                {this.state.cart.length > 0 && this.state.cart.reduce((acc, item) => {
                  return acc + item.price
                }, 0)}
              </span>
            </div>
          </div>
        } />  
      </div>
    );
  }
}

export default App;
