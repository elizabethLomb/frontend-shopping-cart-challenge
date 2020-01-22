import React, { Component } from 'react';
import './App.css';
import products from './data/products.json';
import ProductRow from './components/ProductRow';
import ProductTableHead from './components/ProductTableHead';
import Checkout from './components/Checkout';

// import Products from './components/Products'; 


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [...products],
      cart: []
    };
  }

  //boolean
  existingProduct = (product) => {
    this.state.cart.some(p => p.code === product.code) 
  }

  addToCart = (product) => {
    console.log('app addToCart CART --->', this.state.cart, this.state.cart.length)

    this.setState({
      cart: [...this.state.cart, product]
    })
  }

  removeFromCart = (product) => {
    this.setState({
      cart: this.state.cart.filter(p => p.code !== product.code)
    });
  }

  render() {
    return (
      <main className="App">
        <section className="products">
          <h1 className="main">Shopping cart</h1>

          <ProductTableHead />
          
          <ul className="products-list">
            {this.state.products.map(product => (
              <ProductRow
                product={product}
                key={product.code}
                existingProduct={this.existingProduct}
                addToCart={this.addToCart}
                removeFromCart={this.removeFromCart}
                cart={this.state.cart}
              />
            ))}
          </ul>
        </section>

        <Checkout
          cart={this.state.cart}
          product={products}
        />
      </main>
    )
  }
}

export default App;
