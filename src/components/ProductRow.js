import React, { Component } from 'react';

class ProductList extends Component  {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      totalByProduct: 0 //total col need qyt
    }
  }

  onChangeCount = (event) => {
    this.setState({ count: event.target.value })
  }

  addToCart = () => {
    this.props.addToCart({
      ...this.props.product,
      quantity: this.state.count
    })
  }

  removeFromCart = () => {
    this.props.removeFromCart({
      ...this.props.product,
      count: -1,
      quantity: this.state.count
    })
  }

  sumByProduct = () => {
    console.log('sumByProduct')
  }

  render() {
    const {image, name, code, id, price} = this.props.product
    return (
      <li className="product row">
        <div className="col-product">
          <figure className="product-image">
            <img src={image} alt={name} />
            <div className="product-description">
              <h1>{code}</h1>
              <p className="product-code">Product code {id}</p>
            </div>
          </figure>
        </div>

        <div className="col-quantity">
          <button className="count" onClick={this.removeFromCart}>-</button>
            <input
              type="number"
              className="product-quantity"
              value={this.state.count}
              onChange={this.onChangeCount}
              // id={}
            />
          <button className="count" onClick={this.addToCart}>+</button>
        </div>

        <div className="col-price">
          <span className="product-price">{price}</span>
          <span className="product-currency currency">€</span>
        </div>  

        <div className="col-total">
          <span className="product-price">{this.state.totalByProduct}</span>
          <span className="product-currency currency">€</span>
        </div>

      </li>
    )
  }
}

export default ProductList;