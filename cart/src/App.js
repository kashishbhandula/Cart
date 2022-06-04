import logo from './logo.svg';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: 'Phone',
          qty: 1,
          id: 1,
          img: ''
        },
        {
          price: 999,
          title: 'Phone',
          qty: 1,
          id: 2.,
          img: ''
        }, {
          price: 999,
          title: 'toy',
          qty: 1,
          id: 3,
          img: ''
        }, {
          price: 999,
          title: 'wood',
          qty: 1,
          id: 4,
          img: ''
        }
      ]


    }

    //this.increaseQuantity=this.increaseQuantity.bind(this);
    //this.testing();
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const idx = products.indexOf(product);
    products[idx].qty += 1;
    this.setState({
      products: products
    })
  }
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const idx = products.indexOf(product);
    if (products[idx].qty > 0) products[idx].qty -= 1;
    this.setState({
      products: products
    })
  }
  handleDelete = (product) => {
    const { products } = this.state;
    const idx = products.indexOf(product);
    products.splice(idx, 1);
    this.setState({
      products: products
    })
  }
  getCartCount(){
    const{products}=this.state;
    let count=0;
    products.forEach(product => {
      count+=product.qty;
      
    });
    return count;
  }
  render() {
    const { products } = this.state;
    return (
      
      <div className="App" >
        <Navbar 
        count={this.getCartCount()}
        />
        <Cart 
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDelete={this.handleDelete}
        />

      </div>
    )

  }


}

export default App;
