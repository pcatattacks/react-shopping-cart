import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    import("./static/data/products.json") // mocking api call
    .then((json) => {
      this.setState({products: json.products})
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.products.map(pjson => <Product info={pjson} />)}
      </div>
    );
  }
}

const Product = (props) => {
  return (
    <div>
      <img src={require(`./static/products/${props.info.sku}_1.jpg`)} alt="" />
      <div>{props.info.title}</div>
      <div>{props.info.price}</div>
      <div>{`or ${props.info.installments} x ${(props.info.price / props.info.installments).toFixed(2)}`}</div>
      <button>Add to cart</button>
    </div>
  )
}

export default App;
