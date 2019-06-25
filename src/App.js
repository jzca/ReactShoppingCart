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
    cart: [],
    price:[],
    desc:[],
    name:[],
    allItems:[]
  }

 updateName=(event)=>{
  this.setState({
    name: event.target.value
    })
   }
   updatePrice=(event)=>{
    this.setState({
      price: parseInt(event.target.value) 
      })
     }
     updateDesc=(event)=>{
      this.setState({
        desc: event.target.value
        })
       }


  addToCart=(item)=>{
    this.setState((prevState)=>({
    cart: [...prevState.cart, item]
    }))
  }

  submitIt =(event)=>{
    event.preventDefault();
            var a= {
      name: this.state.name,
      price: this.state.price,
      description: this.state.desc     
    };
    this.setState((prevState)=>({
      name: "",
      price: "",
      desc: "",
      allItems: [...prevState.allItems, a]
  }))
}



  addToItem=(item)=>{
    this.setState((prevState)=>({
        }))
  }

removeFromCart=(item)=>{
  
    this.setState((prevState)=>{
      let itemIndex = prevState.cart.indexOf(item);
  return ({ cart: prevState.cart.filter((c, index)=>
    (index !== itemIndex)
  )})
  })
  }

  getData=()=>{
    this.setState({
      allItems: [
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
    })
  }

  componentDidMount(){
    this.getData();
  }


  render(){
return (<div className="App">
  <Route exact path="/" render={()=> <div>
  <form onSubmit={this.submitIt}>
  <input type="text" onChange={this.updateName} value={this.state.name} />
  <input type="number" onChange={this.updatePrice} value={this.state.price} />
  <input type="text" onChange={this.updateDesc} value={this.state.desc} />
  <button type="submit">Submit</button>
  </form>

    <Link to="/cart">My Cart</Link>
  {this.state.allItems.map((it)=>(
    <Item key={it.name+Math.random()} item={it} addToCart={this.addToCart} add={true}></Item>
  ))}
  </div>}
   />

  <Route path="/cart"
        render={() =>
        <div> 
            <Link to="/">Back</Link>
          {this.state.cart.map((it)=>(
            <Item item={it} key={it.name+Math.random()} add={false} removeFromCart={this.removeFromCart}></Item>
        ))}
        </div>}
  />
</div>)
}
}

export default App;
