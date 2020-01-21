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

  addToCart = (product) => {
    console.log('CART --->', this.state.cart, this.state.cart.length)
    
    let existingProduct = this.state.cart.filter(p => p.code === product.code)
    const sumQuantity = this.state.cart.filter(p => p.quantity += 1)

    console.log('Product -->', product)
    // console.log('filterProduct -->', filterProduct)
    // console.log('existingProduct -->', existingProduct)

    this.setState({
      cart: [...this.state.cart, product]
    })
  }

  removeFromCart = (product) => {
    this.setState({
      cart: this.state.cart.filter(f => f.name !== product.name)
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
                addToCart={this.addToCart}
                removeFromCart={this.removeFromCart}
                cart={this.state.cart}
              />
            ))}
          </ul>
        </section>

        <Checkout />
      </main>
    )
  }
}

export default App;
